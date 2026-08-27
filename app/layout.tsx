import type React from 'react';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'R.I.N. B.V. | Zakelijk transport en koeriersdienst',
  description:
    'R.I.N. B.V. verzorgt zakelijk transport, spoedritten, same-day delivery en vaste routes vanuit Nederland. Persoonlijke planning en rechtstreeks vervoer.',
  keywords: ['transportbedrijf', 'koeriersdienst', 'spoedtransport', 'sameday delivery', 'contractvervoer', 'Nederland'],
  icons: { icon: '/rin-logo.png' },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..900&family=Inter:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}



