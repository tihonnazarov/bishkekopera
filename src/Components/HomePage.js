import React, { useEffect } from 'react';
import trndt from '../assets/trndt.jpg'
import gala from '../assets/gala_koncert1697353125.jpg'
import vecher from '../assets/aybolit_i_barmaley.jpg'
import konc from '../assets/lebedinoe_ozero.jpg'
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const {t} = useTranslation()
    const showData = [
        {
            id: 1,
            title: 'Загадка Турандот',
            image: trndt,
            text: 'Мюзикл по мотивам пьесы Карло Гоцци. Музыка Владимира Назарова',
            date: '28-29 Октября'
        },
        {
            id: 2,
            title: 'Гала концерт',
            image: gala,
            text: 'Солисты и артисты балетной труппы исполнят номера из балетов мировой классики - произведения П.Чайковского, Л.Минкуса, А.Адана, Б.Асафьева, М.Раухвергера, Ф.Шопена.',
            date: '22 Октября'
        },
        {
            id: 3,
            title: 'Айболит и Бармалей',
            image: vecher,
            text: 'Вечер памяти выдающегося оперного певца, народного артиста КР Сталбека Алмасбекова, посвященный 70-летию со дня рождения',
            date: '26 Октября'
        },
        {
            id: 4,
            title: 'Лебединое озеро',
            image: konc,
            text: 'Концерт струнного квартета симфонического оркестра Кыргызского национального академического театра оперы и балета имени А.Малдыбаева. Талантливые и виртуозные музыканты',
            date: '1 Ноября'
        },

    ];
    return (
        <div className="element">
            <div className="font-your-font bbb h-auto md:h-screen mt-8">
                    <section className="container mx-auto">
                        <div className="flex justify-center items-center gap-2">
                            <h2 className="text-2xl font-bold mb-8 text-center mt-16 text-white">{t("Coming")}</h2>
                            <p className="text-gray-400 mt-8 font-bold text-2xl">{t("Events")}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 laptop:grid-cols-4 gap-6 text-white">
                            {showData.map((show) => (
                                <div key={show.id} className="p-4">
                                    <img
                                        src={show.image}
                                        alt={show.title}
                                        className="md:text-center md:w-[400px] md:h-[450px] w-[210px] h-[280px] bg-cover rounded-lg mx-auto"
                                    />
                                    <div className="flex md:justify-between justify-center md:gap-1 gap-4">
                                        <h3 className="text-xl font-semibold mt-4 w-50">{show.title}</h3>
                                        <h3 className="text-xl font-semibold mt-4 whitespace-nowrap">{show.date}</h3>
                                    </div>
                                    <div className="text-center mt-6">
                                        <Link to="/tickets" className="w-40 bg-white text-black hover:bg-black hover:bg-opacity-40 hover:text-white duration-300 px-4 py-2 rounded border border-white font-bold">{t('Buy')}</Link>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </section>
                </div>
            </div>
    );
};

export default HomePage;



