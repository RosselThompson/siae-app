import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from 'locales/es/translations.json';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      translation: translationES,
    },
  },
});
export default i18n;
