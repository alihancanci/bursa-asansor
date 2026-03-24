import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations via http (default fetch /locales/{{lng}}/{{ns}}.json)
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    fallbackLng: 'tr',
    supportedLngs: ['tr', 'en', 'ar', 'ru'],
    debug: false,
    
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },

    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // cache user language on localStorage
    }
  });

// Setup dynamic RTL direction change
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = i18n.dir(lng);
  
  if (lng === 'ar') {
    document.body.classList.add('rtl-active');
  } else {
    document.body.classList.remove('rtl-active');
  }
});

export default i18n;
