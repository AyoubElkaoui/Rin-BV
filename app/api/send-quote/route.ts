import { NextResponse } from 'next/server';

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

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO_EMAIL || 'contact@rinlogistiek.nl';
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
