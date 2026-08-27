import Link from 'next/link';
import { c, font, display, mono } from '@/lib/theme';

export default function NotFound() {
  return (
    <main data-page style={{ paddingTop: 96 }}>
      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(40px,6vw,90px) clamp(20px,4vw,48px)' }}>
        <span style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: 8, background: c.sand, font: '600 11px/1 ' + mono, color: c.goldLink }}>
          404
        </span>
        <h1 style={{ margin: '18px 0 0', font: '800 clamp(28px,3.6vw,48px)/1.06 ' + display, letterSpacing: '-.04em' }}>
          Deze pagina rijdt niet meer
        </h1>
        <p style={{ margin: '16px 0 26px', font: '400 16px/1.7 ' + font, color: 'rgba(28,27,24,.6)' }}>
          De link is verouderd of verkeerd getypt. Ga terug naar de homepage of bekijk onze diensten.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <Link data-btn-dark href="/" style={{ padding: '16px 24px', borderRadius: 8, background: c.ink, color: c.bg, font: '700 15px/1 ' + font }}>
            Naar home
          </Link>
          <Link data-btn-sand href="/diensten" style={{ padding: '16px 24px', borderRadius: 8, background: c.sand, font: '600 15px/1 ' + font }}>
            Diensten
          </Link>
        </div>
      </section>
    </main>
  );
}



