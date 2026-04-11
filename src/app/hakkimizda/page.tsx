import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Hakkımızda | CNC Bursa Evden Eve Nakliyat & Kiralık Asansör',
  description: 'Bursa\'da asansörlü taşıma ve kiralık mobil asansörde güvenilir marka: CNC Asansör ve Nakliyat. Uzman ekip, sıfır hasar ve %100 müşteri memnuniyeti.',
  openGraph: {
    title: 'Hakkımızda | CNC Bursa Evden Eve Nakliyat & Kiralık Asansör',
    description: 'Bursa\'da asansörlü taşıma ve kiralık mobil asansör hizmetinde güvenilir marka: CNC Asansör ve Nakliyat.',
    url: '/hakkimizda',
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}
