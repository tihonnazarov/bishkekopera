import React from 'react';
import noch from '../assets/noch_v_teatre1695812989.jpg'
import gala from '../assets/gala_koncert1697353125.jpg'
import vecher from '../assets/vecher_pamyati_stalb1697635478.jpg'
import konc from '../assets/koncert_strunnogo_kv1675348718.png'
const HomePage = () => {
    const showData = [
        {
            id: 1,
            title: 'Ночь в театре',
            image: noch,
            text: 'Волшебную ночь, наполненную чарующими звуками классической музыки, гармонией, пластическими балетными формами и изысканными линиями подарят своим зрителям артисты Кыргызского национального академического театра оперы и балета имени А.Малдыбаева! Ждем всех горожан и гостей столицы на незабываемую "Ночь в театре".',
            date: '22 Октября'
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
            title: 'Вечер памяти Сталбека Алмасбекова',
            image: vecher,
            text: 'Вечер памяти выдающегося оперного певца, народного артиста КР Сталбека Алмасбекова, посвященный 70-летию со дня рождения',
            date: '26 Октября'
        },
        {
            id: 4,
            title: 'Концерт струнного квартета симфонического оркестра',
            image: konc,
            text: 'Концерт струнного квартета симфонического оркестра Кыргызского национального академического театра оперы и балета имени А.Малдыбаева. Талантливые и виртуозные музыканты',
            date: '1 Ноября'
        },

    ];

    return (
        <div className="font-your-font bbb h-screen mt-8">
            <section className="container mx-auto">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-2xl font-bold mb-8 text-center mt-16 text-white">Грядущие</h2>
                    <p className="text-gray-400 mt-8 font-bold text-2xl">события</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
                    {showData.map((show) => (
                        <div key={show.id} className="bg-black bg-opacity-60 p-4 border-black border">
                            <img
                                src={show.image}
                                alt={show.title}
                                className="hidden md:block w-full h-[420px] object-cover rounded-lg"
                            />
                            <div className="flex justify-between ">
                                <h3 className="text-xl font-semibold mt-4">{show.title}</h3>
                                <h3 className="text-xl font-semibold mt-4 whitespace-nowrap">{show.date}</h3>
                            </div>

                            <p className="mt-2">{show.text}</p>
                            <div className="mt-4 text-center top-0 left-0 right-0">
                                <a href="https://www.ticket.kg/place/teatr-opery-i-baleta" className="bg-white text-black hover:bg-black hover:bg-opacity-40 hover:text-white duration-300 px-4 py-2 rounded border border-white">
                                    Купить билет
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;


