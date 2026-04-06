import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Allow running in Vercel (no PORT/BASE_PATH) as well as Replit (requires both)
const isVercel = process.env.VERCEL === "1";
const isReplit = process.env.REPL_ID !== undefined;

let port = 3000;
let basePath = "/";

if (!isVercel) {
  const rawPort = process.env.PORT;
  if (!rawPort) {
    if (isReplit) {
      throw new Error("PORT environment variable is required but was not provided.");
    }
  } else {
    port = Number(rawPort);
    if (Number.isNaN(port) || port <= 0) {
      throw new Error(`Invalid PORT value: "${rawPort}"`);
    }
  }

  const envBasePath = process.env.BASE_PATH;
  if (!envBasePath) {
    if (isReplit) {
      throw new Error("BASE_PATH environment variable is required but was not provided.");
    }
  } else {
    basePath = envBasePath;
  }
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.NODE_ENV !== "production" && isReplit
      ? [
          await import("@replit/vite-plugin-runtime-error-modal").then((m) =>
            m.default(),
          ),
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    // Minification — esbuild is fastest and produces very compact output
    minify: "esbuild",
    cssMinify: true,
    // No source maps in production (reduces bundle size & hides source)
    sourcemap: false,
    // Inline small assets (<4 KB) as base64 to save round-trips
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Content-hash filenames → safe for "immutable" Cache-Control
        entryFileNames:  "assets/[name]-[hash].js",
        chunkFileNames:  "assets/[name]-[hash].js",
        assetFileNames:  "assets/[name]-[hash][extname]",
        manualChunks: {
          leaflet: ["leaflet"],
          i18n: ["i18next", "react-i18next", "i18next-browser-languagedetector", "i18next-http-backend"],
          vendor: ["react", "react-dom", "framer-motion", "lucide-react", "wouter"],
        },
      },
    },
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
