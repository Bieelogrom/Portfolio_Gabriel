import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import ptBrTranslation from "./locale/pt-BR/pt-BR.json";
import esESTranslation from "./locale/es-ES/es-ES.json";

i18n.use(initReactI18next).init({
    debug: true,
    lng: 'pt-BR',
    interpolation: {
        escapeValue: false,
    }, resources: {
        pt: {
            ...ptBrTranslation
        },
        es: {
            ...esESTranslation
        },
        
    },  
    react: {
        wait: true,
    }
})

export default i18n;