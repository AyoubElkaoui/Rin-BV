import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { company } from '@/lib/site';
import { ogImage, organizationSchema, siteUrl, websiteSchema } from '@/lib/seo';

// Zelf gehost via next/font: geen verzoek naar Google, sneller en AVG-vriendelijk.
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'R.I.N. B.V. | Zakelijk transport en koeriersdienst',
    template: '%s | R.I.N. B.V.',
  },
  description:
    'R.I.N. B.V. verzorgt zakelijk transport, spoedritten, same-day delivery en vaste routes vanuit Nederland. Persoonlijke planning en rechtstreeks vervoer.',
  keywords: ['transportbedrijf', 'koeriersdienst', 'spoedtransport', 'sameday delivery', 'contractvervoer', 'Nederland'],
  applicationName: company.name,
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: company.name,
    url: siteUrl,
    title: 'R.I.N. B.V. | Zakelijk transport en koeriersdienst',
    description:
      'Zakelijk koeriers- en spoedtransport met één aanspreekpunt. Rechtstreeks van laadadres naar losadres, in Nederland en Europa.',
    images: [ogImage],
  },
  twitter: { card: 'summary_large_image', images: [ogImage.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: { icon: '/rin-mark.png', apple: '/rin-mark.png' },
  category: 'business',
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#141310' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
