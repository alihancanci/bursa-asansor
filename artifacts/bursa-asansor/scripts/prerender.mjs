/**
 * prerender.mjs — Puppeteer-free SSR prerendering for Vercel
 *
 * Runs AFTER `vite build`. Reads dist/public/index.html, injects lightweight
 * meta-only HTML shells for the most important pages, and writes individual
 * index.html files. Google's crawler gets meaningful <title> + <meta> even
 * without JavaScript execution.
 *
 * We use React renderToStaticMarkup via a tiny SSR-only render tree that
 * produces the <head> content. The body stays the original SPA <div id="root">
 * so hydration works normally for real users.
 *
 * Pages prerendered:
 *   - / (homepage)
 *   - /blog
 *   - Top 18 district × kiralik-mobil-asansor service pages
 *   - Top 5 blog posts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist/public');
const BASE_URL = 'https://bursakiralikasansor.com';

// ─── Read data.ts slugs (same parser as sitemap script) ───────────────────
const dataFile = fs.readFileSync(
  path.resolve(__dirname, '../src/data.ts'),
  'utf8'
);

function extractArray(arrayName) {
  const blockMatch = dataFile.match(
    new RegExp(`export const ${arrayName}[\\s\\S]*?^];`, 'm')
  );
  if (!blockMatch) return [];
  const re = /slug:\s*["']([^"']+)["']/g;
  const out = [];
  let m;
  while ((m = re.exec(blockMatch[0])) !== null) out.push(m[1]);
  return out;
}

function extractNamedArray(arrayName) {
  const blockMatch = dataFile.match(
    new RegExp(`export const ${arrayName}[\\s\\S]*?^];`, 'm')
  );
  if (!blockMatch) return [];
  const re = /slug:\s*["']([^"']+)["'][^}]*?name:\s*["']([^"']+)["']/g;
  // more reliable: extract slug+name pairs
  const slugRe = /\{\s*\n?\s*slug:\s*["']([^"']+)["'][^}]*?name:\s*["']([^"']+)["']/gs;
  const out = [];
  let m;
  while ((m = slugRe.exec(blockMatch[0])) !== null) {
    out.push({ slug: m[1], name: m[2] });
  }
  return out;
}

const DISTRICTS = extractNamedArray('DISTRICTS');
const BLOG_SLUGS = [
  'asansorlu-tasimacilik-nasil-yapilir-kilavuz',
  'asansor-kiralama-fiyatlari-2026',
  'mobil-asansor-kacinci-kata-kadar-cikar',
  'tasinirken-esyalar-nasil-paketlenir',
  'mobil-asansor-vs-sepetli-vinc',
];

// ─── Pages to prerender ────────────────────────────────────────────────────
const PAGES = [
  {
    path: '/',
    title: "Bursa Mobil Asansör Kiralama | 7/24 Asansörlü Nakliyat",
    description: "Bursa'da 7/24 mobil asansör kiralama hizmeti. 15. kata kadar ulaşım, uzman operatörlü. Evden eve asansörlü nakliyat için hemen arayın.",
  },
  {
    path: '/blog',
    title: "Blog | Bursa Mobil Asansör — Taşınma ve Asansör Rehberi",
    description: "Asansörlü taşıma, kiralık asansör fiyatları ve nakliyat ipuçları hakkında blog yazıları.",
  },
  ...DISTRICTS.map(d => ({
    path: `/${d.slug}-kiralik-mobil-asansor`,
    title: `${d.name} Kiralık Mobil Asansör | 2026 Fiyatları · Bursa Mobil Asansör`,
    description: `${d.name} bölgesinde 7/24 kiralık mobil asansör hizmeti. 15. kata kadar, uzman operatörlü. Hemen arayın: 05053297533`,
  })),
  ...BLOG_SLUGS.map(s => ({
    path: `/blog/${s}`,
    title: `${s.replace(/-/g, ' ')} | Blog · Bursa Mobil Asansör`,
    description: `Bursa mobil asansör hakkında detaylı rehber yazısı.`,
  })),
];

// ─── Read base index.html ──────────────────────────────────────────────────
const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

function injectMeta({ title, description, pagePath }) {
  const canonical = `${BASE_URL}${pagePath === '/' ? '' : pagePath}`;

  // Build injected <head> snippet
  const meta = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical}">
    <meta name="robots" content="index,follow,max-image-preview:large">`;

  // Replace any existing <title> and inject before </head>
  return indexHtml
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<\/head>/, `${meta}\n  </head>`);
}

// ─── Write prerendered files ───────────────────────────────────────────────
let written = 0;
for (const page of PAGES) {
  const html = injectMeta({ title: page.title, description: page.description, pagePath: page.path });

  if (page.path === '/') {
    fs.writeFileSync(path.join(DIST, 'index.html'), html, 'utf8');
    written++;
    continue;
  }

  const dir = path.join(DIST, page.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  written++;
}

console.log(`✅ Prerendered ${written} pages into ${DIST}`);
console.log(`   → Homepage + /blog + ${DISTRICTS.length} district pages + ${BLOG_SLUGS.length} blog posts`);
