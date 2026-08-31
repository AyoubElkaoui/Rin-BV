'use client';

import { useEffect, useRef, useState } from 'react';
import { c, font } from '@/lib/theme';

export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
/** Zonder sitekey blijft het formulier gewoon werken; de server valt dan terug op de andere botfilters. */
export const captchaEnabled = TURNSTILE_SITE_KEY.length > 0;

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

const loadScript = () => {
  if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
  const script = document.createElement('script');
  script.src = SCRIPT_SRC;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};

/**
 * Cloudflare Turnstile: de bezoeker ziet meestal alleen een vinkje, geen puzzels.
 * `resetKey` ophogen laat het vakje opnieuw renderen na een verstuurde of mislukte aanvraag.
 */
export default function Turnstile({ onToken, resetKey = 0 }: { onToken: (token: string) => void; resetKey?: number }) {
  const holder = useRef<HTMLDivElement>(null);
  const callback = useRef(onToken);
  const [failed, setFailed] = useState(false);

  callback.current = onToken;

  useEffect(() => {
    if (!captchaEnabled) return;

    let widgetId: string | undefined;
    let cancelled = false;
    let attempts = 0;

    loadScript();

    // Pollen in plaats van op script.onload wachten: dat werkt ook als het script al
    // door een eerdere pagina is geladen of als React het effect opnieuw uitvoert.
    const tryRender = () => {
      if (cancelled || widgetId) return true;
      if (!holder.current || !window.turnstile) return false;

      holder.current.innerHTML = '';
      widgetId = window.turnstile.render(holder.current, {
        sitekey: TURNSTILE_SITE_KEY,
        language: 'nl',
        action: 'ritaanvraag',
        callback: (token: string) => callback.current(token),
        'expired-callback': () => callback.current(''),
        'error-callback': () => callback.current(''),
      });
      return true;
    };

    let timer: ReturnType<typeof setInterval> | undefined;
    if (!tryRender()) {
      timer = setInterval(() => {
        attempts += 1;
        if (tryRender()) {
          clearInterval(timer);
        } else if (attempts > 60) {
          clearInterval(timer);
          if (!cancelled) setFailed(true);
        }
      }, 150);
    }

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [resetKey]);

  if (!captchaEnabled) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div ref={holder} />
      {failed ? (
        <span style={{ font: '400 12.5px/1.5 ' + font, color: '#8E3025' }}>
          De beveiligingscheck kon niet laden. Ververs de pagina of mail ons rechtstreeks.
        </span>
      ) : (
        <span style={{ font: '400 11.5px/1.5 ' + font, color: c.muted2 }}>
          Spambeveiliging via Cloudflare Turnstile.
        </span>
      )}
    </div>
  );
}
