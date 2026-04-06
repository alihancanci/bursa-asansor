import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/*",    // API sayfalarını taramalarına gerek yok
        "/_next/*",  // Build dosyalarını taramalarına gerek yok
      ],
    },
    sitemap: "https://bursakiralikasansor.com/sitemap.xml",
  };
}
