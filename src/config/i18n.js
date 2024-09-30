// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Definición de las traducciones
const resources = {
    en: {
        translation: {
            "presentation": {
                "card_title": "¡Hola! Soy Lionel,",
                "card_text_1": "Comencé a programar en 2019 de manera autodidacta, antes de estudiar en la UNICEN de Tandil.",
                "card_text_2": "Tengo experiencia en el desarrollo de sistemas, tanto en front-end como en back-end.",
                "card_text_3": "Desliza el contenido para descubrir más sobre mis habilidades y experiencia.",
            },
            "tecnologies": {
                "card_title": "Ya sea en la facultad, por curiosidad o de manera profesional, he tenido la oportunidad de trabajar con distintas tecnologías de desarrollo. A continuación, pueden acceder a más información haciendo click sobre cada una.",
            },
            "experience_arteyparte": {
                "title": "Desarrollador Web",
                "fecha": "2021"
            },
            "experience_grupoagni": {
                "title": "Experiencia",
                "fecha": "¡Hola! Soy Lionel,",
            },
            "experience_wippie": {
                "title": "Experiencia",
                "fecha": "¡Hola! Soy Lionel,"
            },
            "contact": {
                "title": "Mensaje",
                "name": "Nombre *",
                "email": "Email *",
                "subjet": "Asunto",
                "message": "Mensaje *",
                "button_send": "Enviar",
                "download": "Descargar CV"
            },
            "global": {
                "presentation": "Presentatión",
                "tecnologies": "Tecnologias",
                "experience": "Experiencia",
                "contact": "CONTACTAR",
                "subtitle": "Desarollador Full Stack basado en Argentina",
                "button": "leer más",
            },
        }
    },
    es: {
        translation: {
            "presentation": {
                "card_title": "¡Hola! Soy Lionel,",
                "card_text_1": "Comencé a programar en 2019 de manera autodidacta, antes de estudiar en la UNICEN de Tandil.",
                "card_text_2": "Tengo experiencia en el desarrollo de sistemas, tanto en front-end como en back-end.",
                "card_text_3": "Desliza el contenido para descubrir más sobre mis habilidades y experiencia.",
            },
            "tecnologies": {
                "card_title": "Ya sea en la facultad, por curiosidad o de manera profesional, he tenido la oportunidad de trabajar con distintas tecnologías de desarrollo. A continuación, pueden acceder a más información haciendo click sobre cada una.",
            },
            "experience_arteyparte": {
                "title": "Desarrollador Web",
                "fecha": "2021"
            },
            "experience_grupoagni": {
                "title": "Experiencia",
                "fecha": "¡Hola! Soy Lionel,",
            },
            "experience_wippie": {
                "title": "Experiencia",
                "fecha": "¡Hola! Soy Lionel,"
            },
            "contact": {
                "title": "Mensaje",
                "name": "Nombre *",
                "email": "Email *",
                "subjet": "Asunto",
                "message": "Mensaje *",
                "button_send": "Enviar",
                "download": "Descargar CV"
            },
            "global": {
                "presentation": "Presentatión",
                "tecnologies": "Tecnologias",
                "experience": "Experiencia",
                "contact": "CONTACTAR",
                "subtitle": "Desarollador Full Stack basado en Argentina",
                "button": "leer más",
            },
        }
    },
    fr: {
        translation: {
            "presentation": {
                "card_title": "¡Hola! Soy Lionel,",
                "card_text_1": "Comencé a programar en 2019 de manera autodidacta, antes de estudiar en la UNICEN de Tandil.",
                "card_text_2": "Tengo experiencia en el desarrollo de sistemas, tanto en front-end como en back-end.",
                "card_text_3": "Desliza el contenido para descubrir más sobre mis habilidades y experiencia.",
            },
            "tecnologies": {
                "card_title": "Ya sea en la facultad, por curiosidad o de manera profesional, he tenido la oportunidad de trabajar con distintas tecnologías de desarrollo. A continuación, pueden acceder a más información haciendo click sobre cada una.",
            },
            "experience_arteyparte": {
                "title": "Desarrollador Web",
                "fecha": "2021"
            },
            "experience_grupoagni": {
                "title": "Experiencia",
                "fecha": "¡Hola! Soy Lionel,",
            },
            "experience_wippie": {
                "title": "Experiencia",
                "fecha": "¡Hola! Soy Lionel,"
            },
            "contact": {
                "title": "Mensaje",
                "name": "Nombre *",
                "email": "Email *",
                "subjet": "Asunto",
                "message": "Mensaje *",
                "button_send": "Enviar",
                "download": "Descargar CV"
            },
            "global": {
                "presentation": "Presentatión",
                "tecnologies": "Tecnologias",
                "experience": "Experiencia",
                "contact": "CONTACTAR",
                "subtitle": "Desarollador Full Stack basado en Argentina",
                "button": "leer más",
            },
        }
    },
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
