import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { services, steps } from '@/lib/site';
import { c, font, display } from '@/lib/theme';

export const metadata = {
  title: 'Diensten | R.I.N. B.V.',
  description: 'Bekijk de zakelijke transportdiensten van R.I.N. B.V.: spoedtransport, same-day delivery, vaste ritten, internationaal, nachttransport en medisch vervoer.',
  keywords: ['zakelijk transport', 'spoedkoerier', 'sameday delivery', 'contractvervoer', 'nachttransport'],
};

export default function DienstenPage() {
  return (
    <main data-page data-screen-label="Diensten" style={{ paddingTop: 96 }}>
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(20px,3vw,40px) clamp(20px,4vw,48px) 0' }}>
        <PageHero
          eyebrow="Diensten"
          title="Transport voor elke zakelijke zending"
          intro="Van een tijdkritische levering tot een terugkerende route: kies de dienst die bij uw planning past. We maken vooraf duidelijke afspraken over route, tijdvenster en terugkoppeling."
        />
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,6vw,82px) clamp(20px,4vw,48px) clamp(54px,7vw,96px)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 'clamp(28px,3.5vw,46px)' }}>
          <div>
            <span className="eyebrow">Kies uw dienst</span>
            <h2 style={{ margin: '18px 0 0', maxWidth: '18ch', font: '700 clamp(28px,3.4vw,46px)/1.08 ' + display, letterSpacing: '-.035em' }}>Van één rit tot vaste capaciteit</h2>
          </div>
          <p style={{ margin: 0, maxWidth: '38ch', font: '400 15px/1.7 ' + font, color: c.muted }}>Elke dienstpagina legt uit wat we vervoeren, hoe we plannen en welke informatie we vooraf nodig hebben.</p>
        </div>
        <div data-service-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(14px,1.8vw,20px)' }}>
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.sand, padding: 'clamp(46px,6vw,78px) 0' }}>
        <div className="content-width" data-two style={{ display: 'grid', gridTemplateColumns: '.72fr 1.28fr', gap: 'clamp(28px,6vw,96px)', alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Zo werkt het</span>
            <h2 style={{ margin: '18px 0 0', maxWidth: '17ch', font: '700 clamp(28px,3.2vw,44px)/1.08 ' + display, letterSpacing: '-.035em' }}>Van aanvraag tot aflevering helder geregeld</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '24px 28px' }}>
            {steps.map((step) => (
              <div key={step.n} style={{ borderTop: '1px solid rgba(28,27,24,.18)', paddingTop: 14 }}>
                <span style={{ color: c.goldLink, font: '700 12px/1 ' + font }}>{step.n}</span>
                <h3 style={{ margin: '12px 0 0', font: '700 16px/1.3 ' + font }}>{step.t}</h3>
                <p style={{ margin: '7px 0 0', font: '400 13.5px/1.6 ' + font, color: c.muted }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="full-bleed" style={{ background: c.ink, color: c.bg, padding: 'clamp(40px,5vw,64px) 0' }}>
        <div className="content-width" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <span className="eyebrow eyebrow--onDark">Hulp bij kiezen</span>
            <h2 style={{ margin: '16px 0 0', font: '700 clamp(25px,3vw,38px)/1.1 ' + display, letterSpacing: '-.035em' }}>Niet zeker welke dienst past?</h2>
            <p style={{ margin: '10px 0 0', maxWidth: '52ch', font: '400 15px/1.65 ' + font, color: c.onDark }}>Vertel ons wat u wilt vervoeren en wanneer het nodig is. We denken mee over de passende route.</p>
          </div>
          <Link data-btn-gold href="/contact#offerte" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 22px', borderRadius: 8, background: c.gold, color: c.ink, font: '700 14px/1 ' + font, whiteSpace: 'nowrap' }}>Route bespreken →</Link>
        </div>
      </section>
    </main>
  );
}
