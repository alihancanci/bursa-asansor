import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const KEY_FILE = path.join(process.cwd(), 'service-account.json');
const CSV_FILE = '/Users/alihancancihm/Downloads/bursakiralikasansor.com-Coverage-Drilldown-2026-04-10/Tablo.csv';

if (!fs.existsSync(KEY_FILE)) {
  console.error('\n❌ Hata: service-account.json dosyası bulunamadı!');
  process.exit(1);
}

if (!fs.existsSync(CSV_FILE)) {
  console.error(`\n❌ Hata: ${CSV_FILE} dosyası bulunamadı!`);
  process.exit(1);
}

const keyData = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

const jwtClient = new google.auth.JWT({
  email: keyData.client_email,
  key: keyData.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

async function priorityIndex() {
  try {
    console.log('🚀 Öncelikli İndeksleyici (CSV Tabanlı) Başlatılıyor...\n');

    const csvContent = fs.readFileSync(CSV_FILE, 'utf8');
    const lines = csvContent.split('\n');
    
    // Header'ı atla ve URL'leri temizle (Sadece URL sütununu al)
    const urls = lines
      .slice(1)
      .map(line => line.split(',')[0].trim())
      .filter(url => url && url.startsWith('http'));

    console.log(`✅ CSV dosyasından ${urls.length} adet URL başarıyla okundu.\n`);

    await jwtClient.authorize();
    console.log('✅ Google API yetkilendirmesi başarılı.\n');

    // Google günlük limiti 200. CLI'dan başlangıç indeksi alabiliriz.
    const startIndex = parseInt(process.argv[2]) || 0;
    const limit = 200;
    const endIndex = Math.min(startIndex + limit, urls.length);
    const urlsToProcess = urls.slice(startIndex, endIndex);

    console.log(`🚀 İşlem Aralığı: [${startIndex} - ${endIndex}] (Toplam: ${urlsToProcess.length} URL)\n`);

    if (urlsToProcess.length === 0) {
      console.log('⚠️ İşlenecek URL kalmadı veya geçersiz başlangıç indeksi.');
      return;
    }

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
        console.log(`[${currentCount}/${urls.length}] 🚀 Gönderildi: ${url} -> Durum: ${res.status}`);
        successCount++;
      } catch (error) {
        console.log(`[${currentCount}/${urls.length}] ❌ Hata: ${url} -> ${error.message}`);
        if (error.message.includes('Quota exceeded')) {
          console.error('\n🛑 Hata: Google günlük kotası doldu. İşlem durduruluyor.');
          break;
        }
      }
      
      // API'yi yormamak için kısa bekleme
      await new Promise(resolve => setTimeout(resolve, 150));
    }

    console.log(`\n✨ İşlem Bitti! ${successCount}/${urlsToProcess.length} URL Google'a öncelikli olarak bildirildi.`);
    if (endIndex < urls.length) {
      console.log(`👉 Kalan ${urls.length - endIndex} URL için yarın "node scripts/priority-index.mjs ${endIndex}" komutuyla devam edebilirsiniz.`);
    }

  } catch (error) {
    console.error('❌ Kritik Hata:', error.message);
  }
}

priorityIndex();
