import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { company } from '@/lib/site';
import { c, font, display, mono } from '@/lib/theme';

export const metadata = {
  title: 'Contact & offerte aanvragen | R.I.N. B.V.',
  description: 'Neem contact op met R.I.N. B.V. voor spoedtransport, same-day delivery, vaste ritten of internationaal zakelijk vervoer. Vraag vrijblijvend een voorstel aan.',
  keywords: ['contact transportbedrijf', 'offerte zakelijk transport', 'spoedtransport aanvragen', 'koerier aanvragen', 'transport offerte Nederland'],
};

const steps = [
  { n: '01', t: 'U deelt de basis', d: 'Laadadres, losadres, zending en gewenst tijdvenster.' },
  { n: '02', t: 'Wij stemmen af', d: 'We bespreken de haalbaarheid en maken de uitvoering concreet.' },
  { n: '03', t: 'U weet waar u aan toe bent', d: 'Vooraf duidelijkheid over planning, contactpersoon en tarief.' },
];

export default function ContactPage() {
  return (
    <main data-page data-screen-label="Contact" style={{ paddingTop: 64, background: c.bg }}>
      <section className="full-bleed" style={{ background: c.ink, color: c.bg, padding: 'clamp(38px,6vw,88px) 0' }}>
        <div className="content-width" data-two style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,5vw,84px)', alignItems: 'center' }}>
          <div>
            <span className="eyebrow eyebrow--onDark">Contact &amp; offerte</span>
            <h1 style={{ margin: '22px 0 0', maxWidth: '14ch', font: '800 clamp(34px,5vw,66px)/1.02 ' + display, letterSpacing: '-.055em' }}>
              Een duidelijke aanvraag begint hier.
            </h1>
            <p style={{ margin: '24px 0 0', maxWidth: '52ch', font: '400 clamp(16px,1.35vw,19px)/1.75 ' + font, color: c.onDark }}>
              Vertel ons wat er moet rijden, waar het opgehaald en afgeleverd wordt en wanneer het nodig is. Wij denken mee en komen terug met een voorstel dat past bij uw zending.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
              <a data-btn-gold href={'mailto:' + company.email} style={{ display: 'inline-flex', padding: '15px 21px', borderRadius: 8, background: c.gold, color: c.ink, font: '700 14px/1 ' + font }}>
                Mail de planning
              </a>
              <a data-btn-ghost href="#offerte" style={{ display: 'inline-flex', padding: '15px 20px', borderRadius: 8, background: 'rgba(251,250,247,.1)', color: c.bg, font: '600 14px/1 ' + font }}>
                Offerte aanvragen
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginTop: 30, font: '600 11px/1 ' + mono, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(251,250,247,.48)' }}>
              <span>{company.email}</span><span>{company.hours}</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 14, aspectRatio: '4 / 3', background: c.sand }}>
              <img src="/photos/small-van-contact.jpg" alt="Koerier stapt uit een bestelbus met een zakelijke zending" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 15px', borderRadius: 9, background: 'rgba(251,250,247,.08)', color: 'rgba(251,250,247,.65)', font: '400 13px/1.4 ' + font }}>
              <span style={{ width: 7, height: 7, flex: 'none', borderRadius: '50%', background: c.gold }} />
              Zakelijke zendingen in Nederland en Europa
            </div>
          </div>
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.sand, padding: 0 }}>
        <div className="content-width" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', borderLeft: '1px solid ' + c.hairline }}>
          <a href={'mailto:' + company.email} style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: '26px 22px 30px', borderRight: '1px solid ' + c.hairline }}>
            <span style={{ font: '700 11px/1 ' + mono, letterSpacing: '.12em', textTransform: 'uppercase', color: c.goldLink }}>E-mail</span>
            <span style={{ font: '700 clamp(17px,1.8vw,22px)/1.2 ' + display, letterSpacing: '-.02em' }}>{company.email}</span>
            <span style={{ font: '400 13.5px/1.6 ' + font, color: c.muted }}>Route, tijdvenster en documenten delen.</span>
          </a>
          <a href="#offerte" style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: '26px 22px 30px', borderRight: '1px solid ' + c.hairline }}>
            <span style={{ font: '700 11px/1 ' + mono, letterSpacing: '.12em', textTransform: 'uppercase', color: c.goldLink }}>Offerte</span>
            <span style={{ font: '700 clamp(19px,2.1vw,25px)/1.15 ' + display, letterSpacing: '-.03em' }}>Vraag een voorstel aan</span>
            <span style={{ font: '400 13.5px/1.6 ' + font, color: c.muted }}>Vrijblijvend voor een losse rit of vaste route.</span>
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: '26px 22px 30px', borderRight: '1px solid ' + c.hairline }}>
            <span style={{ font: '700 11px/1 ' + mono, letterSpacing: '.12em', textTransform: 'uppercase', color: c.goldLink }}>Bereikbaarheid</span>
            <span style={{ font: '700 clamp(17px,1.8vw,22px)/1.2 ' + display, letterSpacing: '-.02em' }}>Ma–za 06:00–20:00</span>
            <span style={{ font: '400 13.5px/1.6 ' + font, color: c.muted }}>Spoedaanvraag buiten kantooruren op aanvraag.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: '26px 22px 30px', borderRight: '1px solid ' + c.hairline }}>
            <span style={{ font: '700 11px/1 ' + mono, letterSpacing: '.12em', textTransform: 'uppercase', color: c.goldLink }}>Werkgebied</span>
            <span style={{ font: '700 clamp(17px,1.8vw,22px)/1.2 ' + display, letterSpacing: '-.02em' }}>Nederland &amp; Europa</span>
            <span style={{ font: '400 13.5px/1.6 ' + font, color: c.muted }}>Van spoedzending tot terugkerende route.</span>
          </div>
        </div>
      </section>

      <section id="offerte" style={{ scrollMarginTop: 80, maxWidth: 1280, margin: '0 auto', padding: 'clamp(56px,8vw,112px) clamp(20px,4vw,48px)' }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '.78fr 1.22fr', gap: 'clamp(28px,6vw,98px)', alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Uw transportaanvraag</span>
            <h2 style={{ margin: '21px 0 0', maxWidth: '15ch', font: '700 clamp(30px,4vw,52px)/1.05 ' + display, letterSpacing: '-.045em' }}>Twee adressen, een helder voorstel.</h2>
            <p style={{ margin: '22px 0 0', maxWidth: '38ch', font: '400 15.5px/1.75 ' + font, color: c.muted }}>
              Vul de gegevens in die we nodig hebben om uw rit te beoordelen. Met een telefoonnummer en e-mailadres weten we precies hoe we u kunnen bereiken met vragen of een voorstel.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 34 }}>
              {steps.map((step) => (
                <div key={step.n} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, alignItems: 'start' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 8, background: c.goldSoft, font: '700 10px/1 ' + mono, color: c.goldInk }}>{step.n}</span>
                  <div><h3 style={{ margin: 0, font: '700 16px/1.3 ' + font }}>{step.t}</h3><p style={{ margin: '5px 0 0', font: '400 13.5px/1.6 ' + font, color: c.muted }}>{step.d}</p></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 34, paddingTop: 18, borderTop: '1px solid ' + c.hairline, font: '400 13px/1.6 ' + font, color: c.muted }}>
              Liever mailen? <a href={'mailto:' + company.email} className="gold-link" style={{ color: c.ink, fontWeight: 600 }}>{company.email}</a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.sand, color: c.ink, padding: 'clamp(42px,6vw,72px) 0' }}>
        <div className="content-width" data-two style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 'clamp(28px,6vw,90px)', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Direct duidelijkheid</span>
            <h2 style={{ margin: '20px 0 0', maxWidth: '17ch', font: '700 clamp(27px,3.4vw,45px)/1.07 ' + display, letterSpacing: '-.04em' }}>Geen standaardformulier voor standaardantwoorden.</h2>
          </div>
          <p style={{ margin: 0, maxWidth: '60ch', font: '400 clamp(16px,1.3vw,19px)/1.75 ' + font, color: c.muted }}>
            Iedere zending heeft een eigen laadadres, tijdvenster en aandachtspunt. Daarom bekijken we uw aanvraag als een route, niet als een nummer. Dat geeft u vooraf duidelijkheid en ons de informatie om de uitvoering goed te organiseren.
          </p>
        </div>
      </section>
    </main>
  );
}
