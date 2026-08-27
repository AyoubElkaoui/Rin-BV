import { terms } from '@/lib/site';
import { c, font, display, mono } from '@/lib/theme';

export const metadata = {
  title: 'Algemene voorwaarden | R.I.N. B.V.',
  description: 'AVC-voorwaarden voor binnenlands wegvervoer en het CMR-verdrag voor internationaal wegvervoer.',
  keywords: ['AVC voorwaarden transport', 'CMR vervoer', 'transportvoorwaarden'],
};

export default function VoorwaardenPage() {
  return (
    <main data-page data-screen-label="Voorwaarden" style={{ paddingTop: 96 }}>
      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(24px,3vw,48px) clamp(20px,4vw,48px) clamp(40px,5vw,80px)' }}>
        <span style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: 8, background: c.sand, font: '600 11px/1 ' + mono, color: c.goldLink }}>
          Juridisch
        </span>
        <h1 style={{ margin: '18px 0 0', font: '800 clamp(28px,3.6vw,48px)/1.06 ' + display, letterSpacing: '-.04em' }}>Algemene voorwaarden</h1>
        <p style={{ margin: '18px 0 0', font: '400 16px/1.75 ' + font, color: 'rgba(28,27,24,.6)' }}>
          Op al onze werkzaamheden zijn de AVC-voorwaarden (binnenlands wegvervoer) en het CMR-verdrag (internationaal wegvervoer) van toepassing. De volledige tekst sturen wij op verzoek toe.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
          {terms.map((t) => (
            <div key={t.t} style={{ padding: 22, borderRadius: 10, background: c.card, boxShadow: 'inset 0 0 0 1px ' + c.hairline }}>
              <div style={{ font: '700 16px/1.3 ' + font }}>{t.t}</div>
              <div style={{ marginTop: 8, font: '400 14.5px/1.75 ' + font, color: 'rgba(28,27,24,.6)' }}>{t.d}</div>
            </div>
          ))}
        </div>
        <p style={{ margin: '22px 0 0', font: '400 13px/1.6 ' + font, color: 'rgba(28,27,24,.45)' }}>
          Deze samenvatting is informatief. De volledige voorwaarden ontvangt u bij uw offerte of op aanvraag.
        </p>
      </section>
    </main>
  );
}



