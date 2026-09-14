import type { MetadataRoute } from "next";
import { DISTRICTS, SERVICES } from "@/data";
import { BLOG_POSTS } from "@/data/blog";

const BASE_URL = "https://bursakiralikasansor.com";

// Sabit tarihler: Google'ın lastModified sinyalini doğru okuması için
// Her içerik güncellemesinde bu tarihleri manuel güncelleyin
const SITE_LAST_UPDATED = new Date();
const BLOG_LAST_UPDATED = new Date();
const SERVICE_PAGES_UPDATED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: SITE_LAST_UPDATED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/evden-eve-nakliye-bursa`, lastModified: SITE_LAST_UPDATED, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/hizmet-bolgelerimiz`, lastModified: SITE_LAST_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: new Date("2025-01-15"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/calismalarimiz`, lastModified: new Date("2025-01-15"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: BLOG_LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
  ];


  // Blog posts (Stratejik 4 ilçe rehberine daha yüksek ağırlık)
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    const isMajorDistrictBlog = [
      "nilufer-kiralik-asansor-yuksek-kat-nakliyat",
      "osmangazi-kiralik-asansor-dar-sokak-tasima",
      "yildirim-kiralik-asansor-egimli-arazi-nakliyat",
      "mudanya-kiralik-asansor-guzelyali-nakliyat"
    ].includes(post.slug);

    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: BLOG_LAST_UPDATED,
      changeFrequency: "weekly" as const,
      priority: isMajorDistrictBlog ? 0.85 : 0.7,
    };
  });

  // 4 Büyük Otorite İlçe & Hizmet Sayfaları
  const PRIMARY_AUTHORITY_SLUGS = [
    "nilufer-kiralik-mobil-asansor",
    "osmangazi-kiralik-mobil-asansor",
    "yildirim-kiralik-mobil-asansor",
    "mudanya-kiralik-mobil-asansor",
  ];

  const SECONDARY_PRIORITY_SLUGS = [
    "nilufer-evden-eve-nakliyat",
    "osmangazi-evden-eve-nakliyat",
    "yildirim-evden-eve-nakliyat",
    "mudanya-evden-eve-nakliyat",
    "bursa-merkez-kiralik-mobil-asansor",
    "bursa-merkez-evden-eve-asansorlu-nakliyat"
  ];

  // Service pages (district × service combos) — Hiyerarşik Ağırlık Dağıtımı
  const servicePages: MetadataRoute.Sitemap = [];
  for (const district of DISTRICTS) {
    for (const service of SERVICES) {
      const pageSlug = `${district.slug}-${service.slug}`;
      let pagePriority = 0.5; // Varsayılan tali sayfalar (Google gücünü dağıtmaz)

      if (PRIMARY_AUTHORITY_SLUGS.includes(pageSlug)) {
        pagePriority = 0.98; // 4 Büyük İlçe Ana Otorite Sayfası
      } else if (SECONDARY_PRIORITY_SLUGS.includes(pageSlug)) {
        pagePriority = 0.85; // Önemli 2. seviye nakliyat sayfaları
      } else if (district.isPriority && service.slug === "kiralik-mobil-asansor") {
        pagePriority = 0.75; // Diğer öncelikli ilçelerin ana asansör sayfaları
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
