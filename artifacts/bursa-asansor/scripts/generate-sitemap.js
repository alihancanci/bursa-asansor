import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://bursakiralikasansor.com';
const SUPPORTED_LANGUAGES = ['tr', 'en', 'ar', 'ru'];

// Data extraction
// Due to Vite build systems, we import JSON from the exact same TS source if possible, or we just map logic.
// For simplicity in this script, we can hardcode the core logic or read from a pre-built data file.
// Since DISTRICTS and SERVICES are known, let's declare them here for generation.
const DISTRICTS = [
  "osmangazi", "nilufer", "yildirim", "bursamerkez", 
  "gemlik", "mudanya", "inegol", "kestel", "gursu", 
  "karacabey", "orhangazi", "yenisehir", "iznik", 
  "bademli", "ozluce", "balat", "gorukle", "ihsaniye"
];

const SERVICES = [
  "kiralik-asansor",
  "asansor-kiralama",
  "mobil-asansor",
  "dis-cephe-asansoru",
  "esyali-tasimacilik",
  "insaat-asansoru",
  "mobilya-tasimacilik",
  "asansorlu-nakliyat",
  "nakliye-asansoru",
  "esya-tasima-asansoru",
  "evden-eve-asansorlu-tasimacilik",
  "yuk-asansoru-kiralama",
  "sepetli-asansor",
  "kiralik-nakliyat-asansoru",
  "esya-tasima-vinci",
  "kiralik-mobil-asansor",
  "saatlik-asansor-kiralama",
  "gunluk-asansor-kiralama",
  "asansorlu-ev-den-eve",
  "ofis-tasima-asansoru",
  "balkon-asansoru",
  "insaata-asansor",
  "beyaz-esya-tasima-asansoru"
];

const BLOG_SLUGS = [
  "asansorlu-tasimacilik-nasil-yapilir-kilavuz",
  "asansor-kiralama-fiyatlari-2026",
  "mobil-asansor-kacinci-kata-kadar-cikar",
  "tasinirken-esyalar-nasil-paketlenir",
  "mobil-asansor-vs-sepetli-vinc",
  "yuksek-katli-binalarda-tasinma-kurallari",
  "insaat-malzemesi-tasima-cozumleri",
  "bursa-ici-en-ucuz-asansor-kiralama"
];

const STANDARD_PAGES = [
  "/",
  "/blog"
];

let urls = [];

// 1. Standard Pages
STANDARD_PAGES.forEach(page => urls.push(page));

// 2. Blog Posts
BLOG_SLUGS.forEach(slug => urls.push(`/blog/${slug}`));

// 3. Dynamic Service Pages (414 pages)
DISTRICTS.forEach(district => {
  SERVICES.forEach(service => {
    urls.push(`/${district}-${service}`);
  });
});

function getLangLink(pathSegment, lang) {
  const prefix = lang === 'tr' ? '' : `/${lang}`;
  // Ensure we don't end up with trailing slashes like /en/ unless it's the root
  let finalPath = `${prefix}${pathSegment}`;
  if (finalPath === '') finalPath = '/';
  return `${BASE_URL}${finalPath}`;
}

const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

let sitemapContent = '';

urls.forEach(urlPath => {
  // For each URL path, generate a <url> block for EACH supported language.
  SUPPORTED_LANGUAGES.forEach(lang => {
    const loc = getLangLink(urlPath, lang);
    
    let block = `  <url>\n    <loc>${loc}</loc>\n`;
    
    // Add hreflang tags pointing to all languages
    SUPPORTED_LANGUAGES.forEach(targetLang => {
      block += `    <xhtml:link rel="alternate" hreflang="${targetLang}" href="${getLangLink(urlPath, targetLang)}" />\n`;
    });
    // Add x-default pointing to the 'tr' version
    block += `    <xhtml:link rel="alternate" hreflang="x-default" href="${getLangLink(urlPath, 'tr')}" />\n`;
    
    block += `  </url>\n`;
    sitemapContent += block;
  });
});

const sitemapFooter = `</urlset>`;

const fullSitemap = sitemapHeader + sitemapContent + sitemapFooter;

// Write XML
const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), fullSitemap, 'utf8');

console.log(`✅ Dynamically generated sitemap.xml with hreflang tags for ${urls.length * SUPPORTED_LANGUAGES.length} localized URLs!`);
