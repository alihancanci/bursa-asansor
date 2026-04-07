import { Metadata } from 'next';
import { DISTRICTS, SERVICES } from '@/data';
import ServicePageClient from './ServicePageClient';

type Props = {
  params: Promise<{ slug: string }>
}

// En önemli ilçeleri Build aşamasında önceden oluşturuyoruz (Pre-rendering).
// Bu hem SEO botları için hem de kullanıcı deneyimi için hızı garanti eder.
export async function generateStaticParams() {
  const params = [];
  
  for (const d of DISTRICTS) {
    for (const s of SERVICES) {
      params.push({ slug: `${d.slug}-${s.slug}` });
    }
  }
  
  return params;
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

  // Dinamik benzersiz başlık (Örn: Nilüfer Evden Eve Nakliyat & Kiralık Asansör | 7/24)
  const title = `${district.name} ${service.name} & Kiralık Asansör | 7/24 Güvenli`;
  
  // Dinamik benzersiz açıklama (Max 160 karakter)
  const description = `${district.name} bölgesinde 7/24 ${service.name} hizmeti. 15. kata kadar kiralık mobil asansörlerle profesyonel evden eve nakliyat ve güvenli taşıma çözümleri.`;

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
