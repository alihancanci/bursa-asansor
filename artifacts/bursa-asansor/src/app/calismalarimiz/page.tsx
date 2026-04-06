import { Metadata } from 'next';
import WorksPageClient from './WorksPageClient';

export const metadata: Metadata = {
  title: 'Çalışmalarımız & Referanslar | Bursa Asansörlü Nakliyat',
  description: 'Bursa genelinde gerçekleştirdiğimiz başarılı asansör kiralama ve evden eve nakliyat operasyonlarımızdan kareler. Bizi neden tercih etmelisiniz?',
  openGraph: {
    title: 'Çalışmalarımız & Referanslar | Bursa Asansörlü Nakliyat',
    description: 'Bursa genelinde gerçekleştirdiğimiz başarılı asansör kiralama ve evden eve nakliyat operasyonlarımızdan kareler.',
    url: '/calismalarimiz',
  }
};

export default function WorksPage() {
  return <WorksPageClient />;
}
