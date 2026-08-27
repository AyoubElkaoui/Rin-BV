import Link from 'next/link';
import Photo from '@/components/Photo';
import { story } from '@/lib/site';
import { c, font, display, mono } from '@/lib/theme';

export const metadata = {
  title: 'Over ons | R.I.N. B.V.',
  description: 'Maak kennis met R.I.N. B.V.: een persoonlijk Nederlands transportbedrijf voor spoedzendingen, same-day delivery, vaste ritten en internationaal vervoer.',
  keywords: ['over R.I.N. B.V.', 'Nederlands transportbedrijf', 'zakelijk transport', 'koeriersdienst bedrijven', 'NIWO transport', 'TLN transport'],
};

const promise = [
  { v: '1 planner', l: 'Eén aanspreekpunt voor uw rit' },
  { v: 'NL + EU', l: 'Zakelijk vervoer vanuit Nederland' },
  { v: 'AVC · CMR', l: 'Afspraken over aansprakelijkheid vooraf' },
  { v: '24/7', l: 'Aanvragen buiten kantooruren op aanvraag' },
];

const journey = [
  { n: '01', t: 'We luisteren naar de opdracht', d: 'We brengen laadadres, losadres, zending en gewenste aankomst zorgvuldig in kaart. Zo weten we direct welke informatie nog nodig is.' },
  { n: '02', t: 'We maken de afspraak concreet', d: 'U ontvangt een helder voorstel met het tijdvenster, de uitvoering en de contactpersoon voor uw rit.' },
  { n: '03', t: 'We houden de lijn kort', d: 'Tijdens het vervoer blijft u op de hoogte van de voortgang. Bij een wijziging hoort u dat van ons, niet andersom.' },
  { n: '04', t: 'We sluiten de rit netjes af', d: 'Na aflevering ontvangt u het beschikbare digitale bewijs van levering en is duidelijk wat de volgende stap is.' },
];

const sectors = ['Productiebedrijven', 'Groothandels', 'Expediteurs', 'Zorginstellingen', 'Technische dienstverleners', 'Logistieke partners'];

