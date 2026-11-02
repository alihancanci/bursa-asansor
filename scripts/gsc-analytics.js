const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const keyPath = path.resolve(__dirname, "../service-account.json");

if (!fs.existsSync(keyPath)) {
  console.error("Hata: service-account.json bulunamadı!");
  process.exit(1);
}

const auth = new google.auth.GoogleAuth({
  keyFile: keyPath,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"]
});

async function fetchGSC() {
  try {
    const client = await auth.getClient();
    const searchconsole = google.searchconsole({ version: "v1", auth: client });

    const today = new Date();
    // GSC son 2 günü gecikmeli verir
    const end = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const start = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const siteUrl = "sc-domain:bursakiralikasansor.com";

    // 1. En çok tıklanan ve gösterim alan sorgular
    const queryRes = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: start,
        endDate: end,
        dimensions: ["query"],
        rowLimit: 100
      }
    });

    // 2. En çok tıklanan sayfalar
    const pageRes = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: start,
        endDate: end,
        dimensions: ["page"],
        rowLimit: 50
      }
    });

    const queries = queryRes.data.rows || [];
    const pages = pageRes.data.rows || [];

    console.log(`\n======================================================`);
    console.log(`📊 GSC CANLI VERİ RAPORU (${start} - ${end})`);
    console.log(`======================================================\n`);

    console.log(`🏆 EN ÇOK TIKLANAN SORGULAR:`);
    queries
      .filter(q => q.clicks > 0)
      .sort((a, b) => b.clicks - a.clicks)
      .forEach(q => {
        console.log(`- "${q.keys[0]}": ${q.clicks} tık | ${q.impressions} gösterim | CTR: %${(q.ctr * 100).toFixed(1)} | Sıra: ${q.position.toFixed(1)}`);
      });

    console.log(`\n🎯 FIRSAT SORGULARI (1. ve 2. Sayfada, Gösterim > 15 ama Tık Az/Yok):`);
    queries
      .filter(q => q.position <= 20 && q.impressions >= 15 && q.clicks <= 1)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 10)
      .forEach(q => {
        console.log(`- "${q.keys[0]}": ${q.impressions} gösterim | ${q.clicks} tık | Sıra: ${q.position.toFixed(1)}`);
      });

    console.log(`\n📄 EN ÇOK TRAFİK ALAN SAYFALAR:`);
    pages
      .filter(p => p.clicks > 0)
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10)
      .forEach(p => {
        console.log(`- ${p.keys[0]}: ${p.clicks} tık | ${p.impressions} gösterim | Sıra: ${p.position.toFixed(1)}`);
      });

  } catch (err) {
    console.error("GSC API Hatası:", err.message);
  }
}

fetchGSC();
