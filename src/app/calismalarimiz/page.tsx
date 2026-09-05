import { Metadata } from 'next';
import WorksPageClient from './WorksPageClient';

import { getCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Çalışmalarımız | Bursa Kiralık Asansör CNC',
  description: 'Bursa genelinde gerçekleştirdiğimiz başarılı asansör kiralama ve evden eve nakliyat operasyonlarımızdan kareler. Bizi neden tercih etmelisiniz?',
  alternates: {
    canonical: getCanonicalUrl('/calismalarimiz'),
  },
  openGraph: {
    title: 'Çalışmalarımız | Bursa Kiralık Asansör CNC',
    description: 'Bursa genelinde gerçekleştirdiğimiz başarılı asansör kiralama ve evden eve nakliyat operasyonlarımızdan kareler.',
    url: getCanonicalUrl('/calismalarimiz'),
  }
};

export default function WorksPage() {
  return <WorksPageClient />;
}