export default function OverOnsPage() {
  return (
    <main data-page data-screen-label="Over ons" style={{ paddingTop: 64, background: c.bg }}>
      <section className="full-bleed" style={{ background: c.ink, color: c.bg, padding: 'clamp(38px,6vw,88px) 0' }}>
        <div className="content-width" data-two style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,5vw,84px)', alignItems: 'center' }}>
          <div>
            <span className="eyebrow eyebrow--onDark">Over R.I.N. B.V.</span>
            <h1 style={{ margin: '22px 0 0', maxWidth: '14ch', font: '800 clamp(34px,5vw,66px)/1.02 ' + display, letterSpacing: '-.055em' }}>
              Transport met een gezicht.
            </h1>
            <p style={{ margin: '24px 0 0', maxWidth: '52ch', font: '400 clamp(16px,1.35vw,19px)/1.75 ' + font, color: c.onDark }}>
              R.I.N. B.V. helpt bedrijven met zendingen die aandacht, overzicht en een duidelijke afspraak nodig hebben. Van een spoedrit tot een vaste route: u spreekt rechtstreeks met de planner die uw opdracht kent.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
              <Link data-btn-gold href="/contact" style={{ display: 'inline-flex', padding: '15px 21px', borderRadius: 8, background: c.gold, color: c.ink, font: '700 14px/1 ' + font }}>
                Kennismaken
              </Link>
              <Link data-btn-ghost href="/diensten" style={{ display: 'inline-flex', padding: '15px 20px', borderRadius: 8, background: 'rgba(251,250,247,.1)', color: c.bg, font: '600 14px/1 ' + font }}>
                Onze diensten
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginTop: 30, font: '600 11px/1 ' + mono, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(251,250,247,.48)' }}>
              <span>Zakelijk transport</span><span>Rechtstreeks geregeld</span><span>Nederland &amp; Europa</span>
            </div>
          </div>
          <Photo src="/photos/small-van-loading.jpg" alt="Koerier laadt pakketten in een bestelbus" label="Foto: koerier laadt een bestelbus" style={{ aspectRatio: '4 / 3', minHeight: 0, alignSelf: 'start' }} />
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.sand, padding: '0' }}>
        <div className="content-width" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', borderLeft: '1px solid ' + c.hairline }}>
          {promise.map((item) => (
            <div key={item.v} style={{ padding: 'clamp(24px,3vw,38px) 22px', borderRight: '1px solid ' + c.hairline }}>
              <div style={{ font: '800 clamp(22px,2.4vw,31px)/1 ' + display, letterSpacing: '-.04em', color: c.goldLink }}>{item.v}</div>
              <div style={{ marginTop: 9, font: '400 13px/1.55 ' + font, color: c.muted }}>{item.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(56px,8vw,112px) clamp(20px,4vw,48px)' }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '.78fr 1.22fr', gap: 'clamp(28px,7vw,110px)', alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Waarom R.I.N.</span>
            <h2 style={{ margin: '21px 0 0', maxWidth: '15ch', font: '700 clamp(30px,4vw,52px)/1.05 ' + display, letterSpacing: '-.045em' }}>
              Korte lijnen maken het verschil.
            </h2>
            <p style={{ margin: '22px 0 0', maxWidth: '34ch', font: '400 15px/1.75 ' + font, color: c.muted }}>
              Goede logistiek voelt rustig. Daarom houden we de communicatie overzichtelijk en spreken we vooraf af wat u van de rit mag verwachten.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            {story.map((item, index) => (
              <div key={item.t} style={{ display: 'grid', gridTemplateColumns: '42px 1fr', gap: 18, paddingBottom: 26, borderBottom: index === story.length - 1 ? 0 : '1px solid ' + c.hairline }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, background: c.goldSoft, font: '700 11px/1 ' + mono, color: c.goldInk }}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 style={{ margin: 0, font: '700 20px/1.2 ' + display, letterSpacing: '-.02em' }}>{item.t}</h3>
                  <p style={{ margin: '10px 0 0', maxWidth: '60ch', font: '400 15px/1.75 ' + font, color: c.muted }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.sand, padding: 'clamp(52px,7vw,96px) 0' }}>
        <div className="content-width">
          <div data-two style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 'clamp(28px,6vw,90px)', alignItems: 'end' }}>
            <div>
              <span className="eyebrow">Onze manier van werken</span>
              <h2 style={{ margin: '21px 0 0', maxWidth: '16ch', font: '700 clamp(29px,3.8vw,50px)/1.06 ' + display, letterSpacing: '-.045em' }}>Duidelijk vanaf het eerste telefoontje.</h2>
            </div>
            <p style={{ margin: 0, maxWidth: '60ch', font: '400 clamp(16px,1.35vw,19px)/1.75 ' + font, color: 'rgba(28,27,24,.66)' }}>
              Elke aanvraag begint met dezelfde basis: weten wat er vervoerd wordt, waar het opgehaald en afgeleverd wordt en wanneer het nodig is. Vanuit die informatie maken we een uitvoerbaar plan. Niet groter dan nodig, wel compleet genoeg om onderweg geen verrassingen te krijgen.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', marginTop: 'clamp(34px,5vw,58px)', borderTop: '1px solid ' + c.hairline, borderBottom: '1px solid ' + c.hairline }}>
            {journey.map((item) => (
              <div key={item.n} style={{ padding: '24px 22px 28px', borderRight: '1px solid ' + c.hairline }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, background: c.ink, color: c.gold, font: '700 11px/1 ' + mono }}>{item.n}</span>
                <h3 style={{ margin: '17px 0 0', font: '700 17px/1.25 ' + font }}>{item.t}</h3>
                <p style={{ margin: '10px 0 0', font: '400 14px/1.65 ' + font, color: c.muted }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(56px,8vw,108px) clamp(20px,4vw,48px)' }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(26px,5vw,78px)', alignItems: 'center' }}>
          <Photo src="/photos/small-van-cargo.jpg" alt="Goederen veilig geladen in een bestelbus" label="Foto: zending in de bestelbus" style={{ aspectRatio: '3 / 2', minHeight: 0 }} />
          <div>
            <span className="eyebrow">Voor wie we rijden</span>
            <h2 style={{ margin: '21px 0 0', maxWidth: '17ch', font: '700 clamp(29px,3.6vw,48px)/1.06 ' + display, letterSpacing: '-.045em' }}>Een partner voor uw dagelijkse operatie.</h2>
            <p style={{ margin: '20px 0 0', maxWidth: '56ch', font: '400 16px/1.75 ' + font, color: c.muted }}>
              Onze klanten werken in verschillende sectoren, maar hebben dezelfde behoefte: een transportpartner die bereikbaar is, afspraken serieus neemt en meedenkt wanneer de planning verandert. R.I.N. B.V. ondersteunt losse zendingen én terugkerende vervoersstromen in Nederland en Europa.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
              {sectors.map((sector) => <span key={sector} style={{ padding: '9px 13px', borderRadius: 8, background: c.sand, font: '500 13px/1.2 ' + font, color: 'rgba(28,27,24,.68)' }}>{sector}</span>)}
            </div>
            <Link className="gold-link" href="/diensten" style={{ display: 'inline-flex', marginTop: 28, paddingBottom: 4, font: '600 14px/1 ' + font }}>Bekijk alle diensten →</Link>
          </div>
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.ink, color: c.bg, padding: 'clamp(46px,6vw,78px) 0' }}>
        <div className="content-width" data-two style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'clamp(28px,6vw,90px)', alignItems: 'center' }}>
          <div>
            <span className="eyebrow eyebrow--onDark">Vergunningen &amp; kwaliteit</span>
            <h2 style={{ margin: '21px 0 0', maxWidth: '16ch', font: '700 clamp(29px,3.6vw,48px)/1.06 ' + display, letterSpacing: '-.045em' }}>Zorgvuldig geregeld, helder vastgelegd.</h2>
            <p style={{ margin: '20px 0 0', maxWidth: '52ch', font: '400 15.5px/1.75 ' + font, color: 'rgba(251,250,247,.62)' }}>
              Voor binnenlands vervoer werken we onder de AVC-voorwaarden en voor internationaal vervoer onder het CMR-verdrag. Eventuele aanvullende afspraken over waarde, temperatuur of dekking leggen we vooraf schriftelijk vast.
            </p>
            <p style={{ margin: '16px 0 0', maxWidth: '52ch', font: '400 14px/1.7 ' + font, color: 'rgba(251,250,247,.45)' }}>
              Zo weet u vooraf wie waarvoor verantwoordelijk is en welke terugkoppeling u na aflevering ontvangt.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 14 }}>
            {[
              { src: '/photos/niwo.png', label: 'NIWO-vergunning' },
              { src: '/photos/tln.png', label: 'TLN' },
              { src: '/photos/paychecked.png', label: 'Paychecked' },
            ].map((logo) => (
              <div key={logo.label} style={{ minHeight: 154, padding: 18, borderRadius: 12, background: '#fff', display: 'grid', placeItems: 'center', boxSizing: 'border-box' }}>
                <img src={logo.src} alt={logo.label} style={{ display: 'block', width: '100%', height: '100%', maxHeight: 112, objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,7vw,86px) clamp(20px,4vw,48px) clamp(56px,8vw,108px)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: 'clamp(28px,4vw,48px)', borderRadius: 14, background: c.goldSoft }}>
          <div>
            <span className="eyebrow">Een goede eerste stap</span>
            <h2 style={{ margin: '18px 0 0', maxWidth: '20ch', font: '700 clamp(25px,3vw,39px)/1.08 ' + display, letterSpacing: '-.04em' }}>Vertel ons wat er moet rijden.</h2>
            <p style={{ margin: '13px 0 0', maxWidth: '48ch', font: '400 15px/1.7 ' + font, color: c.muted }}>Bel of mail uw route en tijdvenster. We denken mee en laten weten wat haalbaar is.</p>
          </div>
          <Link data-btn-dark href="/contact" style={{ display: 'inline-flex', flex: 'none', padding: '15px 21px', borderRadius: 8, background: c.ink, color: c.bg, font: '700 14px/1 ' + font }}>Neem contact op →</Link>
        </div>
      </section>
    </main>
  );
}
