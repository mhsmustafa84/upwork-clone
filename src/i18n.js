import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// //local imports
import en from './Localization/en.json';
import ar from './Localization/ar.json';




let language=JSON.parse(localStorage.getItem('lang'));
console.log(language);
if (language === undefined) {
  language = 'ar';
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: en },
    ar: { translations: ar },
  },
  lng: language,
  fallbackLng: language,
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
    wait: true,
  },
});

export default i18n;