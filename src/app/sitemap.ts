import type { MetadataRoute } from "next";
import { DISTRICTS, SERVICES } from "@/data";
import { BLOG_POSTS } from "@/data/blog";

const BASE_URL = "https://bursakiralikasansor.com";

// Sabit tarihler: Google'ın lastModified sinyalini doğru okuması için
// Her içerik güncellemesinde bu tarihleri manuel güncelleyin
const SITE_LAST_UPDATED = new Date("2025-04-01");
const BLOG_LAST_UPDATED = new Date("2025-04-01");
const SERVICE_PAGES_UPDATED = new Date("2025-03-15");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: SITE_LAST_UPDATED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/evden-eve-nakliye-bursa`, lastModified: SITE_LAST_UPDATED, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: new Date("2025-01-15"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/calismalarimiz`, lastModified: new Date("2025-01-15"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: BLOG_LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
  ];


  // Blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: BLOG_LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service pages (district × service combos)
  const servicePages: MetadataRoute.Sitemap = [];
  for (const district of DISTRICTS) {
    for (const service of SERVICES) {
      servicePages.push({
        url: `${BASE_URL}/${district.slug}-${service.slug}`,
        lastModified: SERVICE_PAGES_UPDATED,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      });
    }
  }

  return [...staticPages, ...blogPages, ...servicePages];
}
