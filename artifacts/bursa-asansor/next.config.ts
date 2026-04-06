import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: false,
  },
  // Vercel 1GB RAM (OOM) Hatasını Önlemek İçin Bellek Optimizasyonları
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-ignore - eslint is a valid Next.js config property
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Vercel'in Docker limitlerine takılmaması için işçi sayısını kısıyoruz
    cpus: 1,
    workerThreads: false,
    memoryBasedWorkersCount: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
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
    ];
  },
};

export default nextConfig;
