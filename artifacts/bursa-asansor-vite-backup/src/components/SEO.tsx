import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { getCanonicalUrl } from "@/lib/seo";

interface SEOProps {
  title: string;
  description: string;
  path: string; // The canonical path WITHOUT the language prefix (e.g., "/nilufer-kiralik-asansor")
  ogImage?: string;
  type?: "website" | "article";
  schema?: any[];
  robots?: string; // Override robots directive - e.g. "noindex,follow" for 404 pages
}

const SUPPORTED_LANGS = ["tr", "en", "ar", "ru"];

export function SEO({
  title,
  description,
  path,
  ogImage = "/opengraph.jpg",
  type = "website",
  schema = [],
  robots = "index,follow,max-image-preview:large",
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "tr";

  // Remove leading slash for canonical processing to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Base Canonical Generation
  const langPrefix = currentLang === 'tr' ? '' : `/${currentLang}`;
  const currentCanonicalUrl = getCanonicalUrl(`${langPrefix}/${cleanPath}`);
  const absoluteOgImage = getCanonicalUrl(ogImage);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={currentCanonicalUrl} />

      {/* hreflang tags for International SEO */}
      <link rel="alternate" hrefLang="tr" href={getCanonicalUrl(`/${cleanPath}`)} />
      <link rel="alternate" hrefLang="en" href={getCanonicalUrl(`/en/${cleanPath}`)} />
      <link rel="alternate" hrefLang="ar" href={getCanonicalUrl(`/ar/${cleanPath}`)} />
      <link rel="alternate" hrefLang="ru" href={getCanonicalUrl(`/ru/${cleanPath}`)} />
      <link rel="alternate" hrefLang="x-default" href={getCanonicalUrl(`/${cleanPath}`)} />

      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={currentLang} />
      <meta property="og:site_name" content="Bursa Mobil Asansör" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentCanonicalUrl} />
      <meta property="og:image" content={absoluteOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Schemas */}
      {schema.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
