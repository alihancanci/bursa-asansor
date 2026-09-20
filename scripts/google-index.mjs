import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// URL listesi (Dizine eklenmeyen sayfalar)
const urls = [
  "https://bursakiralikasansor.com/orhangazi-mobilya-tasima-asansoru",
  "https://bursakiralikasansor.com/yildirim-insaat-malzemesi-tasima-asansoru",
  "https://bursakiralikasansor.com/nilufer-saatlik-asansor-kiralama",
  "https://bursakiralikasansor.com/gemlik-evden-eve-asansorlu-nakliyat",
  "https://bursakiralikasansor.com/karacabey-evden-eve-nakliyat",
  "https://bursakiralikasansor.com/osmangazi-kiralik-asansor"
];

const KEY_FILE = path.join(process.cwd(), 'service-account.json');

if (!fs.existsSync(KEY_FILE)) {
  console.error('\n❌ Hata: service-account.json dosyası bulunamadı!');
  console.log('Lütfen Google Cloud Console\'dan aldığınız anahtar dosyasını proje kök dizinine "service-account.json" adıyla ekleyin.\n');
  process.exit(1);
}

const keyData = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

const jwtClient = new google.auth.JWT({
  email: keyData.client_email,
  key: keyData.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

async function indexUrls() {
  try {
    await jwtClient.authorize();
    console.log('✅ Google API yetkilendirmesi başarılı.\n');

    for (const url of urls) {
      const options = {
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          type: 'URL_UPDATED',
        }),
      };

      // googleapis kütüphanesi ile istek atma
      const res = await jwtClient.request(options);
      console.log(`🚀 Gönderildi: ${url} -> Durum: ${res.status} ${res.statusText}`);
    }

    console.log('\n✨ Tüm URL\'ler Google\'a bildirildi.');
  } catch (error) {
    console.error('❌ Bir hata oluştu:', error.message);
    if (error.response) {
      console.error('Detay:', error.response.data);
    }
  }
}

indexUrls();
