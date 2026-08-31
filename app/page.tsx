import Link from 'next/link';
import QuickQuote from '@/components/QuickQuote';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { company, services, stats, routes, steps, proof, values, faqs } from '@/lib/site';
import { c, font, display } from '@/lib/theme';
import { faqSchema, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Zakelijk transport en koeriersdienst | R.I.N. B.V.',
  description:
    'Zakelijk transport voor bedrijven: spoedtransport, same-day delivery, vaste ritten en internationaal vervoer met één aanspreekpunt.',
  path: '/',
  keywords: ['zakelijk transport', 'spoedkoerier', 'sameday delivery Nederland', 'internationaal koeriersvervoer'],
});

const heroImg = '/photos/small-van-hero.webp';
const whyImg = '/photos/small-van-package.webp';

const MAXW = 1280;
const PAD = 'clamp(24px,4vw,80px)';
const shell = { maxWidth: MAXW, margin: '0 auto', padding: '0 ' + PAD };
const vGap = 'clamp(72px,9vw,150px)';
const btnGold = { display: 'inline-flex', alignItems: 'center', gap: 10, padding: '17px 28px', borderRadius: 6, background: c.gold, color: c.ink, font: '600 15px/1 ' + font };
const btnDark = { display: 'inline-flex', alignItems: 'center', gap: 10, padding: '17px 28px', borderRadius: 6, background: c.ink, color: c.bg, font: '600 15px/1 ' + font };

