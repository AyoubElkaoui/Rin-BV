import { company, privacy, privacyUpdated } from '@/lib/site';
import { c, font, display, mono } from '@/lib/theme';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Privacyverklaring',
  description:
    'Hoe R.I.N. B.V. omgaat met persoonsgegevens uit het aanvraagformulier: welke gegevens wij verwerken, waarom, hoe lang wij ze bewaren en welke rechten u heeft.',
  path: '/privacy',
  keywords: ['privacyverklaring', 'AVG transportbedrijf', 'persoonsgegevens transport'],
});

export default function PrivacyPage() {
  return (
    <main data-page data-screen-label="Privacy" style={{ paddingTop: 96 }}>
      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(24px,3vw,48px) clamp(20px,4vw,48px) clamp(40px,5vw,80px)' }}>
        <span style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: 8, background: c.sand, font: '600 11px/1 ' + mono, color: c.goldLink }}>
          Juridisch
        </span>
        <h1 style={{ margin: '18px 0 0', font: '800 clamp(28px,3.6vw,48px)/1.06 ' + display, letterSpacing: '-.04em' }}>Privacyverklaring</h1>
        <p style={{ margin: '18px 0 0', font: '400 16px/1.75 ' + font, color: 'rgba(28,27,24,.6)' }}>
          {company.name} verwerkt persoonsgegevens om transportaanvragen te kunnen behandelen. Hieronder leest u welke gegevens dat zijn, waarom
          wij ze nodig hebben, hoe lang wij ze bewaren en wat u van ons mag vragen. Deze verklaring volgt de Algemene verordening
          gegevensbescherming (AVG).
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
          {privacy.map((section) => (
            <div key={section.t} style={{ padding: 22, borderRadius: 10, background: c.card, boxShadow: 'inset 0 0 0 1px ' + c.hairline }}>
              <div style={{ font: '700 16px/1.3 ' + font }}>{section.t}</div>
              {section.p.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} style={{ margin: '8px 0 0', font: '400 14.5px/1.75 ' + font, color: 'rgba(28,27,24,.6)' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div style={{ padding: 22, borderRadius: 10, background: c.card, boxShadow: 'inset 0 0 0 1px ' + c.hairline }}>
            <div style={{ font: '700 16px/1.3 ' + font }}>Klacht indienen</div>
            <p style={{ margin: '8px 0 0', font: '400 14.5px/1.75 ' + font, color: 'rgba(28,27,24,.6)' }}>
              Komt u er met ons niet uit, dan heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens via{' '}
              <a
                href="https://www.autoriteitpersoonsgegevens.nl/tip-ons"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: c.goldLink, textDecoration: 'underline' }}
              >
                autoriteitpersoonsgegevens.nl
              </a>
              . Wij stellen het op prijs als u eerst contact met ons opneemt, zodat wij het samen kunnen oplossen.
            </p>
          </div>
        </div>

        <p style={{ margin: '22px 0 0', font: '400 13px/1.6 ' + font, color: 'rgba(28,27,24,.45)' }}>
          Laatst bijgewerkt op {privacyUpdated}. Wijzigen wij onze werkwijze, dan passen wij deze verklaring aan en vermelden wij hier de
          nieuwe datum.
        </p>
      </section>
    </main>
  );
}
