/** @type {import('next').NextConfig} */
import { readFileSync } from "node:fs";

const legacyLocaleRedirectPaths = JSON.parse(
  readFileSync(new URL("./legacy-locale-redirect-paths.json", import.meta.url), "utf8"),
);

const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: false,
  },
  // Vercel build-time optimizations (TypeScript)
  typescript: { ignoreBuildErrors: true },

  async redirects() {
    const districts = [
      "bursa-merkez", "osmangazi", "nilufer", "yildirim", "inegol",
      "gemlik", "gursu", "mudanya", "orhangazi", "karacabey",
      "iznik", "mustafakemalpasa", "yenisehir", "kestel", "orhaneli",
      "keles", "harmancik", "buyukorhan"
    ];
    return [
      // Remove obsolete language prefixes only when the Turkish destination
      // is a known current route. Unknown legacy URLs keep their 404 response.
      ...legacyLocaleRedirectPaths.map((path) => ({
        source: `/:locale(en|ru|ar)/${path}`,
        destination: `/${path}`,
        permanent: true,
      })),
      {
        source: "/:locale(en|ru|ar)/:district(bursa-merkez|osmangazi|nilufer|yildirim|inegol|gemlik|gursu|mudanya|orhangazi|karacabey|iznik|mustafakemalpasa|yenisehir|kestel|orhaneli|keles|harmancik|buyukorhan)-kiralik-mobil-asansor",
        destination: "/:district-kiralik-asansor",
        permanent: true,
      },
      {
        source: "/ru/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/evden-eve-nakliye-bursa",
        destination: "/bursa-evden-eve-nakliyat",
        permanent: true,
      },
      ...districts.map((d) => ({
        source: `/${d}-kiralik-mobil-asansor`,
        destination: `/${d}-kiralik-asansor`,
        permanent: true,
      })),
      {
        source: '/:district-kiralik-mobil-asansor',
        destination: '/:district-kiralik-asansor',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/evden-eve-nakliye-bursa",
        headers: [
          { key: "Content-Type", value: "text/html; charset=UTF-8" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/((?!yandex_8b02f2ef69ce4c35.html).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/locations.kml",
        headers: [
          { key: "Content-Type", value: "application/vnd.google-earth.kml+xml" },
        ],
      },
    ];
  },
};

export default nextConfig;
