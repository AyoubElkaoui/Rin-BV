import type React from 'react';
import { c, font, display, mono } from '@/lib/theme';

/** Zandkleurig introblok dat elke subpagina opent. */
export default function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <div style={{ padding: 'clamp(26px,3.2vw,48px)', borderRadius: 14, background: c.sand }}>
      <span style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: 8, background: c.card, font: '600 11px/1 ' + mono, color: c.goldLink }}>
        {eyebrow}
      </span>
      <h1 style={{ margin: '20px 0 0', maxWidth: '20ch', font: '800 clamp(30px,3.9vw,54px)/1.04 ' + display, letterSpacing: '-.04em' }}>{title}</h1>
      {intro ? (
        <p style={{ margin: '18px 0 0', maxWidth: '54ch', font: '400 16px/1.7 ' + font, color: 'rgba(28,27,24,.6)' }}>{intro}</p>
      ) : null}
      {children}
    </div>
  );
}



