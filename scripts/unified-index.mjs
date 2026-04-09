import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import https from 'https';

// --- AYARLAR ---
const HOST = 'bursakiralikasansor.com';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const GOOGLE_KEY_FILE = path.join(process.cwd(), 'service-account.json');
const INDEXNOW_KEY = 'd6c35b6a7a544b829ce2ecb8d5a7cc3d';

// --- YARDIMCI FONKSİYONLAR ---

// Sitemap'ten URL'leri çeker
function fetchSitemapUrls(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const matches = data.match(/<loc>(.*?)<\/loc>/g);
        if (matches) {
          const urls = matches.map(m => m.replace(/<\/?loc>/g, ''));
          resolve(urls);
        } else {
          resolve([]);
        }
      });
    }).on('error', reject);
  });
}

// Google Indexing API Gönderimi
async function sendToGoogle(urls, keyFile) {
  if (!fs.existsSync(keyFile)) {
    console.error('❌ Google service-account.json bulunamadı.');
    return;
  }

  const keyData = JSON.parse(fs.readFileSync(keyFile, 'utf8'));
  const jwtClient = new google.auth.JWT({
    email: keyData.client_email,
    key: keyData.private_key,
    scopes: ['https://www.googleapis.com/auth/indexing']
  });

  await jwtClient.authorize();
  console.log('✅ Google API Yetkilendirildi.');

  let successCount = 0;
  // Günlük 200 limitine dikkat ederek (veya argümanla gelen limite göre) gönderiyoruz
  const limit = parseInt(process.argv[2]) || 200;
  const startIndex = parseInt(process.argv[3]) || 0;
  const batch = urls.slice(startIndex, startIndex + limit);

  console.log(`🚀 [Google] ${batch.length} URL gönderiliyor (Başlangıç: ${startIndex})...`);

  for (let i = 0; i < batch.length; i++) {
    const url = batch[i];
    try {
      const res = await jwtClient.request({
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url, type: 'URL_UPDATED' }),
      });
      console.log(`[Google] ${startIndex + i + 1}/${urls.length} - ${url} (${res.status})`);
      successCount++;
    } catch (err) {
      console.error(`[Google Hata] ${url}: ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 100)); // Rate limit koruması
  }
  console.log(`✨ Google: ${successCount} URL başarıyla bildirildi.`);
}

// IndexNow (Bing/Yandex) Gönderimi
async function sendToIndexNow(urls, host, key) {
  const payload = JSON.stringify({
    host: host,
    key: key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`✅ IndexNow (Bing/Yandex): BAŞARILI (${res.statusCode})`);
      } else {
        console.error(`❌ IndexNow Hatası! Durum: ${res.statusCode}`);
      }
      resolve();
    });
    req.on('error', (e) => {
      console.error(`❌ IndexNow İstek Hatası: ${e.message}`);
      resolve();
    });
    req.write(payload);
    req.end();
  });
}

// --- ANA AKIŞ ---
async function main() {
  console.log('🔍 SEO Gücü Başlatılıyor...');
  const urls = await fetchSitemapUrls(SITEMAP_URL);
  
  if (urls.length === 0) {
    console.error('❌ Sitemap boş veya okunamadı.');
    return;
  }

  // Sadece Türkçe URL'leri al
  const turkishUrls = urls.filter(url => !url.includes('/en') && !url.includes('/ru') && !url.includes('/ar'));
  console.log(`📈 Toplam ${turkishUrls.length} Türkçe URL tespit edildi.`);

  // 1. Google'a Gönder (Batch limitli)
  await sendToGoogle(turkishUrls, GOOGLE_KEY_FILE);

  // 2. IndexNow'a Gönder (Tek seferde toplu gönderim destekler)
  console.log('\n🚀 IndexNow (Bing, Yandex, Yahoo) gönderimi başlatılıyor...');
  await sendToIndexNow(turkishUrls, HOST, INDEXNOW_KEY);

  console.log('\n🏁 Tüm işlemler tamamlandı. 1. sıra yolculuğu başladı!');
}

main();
