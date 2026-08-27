'use client';

import { useState } from 'react';
import { faqs } from '@/lib/site';
import { c, font, display } from '@/lib/theme';

type FaqItem = { q: string; a: string };

export default function Faq({ items = faqs }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ borderTop: '1px solid ' + c.hairline }}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ borderBottom: '1px solid ' + c.hairline }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,
                width: '100%',
                padding: '22px 2px',
                border: 0,
                background: 'transparent',
                textAlign: 'left',
                font: '600 clamp(16px,1.8vw,20px)/1.35 ' + display,
                letterSpacing: '-.01em',
                color: isOpen ? c.goldLink : c.ink,
                cursor: 'pointer',
              }}
            >
              {f.q}
              <span style={{ position: 'relative', flex: 'none', width: 16, height: 16 }}>
                <span style={{ position: 'absolute', top: 7, left: 0, width: 16, height: 2, background: c.goldLink }} />
                <span
                  style={{
                    position: 'absolute',
                    left: 7,
                    top: 0,
                    width: 2,
                    height: 16,
                    background: c.goldLink,
                    transform: isOpen ? 'scaleY(0)' : 'none',
                    transition: 'transform .25s ease',
                  }}
                />
              </span>
            </button>
            <div
              aria-hidden={!isOpen}
              className="faq-answer"
              style={{
                maxHeight: isOpen ? 300 : 0,
                padding: isOpen ? '0 2px 24px' : '0 2px',
                maxWidth: '64ch',
                overflow: 'hidden',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
                font: '400 15px/1.7 ' + font,
                color: 'rgba(28,27,24,.64)',
                transition: 'max-height .55s cubic-bezier(.2,.7,.2,1), padding .55s cubic-bezier(.2,.7,.2,1), opacity .35s ease .08s, transform .55s cubic-bezier(.2,.7,.2,1)',
              }}
            >{f.a}</div>
          </div>
        );
      })}
    </div>
  );
}



