"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Inline Turkish translations so SSR and client render the same initial content
const trTranslations = {
  nav: {
    home: "Ana Sayfa",
    services: "Hizmetlerimiz",
    districts: "Hizmet Bölgeleri",
    blog: "Blog & Rehber",
    contact: "İletişim",
    subtitle: "Kiralama Hizmetleri"
  },
  hero: {
    title1: "Bursa'nın Lider",
    title2: "Kiralık Asansör ve Nakliyat",
    title3: "Kiralama Firması",
    subtitle: "Dar sokaklar, yüksek binalar dert değil! 15. kata kadar güvenli ve hızlı mobil asansör kiralama ve nakliyat çözümleri sunuyoruz.",
    cta_call: "Hemen Ara Fiyat Al",
    cta_whatsapp: "WhatsApp'tan Teklif İste",
    image_alt: "Bursa Kiralık Asansör ve Nakliyat Kiralama Hizmeti"
  },
  features: {
    f1_title: "15. Kata Kadar",
    f1_desc: "Güvenli yükseklik",
    f1_subdesc: "Yüksek katlara güvenli erişim.",
    f2_title: "7/24 Hizmet",
    f2_desc: "Kesintisiz destek",
    f3_title: "Uzman Operatör",
    f3_desc: "Sıfır iş kazası",
    f3_subdesc: "Uzman personel her zaman asansörün başında.",
    f4_title: "Uygun Fiyat",
    f4_desc: "Garantili hizmet"
  },
  footer: {
    desc: "Bursa ve çevre illerde profesyonel asansör kiralama ve evden eve nakliyat hizmetleri.",
    elevator_services: "Kiralık Asansör",
    moving_services: "Nakliyat Hizmetleri",
    rights: "Tüm hakları saklıdır."
  },
  common: {
    view_all: "Tümünü Gör",
    call_now: "Hemen Ara",
    whatsapp_message: "WhatsApp'tan Yaz",
    service_rules: "Hizmet Kurallarımız",
    faq: "Sıkça Sorulan Sorular",
    tags: "Etiketler",
    read_more: "Devamını Oku",
    select_language: "Dil Seçin"
  },
  service_page: {
    category_elevator_desc: "{{district}} bölgesindeki yapıların çoğunlukla dar balkon girişlerine veya yüksek katlı mimariye sahip olduğunun bilincindeyiz. Bu yüzden asansör kurulumu öncesinde çevre güvenliğini sağlıyor ve mobilyalarınızın binanın iç asansörüne sığmadığı durumlarda dış cepheden %100 güvenli transfer gerçekleştiriyoruz.",
    category_moving_desc: "{{district}} lokasyonunda nakliye sürecini planlarken sadece eşya taşımıyor, bölgenin trafik saatlerini ve park yasaklarını da hesaba katıyoruz. Deneyimli ekibimizle eşyalarınızı paketliyor, asansörlü sistemimizle sıfır riskle yeni adresinize ulaştırıyoruz.",
    regional_survey: "Bölgesel Keşif Dahil",
    fast_fleet: "Hızlı Geniş Araç Filosu"
  },
  home: {
    active_in_all: "Bursa ve Tüm İlçelerinde Aktif",
    services_title: "Bursa Kiralık Asansör ve Nakliyat Hizmetleri",
    services_desc: "İhtiyacınıza uygun mobil asansör çözümleriyle yanınızdayız.",
    why_choose_us: "Neden Bizi Tercih Etmelisiniz?",
    trust_p1: "Bursa'da uzun yıllara dayanan lojistik ve taşıma tecrübemizle, müşterilerimize <strong>en sorunsuz ve profesyonel</strong> kiralık mobil asansör hizmetini sunuyoruz.",
    trust_p2: "Klasik yöntemlerin aksine; eşyalarınızı merdiven dairesine sokmadan, duvarları çizmeden ve eşyalarınıza zarar vermeden doğrudan taşıma işlemini gerçekleştiriyoruz. Üstelik <strong>15. kata kadar çıkar</strong> kapasitemizle yüksek binalarda bile kolaylık sağlıyoruz.",
    trust_p3: "İhtiyaç duymanız halinde sadece asansör değil, <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>. İşimizi ciddiye alıyoruz: Tam saatinde oluruz, özenli çalışırız, makinelerimiz bakımlıdır ve iş güvenliğine dikkat ederiz.",
    up_to_floor: "Kata Kadar<br/>Erişim",
    operator_control: "Operatör<br/>Kontrolü",
    active_network: "İlçede<br/>Aktif Ağ",
    free_appraisal: "Ücretsiz<br/>Ekspertiz",
    customer_sat: "Hasar<br/>Garantisi",
    service_network: "Hizmet Ağımız",
    service_network_desc: "Türkiye'nin en aktif çalışan asansörlü nakliyat ağıyla, her noktadayız.",
    districts_desc: "Bursa'nın tüm ilçelerine en kısa sürede mobil asansör ulaştırıyoruz.",
    view_all_services: "Tüm Asansörlü Nakliyat Hizmetlerimizi Gör"
  },
  references: {
    title: "Çalışmalarımız",
    subtitle: "Bursa'nın her köşesinde, her gün onlarca mutlu müşteri ve başarılı taşıma.",
    view_all: "Tüm Çalışmalarımızı Gör",
    items: {
      ref1_title: "Yüksek Kat Asansör Kurulumu",
      ref1_desc: "Nilüfer bölgesinde 12. kata kadar uzanan güvenli mobil asansör kurulumumuz.",
      ref2_title: "Gece Asansörlü Taşımacılık",
      ref2_desc: "Osmangazi'de trafik yoğunluğu olmadan gerçekleştirilen gece transferi.",
      ref3_title: "Hassas Eşya Taşıma Asansörü",
      ref3_desc: "Yıldırım ilçesinde dar balkonlardan mobilya transferi uygulamamız.",
      ref4_title: "Kurumsal ve Güvenli Hizmet",
      ref4_desc: "Bursa merkezde bayrağımızla gururla sunduğumuz asansörlü nakliyat hizmeti."
    }
  }
};

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector);
}

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'tr',
    supportedLngs: ['tr', 'en', 'ar', 'ru'],
    debug: false,
    lng: 'tr',

    // Provide Turkish translations inline so SSR matches client
    resources: {
      tr: { translation: trTranslations }
    },

    // Still allow loading other languages from backend
    partialBundledLanguages: true,
    
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    
    react: {
      useSuspense: false,
    },
  });

// Setup dynamic RTL direction change
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
    document.documentElement.dir = i18n.dir(lng);
    
    if (lng === 'ar') {
      document.body.classList.add('rtl-active');
    } else {
      document.body.classList.remove('rtl-active');
    }
  }
});

export default i18n;
