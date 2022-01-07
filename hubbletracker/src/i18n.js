import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  sk: {
    translation: {
      "About": "Ohľadom",
      "Hubble's view": "Hubblov pohľad",
      "Astronomical Picture of the Day": "Astronomický obrázok dňa",
      "Gallery":"Galéria",
      "Where is Hubble now?":"Kde je Hubble?",
      'Hubble is acquiring new target': "Hubble práve získava nový cieľ",
      'Between': 'Medzi',
      'and': 'a',
      'on': "dňa",
      "with": "pomocou",
      "for": "na požiadavku od",
      "Hubble is looking at": "Hubble čumí na",
      "Please, wait. Retrieving data": "Počkajte, prosím, získavam dáta."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "sk",
    lng: "en",
    compatibilityJSON: 'v3'
  });

  export default i18n;