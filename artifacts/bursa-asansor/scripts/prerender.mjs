/**
 * prerender.mjs v3 — Full SSG (Static Site Generation)
 *
 * Generates a static index.html for EVERY valid URL in the sitemap:
 *   • 18 districts × 23 services × 4 languages  = 1656 service pages
 *   • 4 homepages (/, /en, /ar, /ru)             =    4
 *   • 4 blog indexes                             =    4
 *   • 8 blog posts (TR only)                     =    8
 *   • Plus an additional 24 lang-prefixed blog    =   24
 *   ─────────────────────────────────────────────────────
 *   Total ≈ 1696 pre-rendered pages
 *
 * Each page gets:
 *   - Stripped duplicate <title>/<meta>/<og>/<twitter>/<canonical>
 *   - Injected page-specific title, description, canonical, hreflang
 *   - Dynamic <html lang="xx"> and dir="rtl" for Arabic
 *   - A static 404.html with noindex,nofollow
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST      = path.resolve(__dirname, '../dist/public');
const BASE_URL  = 'https://bursakiralikasansor.com';
const YEAR      = new Date().getFullYear();

const LANGS = [
  { code: 'tr', prefix: '' },
  { code: 'en', prefix: '/en' },
  { code: 'ar', prefix: '/ar' },
  { code: 'ru', prefix: '/ru' },
];

// ─── Parse data.ts ─────────────────────────────────────────────────────────
const dataFile = fs.readFileSync(
  path.resolve(__dirname, '../src/data.ts'), 'utf8'
);

function extractBlock(arrayName) {
  const m = dataFile.match(new RegExp(`export const ${arrayName}[\\s\\S]*?^];`, 'm'));
  return m ? m[0] : '';
}

function extractNamedSlugs(arrayName) {
  const block = extractBlock(arrayName);
  const re = /\{\s*\n?\s*slug:\s*["']([^"']+)["'][^}]*?name:\s*["']([^"']+)["']/gs;
  const out = [];
  let m;
  while ((m = re.exec(block)) !== null) out.push({ slug: m[1], name: m[2] });
  return out;
}

function extractSlugs(arrayName) {
  const block = extractBlock(arrayName);
  const re = /slug:\s*["']([^"']+)["']/g;
  const out = [];
  let m;
  while ((m = re.exec(block)) !== null) out.push(m[1]);
  return out;
}

const DISTRICTS     = extractNamedSlugs('DISTRICTS');
const SERVICE_SLUGS = extractSlugs('SERVICES');

// Blog slugs from blog.ts
const blogFile = fs.readFileSync(
  path.resolve(__dirname, '../src/data/blog.ts'), 'utf8'
);
const BLOG_SLUGS = [];
{
  const re = /slug:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(blogFile)) !== null) BLOG_SLUGS.push(m[1]);
}

if (DISTRICTS.length === 0 || SERVICE_SLUGS.length === 0) {
  console.error('❌ Could not parse slugs from data.ts');
  process.exit(1);
}

// ─── Localised service name helpers ─────────────────────────────────────────
// Simple service slug → localised name mapping for meta titles
const serviceNameMap = {
  tr: slug => slug.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase()),
  en: slug => slug.replace(/-/g, ' ').replace('kiralik', 'rental').replace('asansor', 'elevator')
              .replace('nakliyat', 'moving').replace('mobil', 'mobile').replace('tasima', 'transport')
              .replace('evden eve', 'door to door').replace(/^./, c => c.toUpperCase()),
  ar: slug => `خدمة ${slug.replace(/-/g, ' ')}`,
  ru: slug => `Услуга ${slug.replace(/-/g, ' ')}`,
};

// ─── Build ALL pages ──────────────────────────────────────────────────────
function buildPages() {
  const pages = [];

  for (const lang of LANGS) {
    const p = lang.prefix;
    const lc = lang.code;

    // Homepage
    const homeT = {
      tr: 'Bursa Mobil Asansör Kiralama | 7/24 Asansörlü Nakliyat',
      en: 'Bursa Mobile Elevator Rental | 24/7 Elevator Moving Service',
      ar: 'تأجير مصعد متنقل في بورصة | خدمة نقل 24/7',
      ru: 'Аренда мобильного лифта в Бурсе | Услуги переезда 24/7',
    };
    const homeD = {
      tr: "Bursa'da 7/24 mobil asansör kiralama. 15. kata kadar, uzman operatörlü. Hemen arayın: 05053297533",
      en: 'Mobile elevator rental in Bursa 24/7. Up to 15th floor, expert operators. Call: +905053297533',
      ar: 'تأجير مصعد متنقل في بورصة. حتى الطابق 15. اتصل: +905053297533',
      ru: 'Аренда мобильного лифта в Бурсе. До 15 этажа. Звоните: +905053297533',
    };
    pages.push({ path: p || '/', title: homeT[lc], description: homeD[lc], lang: lc });

    // /blog
    const blogT = {
      tr: 'Blog | Bursa Mobil Asansör — Taşınma Rehberi',
      en: 'Blog | Bursa Mobile Elevator — Moving Guide',
      ar: 'المدونة | مصعد بورصة المتنقل',
      ru: 'Блог | Мобильный лифт Бурса',
    };
    pages.push({ path: `${p}/blog`, title: blogT[lc], description: homeD[lc], lang: lc });

    // ── ALL district × service combinations ──────────────────────────────
    for (const d of DISTRICTS) {
      for (const sSlug of SERVICE_SLUGS) {
        const sName = serviceNameMap[lc](sSlug);
        const titleMap = {
          tr: `${d.name} ${sName} | ${YEAR} · Bursa Mobil Asansör`,
          en: `${d.name} ${sName} | ${YEAR} · Bursa Mobile Elevator`,
          ar: `${sName} في ${d.name} | ${YEAR} · مصعد بورصة`,
          ru: `${sName} ${d.name} | ${YEAR} · Мобильный лифт Бурса`,
        };
        const descMap = {
          tr: `${d.name} bölgesinde ${YEAR} ${sName.toLowerCase()} hizmeti. 15. kata kadar, 7/24. Arayın: 05053297533`,
          en: `${sName} in ${d.name} ${YEAR}. Up to 15th floor, 24/7. Call: +905053297533`,
          ar: `${sName} في ${d.name} ${YEAR}. اتصل: +905053297533`,
          ru: `${sName} ${d.name} ${YEAR}. До 15 этажа. Звоните: +905053297533`,
        };
        pages.push({
          path: `${p}/${d.slug}-${sSlug}`,
          title: titleMap[lc],
          description: descMap[lc],
          lang: lc,
        });
      }
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

// ─── Strip existing meta from base HTML ──────────────────────────────────
function stripExistingMeta(html) {
  return html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s[^>]*name=["']description["'][^>]*\/?>/gi, '')
    .replace(/<meta\s[^>]*name=["']robots["'][^>]*\/?>/gi, '')
    .replace(/<meta\s[^>]*property=["']og:[^"']*["'][^>]*\/?>/gi, '')
    .replace(/<meta\s[^>]*name=["']twitter:[^"']*["'][^>]*\/?>/gi, '')
    .replace(/<link\s[^>]*rel=["']canonical["'][^>]*\/?>/gi, '')
    .replace(/<link\s[^>]*rel=["']alternate["'][^>]*\/?>/gi, '');
}

// ─── Inject clean page-specific meta ──────────────────────────────────────
function injectMeta(baseHtml, { title, description, path: pagePath, lang }) {
  const esc = s => s.replace(/"/g, '&quot;');
  const canonical = `${BASE_URL}${pagePath === '/' ? '' : pagePath}`;

  // Compute the base path (without lang prefix) for hreflang
  const basePath = pagePath.replace(/^\/(en|ar|ru)/, '') || '/';

  const hreflangs = LANGS.map(l =>
    `<link rel="alternate" hreflang="${l.code}" href="${BASE_URL}${l.prefix}${basePath}">`
  ).join('\n    ');

  const meta = `
    <title>${title}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <link rel="canonical" href="${canonical}">
    ${hreflangs}
    <link rel="alternate" hreflang="x-default" href="${BASE_URL}${basePath}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">`;

  let cleaned = stripExistingMeta(baseHtml);

  // Set <html lang="xx"> and optionally dir="rtl"
  const dirAttr = lang === 'ar' ? ` dir="rtl"` : '';
  cleaned = cleaned.replace(/<html([^>]*)lang=["'][^"']*["']/, `<html$1lang="${lang}"`);
  // If no lang attr exists, add it
  if (!cleaned.includes(`lang="${lang}"`)) {
    cleaned = cleaned.replace(/<html/, `<html lang="${lang}"`);
  }
  // Handle dir for Arabic
  if (lang === 'ar' && !cleaned.includes('dir="rtl"')) {
    cleaned = cleaned.replace(/<html([^>]*)>/, `<html$1 dir="rtl">`);
  } else if (lang !== 'ar') {
    cleaned = cleaned.replace(/\s*dir=["']rtl["']/g, '');
  }

  return cleaned.replace(/<\/head>/, `${meta}\n  </head>`);
}

// ─── Generate static 404.html ────────────────────────────────────────────
function generate404(baseHtml) {
  let html = stripExistingMeta(baseHtml);
  // Set lang to Turkish as default
  html = html.replace(/<html([^>]*)lang=["'][^"']*["']/, '<html$1lang="tr"');

  const meta = `
    <title>404 — Sayfa Bulunamadı | Bursa Mobil Asansör</title>
    <meta name="description" content="Aradığınız sayfa mevcut değil.">
    <meta name="robots" content="noindex, nofollow">`;

  html = html.replace(/<\/head>/, `${meta}\n  </head>`);

  // Inject a visible 404 message into the body for when JS doesn't load
  const fallbackBody = `
    <noscript>
      <div style="text-align:center;padding:80px 20px;font-family:system-ui,sans-serif">
        <h1 style="font-size:4rem;font-weight:900;color:#1e293b">404</h1>
        <p style="font-size:1.2rem;color:#64748b;margin:1rem 0">Sayfa Bulunamadı</p>
        <a href="/" style="color:#f97316;font-weight:700;text-decoration:none">Ana Sayfaya Dön →</a>
      </div>
    </noscript>`;

  html = html.replace(/<div id="root">/, `<div id="root">${fallbackBody}`);
  return html;
}

// ─── Main ─────────────────────────────────────────────────────────────────
const t0 = Date.now();
const baseIndexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const PAGES = buildPages();
let written = 0;

for (const page of PAGES) {
  const html = injectMeta(baseIndexHtml, page);

  if (page.path === '/') {
    fs.writeFileSync(path.join(DIST, 'index.html'), html, 'utf8');
  } else {
    const dir = path.join(DIST, page.path);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  }
  written++;
}

// Generate 404.html
const html404 = generate404(baseIndexHtml);
fs.writeFileSync(path.join(DIST, '404.html'), html404, 'utf8');

const elapsed = ((Date.now() - t0) / 1000).toFixed(2);
const langBreakdown = LANGS.map(l => `${l.code}: ${PAGES.filter(p => p.lang === l.code).length}`).join(', ');
console.log(`✅ Prerendered ${written} pages + 404.html in ${elapsed}s`);
console.log(`   ${DISTRICTS.length} districts × ${SERVICE_SLUGS.length} services × ${LANGS.length} langs`);
console.log(`   ${BLOG_SLUGS.length} blog posts (TR)`);
console.log(`   Languages: ${langBreakdown}`);
