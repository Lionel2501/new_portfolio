// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from "./es.json"
import fr from "./fr.json"
import en from "./en.json"

// Definición de las traducciones
const resources = {
    es: { translation: es },
    en: { translation: en },
    fr: { translation: fr }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador o localStorage
  .use(initReactI18next) // Configura i18next con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si no se detecta o no está disponible el idioma del usuario
    interpolation: {
      escapeValue: false // React ya escapa los valores
    }
  });

export default i18n;
