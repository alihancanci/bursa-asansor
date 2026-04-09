import fs from 'fs';
import path from 'path';
import piexif from 'piexifjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Bursa Merkez Koordinatları
const LAT = 40.1828;
const LON = 29.0667;

// Koordinatları EXIF formatına (Rational) çeviren yardımcı fonksiyon
function degToExif(deg) {
  const absolute = Math.abs(deg);
  const d = Math.floor(absolute);
  const m = Math.floor((absolute - d) * 60);
  const s = Math.round((absolute - d - m / 60) * 3600 * 100);
  return [[d, 1], [m, 1], [s, 100]];
}

const gpsIfd = {};
gpsIfd[piexif.GPSIFD.GPSLatitudeRef] = LAT >= 0 ? 'N' : 'S';
gpsIfd[piexif.GPSIFD.GPSLatitude] = degToExif(LAT);
gpsIfd[piexif.GPSIFD.GPSLongitudeRef] = LON >= 0 ? 'E' : 'W';
gpsIfd[piexif.GPSIFD.GPSLongitude] = degToExif(LON);

const exifObj = { "GPS": gpsIfd, "0th": {}, "Exif": {} };

// İşletme bilgilerini ve anahtar kelimeleri ekleyelim
exifObj["0th"][piexif.ImageIFD.ImageDescription] = "Bursa Kiralık Asansör - Mobil Asansör Kiralama ve Evden Eve Nakliyat";
exifObj["0th"][piexif.ImageIFD.Make] = "CNC Bursa";
exifObj["0th"][piexif.ImageIFD.Software] = "Bursa Kiralık Asansör SEO Optimizer";
exifObj["Exif"][piexif.ExifIFD.UserComment] = "Bursa mobil asansör kiralama hizmeti, 15. kata kadar erişim.";

const exifBytes = piexif.dump(exifObj);

const targetDirs = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/images'),
  path.join(__dirname, '../public/images/references')
];

function processImages(directory) {
  if (!fs.existsSync(directory)) return;

  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.jpg' || ext === '.jpeg') {
      try {
        const imageData = fs.readFileSync(fullPath).toString("binary");
        const newImageData = piexif.insert(exifBytes, imageData);
        const newBuffer = Buffer.from(newImageData, "binary");
        fs.writeFileSync(fullPath, newBuffer);
        console.log(`✅ Geotagged: ${file}`);
      } catch (e) {
        console.error(`❌ Error processing ${file}:`, e.message);
      }
    }
  });
}

console.log("🚀 Görsel Geotagging işlemi başlıyor...");
targetDirs.forEach(dir => processImages(dir));
console.log("✨ İşlem tamamlandı.");
