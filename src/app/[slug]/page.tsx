import { Metadata } from 'next';
import { DISTRICTS, SERVICES } from '@/data';
import { FOCUS_DISTRICTS, FOCUS_DISTRICT_SERVICES, CORE_SERVICES_ALL_DISTRICTS } from '@/app/sitemap';
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
    title = `${district.name} Kiralık Asansör | Mobil Asansör`;
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

  const priorityDistricts = ["nilufer", "yildirim", "mudanya", "osmangazi", "gursu"];
  if (priorityDistricts.includes(district.slug)) {
    const districtServiceMetadata: Record<string, string> = {
      "kiralik-asansor": `${district.name} Kiralık Asansör & Asansör Kiralama`,
      "evden-eve-nakliyat": `${district.name} Evden Eve Nakliyat | Asansörlü Taşıma`,
      "evden-eve-asansorlu-nakliyat": `${district.name} Asansörlü Evden Eve Nakliyat`,
      "saatlik-asansor-kiralama": `${district.name} Saatlik Asansör Kiralama | 7/24`,
      "kiralik-asansor-fiyatlari": `${district.name} Kiralık Asansör Fiyatları (2026)`,
    };
    const metadata = districtServiceMetadata[service.slug];
    if (metadata) {
      title = metadata;
    }
  }

  if (district.slug === "osmangazi" && service.slug === "kiralik-asansor-fiyatlari") {
    title = "Osmangazi Kiralık Asansör Fiyatları | Ücretsiz Keşif";
  }

  if (district.slug === "mudanya") {
    const mudanyaTitles: Record<string, string> = {
      "kiralik-asansor": "Mudanya Kiralık Asansör & Asansör Kiralama (Güzelyalı)",
      "evden-eve-nakliyat": "Mudanya Evden Eve Nakliyat & Asansörlü Ev Taşıma",
      "saatlik-asansor-kiralama": "Mudanya Saatlik Asansör Kiralama | 15. Kata Kadar 7/24",
      "kiralik-asansor-fiyatlari": "Mudanya Kiralık Asansör Fiyatları 2026 | Saatlik & Günlük",
    };
    if (mudanyaTitles[service.slug]) {
      title = mudanyaTitles[service.slug];
    }
  }

  // 60 karakter limitini garanti altına al
  if (title.length > 60) {
    title = title.substring(0, 57) + "...";
  }

  // Dinamik açıklama (Max 155 karakter - Değer Teklifi + Ücretsiz Ekspertiz + CTA)
  const topHoods = district.neighborhoods.slice(0, 3).join(", ");
  let description = `${district.name} ${service.name} hizmeti. ${topHoods} geneli en uygun fiyat, hızlı ve güvenli taşıma. 7/24 randevu: 0505 608 07 00.`;
  
  if (service.slug === "kiralik-asansor") {
    const districtDescriptions: Record<string, string> = {
      "bursa-merkez": "Bursa kiralık asansör ve saatlik mobil asansör kiralama. Heykel, Çekirge, Demirtaş geneli 15. kata kadar güvenli taşıma: 0505 608 07 00.",
      nilufer: "Nilüfer kiralık asansör ve mobil asansör kiralama. Özlüce, Balat, Görükle, Ataevler'de 15. kata kadar 7/24 fiyat alın: 0505 608 07 00.",
      osmangazi: "Osmangazi kiralık asansör ve dış cephe asansör kiralama. Hamitler, Yunuseli, Emek, Çekirge'de ücretsiz keşif ve fiyat: 0505 608 07 00.",
      yildirim: "Yıldırım kiralık asansör ve saatlik mobil asansör kiralama. Millet, Erikli, Mesken, Teleferik'te 15. kata kadar taşıma: 0505 608 07 00.",
      mudanya: "Mudanya kiralık asansör ve saatlik asansör kiralama. Güzelyalı, Burgaz, Bademli, Halitpaşa'da 15. kata kadar operatörlü kurulum: 0505 608 07 00.",
      gursu: "Gürsu kiralık asansör ve mobil asansör kiralama. Kurtuluş, Yenidoğan, Zafer mahallelerinde 15. kata kadar güvenli kurulum: 0505 608 07 00.",
    };
    description = districtDescriptions[district.slug] ?? `${district.name} kiralık asansör ve saatlik mobil asansör kiralama. 15. kata kadar güvenli kurulum ve fiyat için arayın: 0505 608 07 00.`;
  } else if (district.slug === "mudanya") {
    const mudanyaServiceDescriptions: Record<string, string> = {
      "evden-eve-nakliyat": "Mudanya evden eve nakliyat, asansörlü ev taşıma ve nakliye fiyatları. Güzelyalı, Bademli, Burgaz ve Halitpaşa'da sigortalı taşıma: 0505 608 07 00.",
      "evden-eve-asansorlu-nakliyat": "Mudanya asansörlü evden eve nakliyat. Güzelyalı, Burgaz ve Bademli'de 15. kata kadar dış cephe asansörlü güvenli ev taşıma: 0505 608 07 00.",
      "saatlik-asansor-kiralama": "Mudanya saatlik asansör kiralama ve günlük mobil asansör. Güzelyalı, Bademli, Burgaz ve Halitpaşa'da 30 dk'da operatörlü kurulum: 0505 608 07 00.",
      "kiralik-asansor-fiyatlari": "Mudanya kiralık asansör fiyatları ve saatlik kiralama ücretleri. Güzelyalı, Bademli, Burgaz'da 15. kata kadar net fiyat teklifi: 0505 608 07 00.",
    };
    description = mudanyaServiceDescriptions[service.slug] ?? description;
  } else if (priorityDistricts.includes(district.slug) || district.slug === "bursa-merkez") {
    const districtServiceDescriptions: Record<string, string> = {
      "evden-eve-nakliyat": `${district.name} evden eve nakliyat ve asansörlü ev taşıma. ${topHoods} genelinde 15. kata kadar dış cephe asansörlü nakliye teklifi: 0505 608 07 00.`,
      "evden-eve-asansorlu-nakliyat": `${district.name} asansörlü evden eve nakliyat. ${topHoods} mahallelerinde dış cephe asansörüyle güvenli ev taşıma fiyatı: 0505 608 07 00.`,
      "saatlik-asansor-kiralama": `${district.name} saatlik asansör kiralama ve operatörlü dış cephe asansörü. ${topHoods} genelinde 7/24 kurulum ve fiyat: 0505 608 07 00.`,
      "kiralik-asansor-fiyatlari": `${district.name} kiralık asansör fiyatları (2026). Saatlik ve günlük mobil asansör kiralama ücretleri için ücretsiz keşif: 0505 608 07 00.`,
    };
    description = districtServiceDescriptions[service.slug] ?? description;
  } else if (service.slug === "evden-eve-asansorlu-nakliyat" || service.slug === "evden-eve-nakliyat") {
    description = `${district.name} evden eve nakliyat ve asansörlü nakliye. 15. kata kadar dış cephe asansörü ve ücretsiz keşif desteği: 0505 608 07 00.`;
  }

  if (description.length > 155) {
    description = description.substring(0, 152) + "...";
  }

  // Zayıf ve arama hacmi olmayan tali kombinasyonları Google indeksinden çıkarıp (noindex)
  // sitenin tüm otoritesini Bursa ve 5 Ana İlçenin çekirdek sayfalarına odaklıyoruz.
  const isFocusDistrict = FOCUS_DISTRICTS.includes(district.slug);
  const allowedServices = isFocusDistrict ? FOCUS_DISTRICT_SERVICES : CORE_SERVICES_ALL_DISTRICTS;
  const isCannibalizingMudanyaNakliyat = district.slug === "mudanya" && service.slug === "evden-eve-asansorlu-nakliyat";
  const shouldIndex = allowedServices.includes(service.slug) && !isCannibalizingMudanyaNakliyat;

  return {
    title,
    description,
    robots: shouldIndex
      ? { index: true, follow: true, "max-image-preview": "large" }
      : { index: false, follow: true },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Sayfa ve hizmet işaretlemesi (İç otorite bağlantılarıyla)
      {
        "@type": "WebPage",
        "@id": `https://bursakiralikasansor.com/${fullSlug}#webpage`,
        "url": `https://bursakiralikasansor.com/${fullSlug}`,
        "name": `${district.name} ${service.name} | Bursa Kiralık Asansör CNC Evden Eve Nakliyat`,
        "relatedLink": [
          `https://bursakiralikasansor.com/${district.slug === "bursa-merkez" ? "" : `${district.slug}-kiralik-asansor`}`,
          `https://bursakiralikasansor.com/${district.slug}-saatlik-asansor-kiralama`,
          `https://bursakiralikasansor.com/${district.slug}-kiralik-asansor-fiyatlari`,
          `https://bursakiralikasansor.com/${district.slug === "bursa-merkez" ? "bursa-evden-eve-nakliyat" : `${district.slug}-evden-eve-nakliyat`}`
        ]
      },
      // Sayfaya özgü hizmet bilgisi; işletme kimliği ana sayfadaki Organization kaydına bağlanır.
      {
        "@type": "Service",
        "@id": `https://bursakiralikasansor.com/${fullSlug}#service`,
        "name": `${district.name} ${service.name}`,
        "description": `${district.name} kiralık asansör, saatlik asansör kiralama ve asansörlü evden eve nakliyat hizmetleri.`,
        "provider": { "@id": `https://bursakiralikasansor.com/#organization` },
        "areaServed": [
          {
            "@type": district.slug === "bursa-merkez" ? "City" : "AdministrativeArea",
            "name": district.slug === "bursa-merkez" ? "Bursa" : district.name,
            ...(district.wikidataId ? { "sameAs": `https://www.wikidata.org/wiki/${district.wikidataId}` } : {}),
            ...(district.slug !== "bursa-merkez" ? {
              "containedInPlace": { "@type": "City", "name": "Bursa", "addressCountry": "TR" }
            } : {})
          },
          ...district.neighborhoods.map((hood) => ({
            "@type": "Place",
            "name": `${hood}, ${district.name}`,
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": district.name
            }
          }))
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${district.name} Asansör Kiralama ve Nakliyat Çözümleri`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `${district.name} Kiralık Asansör & Mobil Asansör Kiralama`,
                "url": `https://bursakiralikasansor.com/${district.slug}-kiralik-asansor`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `${district.name} Saatlik Asansör Kiralama`,
                "url": `https://bursakiralikasansor.com/${district.slug}-saatlik-asansor-kiralama`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `${district.name} Kiralık Asansör Fiyatları`,
                "url": `https://bursakiralikasansor.com/${district.slug}-kiralik-asansor-fiyatlari`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `${district.name} Evden Eve Nakliyat & Asansörlü Ev Taşıma`,
                "url": `https://bursakiralikasansor.com/${district.slug}-evden-eve-nakliyat`
              }
            }
          ]
        }
      },
      // Breadcrumb navigasyonu
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
