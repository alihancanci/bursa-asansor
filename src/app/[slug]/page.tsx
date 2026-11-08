import { Metadata } from 'next';
import { DISTRICTS, SERVICES } from '@/data';
import { FOCUS_DISTRICTS, FOCUS_DISTRICT_SERVICES, BURSA_MERKEZ_B2B_SERVICES } from '@/app/sitemap';
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

  const priorityDistricts = ["nilufer", "yildirim", "mudanya", "osmangazi", "gursu", "gemlik"];
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

  if (district.slug === "bursa-merkez") {
    const merkezB2BTitles: Record<string, string> = {
      "insaat-malzemesi-tasima-asansoru": "Bursa İnşaat Malzemesi Taşıma Asansörü Kiralama",
      "moloz-indirme-asansoru": "Bursa Moloz İndirme Asansörü Kiralama (Saatlik/Günlük)",
      "cam-ve-pencere-tasima-asansoru": "Bursa Cam Balkon & Pencere Taşıma Asansörü Kiralama",
      "beyaz-esya-tasima-asansoru": "Bursa Beyaz Eşya & Mobilya Taşıma Asansörü Kiralama",
      "ofis-tasimaciligi": "Bursa Ofis ve Büro Taşımacılığı | Asansörlü Nakliyat",
      "parca-esya-tasima": "Bursa Parça Eşya Taşıma & Az Eşya Nakliye (Asansörlü)",
    };
    if (merkezB2BTitles[service.slug]) {
      title = merkezB2BTitles[service.slug];
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

  if (district.slug === "gemlik") {
    const gemlikTitles: Record<string, string> = {
      "kiralik-asansor": "Gemlik Kiralık Asansör & Asansör Kiralama (Kumla & Merkez)",
      "evden-eve-nakliyat": "Gemlik Evden Eve Nakliyat & Asansörlü Ev Taşıma",
      "saatlik-asansor-kiralama": "Gemlik Saatlik Asansör Kiralama | 15. Kata Kadar 7/24",
      "kiralik-asansor-fiyatlari": "Gemlik Kiralık Asansör Fiyatları 2026 | Saatlik & Günlük",
    };
    if (gemlikTitles[service.slug]) {
      title = gemlikTitles[service.slug];
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
      inegol: "İnegöl kiralık asansör ve saatlik asansör kiralama. Mobilya OSB, Ertuğrulgazi, Alanyurt ve Kemalpaşa'da 15. kata kadar kurulum: 0505 608 07 00.",
      gemlik: "Gemlik kiralık asansör ve saatlik asansör kiralama. Kumla, Kurşunlu, Hisar ve Eşref Dinçer'de 15. kata kadar operatörlü taşıma: 0505 608 07 00.",
      yenisehir: "Yenişehir kiralık asansör ve saatlik asansör kiralama. Yenigün, Kurtuluş, Çayır mahallelerinde 15. kata kadar güvenli kurulum: 0505 608 07 00.",
      orhangazi: "Orhangazi kiralık asansör ve saatlik asansör kiralama. Arapzade, Muradiye, Hürriyet mahallelerinde 15. kata kadar kurulum: 0505 608 07 00.",
    };
    description = districtDescriptions[district.slug] ?? `${district.name} kiralık asansör ve saatlik mobil asansör kiralama. 15. kata kadar güvenli kurulum ve fiyat için arayın: 0505 608 07 00.`;
  } else if (district.slug === "bursa-merkez" && BURSA_MERKEZ_B2B_SERVICES.includes(service.slug)) {
    const merkezB2BDescriptions: Record<string, string> = {
      "insaat-malzemesi-tasima-asansoru": "Bursa inşaat malzemesi taşıma asansörü kiralama. Şantiye, parke, seramik, alçıpan, fayans ve çatı malzemeleri için 15. kata kadar saatlik/günlük asansör.",
      "moloz-indirme-asansoru": "Bursa moloz indirme asansörü kiralama. Daire tadilatı ve kentsel dönüşümde 15. kata kadar çuvallı moloz ve yıkım malzemesi indirme: 0505 608 07 00.",
      "cam-ve-pencere-tasima-asansoru": "Bursa cam balkon ve pencere taşıma asansörü kiralama. PVC doğrama, kış bahçesi ve büyük cephe camlarını 15. kata sarsıntısız çıkarma: 0505 608 07 00.",
      "beyaz-esya-tasima-asansoru": "Bursa beyaz eşya ve mobilya taşıma asansörü. Merdivenden dönmeyen buzdolabı, çamaşır makinesi ve L koltuklar için saatlik ev taşıma vinci: 0505 608 07 00.",
      "ofis-tasimaciligi": "Bursa ofis ve büro taşımacılığı. Plaza, iş merkezi ve kurumsal firmalar için 15. kata kadar dış cephe asansörlü, sigortalı ofis nakliyesi: 0505 608 07 00.",
      "parca-esya-tasima": "Bursa parça eşya taşıma ve az eşya nakliye. Öğrenci evi, yazlık eşyası, tek koltuk veya beyaz eşya için ekonomik asansörlü nakliyat: 0505 608 07 00.",
    };
    description = merkezB2BDescriptions[service.slug] ?? description;
  } else if (district.slug === "mudanya") {
    const mudanyaServiceDescriptions: Record<string, string> = {
      "evden-eve-nakliyat": "Mudanya evden eve nakliyat, asansörlü ev taşıma ve nakliye fiyatları. Güzelyalı, Bademli, Burgaz ve Halitpaşa'da sigortalı taşıma: 0505 608 07 00.",
      "evden-eve-asansorlu-nakliyat": "Mudanya asansörlü evden eve nakliyat. Güzelyalı, Burgaz ve Bademli'de 15. kata kadar dış cephe asansörlü güvenli ev taşıma: 0505 608 07 00.",
      "saatlik-asansor-kiralama": "Mudanya saatlik asansör kiralama ve günlük mobil asansör. Güzelyalı, Bademli, Burgaz ve Halitpaşa'da 30 dk'da operatörlü kurulum: 0505 608 07 00.",
      "kiralik-asansor-fiyatlari": "Mudanya kiralık asansör fiyatları ve saatlik kiralama ücretleri. Güzelyalı, Bademli, Burgaz'da 15. kata kadar net fiyat teklifi: 0505 608 07 00.",
    };
    description = mudanyaServiceDescriptions[service.slug] ?? description;
  } else if (district.slug === "gemlik") {
    const gemlikServiceDescriptions: Record<string, string> = {
      "evden-eve-nakliyat": "Gemlik evden eve nakliyat ve asansörlü ev taşıma. Kumla, Kurşunlu, Umurbey, Hisar ve Eşref Dinçer'de sigortalı nakliye fiyatı: 0505 608 07 00.",
      "saatlik-asansor-kiralama": "Gemlik saatlik asansör kiralama ve operatörlü dış cephe asansörü. Kumla, Hisar, Cumhuriyet ve Kurşunlu'da 15. kata kadar kurulum: 0505 608 07 00.",
      "kiralik-asansor-fiyatlari": "Gemlik kiralık asansör fiyatları 2026. Gemlik merkez, Kumla ve Kurşunlu'da saatlik/günlük mobil asansör kiralama ücretleri: 0505 608 07 00.",
    };
    description = gemlikServiceDescriptions[service.slug] ?? description;
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

  // Uzak ilçeleri (İnegöl, Orhangazi, Kestel, Karacabey, Yenişehir vb.) ve zayıf kombinasyonları noindex yaparak
  // sitenin tüm otoritesini Bursa Merkez ve 6 Ana Hedef İlçenin (Mudanya, Nilüfer, Osmangazi, Yıldırım, Gürsu, Gemlik) sayfalarına odaklıyoruz.
  const isFocusDistrict = FOCUS_DISTRICTS.includes(district.slug);
  const allowedServices = district.slug === "bursa-merkez"
    ? [...FOCUS_DISTRICT_SERVICES, ...BURSA_MERKEZ_B2B_SERVICES]
    : isFocusDistrict
    ? FOCUS_DISTRICT_SERVICES
    : [];
  const isCannibalizingNakliyat = ["mudanya", "inegol", "gemlik"].includes(district.slug) && service.slug === "evden-eve-asansorlu-nakliyat";
  const shouldIndex = allowedServices.includes(service.slug) && !isCannibalizingNakliyat;

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
