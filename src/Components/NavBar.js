import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useTranslation} from "react-i18next";
import useLocalStorage from "../hooks/useLocalStorage";
import i18n from "../i18n";

const NavBar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    const {t} = useTranslation()
    const [language, setLanguage] = useLocalStorage('language', 'ru')

    const handleLanguageChange = () => {
        if (language === 'ru') {
            i18n.changeLanguage('kgs')
                .then(() => {
                    setLanguage('kgs');
                })
                .catch((error) => {
                    console.error('Ошибка смены языка:', error);
                });
        } else if (language === 'kgs') {
            i18n.changeLanguage('ru')
                .then(() => {
                    setLanguage('ru');
                })
                .catch((error) => {
                    console.error('Ошибка смены языка:', error);
                });
        }
    }


    return (
        <nav className="fixed top-0 left-0 right-0 bg-white p-4 border-b border-black font-your-font">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-black text-[16px] md:text-xl font-bold hover:underline">{t('OPERA AND BALLET THEATER NAMED AFTER A. MALDIBAEVA')}</Link>
                <ul className="hidden md:flex space-x-6 ">
                    <li>
                        <Link to="/" className="text-black hover:underline">{t('Main')}</Link>
                    </li>
                    <li>
                        <Link to="/repertoire" className="text-black hover:underline">Репертуар</Link>
                    </li>
                    <li>
                        <a href="https://www.ticket.kg/place/teatr-opery-i-baleta" className="text-black hover:underline">{t('Buy tickets')}</a>
                    </li>
                    <li>
                        <Link to="/events-calendar" className="text-black hover:underline">{t('Info')}</Link>
                    </li>
                    <li className="flex gap-1">
                        <button onClick={handleLanguageChange}>{t('')} {language === 'ru' ? t('Кыргызча') : t('Русский')}</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                        </svg>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

                </div>
                <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-10" : "fixed left-[-400%] h-full ease-in-out duration-500"}>
                    <h1 className="md:w-full w-1/4 text-black text-xl md:text-xl font-bold m-4">{t('OPERA AND BALLET THEATER NAMED AFTER A. MALDIBAEVA')}</h1>
                    <ul className="p-4 uppercase">
                        <li className="p-4 border-b border-black">
                            <Link to="/" className="text-black hover:underline">{t('Main')}</Link>
                        </li>
                        <li className="p-4 border-b border-black">
                            <Link to="/repertoire" className="text-black hover:underline">Репертуар</Link>
                        </li>
                        <li className="p-4 border-b border-black">
                            <a href="https://www.ticket.kg/place/teatr-opery-i-baleta" className="text-black hover:underline">{t('Buy tickets')}</a>
                        </li>
                        <li className="p-4 border-b border-black">
                            <Link to="/events-calendar" className="text-black hover:underline">{t('Info')}</Link>
                        </li>
                        <li className="p-4 border-b border-black flex gap-1">
                            <button onClick={handleLanguageChange}>{t('')} {language === 'ru' ? t('Кыргызча') : t('Русский')}</button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
