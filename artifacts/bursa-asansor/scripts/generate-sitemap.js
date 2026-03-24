import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// ─── Single Source of Truth ────────────────────────────────────────────────
// We import DISTRICTS and SERVICES directly from the compiled data.
// The script runs via `node --experimental-vm-modules` or we use a simple
// CJS shim. Here we parse the data.ts export list dynamically using a
// lightweight regex-free approach: we build a tiny CJS file on-the-fly.
// Actually, the cleanest path for a Vite ESM project is to extract the slugs
// from data.ts with a small dedicated parser. We read data.ts as text and
// extract the slug fields.

const dataFile = fs.readFileSync(
  path.resolve(__dirname, '../src/data.ts'),
  'utf8'
);

function extractSlugs(arrayName) {
  // Match:  slug: "some-slug"  inside the named const block
  const blockMatch = dataFile.match(
    new RegExp(`export const ${arrayName}[\\s\\S]*?^];`, 'm')
  );
  if (!blockMatch) return [];

  const slugs = [];
  const re = /slug:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(blockMatch[0])) !== null) {
    slugs.push(m[1]);
  }
  return slugs;
}

const DISTRICT_SLUGS = extractSlugs('DISTRICTS');
const SERVICE_SLUGS  = extractSlugs('SERVICES');

// Blog slugs stay hardcoded — they live in a separate data/blog.ts file
// and change rarely.  Update here whenever you add a new post.
const BLOG_SLUGS = [
  "asansorlu-tasimacilik-nasil-yapilir-kilavuz",
  "asansor-kiralama-fiyatlari-2026",
  "mobil-asansor-kacinci-kata-kadar-cikar",
  "tasinirken-esyalar-nasil-paketlenir",
  "mobil-asansor-vs-sepetli-vinc",
  "yuksek-katli-binalarda-tasinma-kurallari",
  "insaat-malzemesi-tasima-cozumleri",
  "bursa-ici-en-ucuz-asansor-kiralama",
];

const STANDARD_PAGES      = ['/', '/blog'];
const BASE_URL            = 'https://bursakiralikasansor.com';
const SUPPORTED_LANGUAGES = ['tr', 'en', 'ar', 'ru'];

// ─── Build URL list ────────────────────────────────────────────────────────
const urls = [];

STANDARD_PAGES.forEach(p => urls.push(p));
BLOG_SLUGS.forEach(s => urls.push(`/blog/${s}`));

// Verify we got the slugs correctly
if (DISTRICT_SLUGS.length === 0 || SERVICE_SLUGS.length === 0) {
  console.error('❌ Could not parse slugs from data.ts — aborting.');
  process.exit(1);
}

DISTRICT_SLUGS.forEach(district => {
  SERVICE_SLUGS.forEach(service => {
    urls.push(`/${district}-${service}`);
  });
});

// ─── Sitemap helpers ───────────────────────────────────────────────────────
function getLangLink(urlPath, lang) {
  const prefix = lang === 'tr' ? '' : `/${lang}`;
  let final = `${prefix}${urlPath}`;
  if (final === '') final = '/';
  return `${BASE_URL}${final}`;
}

// ─── Build XML ────────────────────────────────────────────────────────────
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

urls.forEach(urlPath => {
  SUPPORTED_LANGUAGES.forEach(lang => {
    const loc = getLangLink(urlPath, lang);
    xml += `  <url>\n    <loc>${loc}</loc>\n`;
    SUPPORTED_LANGUAGES.forEach(tl => {
      xml += `    <xhtml:link rel="alternate" hreflang="${tl}" href="${getLangLink(urlPath, tl)}" />\n`;
    });
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${getLangLink(urlPath, 'tr')}" />\n`;
    xml += `  </url>\n`;
  });
});

xml += `</urlset>\n`;

// ─── Write ─────────────────────────────────────────────────────────────────
const outDir = path.resolve(__dirname, '../public');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');

console.log(`✅ Sitemap generated:
  → ${DISTRICT_SLUGS.length} districts × ${SERVICE_SLUGS.length} services = ${DISTRICT_SLUGS.length * SERVICE_SLUGS.length} service pages
  → ${BLOG_SLUGS.length} blog posts
  → ${STANDARD_PAGES.length} standard pages
  → ${urls.length} canonical URLs × ${SUPPORTED_LANGUAGES.length} languages = ${urls.length * SUPPORTED_LANGUAGES.length} localized <url> entries`);
