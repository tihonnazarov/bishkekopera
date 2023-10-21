import React from "react";
import theatre from '../assets/theatre.jpg'
import inside from '../assets/inside.png'
import {useTranslation} from "react-i18next";


const Info = () => {
    const {t} = useTranslation()
    return (
        <div className="mt-20 font-your-font">
            <div>
                <ul className="text-center mx-auto lg:w-3/4 grid gap-10">
                    <li className="grid gap-6">
                        <h1 className="text-bold text-2xl">{t("Kg")}</h1>
                        <p className="lg:w-3/4 mx-auto">{t("Kgs")}</p>
                    </li>
                    <li className="grid gap-6">
                        <h2 className="text-bold text-2xl">{t("History")}</h2>
                        <p className="lg:w-3/4 mx-auto">{t("This")}</p>
                    </li>
                    <li className="grid gap-6">
                        <h2 className="text-bold text-2xl">{t("Repertoire")}</h2>
                        <p className="lg:w-3/4 mx-auto">{t("Opera")}</p>
                        <p className="lg:w-3/4 mx-auto">{t("Talent")}</p>
                    </li>
                    <li className="grid gap-6">
                        <h2 className="text-bold text-2xl">{t("Architect")}</h2>
                        <p className="lg:w-3/4 mx-auto">{t("Bldng")}</p>
                        <div className="mx-auto flex flex-col md:flex-row gap-2">
                            <img src={inside} alt="" className="w-[500px] md:w-[500px]"/>
                            <img src={theatre} alt="" className="w-[500px] md:w-[500px]"/>
                        </div>
                    </li>
                    <li className="grid gap-6">
                        <h2 className="text-bold text-2xl">{t("Cltr")}</h2>
                        <p className="lg:w-3/4 mx-auto">{t("Theat")}</p>
                        <p className="lg:w-3/4 mx-auto">{t("Goto")}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Info;
