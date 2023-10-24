import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";

const TicketsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {t} = useTranslation()
    return(
        <div className="mt-10 element w-full h-screen md:p-52 p-6 mx-auto font-your-font">
            <div className="grid grid-cols-1 gap-16 place-items-center">
                <h1 className="text-2xl font-bold mb-8 text-center mt-8 text-white">{t("On")}</h1>
                <div className="flex">
                    <h2 className="text-black font-bold p-4 bg-white rounded-l-lg">{t("Site")}</h2>
                    <a href="https://ticket.kg/" className="p-4 bg-black text-white hover:text-black hover:bg-white duration-500 rounded-r-lg">ticket.kg</a>
                </div>
                <div className="flex">
                    <h2 className="text-black font-bold p-4 bg-white rounded-l-lg">{t("Site")}</h2>
                    <a href="https://kassir.kg/" className="p-4 bg-black text-white hover:text-black hover:bg-white duration-500 rounded-r-lg">kassir.kg</a>
                </div>
                <div className="flex gap-2 p-4 bg-white rounded">
                    <h2 className="font-bold">{t("Kassa")}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="font-bold">ул. Советская 167, Бишкек</p>
                </div>
            </div>
        </div>
    )
}

export default TicketsPage