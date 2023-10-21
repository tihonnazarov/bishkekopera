import React from 'react';

const EventCard = ({ title, date, imageUrl, price }) => {
    return (
        <div className="mx-auto bg-white overflow-hidden border-b border-black md:w-full w-[450px] text-center md:text-start">
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover border border-black" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-500">{date}</p>
                <p className="text-green-500 font-semibold">{price} сом</p>
                <button className="mt-4 py-2 px-4 bg-black hover:bg-white hover:text-black text-white rounded-md ">
                    Buy Tickets
                </button>
            </div>
        </div>
    );
};

export default EventCard;


