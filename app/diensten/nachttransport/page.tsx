import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/site';

const slug = 'nachttransport';
const svc = services.find((s) => s.slug === slug);

export const metadata = {
  title: svc.title + ' | R.I.N. B.V.',
  description: svc.lead + " Zakelijk transport met duidelijke afspraken en één aanspreekpunt.",
  keywords: [svc.title, "zakelijk transport", "koeriersdienst"],
};

export default function Page() {
  return <ServiceDetail slug={slug} />;
}