export default function HomePage() {
  return (
    <main data-screen-label="Home" style={{ paddingTop: 'clamp(88px,10vw,132px)' }}>
      <JsonLd data={faqSchema(faqs)} />
      {/* ================= HERO ================= */}
      <section style={{ ...shell, paddingTop: 'clamp(24px,3vw,52px)', paddingBottom: 'clamp(48px,6vw,88px)' }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '1fr 600px', gap: 'clamp(32px,5vw,88px)', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Koeriers- &amp; spoedtransport · NL &amp; Europa</span>
            <h1 style={{ margin: '28px 0 0', maxWidth: '16ch', font: '500 clamp(44px,6.4vw,96px)/0.98 ' + display, letterSpacing: '-.03em', textWrap: 'balance' }}>
              Snel geregeld. Rechtstreeks geleverd.
            </h1>
            <p style={{ margin: '28px 0 0', maxWidth: '48ch', font: '400 clamp(16px,1.3vw,19px)/1.7 ' + font, color: 'rgba(28,27,24,.62)', textWrap: 'pretty' }}>
              Zakelijk transport met één aanspreekpunt, duidelijke afspraken en levering van laadadres tot losadres.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 38 }}>
              <a data-btn-gold href="/contact#offerte" style={btnGold}>Direct contact opnemen</a>
              <Link data-btn-dark href="/diensten" style={btnDark}>Bekijk diensten</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', marginTop: 40 }}>
              {['Snelle reactie', 'Spoedaanvraag dag en nacht', 'AVC · CMR verzekerd'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: '500 13px/1.3 ' + font, color: 'rgba(28,27,24,.6)' }}>
                  <span style={{ width: 6, height: 6, background: c.gold, transform: 'rotate(45deg)', flex: 'none' }} />{t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: 600, margin: '0 auto' }}>
            <div aria-hidden style={{ position: 'absolute', right: -14, bottom: -14, width: '70%', height: '70%', background: c.goldSoft, borderRadius: 6 }} />
            <div style={{ position: 'relative', height: 'clamp(320px,34vw,480px)', overflow: 'hidden', borderRadius: 6, boxShadow: '0 40px 80px -44px rgba(28,27,24,.55)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={heroImg} alt="Magazijn met goederen voor zakelijke distributie" fetchPriority="high" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', left: 20, bottom: 20, padding: '14px 18px', background: 'rgba(20,19,16,.92)', backdropFilter: 'blur(6px)', borderRadius: 5, borderLeft: '2px solid ' + c.gold }}>
              <div style={{ font: '500 26px/1 ' + display, color: c.gold }}>24/7</div>
              <div style={{ marginTop: 5, font: '500 10.5px/1.3 ' + font, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(251,250,247,.72)' }}>Aanvraag dag en nacht</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TREFWOORDENBAND ================= */}
      <div className="marquee" style={{ borderTop: '1px solid ' + c.hairline, borderBottom: '1px solid ' + c.hairline, padding: '20px 0' }}>
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} aria-hidden={dup === 1} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {services.map((s, i) => (
                <span key={dup + '-' + i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ padding: '0 26px', font: '500 clamp(18px,1.8vw,26px)/1 ' + display, color: 'rgba(28,27,24,.5)', letterSpacing: '-.01em' }}>{s.title}</span>
                  <span style={{ width: 6, height: 6, background: c.gold, transform: 'rotate(45deg)', flex: 'none' }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= CIJFERS ================= */}
      <section style={shell}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', borderBottom: '1px solid ' + c.hairline }}>
          {stats.map((s, i) => (
            <div key={s.v} style={{ padding: 'clamp(30px,3.2vw,48px) 30px', borderLeft: i === 0 ? 'none' : '1px solid ' + c.hairline }}>
              <div style={{ font: '500 clamp(28px,3.2vw,44px)/1 ' + display, letterSpacing: '-.02em', color: c.ink }}>{s.v}</div>
              <div style={{ marginTop: 13, font: '500 11.5px/1.4 ' + font, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(28,27,24,.5)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.sand, marginTop: vGap, padding: 'clamp(44px,6vw,82px) 0' }}>
        <div className="content-width" data-two style={{ display: 'grid', gridTemplateColumns: '.72fr 1.28fr', gap: 'clamp(28px,6vw,96px)', alignItems: 'start' }}>
          <div><span className="eyebrow">Zakelijk transport</span><h2 style={{ margin: '20px 0 0', maxWidth: '17ch', font: '500 clamp(30px,3.8vw,52px)/1.06 ' + display, letterSpacing: '-.025em' }}>Een vervoerder die uw planning begrijpt</h2></div>
          <div><p style={{ margin: 0, maxWidth: '62ch', font: '400 clamp(16px,1.3vw,19px)/1.75 ' + font, color: 'rgba(28,27,24,.68)' }}>R.I.N. B.V. helpt bedrijven met spoedtransport, same-day delivery, vaste ritten en internationaal koeriersvervoer. We werken met duidelijke tijdvensters, een vast aanspreekpunt en rechtstreeks vervoer zonder onnodige overslag.</p><p style={{ margin: '18px 0 0', maxWidth: '62ch', font: '400 15px/1.75 ' + font, color: 'rgba(28,27,24,.56)' }}>Van een enkele zending tot een terugkerende route: u krijgt vooraf een helder plan en na aflevering een directe terugkoppeling.</p></div>
        </div>
      </section>

      {/* ================= DIENSTEN ================= */}
      <section style={{ ...shell, paddingTop: vGap }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 'clamp(36px,4vw,56px)' }}>
          <div>
            <span data-rv className="eyebrow">Onze diensten</span>
            <h2 data-rv style={{ margin: '22px 0 0', maxWidth: '20ch', font: '500 clamp(32px,4.4vw,60px)/1.04 ' + display, letterSpacing: '-.025em' }}>Zes manieren waarop wij rijden</h2>
          </div>
          <Link data-rv href="/diensten" className="gold-link" style={{ font: '600 14px/1 ' + font, color: c.ink, paddingBottom: 4 }}>Alle diensten bekijken →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(16px,1.4vw,22px)' }}>
          {services.map((s) => (
            <Link
              key={s.slug}
              data-rv
              href={'/diensten/' + s.slug}
              className="svc-card"
              style={{ display: 'flex', flexDirection: 'column', padding: 'clamp(32px,2.6vw,44px) clamp(28px,2.2vw,38px)', background: c.card, border: '1px solid ' + c.hairline, borderRadius: 6, color: c.ink }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ font: '500 44px/1 ' + display, color: c.goldLink }}>{s.n}</span>
                <span style={{ font: '500 11px/1.3 ' + font, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(28,27,24,.42)' }}>{s.tag}</span>
              </div>
              <h3 style={{ margin: '26px 0 0', font: '500 clamp(22px,1.7vw,27px)/1.18 ' + display, letterSpacing: '-.01em' }}>{s.title}</h3>
              <p style={{ margin: '14px 0 30px', font: '400 15px/1.7 ' + font, color: 'rgba(28,27,24,.6)' }}>{s.card}</p>
              <span className="svc-card-cta" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, font: '600 14px/1 ' + font, color: c.ink }}>Bekijk dienst →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= WAAROM R.I.N. ================= */}
      <section style={{ ...shell, paddingTop: vGap }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '560px 1fr', gap: 'clamp(36px,5vw,88px)', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 560, margin: '0 auto' }}>
            <div aria-hidden style={{ position: 'absolute', left: -14, top: -14, width: '68%', height: '68%', background: c.goldSoft, borderRadius: 6 }} />
            <div data-rv style={{ position: 'relative', height: 'clamp(300px,30vw,440px)', overflow: 'hidden', borderRadius: 6, boxShadow: '0 40px 80px -46px rgba(28,27,24,.5)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={whyImg} alt="Chauffeur bij de bus van R.I.N. B.V." loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
          <div data-rv>
            <span className="eyebrow">Waarom R.I.N.</span>
            <h2 style={{ margin: '22px 0 0', maxWidth: '17ch', font: '500 clamp(30px,3.8vw,52px)/1.08 ' + display, letterSpacing: '-.025em', textWrap: 'balance' }}>
              Klein team, korte lijnen, geen callcenter
            </h2>
            <p style={{ margin: '22px 0 0', maxWidth: '48ch', font: '400 16px/1.7 ' + font, color: 'rgba(28,27,24,.62)' }}>
              U spreekt de planner die uw rit ook regelt. Daardoor nemen wij beslissingen terwijl u nog aan de telefoon bent.
            </p>
            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: c.hairline, border: '1px solid ' + c.hairline, borderRadius: 6, overflow: 'hidden' }}>
              {values.map((v) => (
                <div key={v.n} style={{ padding: '24px 24px 26px', background: c.card }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                    <span style={{ width: 7, height: 7, background: c.gold, transform: 'rotate(45deg)', flex: 'none' }} />
                    <span style={{ font: '600 15px/1.2 ' + font }}>{v.t}</span>
                  </div>
                  <p style={{ margin: '11px 0 0', font: '400 13.5px/1.6 ' + font, color: 'rgba(28,27,24,.58)' }}>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WERKWIJZE (tijdlijn) ================= */}
      <section style={{ ...shell, paddingTop: vGap }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 'clamp(32px,4vw,72px)', alignItems: 'start' }}>
          <div>
            <span data-rv className="eyebrow">Werkwijze</span>
            <h2 data-rv style={{ margin: '22px 0 0', maxWidth: '15ch', font: '500 clamp(30px,3.8vw,52px)/1.08 ' + display, letterSpacing: '-.025em' }}>Van telefoontje tot bewijs van levering</h2>
          </div>
          <div>
            {steps.map((st, i) => (
              <div key={st.n} className="process-step" style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24, paddingBottom: i < steps.length - 1 ? 40 : 0 }}>
                <div style={{ position: 'relative' }}>
                  {i < steps.length - 1 ? (
                    <span style={{ position: 'absolute', left: 27, top: 56, bottom: -40, width: 1, background: 'linear-gradient(' + c.gold + ', rgba(231,201,127,.12))' }} />
                  ) : null}
                  <span className="process-number" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: '50%', border: '1px solid ' + c.gold, font: '500 17px/1 ' + display, color: c.goldLink, background: c.bg }}>{st.n}</span>
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 className="process-step-title" style={{ margin: 0, font: '500 clamp(20px,1.6vw,25px)/1.2 ' + display, letterSpacing: '-.01em' }}>{st.t}</h3>
                  <p style={{ margin: '11px 0 0', maxWidth: '54ch', font: '400 15px/1.7 ' + font, color: 'rgba(28,27,24,.6)' }}>{st.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VASTE RITTEN ================= */}
      <section style={{ ...shell, paddingTop: vGap }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'clamp(32px,4vw,72px)', alignItems: 'center' }}>
          <div data-rv>
            <span className="eyebrow">Vaste ritten &amp; contract</span>
            <h2 style={{ margin: '22px 0 0', maxWidth: '17ch', font: '500 clamp(30px,3.8vw,52px)/1.08 ' + display, letterSpacing: '-.025em', textWrap: 'balance' }}>Vaste ritten op maat</h2>
            <p style={{ margin: '22px 0 0', maxWidth: '44ch', font: '400 16px/1.7 ' + font, color: 'rgba(28,27,24,.62)' }}>
              Onderstaande voorbeelden zijn typen ritten, geen vaste dienstregeling. Route, frequentie, voertuig en tarief stemmen we af op uw planning.
            </p>
            <Link data-btn-gold href="/contact" style={{ ...btnGold, marginTop: 34 }}>Beschikbaarheid opvragen</Link>
          </div>
          <div data-rv style={{ borderTop: '1px solid ' + c.hairline }}>
            {routes.map((r) => (
              <div key={r.t} data-route-row style={{ display: 'grid', gridTemplateColumns: '1.5fr auto auto', gap: 18, alignItems: 'center', padding: '19px 2px', borderBottom: '1px solid ' + c.hairline }}>
                <span style={{ font: '500 clamp(17px,1.4vw,20px)/1.3 ' + display, letterSpacing: '-.01em' }}>{r.t}</span>
                <span style={{ font: '600 11px/1 ' + font, letterSpacing: '.1em', textTransform: 'uppercase', color: c.goldLink, justifySelf: 'end' }}>{r.d}</span>
                <span style={{ font: '400 12.5px/1.3 ' + font, color: 'rgba(28,27,24,.48)', justifySelf: 'end', minWidth: '9ch', textAlign: 'right' }}>{r.f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE + BEWIJS ================= */}
      <section style={{ ...shell, paddingTop: 'clamp(46px,5vw,80px)' }}>
        <div className="planning-note" style={{ maxWidth: 900, margin: '0 auto', padding: '4px 0 4px 26px', borderLeft: '2px solid ' + c.gold }}>
          <p style={{ margin: 0, maxWidth: '34ch', font: '500 clamp(25px,3vw,40px)/1.16 ' + display, letterSpacing: '-.02em', textWrap: 'balance' }}>
            Een planning die klopt begint met duidelijke afspraken.
          </p>
          <div style={{ marginTop: 16, maxWidth: '62ch', font: '400 15px/1.7 ' + font, color: 'rgba(28,27,24,.56)' }}>
            U weet vooraf wie rijdt, wat is afgesproken en wanneer u een terugkoppeling ontvangt.
          </div>
        </div>
        <div data-rv style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', marginTop: 'clamp(32px,4vw,56px)', borderTop: '1px solid ' + c.hairline, borderBottom: '1px solid ' + c.hairline }}>
          {proof.map((p, i) => (
            <div key={p.v} style={{ padding: 'clamp(30px,3.2vw,44px) 30px', borderLeft: i === 0 ? 'none' : '1px solid ' + c.hairline }}>
              <div style={{ font: '500 clamp(26px,3vw,40px)/1 ' + display, letterSpacing: '-.02em', color: c.goldLink }}>{p.v}</div>
              <div style={{ marginTop: 13, font: '400 13px/1.5 ' + font, color: 'rgba(28,27,24,.58)' }}>{p.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section style={{ ...shell, paddingTop: vGap }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px,4vw,52px)' }}>
          <span data-rv className="eyebrow eyebrow--plain">Veelgestelde vragen</span>
          <h2 data-rv style={{ margin: '18px 0 0', font: '500 clamp(30px,3.8vw,52px)/1.06 ' + display, letterSpacing: '-.025em' }}>Kort antwoord op wat u wilt weten</h2>
        </div>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Faq />
        </div>
      </section>

      {/* ================= CTA (donker paneel) ================= */}
      <section className="full-bleed direct-cta" style={{ marginTop: vGap, background: c.ink, color: c.bg }}>
        <div className="content-width" style={{ paddingTop: 'clamp(42px,5vw,70px)', paddingBottom: 'clamp(42px,5vw,70px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(24px,4vw,52px)' }}>
            <div style={{ maxWidth: '58ch' }}>
              <span className="eyebrow eyebrow--onDark">Direct schakelen</span>
              <h2 style={{ margin: '18px 0 0', font: '500 clamp(28px,3.8vw,48px)/1.06 ' + display, letterSpacing: '-.025em', color: c.bg, textWrap: 'balance' }}>
                Bespreek uw route met een planner.
              </h2>
              <p style={{ margin: '14px 0 0', maxWidth: '52ch', font: '400 15.5px/1.7 ' + font, color: 'rgba(251,250,247,.68)' }}>
                Deel uw laadadres, losadres en gewenste tijdvenster. We denken mee over een passende rit of terugkerende route.
              </p>
            </div>
            <Link data-btn-gold href="/contact#offerte" style={{ ...btnGold, justifyContent: 'center', padding: '17px 24px', whiteSpace: 'nowrap' }}>Route bespreken →</Link>
          </div>
        </div>
      </section>

      {/* ================= RIT AANMELDEN ================= */}
      <section id="offerte" style={{ borderTop: '1px solid ' + c.hairline }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center', maxWidth: MAXW, margin: '0 auto', padding: 'clamp(64px,8vw,120px) ' + PAD }}>
          <div data-rv>
            <span className="eyebrow">Rit aanmelden</span>
            <h2 style={{ margin: '22px 0 0', maxWidth: '18ch', font: '500 clamp(28px,3.6vw,48px)/1.06 ' + display, letterSpacing: '-.025em', textWrap: 'balance' }}>Twee adressen, een helder voorstel</h2>
            <p style={{ margin: '20px 0 0', maxWidth: '40ch', font: '400 15.5px/1.7 ' + font, color: 'rgba(28,27,24,.62)' }}>
              Vul uw bedrijfs- en contactgegevens in, samen met de twee adressen en de bijzonderheden van de zending. Zo weten we waarover we u kunnen terugbellen of mailen.
            </p>
          </div>
          <div data-rv>
            <QuickQuote />
          </div>
        </div>
      </section>
    </main>
  );
}
