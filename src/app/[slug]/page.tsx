import { Metadata } from 'next';
import { DISTRICTS, SERVICES } from '@/data';
import ServicePageClient from './ServicePageClient';

type Props = {
  params: Promise<{ slug: string }>
}

// Vercel Free Tier (1GB RAM) sınırlarına takılmamak ve Build süresinde
// "Out of Memory" hatası almamak için sayfaları On-Demand ISR olarak ayarlıyoruz.
// Böylece sayfalar Build anında değil, Google veya kullanıcı ilk girdiğinde
// arka planda statik HTML'e dönüştürülüp hafızaya alınır (Sonsuza dek hızlı açılır).
export async function generateStaticParams() {
  return [];
}

// SEO: Her sayfa için eşsiz ve dinamik Title + Meta Description
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: paramsSlug } = await params;
  const fullSlug = paramsSlug || "";
  
  const service = SERVICES.find(s => fullSlug.endsWith(`-${s.slug}`));
  
  if (!service) {
    return { title: 'Sayfa Bulunamadı | Bursa Kiralık Asansör' };
  }

  const districtSlugLength = fullSlug.length - service.slug.length - 1;
  const districtSlug = fullSlug.substring(0, districtSlugLength);
  const district = DISTRICTS.find(d => d.slug === districtSlug);

  if (!district) {
    return { title: 'Sayfa Bulunamadı' };
  }

  // Dinamik benzersiz başlık (Örn: Nilüfer Evden Eve Nakliyat | Profesyonel)
  const title = `${district.name} ${service.name} | Profesyonel`;
  
  // Dinamik benzersiz açıklama
  const description = `${district.name} bölgesinde asansör ihtiyacınız için yanınızdayız. 15. kata kadar çıkan mobil asansörlerimizle ${service.name} hizmeti. Haftanın 7 günü 24 saat hizmet veriyoruz.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${fullSlug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${fullSlug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default async function ServicePage() {
  // İstemci tarafı kodlarını içeren (framer-motion, i18next vs) dosyayı çağırıyoruz
  return <ServicePageClient />;
}
