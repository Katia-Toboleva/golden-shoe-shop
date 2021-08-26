import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './index';

const config = {
  resources: {
    en: {
      translation: en,
    },
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
};

i18n
  .use(initReactI18next)
  .init(config);

export default i18n;
