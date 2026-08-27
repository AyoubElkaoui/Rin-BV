import Link from 'next/link';
import { c, font } from '@/lib/theme';

export default function ServiceCard({ service, reveal = false }: { service: any; reveal?: boolean }) {
  return (
    <Link
      data-soft
      {...(reveal ? { 'data-rv': '' } : {})}
      href={'/diensten/' + service.slug}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '26px 24px 28px',
        borderRadius: 12,
        background: c.card,
        boxShadow: 'inset 0 0 0 1px ' + c.hairline,
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 44,
          borderRadius: 8,
          background: c.goldSoft,
          font: '700 14px/1 ' + font,
          color: c.goldInk,
        }}
      >
        {service.n}
      </span>
      <h3 style={{ margin: '20px 0 0', font: '700 19px/1.25 ' + font, letterSpacing: '-.02em' }}>{service.title}</h3>
      <p style={{ margin: '9px 0 16px', font: '400 14px/1.65 ' + font, color: c.muted }}>{service.card}</p>
      <p style={{ margin: '0 0 20px', font: '400 13.5px/1.65 ' + font, color: 'rgba(28,27,24,.52)' }}>{service.lead}</p>
      <span
        style={{
          marginTop: 'auto',
          alignSelf: 'flex-start',
          padding: '8px 13px',
          borderRadius: 8,
          background: c.sand,
          font: '600 12px/1 ' + font,
          color: 'rgba(28,27,24,.6)',
        }}
      >
        {service.tag}
      </span>
    </Link>
  );
}



