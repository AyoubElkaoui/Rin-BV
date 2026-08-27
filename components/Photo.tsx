import type React from 'react';
import { c, font } from '@/lib/theme';

/**
 * Foto met nette fallback. Zolang het bestand niet in /public/photos staat,
 * blijft de placeholder-tekst zichtbaar (de <img> valt weg bij een 404).
 */
export default function Photo({ src, alt, label, radius = 14, style, ...rest }: { src?: string | null; alt?: string; label?: string; radius?: number; style?: React.CSSProperties; [key: string]: unknown }) {
  return (
    <div
      {...rest}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: radius,
        background: c.sand,
        boxShadow: 'inset 0 0 0 1px ' + c.hairline,
        ...style,
      }}
    >
      <span
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          textAlign: 'center',
          font: '500 13px/1.5 ' + font,
          color: 'rgba(28,27,24,.45)',
        }}
      >
        {label}
      </span>
      {src ? (
        <img
          src={src}
          alt={alt || label || ''}
          style={{ position: 'relative', display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : null}
    </div>
  );
}



