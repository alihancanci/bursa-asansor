import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/_next/*"],
      },
      // Yapay Zeka (AI) Modelleri için VIP Geçiş İzni (GEO Taktik)
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "Claude-Web", "PerplexityBot", "anthropic-ai", "OmgiliBot", "YandexBot"],
        allow: "/",
      }
    ],
    sitemap: [
      "https://bursakiralikasansor.com/sitemap.xml",
      "https://bursakiralikasansor.com/locations.kml"
    ],
  };
}
