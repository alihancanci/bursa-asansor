import { Metadata } from 'next';
import { DISTRICTS, SERVICES } from '@/data';
import ServicePageClient from './ServicePageClient';

export const revalidate = 604800; // Sayfaları arka planda haftada 1 kez (7 gün) otomatik yenileyerek taze tutar.

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

  // Dinamik benzersiz başlık (Örn: Nilüfer Evden Eve Nakliyat | 0505 329 75 33 | Dar Sokak Uzmanlığı)
  const title = district.isPriority 
    ? `${district.name} ${service.name} | 0505 329 75 33 | Dar Sokak Uzmanlığı`
    : `${district.name} ${service.name} | 0505 329 75 33 | Güvenli Taşımacılık`;
  
  // Dinamik benzersiz açıklama (Max 160 karakter - Bing/Google uyumlu)
  const description = `${district.name} bölgesinde dar sokaklara uygun asansörümüzle profesyonel ${service.name} hizmeti. Bilgi ve Randevu: 0505 329 75 33`;

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
      siteName: "Bursa Kiralık Asansör CNC Evden Eve Nakliyat",
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug: paramsSlug } = await params;
  const fullSlug = paramsSlug || "";
  
  const service = SERVICES.find(s => fullSlug.endsWith(`-${s.slug}`));
  const districtSlugLength = service ? fullSlug.length - service.slug.length - 1 : 0;
  const districtSlug = service ? fullSlug.substring(0, districtSlugLength) : "";
  const district = DISTRICTS.find(d => d.slug === districtSlug);

  if (!district || !service) {
    return <ServicePageClient />;
  }

  // JSON-LD Şemaları (SEO için kritik)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 0. Speakable (Sesli Arama & Siri Optimizasyonu) Şeması
      {
        "@type": "WebPage",
        "@id": `https://bursakiralikasansor.com/${fullSlug}#webpage`,
        "url": `https://bursakiralikasansor.com/${fullSlug}`,
        "name": `${district.name} ${service.name} | Bursa Kiralık Asansör CNC Evden Eve Nakliyat`,
        "speakable": {
          "@type": "SpeakableSpecification",
          "xpath": [
            "/html/head/title",
            "/html/head/meta[@name='description']/@content"
          ]
        }
      },
      // 1. Hizmet Bölgesi Şeması (Ofis gerektirmeyen model)
      {
        "@type": "MovingCompany",
        "@id": `https://bursakiralikasansor.com/#organization`,
        "name": "Bursa Kiralık Asansör CNC Evden Eve Nakliyat",
        "image": "https://bursakiralikasansor.com/opengraph.jpg",
        "telephone": "+905053297533",
        "url": "https://bursakiralikasansor.com",
        "sameAs": [
          district.wikidataId ? `https://www.wikidata.org/wiki/${district.wikidataId}` : "",
          "https://www.facebook.com/bursakiralikasansor"
        ].filter(Boolean),
        "department": {
          "@type": "MovingCompany",
          "name": `CNC ${district.name} ${service.name} Şubesi`,
          "areaServed": district.name,
          "url": `https://bursakiralikasansor.com/${fullSlug}`,
          "telephone": "+905053297533"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bursa",
          "addressRegion": "Bursa",
          "addressCountry": "TR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.94,
          "reviewCount": 50,
          "bestRating": 5,
          "worstRating": 1,
          "itemReviewed": {
            "@type": "MovingCompany",
            "name": "Bursa Kiralık Asansör CNC Evden Eve Nakliyat",
            "image": "https://bursakiralikasansor.com/opengraph.jpg",
            "telephone": "+905053297533"
          }
        },
        "areaServed": {
          "@type": "GeoShape",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bursa",
            "addressRegion": "Bursa",
            "addressCountry": "TR"
          },
          "polygon": "40.58,28.50 40.60,29.30 40.30,30.10 39.90,30.00 39.65,29.40 39.60,28.80 39.80,28.20 40.20,28.10 40.58,28.50"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": district.latitude,
          "longitude": district.longitude
        },
        "knowsAbout": [
          "Asansörlü Nakliyat", 
          "Eşya Taşıma Asansörü", 
          "Mobil Asansör Kiralama", 
          "Dar Sokak Asansörü", 
          "Hassas Eşya Taşıma",
          "İnşaat Malzemesi Asansörü"
        ]
      },
      // 2. Spesifik Hizmet Şeması
      {
        "@type": "Service",
        "name": `${district.name} ${service.name}`,
        "description": `${district.name} bölgesinde dar sokaklara uygun kompakt asansörlerimiz ve uzman operatör kadromuzla 7/24 ${service.name} hizmeti sunuyoruz. Beyaz eşya, mobilya ve inşaat malzemeleri için %100 güvenli taşıma.`,
        "provider": { "@id": `https://bursakiralikasansor.com/#organization` },
        "serviceArea": {
          "@type": "AdministrativeArea",
          "name": district.name
        },
        "dateModified": "2025-03-15",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Asansör Kiralama Hizmetleri",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobil Asansör Kiralama" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Evden Eve Nakliyat" } }
          ]
        }
      },
      // 3. Breadcrumb (Navigasyon) Şeması
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://bursakiralikasansor.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": service.name,
            "item": `https://bursakiralikasansor.com/#services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": district.name,
            "item": `https://bursakiralikasansor.com/${fullSlug}`
          }
        ]
      },
      // 4. SSS (FAQ) Şeması (İnsanlar Bunu da Sordu - People Also Ask Optimizasyonu)
      {
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": `${district.name} bölgesinde ${faq.q.charAt(0).toLowerCase() + faq.q.slice(1)}`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageClient />
    </>
  );
}
