import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Bursa Kiralık Asansör & Evden Eve Asansörlü Nakliyat | Mobil Asansör',
  description: 'Bursa genelinde 15. kata kadar güvenli ve profesyonel mobil asansör kiralama hizmeti. Evden eve asansörlü nakliyat, inşaat asansörü, saatlik kiralama hizmetleri için 7/24 ulaşın.',
  openGraph: {
    title: 'Bursa Kiralık Asansör & Evden Eve Asansörlü Nakliyat | Mobil Asansör',
    description: 'Bursa genelinde 15. kata kadar güvenli ve profesyonel mobil asansör kiralama hizmeti. Evden eve asansörlü nakliyat, inşaat asansörü, saatlik kiralama hizmetleri için 7/24 ulaşın.',
    url: '/',
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
