import type { Metadata } from 'next';
import { company, services } from '@/lib/site';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rinlogistiek.nl').replace(/\/$/, '');

/** Paginapaden krijgen een slash aan het eind, net als de canonical-URL (next.config: trailingSlash). */
export const ogImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'R.I.N. B.V. — zakelijk koeriers- en spoedtransport',
};

export const absolute = (path: string) => {
  const clean = path.startsWith('/') ? path : '/' + path;
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  return siteUrl + (isFile || clean.endsWith('/') ? clean : clean + '/');
};

/** Metadata voor één pagina: canonical + OpenGraph/Twitter in één keer goed. */
export function pageMeta({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absolute(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      siteName: company.name,
      url,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.url],
    },
  };
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: company.addressLines[0],
  postalCode: company.addressLines[1].split(' ').slice(0, 2).join(' '),
  addressLocality: company.addressLines[1].split(' ').slice(2).join(' '),
  addressCountry: 'NL',
};

/** LocalBusiness-schema: laat Google bedrijfsnaam, adres, telefoon en diensten koppelen. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': siteUrl + '/#organisatie',
  name: company.name,
  legalName: company.name,
  description:
    'R.I.N. B.V. verzorgt zakelijk koeriers- en spoedtransport in Nederland en Europa: spoedritten, same-day delivery, vaste ritten, nachttransport en medisch of waardevol vervoer.',
  url: siteUrl,
  logo: absolute('/rin-logo.png'),
  image: absolute('/photos/small-van-hero.webp'),
  telephone: company.phone,
  email: company.email,
  address: postalAddress,
  vatID: company.btw,
  identifier: { '@type': 'PropertyValue', name: 'KvK', value: company.kvk },
  areaServed: [
    { '@type': 'Country', name: 'Nederland' },
    { '@type': 'Country', name: 'België' },
    { '@type': 'Country', name: 'Duitsland' },
    { '@type': 'Country', name: 'Frankrijk' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Transportdiensten',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.lead,
        url: absolute('/diensten/' + service.slug),
      },
    })),
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': siteUrl + '/#website',
  url: siteUrl,
  name: company.name,
  inLanguage: 'nl-NL',
  publisher: { '@id': siteUrl + '/#organisatie' },
};

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((step, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: step.name,
    item: absolute(step.path),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

export const serviceSchema = (service: (typeof services)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.seo,
  serviceType: service.title,
  url: absolute('/diensten/' + service.slug),
  provider: { '@id': siteUrl + '/#organisatie' },
  areaServed: { '@type': 'Country', name: 'Nederland' },
});
