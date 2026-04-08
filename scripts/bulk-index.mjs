import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import https from 'https';

const KEY_FILE = path.join(process.cwd(), 'service-account.json');

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

async function bulkIndex() {
  try {
    await jwtClient.authorize();
    console.log('✅ Google API yetkilendirmesi başarılı.\n');

    console.log('🌐 Sitemap indiriliyor...');
    const urls = await fetchSitemapUrls('https://bursakiralikasansor.com/sitemap.xml');
    
    if (urls.length === 0) {
      console.log('❌ Sitemap okunamadı veya URL bulunamadı.');
      return;
    }
    
    console.log(`✅ Sitemap'ten toplam ${urls.length} miktarında URL bulundu.\n`);

    // Sadece Türkçe URL'leri filtrelemek için:
    const turkishUrls = urls.filter(url => !url.includes('/en') && !url.includes('/ru') && !url.includes('/ar'));
    console.log(`🇹🇷 Türkçe URL sayısı: ${turkishUrls.length} (Indexleme bu URL'ler ile yapılacak)\n`);

    // Google API limiti günlük 200. Eğer 200'den azsa hepsini yapabiliriz.
    const limit = Math.min(200, turkishUrls.length);
    
    let successCount = 0;
    
    for (let i = 0; i < limit; i++) {
        const url = turkishUrls[i];
        try {
            const options = {
                url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: url, type: 'URL_UPDATED' }),
            };

            const res = await jwtClient.request(options);
            console.log(`[${i + 1}/${limit}] 🚀 Gönderildi: ${url} -> Durum: ${res.status}`);
            successCount++;
        } catch (error) {
            console.log(`[${i + 1}/${limit}] ❌ Hata: ${url} -> ${error.message}`);
        }
        
        // Hızlı istek atıp API'yi yormamak için her istek arası 50ms bekle
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    console.log(`\n✨ İşlem bitti! ${successCount}/${limit} URL Google'a bildirildi.`);
  } catch (error) {
    console.error('❌ Kritik Hata:', error.message);
  }
}

bulkIndex();
