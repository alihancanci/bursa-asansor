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

// SEO: Her sayfa için eşsiz ve tam eşleşme (Exact-Match) Title + Meta Description
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: paramsSlug } = await params;
  const fullSlug = paramsSlug || "";
  
  const service = [...SERVICES].sort((a, b) => b.slug.length - a.slug.length).find(s => fullSlug.endsWith(`-${s.slug}`));
  
  if (!service) {
    return { title: 'Sayfa Bulunamadı | Bursa Kiralık Asansör' };
  }

  const districtSlugLength = fullSlug.length - service.slug.length - 1;
  const districtSlug = fullSlug.substring(0, districtSlugLength);
  const district = DISTRICTS.find(d => d.slug === districtSlug);

  if (!district) {
    return { title: 'Sayfa Bulunamadı' };
  }

  // Google Politikalarıyla %100 Uyumlu, Tıklama (CTR) Odaklı Başlık Motoru (<60 karakter)
  let title = `${district.name} ${service.name} | Bursa Kiralık Asansör`;

  if (service.slug === "kiralik-asansor") {
    if (district.slug === "nilufer") {
      title = "Nilüfer Kiralık Asansör | En Uygun Fiyat & Hızlı Taşıma";
    } else if (district.slug === "osmangazi") {
      title = "Osmangazi Kiralık Asansör | En İyi Fiyat & Güvenli Taşıma";
    } else if (district.slug === "yildirim") {
      title = "Yıldırım Kiralık Asansör | Uygun Fiyat & Hızlı Kurulum";
    } else if (district.slug === "mudanya") {
      title = "Mudanya Kiralık Asansör | En Uygun Fiyat & Güvenli Taşıma";
    } else {
      title = `${district.name} Kiralık Asansör | En Uygun Fiyat & Hızlı Taşıma`;
    }
  } else if (service.slug === "evden-eve-asansorlu-nakliyat" || service.slug === "evden-eve-nakliyat") {
    title = `${district.name} Evden Eve Nakliyat | Hızlı ve Güvenli Taşıma`;
  } else if (service.slug === "kiralik-asansor-fiyatlari") {
    title = `${district.name} Kiralık Asansör Fiyatları | En Uygun 2026`;
  } else if (service.slug === "saatlik-asansor-kiralama") {
    title = `${district.name} Saatlik Asansör Kiralama | En Uygun Fiyat`;
  } else if (service.slug === "parca-esya-tasima" || service.slug === "mobilya-tasima-asansoru" || service.slug === "beyaz-esya-tasima-asansoru") {
    title = `${district.name} ${service.name} | Hızlı ve Güvenli Taşıma`;
  } else {
    title = `${district.name} ${service.name} | En Uygun Fiyat & Hızlı Hizmet`;
  }

  // 60 karakter limitini garanti altına al
  if (title.length > 60) {
    title = title.substring(0, 57) + "...";
  }

  // Dinamik açıklama (Max 155 karakter - Değer Teklifi + Ücretsiz Ekspertiz + CTA)
  const topHoods = district.neighborhoods.slice(0, 3).join(", ");
  let description = `${district.name} ${service.name} hizmeti. ${topHoods} geneli en uygun fiyat, hızlı ve güvenli taşıma. 7/24 randevu: 0505 608 07 00.`;
  
  if (service.slug === "kiralik-asansor") {
    description = `${district.name} kiralık asansör. En uygun fiyat, hızlı ve güvenli taşıma, ücretsiz ekspertiz. 15. kata kadar hemen ara: 0505 608 07 00.`;
  } else if (service.slug === "evden-eve-asansorlu-nakliyat" || service.slug === "evden-eve-nakliyat") {
    description = `${district.name} evden eve nakliyat. Asansörlü, garantili, en uygun fiyat ve ücretsiz keşif desteğiyle taşının. İletişim: 0505 608 07 00.`;
  }

  if (description.length > 155) {
    description = description.substring(0, 152) + "...";
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://bursakiralikasansor.com/${fullSlug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://bursakiralikasansor.com/${fullSlug}`,
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
  
  const service = [...SERVICES].sort((a, b) => b.slug.length - a.slug.length).find(s => fullSlug.endsWith(`-${s.slug}`));
  const districtSlugLength = service ? fullSlug.length - service.slug.length - 1 : 0;
  const districtSlug = service ? fullSlug.substring(0, districtSlugLength) : "";
  const district = DISTRICTS.find(d => d.slug === districtSlug);

  if (!district || !service) {
    return <ServicePageClient />;
  }

  const vipDistricts: Record<string, string> = {
    "nilufer": "nilufer-evden-eve-nakliyat",
    "osmangazi": "osmangazi-evden-eve-nakliyat",
    "yildirim": "yildirim-evden-eve-nakliyat",
    "mudanya": "mudanya-evden-eve-nakliyat",
    "gemlik": "gemlik-evden-eve-nakliyat",
    "gursu": "gursu-evden-eve-nakliyat",
  };
  const isNakliyat = service.slug.includes("nakliyat") || service.slug.includes("tasima") || service.slug.includes("ev-tasima");
  const vipTargetUrl = vipDistricts[district.slug]
    ? `https://www.bursavipevdeneve.com/${vipDistricts[district.slug]}`
    : (isNakliyat 
        ? "https://www.bursavipevdeneve.com/hizmetler/asansorlu-evden-eve-nakliyat" 
        : "https://www.bursavipevdeneve.com/hizmetler/bursa-kiralik-asansor");

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
        "relatedLink": [
          vipTargetUrl,
          "https://bursavipevdeneve.com"
        ],
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
        "telephone": "+905056080700",
        "url": "https://bursakiralikasansor.com",
        "sameAs": [
          "https://www.facebook.com/bursakiralikasansor"
        ],
        "department": {
          "@type": "MovingCompany",
          "name": `CNC ${district.name} ${service.name} Şubesi`,
          "areaServed": district.name,
          "url": `https://bursakiralikasansor.com/${fullSlug}`,
          "telephone": "+905056080700"
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
            "telephone": "+905056080700"
          }
        },
        "areaServed": [
          {
            "@type": "City",
            "name": district.name,
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Bursa",
              "addressCountry": "TR"
            }
          },
          ...district.neighborhoods.slice(0, 6).map(n => ({
            "@type": "AdministrativeArea",
            "name": `${district.name} ${n}`,
            "containedInPlace": {
              "@type": "City",
              "name": district.name
            }
          }))
        ],
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
        },
        "isRelatedTo": {
          "@type": "Service",
          "name": "Bursa VIP Evden Eve Nakliyat",
          "url": vipTargetUrl
        }
      },
      // 3. Breadcrumb (Navigasyon) Şeması — Hiyerarşik Silo Otoritesi
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Bursa Kiralık Asansör",
            "item": "https://bursakiralikasansor.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${district.name} Kiralık Asansör`,
            "item": `https://bursakiralikasansor.com/${district.slug}-kiralik-asansor`
          },
          ...(service.slug !== "kiralik-asansor" ? [
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.name,
              "item": `https://bursakiralikasansor.com/${fullSlug}`
            }
          ] : [])
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
      },
      // 5. Kardeş Kuruluş VIP Nakliyat Şeması (Otorite & Karşılıklı Entity Entegrasyonu)
      {
        "@type": "MovingCompany",
        "@id": `${vipTargetUrl}#service`,
        "name": `Bursa VIP Evden Eve Nakliyat (${district.name})`,
        "alternateName": "Bursa VIP Nakliyat",
        "url": vipTargetUrl,
        "telephone": "+905056080700",
        "priceRange": "₺₺₺",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": district.name
        },
        "description": `${district.name} bölgesinde asansörlü, ambalajlı ve marangozlu VIP evden eve nakliyat hizmeti. Bursa Kiralık Asansör CNC resmi kardeş kuruluşu.`,
        "sameAs": [
          "https://bursavipevdeneve.com",
          "https://bursakiralikasansor.com"
        ]
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
