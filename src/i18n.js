import ru from './translate/ru.json'
import kgs from './translate/kgs.json'

import {initReactI18next} from "react-i18next";
import i18n from "i18next";

const resources = {
    ru: {
        translation: ru,
    },
    kgs: {
        translation: kgs,
    },
}

async function initializeI18n() {
    await i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: JSON.parse(localStorage.getItem('language')),
            fallbackLng: 'ru'
        });
}

initializeI18n()
    .then(() => {
        // Теперь вы можете продолжить с использованием i18n
    })
    .catch((error) => {
        console.error('Ошибка инициализации i18n:', error);
    });

export default i18n;