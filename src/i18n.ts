import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPL from 'i18n/basePl.json';


const resources = {
    pl: {
        translation: translationPL
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pl',

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
