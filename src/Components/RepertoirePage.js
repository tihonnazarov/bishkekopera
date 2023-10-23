
import React, {useEffect} from 'react';
import EventGrid from './EventGrid'
import ten from '../assets/1600x1200-dead-man2.jpg'
import boheme from '../assets/boheme-1600x1200-2.jpg'
import sss from '../assets/min.jpg'
import ddd from '../assets/theatre.jpg'



function Repertoire() {
    useEffect(() => {
        // Прокрутить страницу в верхнюю часть при монтировании компонента
        window.scrollTo(0, 0);
    }, []);
    const eventsData = [
        {
            title: 'Турандот',
            date: '12 ноября, 2023',
            imageUrl: ten,
            price: 1500,
        },
        {
            title: 'Травиата',
            date: '13 ноября, 2023',
            imageUrl: ddd,
            price: 1200,
        },
        {
            title: 'Айболит и бармолей',
            date: '14 ноября, 2023',
            imageUrl: sss,
            price: 1200,
        },
        {
            title: 'Ночь в театре',
            date: '15 ноября, 2023',
            imageUrl: boheme,
            price: 1200,
        },

    ];

    return (
        <div className="container mx-auto mt-20 pb-4">
            <h1 className="text-3xl font-semibold mb-4 text-center border-b border-gray-300 p-8 font-your-font">Репертуар</h1>
            <EventGrid events={eventsData} />
        </div>
    );
}

export default Repertoire;
