import React from 'react';
import EventCard from './EventCard';

const EventGrid = ({ events }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {events.map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    date={event.date}
                    imageUrl={event.imageUrl}
                    price={event.price}
                />
            ))}
        </div>
    );
};

export default EventGrid;
