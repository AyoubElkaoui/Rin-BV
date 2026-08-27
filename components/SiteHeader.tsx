'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { company, services } from '@/lib/site';
import { c, font } from '@/lib/theme';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const svcCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (svcCloseTimer.current) {
      clearTimeout(svcCloseTimer.current);
      svcCloseTimer.current = null;
    }
    setMenu(false);
    setSvcOpen(false);
  }, [pathname]);

  useEffect(() => () => {
    if (svcCloseTimer.current) clearTimeout(svcCloseTimer.current);
  }, []);

  const openServices = () => {
    if (svcCloseTimer.current) {
      clearTimeout(svcCloseTimer.current);
      svcCloseTimer.current = null;
    }
    setSvcOpen(true);
  };

  const scheduleServicesClose = () => {
    if (svcCloseTimer.current) clearTimeout(svcCloseTimer.current);
    svcCloseTimer.current = setTimeout(() => {
      setSvcOpen(false);
      svcCloseTimer.current = null;
    }, 260);
  };

  const active = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const pill = (on) => ({
    padding: '9px 12px',
    borderRadius: 8,
    background: on ? c.gold : 'transparent',
    color: on ? c.ink : c.bg,
    font: '600 14px/1 ' + font,
  });

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 24, padding: '10px clamp(12px,3vw,28px)', background: 'rgba(20,19,16,.96)', backdropFilter: 'blur(16px)' }}>
        <header
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            padding: '10px 6px 10px 8px',
            borderRadius: 10,
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flex: 'none', padding: '0 6px' }} aria-label={company.name}>
            <img src="/rin-logo.png" alt={company.name} style={{ height: 22, width: 'auto', display: 'block' }} />
          </Link>

          <nav data-navdesk style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" style={pill(pathname === '/')}>Home</Link>

            <div
              onMouseEnter={openServices}
              onMouseLeave={scheduleServicesClose}
              style={{ position: 'relative' }}
            >
              <Link
                href="/diensten"
                style={{ ...pill(active('/diensten')), display: 'flex', alignItems: 'center', gap: 7 }}
              >
                Diensten
                <span
                  style={{
                    display: 'block',
                    width: 5,
                    height: 5,
                    borderRight: '1.6px solid ' + c.goldLink,
                    borderBottom: '1.6px solid ' + c.goldLink,
                    transform: 'rotate(45deg) translateY(-1px)',
                  }}
                />
              </Link>
              {svcOpen ? (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: -8,
                    width: 'min(540px,88vw)',
                    padding: 10,
                    borderRadius: 10,
                    background: c.card,
                    boxShadow: '0 26px 60px -26px rgba(28,27,24,.45), inset 0 0 0 1px rgba(28,27,24,.08)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 4,
                  }}
                >
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      data-menu-item
                      href={'/diensten/' + s.slug}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px', borderRadius: 8 }}
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
                      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ font: '600 14px/1.25 ' + font }}>{s.title}</span>
                        <span style={{ font: '400 12px/1.3 ' + font, color: c.muted2 }}>{s.tag}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <Link href="/over-ons" style={pill(active('/over-ons'))}>Over ons</Link>
            <Link href="/contact" style={pill(active('/contact'))}>Contact</Link>
            <a
              data-btn-gold
              href={company.phoneHref}
              style={{ marginLeft: 5, padding: '11px 15px', borderRadius: 8, background: c.gold, color: c.ink, font: '700 13px/1 ' + font }}
            >
              Spoed bellen
            </a>
          </nav>

          <button
            data-burger
            onClick={() => setMenu((m) => !m)}
            aria-expanded={menu}
            aria-controls="mobile-navigation"
            aria-label={menu ? 'Navigatie sluiten' : 'Navigatie openen'}
            style={{
              display: 'none',
              alignItems: 'center',
              padding: '12px 18px',
              border: 0,
              borderRadius: 8,
              background: c.gold,
              color: c.ink,
              font: '700 13px/1 ' + font,
              cursor: 'pointer',
            }}
          >
            {menu ? 'Sluiten' : 'Menu'}
          </button>
        </header>
      </div>

      {menu ? (
        <div
          id="mobile-navigation"
          role="navigation"
          aria-label="Mobiele navigatie"
          style={{
            position: 'fixed',
            top: 74,
            left: 12,
            right: 12,
            zIndex: 23,
            padding: 14,
            borderRadius: 12,
            background: c.card,
            boxShadow: '0 30px 70px -30px rgba(28,27,24,.5), inset 0 0 0 1px rgba(28,27,24,.08)',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
          }}
        >
          <Link href="/" style={{ display: 'block', padding: '13px 14px', borderRadius: 8, font: '700 17px/1.2 ' + font }}>Home</Link>
          <Link href="/diensten" style={{ display: 'block', padding: '13px 14px', borderRadius: 8, font: '700 17px/1.2 ' + font }}>Diensten</Link>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={'/diensten/' + s.slug}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderRadius: 8 }}
            >
              <span
                style={{
                  flex: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: c.goldSoft,
                  font: '700 11px/1 ' + font,
                  color: c.goldInk,
                }}
              >
                {s.n}
              </span>
              <span style={{ font: '500 15px/1.3 ' + font }}>{s.title}</span>
            </Link>
          ))}
          <Link href="/over-ons" style={{ display: 'block', padding: '13px 14px', borderRadius: 8, font: '700 17px/1.2 ' + font }}>Over ons</Link>
          <Link href="/contact" style={{ display: 'block', padding: '13px 14px', borderRadius: 8, font: '700 17px/1.2 ' + font }}>Contact</Link>
          <a
            href={company.phoneHref}
            style={{ display: 'block', marginTop: 10, padding: 16, borderRadius: 8, background: c.ink, color: c.bg, textAlign: 'center', font: '700 15px/1 ' + font }}
          >
            Spoed? Bellen
          </a>
        </div>
      ) : null}
    </>
  );
}
