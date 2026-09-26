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
      "evden-eve-nakliyat": `${district.name} Evden Eve Nakliyat | Teklif Al`,
      "evden-eve-asansorlu-nakliyat": `${district.name} Asansörlü Nakliyat | Bilgi Al`,
      "saatlik-asansor-kiralama": `${district.name} Saatlik Asansör Kiralama`,
      "kiralik-asansor-fiyatlari": `${district.name} Kiralık Asansör Fiyatları`,
    };
    const metadata = districtServiceMetadata[service.slug];
    if (metadata) {
      title = metadata;
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
      nilufer: "Nilüfer'de mobil asansör kiralama: cephe ve kurulum uygunluğunu öğrenin. Kat, eşya ve adres bilgisiyle fiyat sorun: 0505 608 07 00.",
      osmangazi: "Osmangazi'de kiralık dış cephe asansörü için adres ve kurulum alanını değerlendirelim. Kat ve eşya bilgisiyle fiyat alın: 0505 608 07 00.",
      yildirim: "Yıldırım'da mobil asansör uygunluğu sokak ve cephe erişimine göre belirlenir. Konum, kat ve yük bilgisiyle fiyat sorun: 0505 608 07 00.",
      mudanya: "Mudanya'da kiralık asansör için adres, cephe ve sokak koşullarını paylaşın. Kurulum uygunluğu ve fiyat için arayın: 0505 608 07 00.",
      gursu: "Gürsu'da mobil asansör kiralama için kat, yük türü ve adres bilgisiyle uygunluk ve fiyat alın: 0505 608 07 00.",
    };
    description = districtDescriptions[district.slug] ?? `${district.name} kiralık mobil asansör. Adres, kat ve eşya bilgisiyle kurulum uygunluğu ve fiyat için arayın: 0505 608 07 00.`;
  } else if (priorityDistricts.includes(district.slug)) {
    const districtServiceDescriptions: Record<string, string> = {
      "evden-eve-nakliyat": `${district.name} ev taşıma fiyatı için eşya, kat, mesafe ve tarih bilgilerinizi paylaşın. Nakliye ve asansör ihtiyacınızı birlikte planlayalım. 0505 608 07 00.`,
      "evden-eve-asansorlu-nakliyat": `${district.name} asansörlü nakliyat için cephe ve kurulum alanını değerlendirelim. Kat, yük ve adres bilgisiyle uygunluk ve fiyat sorun: 0505 608 07 00.`,
      "saatlik-asansor-kiralama": `${district.name} saatlik asansör kiralama için yük, kat, konum ve tahmini süreyi iletin. Kurulum uygunluğu ve fiyat için arayın: 0505 608 07 00.`,
      "kiralik-asansor-fiyatlari": `${district.name} kiralık asansör fiyatı; konum, kat, yük ve kullanım süresine göre değerlendirilir. Bilgileri iletip teklif alın: 0505 608 07 00.`,
    };
    description = districtServiceDescriptions[service.slug] ?? description;
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
      // Sayfa ve hizmet işaretlemesi
      {
        "@type": "WebPage",
        "@id": `https://bursakiralikasansor.com/${fullSlug}#webpage`,
        "url": `https://bursakiralikasansor.com/${fullSlug}`,
        "name": `${district.name} ${service.name} | Bursa Kiralık Asansör CNC Evden Eve Nakliyat`,
        "relatedLink": [
          vipTargetUrl,
          "https://bursavipevdeneve.com"
        ]
      },
      // Sayfaya özgü hizmet bilgisi; işletme kimliği ana sayfadaki Organization kaydına bağlanır.
      {
        "@type": "Service",
        "name": `${district.name} ${service.name}`,
        "description": description,
        "provider": { "@id": `https://bursakiralikasansor.com/#organization` },
        "serviceArea": {
          "@type": district.slug === "bursa-merkez" ? "City" : "AdministrativeArea",
          "name": district.slug === "bursa-merkez" ? "Bursa" : district.name,
          ...(district.slug !== "bursa-merkez" ? {
            "containedInPlace": { "@type": "City", "name": "Bursa", "addressCountry": "TR" }
          } : {})
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
