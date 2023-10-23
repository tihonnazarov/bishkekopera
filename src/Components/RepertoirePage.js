
import React from 'react';
import EventGrid from './EventGrid'
import ten from '../assets/1600x1200-dead-man2.jpg'
import boheme from '../assets/boheme-1600x1200-2.jpg'
function Repertoire() {
    const eventsData = [
        {
            title: 'Ввыфвфвф',
            date: '12 ноября, 2023',
            imageUrl: ten,
            price: 1500,
        },
        {
            title: 'Пвывф',
            date: '13 ноября, 2023',
            imageUrl: boheme,
            price: 1200,
        },

    ];

    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-3xl font-semibold mb-4 text-center">Репертуар</h1>
            <EventGrid events={eventsData} />
        </div>
    );
}

export default Repertoire;
