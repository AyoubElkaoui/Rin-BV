import Link from 'next/link';
import Faq from '@/components/Faq';
import Photo from '@/components/Photo';
import { company, services } from '@/lib/site';
import { c, font, display, mono } from '@/lib/theme';

export default function ServiceDetail({ slug }: { slug: string }) {
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return null;

  const others = services.filter((s) => s.slug !== svc.slug);

  return (
    <main data-page data-screen-label="Dienst" style={{ paddingTop: 64, background: c.bg }}>
      <section className="full-bleed" style={{ background: c.ink, color: c.bg, padding: 'clamp(28px,4vw,56px) 0' }}>
        <div className="content-width" data-two style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(18px,2.4vw,26px)', alignItems: 'start' }}>
          <div style={{ padding: 'clamp(12px,2vw,30px) 0', color: c.bg }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, font: '600 11px/1 ' + mono, color: 'rgba(251,250,247,.5)' }}>
              <Link href="/diensten" style={{ color: 'rgba(251,250,247,.5)' }}>Diensten</Link>
              <span>·</span>
              <span style={{ color: c.gold }}>{svc.n}</span>
            </div>
            <h1 style={{ margin: '20px 0 0', maxWidth: '18ch', font: '800 clamp(30px,3.8vw,52px)/1.05 ' + display, letterSpacing: '-.04em' }}>{svc.title}</h1>
            <p style={{ margin: '18px 0 0', maxWidth: '52ch', font: '400 clamp(15px,1.2vw,17px)/1.7 ' + font, color: c.onDark }}>{svc.lead}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 26 }}>
              <a data-btn-gold href="/contact" style={{ padding: '15px 22px', borderRadius: 8, background: c.gold, color: c.ink, font: '700 14.5px/1 ' + font }}>
                Direct contact opnemen
              </a>
              <Link data-btn-ghost href="/contact" style={{ padding: '15px 20px', borderRadius: 8, background: 'rgba(251,250,247,.1)', color: c.bg, font: '600 14.5px/1 ' + font }}>
                Offerte aanvragen
              </Link>
            </div>
          </div>
          <Photo src={svc.photo} alt={svc.title + ' voor zakelijke zendingen'} label="Foto: transport en zending" style={{ aspectRatio: '3 / 2', minHeight: 0, alignSelf: 'start' }} />
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.sand, padding: 'clamp(22px,3vw,38px) 0' }}>
        <div className="content-width" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 'clamp(12px,1.6vw,18px)' }}>
          {svc.specs.map((sp) => (
            <div key={sp.l} style={{ padding: '22px 22px 24px', borderRadius: 10, background: c.sand }}>
              <div style={{ font: '800 clamp(19px,2.1vw,26px)/1.05 ' + display, letterSpacing: '-.03em', color: c.goldLink }}>{sp.v}</div>
              <div style={{ marginTop: 9, font: '400 13px/1.6 ' + font, color: 'rgba(28,27,24,.55)' }}>{sp.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(42px,6vw,86px) clamp(20px,4vw,48px) 0' }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: 'clamp(28px,6vw,96px)', alignItems: 'start' }}>
          <div>
            <span className="eyebrow">{svc.title}</span>
            <h2 style={{ margin: '20px 0 0', maxWidth: '17ch', font: '700 clamp(27px,3.2vw,44px)/1.08 ' + display, letterSpacing: '-.035em' }}>{svc.seoTitle}</h2>
          </div>
          <div>
            <p style={{ margin: 0, maxWidth: '62ch', font: '400 clamp(16px,1.35vw,19px)/1.75 ' + font, color: 'rgba(28,27,24,.68)' }}>{svc.seo}</p>
            <p style={{ margin: '18px 0 0', maxWidth: '62ch', font: '400 15px/1.75 ' + font, color: 'rgba(28,27,24,.56)' }}>Voor iedere opdracht bespreken we laadadres, losadres, afmetingen, gewicht, gewenste aankomst en eventuele toegangs- of temperatuurvoorwaarden. Daarna ontvangt u een helder voorstel met voertuig, planning en tarief. Zo is vooraf duidelijk hoe uw zakelijke zending veilig en efficiënt van A naar B gaat.</p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,76px) clamp(20px,4vw,48px) 0' }}>
        <h2 style={{ margin: '0 0 24px', maxWidth: '22ch', font: '800 clamp(24px,2.8vw,36px)/1.1 ' + display, letterSpacing: '-.035em' }}>
          Waarom klanten hiervoor bellen
        </h2>
        <div data-service-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(14px,1.8vw,20px)' }}>
          {svc.bullets.map((b) => (
            <div key={b.t} style={{ padding: '24px 22px 28px', borderRadius: 12, background: c.card, boxShadow: 'inset 0 0 0 1px ' + c.hairline }}>
              <span style={{ display: 'block', width: 12, height: 12, borderRadius: 8, background: c.gold }} />
              <h3 style={{ margin: '18px 0 0', font: '700 16.5px/1.3 ' + font }}>{b.t}</h3>
              <p style={{ margin: '9px 0 0', font: '400 14px/1.65 ' + font, color: c.muted }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(34px,4vw,64px) clamp(20px,4vw,48px) 0' }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(18px,2.4vw,26px)', alignItems: 'start' }}>
          <div style={{ padding: 'clamp(6px,1vw,14px) 0' }}>
            <span className="eyebrow">Praktische uitvoering</span>
            <h2 style={{ margin: '20px 0 0', maxWidth: '18ch', font: '700 clamp(27px,3.2vw,44px)/1.08 ' + display, letterSpacing: '-.035em' }}>
              Zo verloopt {svc.title.toLowerCase()}
            </h2>
            <p style={{ margin: '18px 0 0', maxWidth: '54ch', font: '400 clamp(16px,1.5vw,19px)/1.65 ' + font, color: 'rgba(28,27,24,.72)' }}>{svc.cargo}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {svc.chips.map((chip) => (
                <span key={chip} style={{ padding: '9px 14px', borderRadius: 8, background: c.sand, font: '500 13px/1 ' + font, color: 'rgba(28,27,24,.65)' }}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <Photo src={svc.detailPhoto || svc.photo} alt={svc.title + ' detail tijdens zakelijke levering'} label="Foto: detail van de zakelijke zending" style={{ aspectRatio: '3 / 2', minHeight: 0, alignSelf: 'start' }} />
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(50px,7vw,96px) clamp(20px,4vw,48px) 0' }}>
        <div data-two style={{ display: 'grid', gridTemplateColumns: '.72fr 1.28fr', gap: 'clamp(28px,6vw,96px)', alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Veelgestelde vragen</span>
            <h2 style={{ margin: '20px 0 0', maxWidth: '16ch', font: '700 clamp(27px,3.2vw,44px)/1.08 ' + display, letterSpacing: '-.035em' }}>
              Vragen over {svc.title.toLowerCase()}
            </h2>
            <p style={{ margin: '18px 0 0', maxWidth: '34ch', font: '400 15px/1.7 ' + font, color: 'rgba(28,27,24,.6)' }}>
              De belangrijkste praktische vragen over deze transportdienst, helder beantwoord.
            </p>
          </div>
          <Faq items={svc.faqs} />
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(34px,4vw,64px) clamp(20px,4vw,48px) clamp(40px,5vw,80px)' }}>
        <span style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: 8, background: c.sand, font: '600 11px/1 ' + mono, color: 'rgba(28,27,24,.6)' }}>
          Andere diensten
        </span>
        <div data-service-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 10, marginTop: 16 }}>
          {others.map((s) => (
            <Link
              key={s.slug}
              data-row
              href={'/diensten/' + s.slug}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', borderRadius: 8, background: c.card, boxShadow: 'inset 0 0 0 1px ' + c.hairline }}
            >
              <span
                style={{
                  flex: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: c.goldSoft,
                  font: '700 11.5px/1 ' + font,
                  color: c.goldInk,
                }}
              >
                {s.n}
              </span>
              <span style={{ font: '600 15px/1.25 ' + font }}>{s.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
