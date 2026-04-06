import type { MetadataRoute } from "next";
import { DISTRICTS, SERVICES } from "@/data";
import { BLOG_POSTS } from "@/data/blog";

const BASE_URL = "https://bursakiralikasansor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/calismalarimiz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service pages (district × service combos)
  const servicePages: MetadataRoute.Sitemap = [];
  for (const district of DISTRICTS) {
    for (const service of SERVICES) {
      servicePages.push({
        url: `${BASE_URL}/${district.slug}-${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }
  }

  return [...staticPages, ...blogPages, ...servicePages];
}
