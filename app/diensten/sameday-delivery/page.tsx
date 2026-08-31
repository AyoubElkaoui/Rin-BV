import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

const slug = 'sameday-delivery';
const svc = services.find((s) => s.slug === slug);

export const metadata = pageMeta({
  title: svc.seoTitle,
  description: svc.seo,
  path: '/diensten/sameday-delivery',
  keywords: [svc.title, 'zakelijk transport', 'koeriersdienst', 'transportbedrijf Nederland'],
});

export default function Page() {
  return <ServiceDetail slug={slug} />;
}





