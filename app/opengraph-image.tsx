import { ImageResponse } from 'next/og';
import { company } from '@/lib/site';

export const alt = 'R.I.N. B.V. — zakelijk koeriers- en spoedtransport';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Deelafbeelding voor WhatsApp, LinkedIn en X. Wordt bij de build als PNG gegenereerd. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#141310',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 14, height: 14, background: '#E7C97F', transform: 'rotate(45deg)' }} />
          <div style={{ fontSize: 26, letterSpacing: 6, color: '#E7C97F', textTransform: 'uppercase' }}>
            Koeriers- &amp; spoedtransport
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 104, fontWeight: 700, color: '#FBFAF7', lineHeight: 1.02, letterSpacing: -3 }}>
            Snel geregeld.
          </div>
          <div style={{ fontSize: 104, fontWeight: 700, color: '#E7C97F', lineHeight: 1.02, letterSpacing: -3 }}>
            Rechtstreeks geleverd.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: 'rgba(251,250,247,.66)' }}>
            Zakelijk transport met één aanspreekpunt · Nederland &amp; Europa
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 30,
            borderTop: '2px solid rgba(251,250,247,.16)',
            fontSize: 28,
            color: '#FBFAF7',
          }}
        >
          <div style={{ display: 'flex', fontWeight: 700, letterSpacing: 2 }}>{company.name}</div>
          <div style={{ display: 'flex', color: 'rgba(251,250,247,.6)' }}>{company.phone} · 24/7 spoed</div>
        </div>
      </div>
    ),
    size,
  );
}
