import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import https from 'https';

const KEY_FILE = path.join(process.cwd(), 'service-account.json');
const INDEXNOW_KEY = 'd6c35b6a7a544b829ce2ecb8d5a7cc3d';
const HOST = 'bursakiralikasansor.com';

if (!fs.existsSync(KEY_FILE)) {
  console.error('\n❌ Hata: service-account.json dosyası bulunamadı!');
  process.exit(1);
}

const keyData = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

const jwtClient = new google.auth.JWT({
  email: keyData.client_email,
  key: keyData.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

// Sitemap'ten URL'leri çekecek yardımcı fonksiyon
function fetchSitemapUrls(sitemapUrl) {
  return new Promise((resolve, reject) => {
    https.get(sitemapUrl, (res) => {
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

// IndexNow (Bing/Yandex) için POST isteği gönderen fonksiyon
function notifyIndexNow(urls) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    });

    const options = {
      hostname: 'www.bing.com',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => { responseBody += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          resolve({ status: res.statusCode, body: responseBody });
        } else {
          reject(new Error(`IndexNow hatası: ${res.statusCode} - ${responseBody}`));
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.write(data);
    req.end();
  });
}

async function bulkIndex() {
  try {
    console.log('🚀 Çoklu-Arama Motoru İndeksleyici Başlatılıyor...\n');

    console.log('🌐 Sitemap indiriliyor...');
    const urls = await fetchSitemapUrls(`https://${HOST}/sitemap.xml`);
    
    if (urls.length === 0) {
      console.log('❌ Sitemap okunamadı veya URL bulunamadı.');
      return;
    }
    
    console.log(`✅ Sitemap'ten toplam ${urls.length} URL bulundu.`);

    // Sadece Türkçe URL'leri filtrele
    const turkishUrls = urls.filter(url => 
      !url.includes('/en') && 
      !url.includes('/ru') && 
      !url.includes('/ar') &&
      !url.includes('/sitemap.xml')
    );
    console.log(`🇹🇷 İndekslenecek Türkçe URL sayısı: ${turkishUrls.length}\n`);

    // 1. ADIM: Bing ve Yandex (IndexNow) - Hepsini tek seferde gönderebiliriz (Limit 10.000)
    console.log('📊 Bing ve Yandex (IndexNow) Bildirimi Başlatılıyor...');
    try {
      const result = await notifyIndexNow(turkishUrls);
      console.log(`✅ IndexNow Başarılı! (Durum: ${result.status}) - ${turkishUrls.length} URL Bing ve Yandex'e bildirildi.\n`);
    } catch (error) {
      console.error('❌ IndexNow Hatası:', error.message);
    }

    // 2. ADIM: Google Indexing API - Günlük 200 Limitli
    console.log('📊 Google Indexing API Bildirimi Başlatılıyor...');
    await jwtClient.authorize();
    
    const startIndex = parseInt(process.argv[2]) || 0;
    const limitArg = parseInt(process.argv[3]) || 200;
    const endIndex = Math.min(startIndex + limitArg, turkishUrls.length);
    const urlsToProcess = turkishUrls.slice(startIndex, endIndex);
    
    console.log(`🚀 Google İşlem Aralığı: [${startIndex} - ${endIndex}] (Toplam: ${urlsToProcess.length} URL)\n`);

    if (urlsToProcess.length === 0) {
        console.log('⚠️ İşlenecek yeni URL bulunamadı. Kotanız dolmuş veya tüm sayfalar taranmış olabilir.');
    } else {
        let successCount = 0;
        for (let i = 0; i < urlsToProcess.length; i++) {
            const url = urlsToProcess[i];
            const currentCount = startIndex + i + 1;
            try {
                const options = {
                    url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url: url, type: 'URL_UPDATED' }),
                };

                const res = await jwtClient.request(options);
                console.log(`[${currentCount}/${turkishUrls.length}] 🚀 Google: ${url} -> ${res.status}`);
                successCount++;
            } catch (error) {
                console.log(`[${currentCount}/${turkishUrls.length}] ❌ Google Hata: ${url} -> ${error.message}`);
            }
            await new Promise(resolve => setTimeout(resolve, 150)); // 150ms bekleme
        }
        console.log(`\n✨ Google işlemi bitti! ${successCount}/${urlsToProcess.length} URL Google'a bildirildi.`);
    }

    console.log('\n🏁 Tüm işlemler tamamlandı.');
  } catch (error) {
    console.error('❌ Kritik Hata:', error.message);
  }
}

bulkIndex();
