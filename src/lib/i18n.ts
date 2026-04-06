"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

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
    
    // SSR/SSG sırasında donmayı engellemek için senkron bekleme
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
