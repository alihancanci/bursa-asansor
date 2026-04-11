/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: false,
  },
  // Vercel build-time optimizations (TypeScript)
  typescript: { ignoreBuildErrors: true },

  async headers() {
    return [
      {
        source: "/yandex_933f824516ff764b.html",
        headers: [
          { key: "Content-Type", value: "text/html; charset=UTF-8" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/((?!yandex_933f824516ff764b.html).*)",
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
