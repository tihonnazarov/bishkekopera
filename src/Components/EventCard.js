import React from 'react';
import {useTranslation} from "react-i18next";

const EventCard = ({ title, date, imageUrl, price }) => {
    const {t} = useTranslation()
    return (
        <div className="mx-auto bg-white overflow-hidden border-b border-gray-300 text-center md:text-start font-your-font w-full">
            <h2 className="mb-8 font-bold text-2xl">{date}</h2>
            <div className="hover:text-white text-white md:text-black bt z-10 h-[167px]">
                <img src={imageUrl} alt={title} className="absolute border w-[1536px] h-[167px] object-cover border-black md:opacity-0 opacity-100" />
                <div className="z-0">
                    <h2 className="p-2 relative text-xl font-semibold w-4 whitespace-nowrap">{title}</h2>
                    <p className="p1 pl-2 pb-3 relative text-[#01c001] font-bold md:text-white w-[78px]">{price} сом</p>
                    <button className="btt relative ml-2 p-2 rounded-md font-bold opacity-100 md:opacity-0">
                        {t("Buy")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;


