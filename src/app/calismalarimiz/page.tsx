import { Metadata } from 'next';
import WorksPageClient from './WorksPageClient';

import { getCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Bursa Kiralık Asansör Çalışmalarımız & Referanslar',
  description: 'Bursa kiralık asansör ve asansörlü evden eve nakliyat çalışmalarımız. Nilüfer, Osmangazi, Yıldırım ve Mudanya’da 15. kata kadar kurulumlar: 0505 608 07 00.',
  alternates: {
    canonical: getCanonicalUrl('/calismalarimiz'),
  },
  openGraph: {
    title: 'Bursa Kiralık Asansör Çalışmalarımız & Referanslar',
    description: 'Bursa kiralık asansör ve asansörlü evden eve nakliyat çalışmalarımız. Nilüfer, Osmangazi, Yıldırım ve Mudanya’da 15. kata kadar kurulumlar.',
    url: getCanonicalUrl('/calismalarimiz'),
  }
};

export default function WorksPage() {
  return <WorksPageClient />;
}
