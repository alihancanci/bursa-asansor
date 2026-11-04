import type { MetadataRoute } from "next";
import { DISTRICTS, SERVICES } from "@/data";
import { BLOG_POSTS } from "@/data/blog";

const BASE_URL = "https://bursakiralikasansor.com";

// Sabit tarihler: Google'ın lastModified sinyalini doğru okuması için
const SITE_LAST_UPDATED = new Date("2026-11-05");
const BLOG_LAST_UPDATED = new Date("2026-11-05");
const SERVICE_PAGES_UPDATED = new Date("2026-11-05");

// 5 Ana Hedef İlçe + Bursa Merkez
export const FOCUS_DISTRICTS = [
  "bursa-merkez",
  "nilufer",
  "osmangazi",
  "yildirim",
  "mudanya",
  "gursu",
];

// Ana Hedef İlçelerde İndekslenecek Ticari Hizmetler
export const FOCUS_DISTRICT_SERVICES = [
  "kiralik-asansor",
  "saatlik-asansor-kiralama",
  "kiralik-asansor-fiyatlari",
  "evden-eve-nakliyat",
  "evden-eve-asansorlu-nakliyat",
  "dis-cephe-esya-asansoru",
  "asansorlu-ev-tasima",
  "mobilya-tasima-asansoru",
];

// Diğer İlçelerde Sadece Gerçekten Aranan 4 Çekirdek Hizmet İndekslenir
export const CORE_SERVICES_ALL_DISTRICTS = [
  "kiralik-asansor",
  "saatlik-asansor-kiralama",
  "kiralik-asansor-fiyatlari",
  "evden-eve-nakliyat",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: SITE_LAST_UPDATED, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/bursa-evden-eve-nakliyat`, lastModified: SITE_LAST_UPDATED, changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE_URL}/hizmet-bolgelerimiz`, lastModified: SITE_LAST_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: new Date("2026-09-26"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/calismalarimiz`, lastModified: new Date("2026-09-26"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: BLOG_LAST_UPDATED, changeFrequency: "weekly", priority: 0.85 },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    const isMajorDistrictBlog = [
      "nilufer-kiralik-asansor-yuksek-kat-nakliyat",
      "osmangazi-kiralik-asansor-dar-sokak-tasima",
      "yildirim-kiralik-asansor-egimli-arazi-nakliyat",
      "mudanya-kiralik-asansor-guzelyali-nakliyat",
      "tasinirken-asansor-zorunlu-mu",
      "asansorlu-evden-eve-nakliyat"
    ].includes(post.slug);

    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: BLOG_LAST_UPDATED,
      changeFrequency: "weekly" as const,
      priority: isMajorDistrictBlog ? 0.88 : 0.75,
    };
  });

  // 5 Ana İlçe + Bursa Merkez En Yüksek Otorite Sayfaları
  const PRIMARY_AUTHORITY_SLUGS = [
    "bursa-merkez-kiralik-asansor",
    "nilufer-kiralik-asansor",
    "osmangazi-kiralik-asansor",
    "yildirim-kiralik-asansor",
    "mudanya-kiralik-asansor",
    "gursu-kiralik-asansor",
  ];

  const SECONDARY_PRIORITY_SLUGS = [
    "bursa-merkez-kiralik-asansor-fiyatlari",
    "nilufer-kiralik-asansor-fiyatlari",
    "osmangazi-kiralik-asansor-fiyatlari",
    "yildirim-kiralik-asansor-fiyatlari",
    "mudanya-kiralik-asansor-fiyatlari",
    "gursu-kiralik-asansor-fiyatlari",
    "nilufer-saatlik-asansor-kiralama",
    "osmangazi-saatlik-asansor-kiralama",
    "yildirim-saatlik-asansor-kiralama",
    "mudanya-saatlik-asansor-kiralama",
    "gursu-saatlik-asansor-kiralama",
    "inegol-saatlik-asansor-kiralama",
    "nilufer-evden-eve-nakliyat",
    "osmangazi-evden-eve-nakliyat",
    "yildirim-evden-eve-nakliyat",
    "mudanya-evden-eve-nakliyat",
    "gursu-evden-eve-nakliyat",
    "yenisehir-evden-eve-nakliyat",
  ];

  // Sadece gerçek arama değeri olan kombinasyonları sitemap'e dahil et
  const servicePages: MetadataRoute.Sitemap = [];
  for (const district of DISTRICTS) {
    const isFocusDistrict = FOCUS_DISTRICTS.includes(district.slug);
    const allowedServices = isFocusDistrict ? FOCUS_DISTRICT_SERVICES : CORE_SERVICES_ALL_DISTRICTS;

    for (const service of SERVICES) {
      if (!allowedServices.includes(service.slug)) {
        continue; // Zayıf / aranmayan kombinasyonları sitemap'e koyma
      }

      const pageSlug = `${district.slug}-${service.slug}`;

      // bursa-merkez nakliyat sayfaları /bursa-evden-eve-nakliyat a 301 yönlendirildiği için sitemap e ekleme
      if (
        [
          "bursa-merkez-evden-eve-nakliyat",
          "bursa-merkez-evden-eve-asansorlu-nakliyat",
          "bursa-merkez-asansorlu-ev-tasima",
        ].includes(pageSlug)
      ) {
        continue;
      }

      let pagePriority = isFocusDistrict ? 0.8 : 0.65;

      if (PRIMARY_AUTHORITY_SLUGS.includes(pageSlug)) {
        pagePriority = 0.98;
      } else if (SECONDARY_PRIORITY_SLUGS.includes(pageSlug)) {
        pagePriority = 0.90;
      }

      servicePages.push({
        url: `${BASE_URL}/${pageSlug}`,
        lastModified: SERVICE_PAGES_UPDATED,
        changeFrequency: PRIMARY_AUTHORITY_SLUGS.includes(pageSlug) ? "daily" as const : "weekly" as const,
        priority: pagePriority,
      });
    }
  }

  return [...staticPages, ...blogPages, ...servicePages];
}
