import type { MetadataRoute } from 'next';
import { services } from '@/lib/site';
import { absolute } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/diensten', priority: 0.9, changeFrequency: 'monthly' },
    ...services.map((service) => ({
      path: '/diensten/' + service.slug,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/over-ons', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/voorwaarden', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pages.map((page) => ({
    url: absolute(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
