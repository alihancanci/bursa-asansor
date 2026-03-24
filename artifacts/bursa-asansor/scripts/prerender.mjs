/**
 * prerender.mjs — Puppeteer-free SSR prerendering for Vercel
 *
 * Runs AFTER `vite build`. For each priority page + each language variant,
 * writes a dedicated index.html with clean, injected <head> tags so Google
 * gets meaningful HTML without JS execution.
 *
 * v2 changes:
 *   - Strips ALL existing <title>, <meta name="description">, <meta name="robots">,
 *     and <meta property="og:*"> tags from index.html BEFORE injecting fresh ones
 *     → eliminates duplicate meta tag warnings
 *   - Covers all 4 language variants (tr / en / ar / ru)
 *     → /en, /ar, /ru paths get their own prerendered index.html
 *   - All 18 district × kiralik-mobil-asansor pages for each language
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST      = path.resolve(__dirname, '../dist/public');
const BASE_URL  = 'https://bursakiralikasansor.com';

const LANGS = [
  { code: 'tr', prefix: '',    label: 'tr' },
  { code: 'en', prefix: '/en', label: 'en' },
  { code: 'ar', prefix: '/ar', label: 'ar' },
  { code: 'ru', prefix: '/ru', label: 'ru' },
];

// ─── Parse slugs+names directly from data.ts ──────────────────────────────
const dataFile = fs.readFileSync(
  path.resolve(__dirname, '../src/data.ts'), 'utf8'
);

function extractNamedArray(arrayName) {
  const blockMatch = dataFile.match(
    new RegExp(`export const ${arrayName}[\\s\\S]*?^];`, 'm')
  );
  if (!blockMatch) return [];
  const re = /\{\s*\n?\s*slug:\s*["']([^"']+)["'][^}]*?name:\s*["']([^"']+)["']/gs;
  const out = [];
  let m;
  while ((m = re.exec(blockMatch[0])) !== null) {
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

// ─── Localised page definitions ───────────────────────────────────────────
function buildPages() {
  const pages = [];

  for (const lang of LANGS) {
    const p = lang.prefix; // '' | '/en' | '/ar' | '/ru'

    // Homepage
    const homeTitles = {
      tr: 'Bursa Mobil Asansör Kiralama | 7/24 Asansörlü Nakliyat',
      en: 'Bursa Mobile Elevator Rental | 24/7 Elevator Moving Service',
      ar: 'تأجير مصعد متنقل في بورصة | خدمة نقل 24/7',
      ru: 'Аренда мобильного лифта в Бурсе | Услуги переезда 24/7',
    };
    const homeDescs = {
      tr: "Bursa'da 7/24 mobil asansör kiralama. 15. kata kadar, uzman operatörlü hizmet. Hemen arayın: 05053297533",
      en: 'Mobile elevator rental in Bursa 24/7. Up to 15th floor, expert operators. Call now: +905053297533',
      ar: 'تأجير مصعد متنقل في بورصة على مدار 24/7. حتى الطابق 15، مشغلون محترفون. اتصل: +905053297533',
      ru: 'Аренда мобильного лифта в Бурсе круглосуточно. До 15 этажа, опытные операторы. Звоните: +905053297533',
    };
    pages.push({ path: p || '/', title: homeTitles[lang.code], description: homeDescs[lang.code], lang: lang.code });

    // /blog
    const blogTitles = {
      tr: 'Blog | Bursa Mobil Asansör — Taşınma ve Asansör Rehberi',
      en: 'Blog | Bursa Mobile Elevator — Moving & Elevator Guide',
      ar: 'المدونة | مصعد بورصة المتنقل',
      ru: 'Блог | Мобильный лифт Бурса — Советы по переезду',
    };
    pages.push({ path: `${p}/blog`, title: blogTitles[lang.code], description: homeTitles[lang.code], lang: lang.code });

    // District pages — only primary service for multi-lang (reduces build time)
    for (const d of DISTRICTS) {
      const distTitles = {
        tr: `${d.name} Kiralık Mobil Asansör | 2026 Fiyatları · Bursa Mobil Asansör`,
        en: `${d.name} Mobile Elevator Rental | 2026 Prices · Bursa Mobile Elevator`,
        ar: `تأجير مصعد متنقل في ${d.name} | أسعار 2026 · مصعد بورصة المتنقل`,
        ru: `Аренда мобильного лифта ${d.name} | Цены 2026 · Мобильный лифт Бурса`,
      };
      const distDescs = {
        tr: `${d.name} bölgesinde 7/24 kiralık mobil asansör. 15. kata kadar. Hemen arayın: 05053297533`,
        en: `Mobile elevator rental in ${d.name} 24/7. Up to 15th floor. Call: +905053297533`,
        ar: `تأجير مصعد متنقل في ${d.name} على مدار الساعة. اتصل: +905053297533`,
        ru: `Аренда мобильного лифта ${d.name} круглосуточно. До 15 этажа. Звоните: +905053297533`,
      };
      pages.push({
        path: `${p}/${d.slug}-kiralik-mobil-asansor`,
        title: distTitles[lang.code],
        description: distDescs[lang.code],
        lang: lang.code,
      });
    }
  }

  // Blog posts — TR only (content is Turkish)
  for (const s of BLOG_SLUGS) {
    pages.push({
      path: `/blog/${s}`,
      title: `${s.replace(/-/g, ' ')} | Blog · Bursa Mobil Asansör`,
      description: 'Bursa mobil asansör hakkında detaylı rehber yazısı.',
      lang: 'tr',
    });
  }

  return pages;
}

// ─── Strip duplicate meta from index.html ────────────────────────────────
function stripExistingMeta(html) {
  return html
    // Remove <title>...</title>
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    // Remove <meta name="description" ...>
    .replace(/<meta\s[^>]*name=["']description["'][^>]*\/?>/gi, '')
    // Remove <meta name="robots" ...>
    .replace(/<meta\s[^>]*name=["']robots["'][^>]*\/?>/gi, '')
    // Remove ALL <meta property="og:*" ...>
    .replace(/<meta\s[^>]*property=["']og:[^"']*["'][^>]*\/?>/gi, '')
    // Remove ALL <meta name="twitter:*" ...>
    .replace(/<meta\s[^>]*name=["']twitter:[^"']*["'][^>]*\/?>/gi, '')
    // Remove existing canonical links (prerender sets its own)
    .replace(/<link\s[^>]*rel=["']canonical["'][^>]*\/?>/gi, '');
}

// ─── Inject clean meta ────────────────────────────────────────────────────
function injectMeta(baseHtml, { title, description, path: pagePath, lang }) {
  const canonical = `${BASE_URL}${pagePath === '/' ? '' : pagePath}`;
  const dir = lang === 'ar' ? ' dir="rtl"' : '';

  // hreflang alternates
  const hreflangs = LANGS.map(l => {
    const href = `${BASE_URL}${l.prefix}${pagePath.replace(/^\/?(en|ar|ru)/, '') || '/'}`;
    return `<link rel="alternate" hreflang="${l.code}" href="${href}">`;
  }).join('\n    ');

  const metaBlock = `
    <title>${title}</title>
    <meta name="description" content="${description.replace(/"/g, '&quot;')}">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <link rel="canonical" href="${canonical}">
    ${hreflangs}
    <link rel="alternate" hreflang="x-default" href="${BASE_URL}${pagePath.replace(/^\/(en|ar|ru)/, '') || '/'}">
    <meta property="og:title" content="${title.replace(/"/g, '&quot;')}">
    <meta property="og:description" content="${description.replace(/"/g, '&quot;')}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}">`;

  const cleaned = stripExistingMeta(baseHtml);

  // If RTL (Arabic), add dir attr to <html>
  const withDir = dir
    ? cleaned.replace(/<html([^>]*)>/, `<html$1${dir}>`)
    : cleaned;

  return withDir.replace(/<\/head>/, `${metaBlock}\n  </head>`);
}

// ─── Main ─────────────────────────────────────────────────────────────────
const baseIndexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const PAGES = buildPages();
let written = 0;

for (const page of PAGES) {
  const html = injectMeta(baseIndexHtml, page);
  const filePath = page.path === '/' ? '/' : page.path;

  if (filePath === '/') {
    fs.writeFileSync(path.join(DIST, 'index.html'), html, 'utf8');
  } else {
    const dir = path.join(DIST, filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  }

  written++;
}

const langBreakdown = LANGS.map(l => `${l.code}: ${PAGES.filter(p => p.lang === l.code).length}`).join(', ');
console.log(`✅ Prerendered ${written} pages`);
console.log(`   Languages: ${langBreakdown}`);
console.log(`   Blog posts (TR only): ${BLOG_SLUGS.length}`);
