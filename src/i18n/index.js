import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import ptBrTranslation from "./locale/pt-BR/pt-BR.json";
import esESTranslation from "./locale/es-ES/es-ES.json";
import engTranslation from "./locale/en-US/en-US.json";
import jaTranslation from "./locale/ja/ja.json";

i18n.use(initReactI18next).init({
    debug: true,
    lng: 'pt-BR', // Idioma padrão
    fallbackLng: 'pt-BR', // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz a sanitização
    }, resources: {
        pt: {
            ...ptBrTranslation
        },
        es: {
            ...esESTranslation
        },
        en: {
            ...engTranslation
        },
        ja:{
            ...jaTranslation
        }
        
    },  
    react: {
        wait: true,
    }
})

export default i18n;