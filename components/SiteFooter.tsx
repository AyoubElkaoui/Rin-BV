import Link from 'next/link';
import { company, services } from '@/lib/site';
import { c, font, mono } from '@/lib/theme';

const col: any = { font: '700 11px/1 ' + mono, color: c.gold };
const list: any = { display: 'flex', flexDirection: 'column', gap: 9, marginTop: 14, font: '400 14.5px/1.4 ' + font };
const link: any = { color: c.bg };

export default function SiteFooter() {
  return (
    <footer style={{ padding: 'clamp(28px,4vw,56px) 0 0', background: c.ink, color: c.bg }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(30px,3.6vw,52px) clamp(24px,3vw,44px) 26px',
          borderRadius: 0,
          background: 'transparent',
          color: c.bg,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, paddingBottom: 34, marginBottom: 30, borderBottom: '1px solid rgba(251,250,247,.14)' }}>
          <div>
            <span style={col}>R.I.N. B.V. · Zakelijk transport</span>
            <h2 style={{ margin: '14px 0 0', maxWidth: '20ch', font: '700 clamp(26px,3.2vw,42px)/1.08 ' + font, letterSpacing: '-.035em', color: c.bg }}>Een route die blijft lopen?</h2>
          </div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 20px', borderRadius: 6, background: c.gold, color: c.ink, font: '700 14px/1 ' + font }}>Bespreek uw zending →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 'clamp(24px,3vw,44px)' }}>
          <div>
            <img src="/rin-logo.png" alt={company.name} loading="lazy" decoding="async" width={600} height={95} style={{ height: 24, width: 'auto', display: 'block' }} />
            <p style={{ margin: '16px 0 0', maxWidth: '32ch', font: '400 14px/1.7 ' + font, color: 'rgba(251,250,247,.55)' }}>
              Koeriers- en spoedtransport voor bedrijven. Rechtstreeks van A naar B, met een vast aanspreekpunt en 24/7 spoedbereikbaarheid.
            </p>
          </div>

          <div>
            <span style={col}>Contact</span>
            <div style={list}>
              <Link data-footlink href="/contact" style={link}>Direct contact opnemen</Link>
              <a data-footlink href={company.phoneHref} style={link}>{company.phone}</a>
              <a data-footlink href={'mailto:' + company.email} style={link}>{company.email}</a>
              <span style={{ color: 'rgba(251,250,247,.7)' }}>{company.addressLines.join(' · ')}</span>
              <span style={{ color: 'rgba(251,250,247,.5)' }}>{company.hours}</span>
              <span style={{ color: 'rgba(251,250,247,.5)' }}>KvK {company.kvk} · BTW {company.btw}</span>
            </div>
          </div>

          <div>
            <span style={col}>Diensten</span>
            <div style={list}>
              {services.map((s) => (
                <Link key={s.slug} data-footlink href={'/diensten/' + s.slug} style={link}>{s.title}</Link>
              ))}
            </div>
          </div>

          <div>
            <span style={col}>Pagina&rsquo;s</span>
            <div style={list}>
              <Link data-footlink href="/" style={link}>Home</Link>
              <Link data-footlink href="/over-ons" style={link}>Over ons</Link>
              <Link data-footlink href="/contact" style={link}>Contact</Link>
              <Link data-footlink href="/voorwaarden" style={link}>Algemene voorwaarden</Link>
              <Link data-footlink href="/privacy" style={link}>Privacyverklaring</Link>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 14,
            justifyContent: 'space-between',
            marginTop: 30,
            paddingTop: 18,
            borderTop: '1px solid rgba(251,250,247,.14)',
            font: '400 12.5px/1.5 ' + font,
            color: 'rgba(251,250,247,.4)',
          }}
        >
          <span>© {new Date().getFullYear()} {company.name} · alle rechten voorbehouden</span>
          <span>AVC &amp; CMR · KvK {company.kvk}</span>
        </div>
      </div>
    </footer>
  );
}

