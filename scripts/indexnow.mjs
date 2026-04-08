import https from 'https';

const API_KEY = 'd6c35b6a7a544b829ce2ecb8d5a7cc3d';
const HOST = 'bursakiralikasansor.com';

// Sitemap'ten URL'leri çeken fonksiyon
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

async function runIndexNow() {
  try {
    console.log('🌐 Sitemap indiriliyor...');
    const urls = await fetchSitemapUrls(`https://${HOST}/sitemap.xml`);
    
    if (urls.length === 0) {
      console.log('❌ Sitemap okunamadı veya URL bulunamadı.');
      return;
    }
    
    // Yalnızca Türkçe olanları filtrele
    const turkishUrls = urls.filter(url => !url.includes('/en') && !url.includes('/ru') && !url.includes('/ar'));
    console.log(`✅ Toplam ${turkishUrls.length} Türkçe URL bulundu.`);
    console.log('🚀 IndexNow API\'ye (Bing, Yandex vb.) gönderiliyor...\n');

    // IndexNow API'ye gönderilecek JSON yükü
    const payload = JSON.stringify({
      host: HOST,
      key: API_KEY,
      keyLocation: `https://${HOST}/${API_KEY}.txt`,
      urlList: turkishUrls
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

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => responseBody += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✨ BAŞARILI! Tüm URL'ler yayımlandı. (Durum: ${res.statusCode})`);
          console.log('Artık Bing, Yandex, Yahoo gibi motorlar sayfalarınızı otomatik olarak sıraya alacak.');
        } else {
          console.error(`❌ Hata Oluştu! Durum: ${res.statusCode}`);
          console.error('Detay:', responseBody);
          console.log('Uyarı: Sitenizin ana dizininde TXT dosyasının yayınlandığından emin olun (Deploy işlemi).');
        }
      });
    });

    req.on('error', (e) => {
      console.error(`❌ İstek Hatası: ${e.message}`);
    });

    // Veriyi gönder
    req.write(payload);
    req.end();

  } catch (error) {
    console.error('❌ Kritik Hata:', error.message);
  }
}

runIndexNow();
