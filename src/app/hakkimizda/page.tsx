import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Hakkımızda | CNC Bursa Evden Eve Nakliyat & Kiralık Asansör',
  description: 'Bursa\'da asansörlü taşıma ve kiralık mobil asansör hizmetinde güvenilir marka: CNC Asansör ve Nakliyat. Müşteri memnuniyeti ve sıfır hasar garantisi.',
  openGraph: {
    title: 'Hakkımızda | CNC Bursa Evden Eve Nakliyat & Kiralık Asansör',
    description: 'Bursa\'da asansörlü taşıma ve kiralık mobil asansör hizmetinde güvenilir marka: CNC Asansör ve Nakliyat.',
    url: '/hakkimizda',
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}
