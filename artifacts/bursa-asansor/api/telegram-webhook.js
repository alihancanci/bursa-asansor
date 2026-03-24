// Telegram webhook — Vercel Serverless Function
// Endpoint: POST /api/telegram-webhook
//
// Set these in Vercel → Project → Settings → Environment Variables:
//   TELEGRAM_BOT_TOKEN  — from @BotFather
//   AIRTABLE_API_KEY    — Airtable personal access token
//   AIRTABLE_BASE_ID    — e.g. "appXXXXXXXX"
//   AIRTABLE_TABLE_NAME — (optional, default: "Operasyonlar")
//
// Register the webhook once:
//   curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://bursakiralikasansor.com/api/telegram-webhook"

const BOT_TOKEN    = process.env.TELEGRAM_BOT_TOKEN;
const BASE_ID      = process.env.AIRTABLE_BASE_ID;
const API_KEY      = process.env.AIRTABLE_API_KEY;
const TABLE_NAME   = process.env.AIRTABLE_TABLE_NAME || 'Operasyonlar';

// Slug → Display name lookup (mirrors src/data.ts districts)
const DISTRICT_NAMES = {
  'osmangazi':          'Osmangazi',
  'nilufer':            'Nilüfer',
  'yildirim':           'Yıldırım',
  'bursa-merkez':       'Bursa Merkez',
  'gemlik':             'Gemlik',
  'mudanya':            'Mudanya',
  'inegol':             'İnegöl',
  'kestel':             'Kestel',
  'gursu':              'Gürsu',
  'karacabey':          'Karacabey',
  'mustafakemalpasa':   'Mustafakemalpaşa',
  'orhangazi':          'Orhangazi',
  'yenisehir':          'Yenişehir',
  'iznik':              'İznik',
  'orhaneli':           'Orhaneli',
  'keles':              'Keles',
  'harmancik':          'Harmancık',
  'buyukorhan':         'Büyükorhan',
};

// In-memory conversation state (resets on cold start — fine for low volume)
const sessions = {};

async function sendMessage(chatId, text, extra = {}) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', ...extra }),
  });
}

async function getPhotoUrl(fileId) {
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`);
  const data = await res.json();
  return `https://api.telegram.org/file/bot${BOT_TOKEN}/${data.result.file_path}`;
}

async function saveToAirtable(record) {
  const districtName = DISTRICT_NAMES[record.district] || record.district;
  const seoAltText   = `Bursa ${districtName} ${record.neighborhood} kiralık mobil asansör kurulumu`;

  const url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization:  `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        photoUrl:     record.photoUrl,
        district:     record.district,
        districtName,
        neighborhood: record.neighborhood,
        description:  record.description,
        timestamp:    new Date().toISOString(),
        seoAltText,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Airtable save failed: ${err}`);
  }
  return res.json();
}

async function handleUpdate(update) {
  const msg    = update.message;
  if (!msg) return;

  const chatId = msg.chat.id;
  const text   = msg.text?.trim();
  const photo  = msg.photo;

  // Initialize session
  if (!sessions[chatId]) sessions[chatId] = { step: 'idle' };
  const session = sessions[chatId];

  // --- Start command ---
  if (text === '/start' || text === '/yenioperasyon') {
    sessions[chatId] = { step: 'await_district' };

    const districtList = Object.entries(DISTRICT_NAMES)
      .map(([slug, name]) => `• <code>${slug}</code> → ${name}`)
      .join('\n');

    await sendMessage(chatId,
      `🏗️ <b>Yeni Operasyon Kaydı</b>\n\nAdım 1/4: İlçe slug'ını girin:\n\n${districtList}`
    );
    return;
  }

  // --- List last 5 ---
  if (text === '/listele') {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}?sort[0][field]=timestamp&sort[0][direction]=desc&pageSize=5`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${API_KEY}` } });
    const data = await res.json();
    
    if (!data.records?.length) {
      await sendMessage(chatId, 'Henüz kayıtlı operasyon yok.');
      return;
    }

    const lines = data.records.map(r => {
      const f = r.fields;
      return `📍 <b>${f.districtName} - ${f.neighborhood}</b>\n${f.description || '—'}\n🕒 ${f.timestamp ? new Date(f.timestamp).toLocaleDateString('tr-TR') : '—'}`;
    }).join('\n\n');

    await sendMessage(chatId, lines);
    return;
  }

  // --- Flow steps ---
  if (session.step === 'await_district') {
    const slug = text?.toLowerCase().replace(/\s+/g, '-');
    if (!DISTRICT_NAMES[slug]) {
      await sendMessage(chatId, `⚠️ Geçersiz ilçe. Lütfen listeden bir slug girin.`);
      return;
    }
    session.district = slug;
    session.step = 'await_neighborhood';
    await sendMessage(chatId, `✅ İlçe: <b>${DISTRICT_NAMES[slug]}</b>\n\nAdım 2/4: Mahalle adını girin (ör: Fethiye, Çekirge):`);
    return;
  }

  if (session.step === 'await_neighborhood') {
    session.neighborhood = text;
    session.step = 'await_description';
    await sendMessage(chatId, `✅ Mahalle: <b>${text}</b>\n\nAdım 3/4: Açıklama girin (iş detayı, kat bilgisi vb.):`);
    return;
  }

  if (session.step === 'await_description') {
    session.description = text;
    session.step = 'await_photo';
    await sendMessage(chatId, `✅ Açıklama kaydedildi.\n\nAdım 4/4: Fotoğrafı gönderin.`);
    return;
  }

  if (session.step === 'await_photo') {
    if (!photo) {
      await sendMessage(chatId, '📸 Lütfen bir fotoğraf gönderin (dosya değil, fotoğraf olarak).');
      return;
    }

    // Get highest quality photo
    const bestPhoto = photo[photo.length - 1];
    const photoUrl  = await getPhotoUrl(bestPhoto.file_id);

    try {
      await saveToAirtable({
        photoUrl,
        district:     session.district,
        neighborhood: session.neighborhood,
        description:  session.description,
      });

      sessions[chatId] = { step: 'idle' };

      await sendMessage(chatId,
        `🎉 <b>Operasyon kaydedildi!</b>\n\n` +
        `📍 ${DISTRICT_NAMES[session.district]} - ${session.neighborhood}\n` +
        `📝 ${session.description}\n` +
        `📸 Fotoğraf Airtable'a eklendi.\n\n` +
        `Yeni kayıt için /yenioperasyon`
      );
    } catch (err) {
      await sendMessage(chatId, `❌ Kayıt sırasında hata: ${err.message}`);
    }
    return;
  }

  // Default
  await sendMessage(chatId, 'Yeni operasyon kaydetmek için /yenioperasyon, listelemek için /listele');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await handleUpdate(req.body);
  } catch (err) {
    console.error('Webhook error:', err);
  }

  // Always return 200 to Telegram so it doesn't retry
  res.status(200).json({ ok: true });
}
