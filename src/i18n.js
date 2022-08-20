import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// //local imports
import en from './Localization/en.json';
import ar from './Localization/ar.json';




let language = JSON.parse(localStorage.getItem('lang')) || 'en';

if (language === undefined) {
  language = 'ar';
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: { translations: en },
      ar: { translations: ar },
    },
    lng: language,
    // fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/Localization/{{en,ar}}.json',
    },
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: false,
      wait: true,
    },
  });

export default i18n;