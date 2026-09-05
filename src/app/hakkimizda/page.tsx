import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

import { getCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Hakkımızda | Bursa Kiralık Asansör CNC',
  description: 'Bursa\'da asansörlü taşıma ve kiralık mobil asansörde güvenilir marka: CNC Asansör ve Nakliyat. Uzman ekip, sıfır hasar ve %100 müşteri memnuniyeti.',
  alternates: {
    canonical: getCanonicalUrl('/hakkimizda'),
  },
  openGraph: {
    title: 'Hakkımızda | Bursa Kiralık Asansör CNC',
    description: 'Bursa\'da asansörlü taşıma ve kiralık mobil asansör hizmetinde güvenilir marka: CNC Asansör ve Nakliyat.',
    url: getCanonicalUrl('/hakkimizda'),
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}
