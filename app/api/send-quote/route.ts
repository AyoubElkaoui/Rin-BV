import { NextResponse } from 'next/server';
import { company } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const headers = { 'Cache-Control': 'no-store' };

const json = (status: number, body: Record<string, string>) =>
  NextResponse.json(body, { status, headers });

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[character] || character));

const clean = (value: unknown, max = 1000) => String(value ?? '').trim().slice(0, max);

// Simpele geheugenlimiet per IP. Serverless-instances leven kort, maar dit stopt
// wel een bot die in één keer honderden aanvragen door hetzelfde proces jaagt.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

const rateLimited = (ip: string) => {
  const now = Date.now();
  if (hits.size > 5000) hits.clear();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
};

const clientIp = (request: Request) =>
  (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
  request.headers.get('x-real-ip') ||
  'onbekend';

/** Cloudflare Turnstile. Zonder secret slaan we de check over zodat het formulier blijft werken. */
const captchaOk = async (token: string, ip: string) => {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const result = (await response.json()) as { success?: boolean; 'error-codes'?: string[] };
    if (!result.success) console.error('Turnstile afgekeurd', result['error-codes']);
    return Boolean(result.success);
  } catch (error) {
    console.error('Turnstile verzoek mislukt', error);
    return false;
  }
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO_EMAIL || company.email;
  const from = process.env.RESEND_FROM_EMAIL || 'R.I.N. B.V. <noreply@rinlogistiek.nl>';

  if (!apiKey) return json(500, { error: 'De mailservice is nog niet geconfigureerd.' });

  let payload: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return json(400, { error: 'Ongeldige aanvraag.' });
    }
    payload = parsed as Record<string, unknown>;
  } catch {
    return json(400, { error: 'Ongeldige aanvraag.' });
  }

  // Quietly accept bot submissions without sending them.
  if (clean(payload.website, 120)) return json(200, { message: 'Aanvraag ontvangen.' });

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return json(429, { error: 'Er zijn net meerdere aanvragen verstuurd. Probeer het over een paar minuten opnieuw of bel ons.' });
  }

  // Een echt formulier invullen kost tijd; bots versturen vrijwel direct.
  const openedAt = Number(clean(payload.openedAt, 20));
  if (Number.isFinite(openedAt) && openedAt > 0 && Date.now() - openedAt < 2500) {
    return json(400, { error: 'De aanvraag werd wel erg snel verstuurd. Probeer het nog een keer.' });
  }

  if (!(await captchaOk(clean(payload.captchaToken, 4096), ip))) {
    return json(400, { error: 'De beveiligingscheck is niet gelukt. Ververs de pagina en probeer het opnieuw.' });
  }

  const bedrijfsnaam = clean(payload.bedrijfsnaam, 160);
  const contactpersoon = clean(payload.contactpersoon, 160);
  const email = clean(payload.email, 254).toLowerCase();
  const telefoon = clean(payload.telefoon, 80);
  const ophaaladres = clean(payload.ophaaladres, 240);
  const afleveradres = clean(payload.afleveradres, 240);
  const soort = clean(payload.soort, 120);
  const datum = clean(payload.datum, 40);
  const bericht = clean(payload.bericht, 2500);

  if (!bedrijfsnaam || !contactpersoon || !email || !telefoon || !ophaaladres || !afleveradres) {
    return json(400, { error: 'Vul alle verplichte contact- en routegegevens in.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'Vul een geldig e-mailadres in.' });
  }

  const fields = [
    ['Bedrijf', bedrijfsnaam],
    ['Contactpersoon', contactpersoon],
    ['E-mail', email],
    ['Telefoon', telefoon],
    ['Ophalen', ophaaladres],
    ['Afleveren', afleveradres],
    ['Soort transport', soort || 'Niet opgegeven'],
    ['Gewenste datum', datum || 'Niet opgegeven'],
    ['Zending & bijzonderheden', bericht || 'Geen extra bijzonderheden opgegeven'],
  ] as const;

  const rows = fields
    .map(([label, value]) => `<tr><td style="padding:8px 12px 8px 0;color:#666;vertical-align:top"><strong>${label}</strong></td><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
    .join('');
  const text = fields.map(([label, value]) => `${label}: ${value}`).join('\n');

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nieuwe ritaanvraag — ${soort || 'website'}`,
        text,
        html: `<div style="font-family:Arial,sans-serif;color:#1c1b18"><h2>Nieuwe ritaanvraag via de website</h2><table style="border-collapse:collapse">${rows}</table></div>`,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text().catch(() => '');
      console.error('Resend API error', resendResponse.status, detail.slice(0, 500));
      if (resendResponse.status === 401) {
        return json(502, { error: 'De Resend API-key is ongeldig of verlopen. Controleer de sleutel in Vercel.' });
      }
      if (resendResponse.status === 403 || resendResponse.status === 422) {
        return json(502, { error: 'Resend accepteert de afzender niet. Verifieer rinlogistiek.nl en noreply@rinlogistiek.nl in Resend.' });
      }
      return json(502, { error: 'De mailprovider kon de aanvraag niet versturen. Controleer de Resend-instellingen in Vercel.' });
    }
  } catch (error) {
    console.error('Resend request failed', error);
    return json(502, { error: 'De aanvraag kon nu niet worden verstuurd. Probeer het opnieuw of mail rechtstreeks.' });
  }

  return json(200, { message: 'Aanvraag ontvangen.' });
}
