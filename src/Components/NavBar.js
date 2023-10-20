import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const NavBar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white p-4 border-b border-black font-your-font">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-black text-xl font-bold hover:underline">КЫРГЫЗСКИЙ ТЕАТР ОПЕРЫ И БАЛЕТА ИМ А.МАЛДЫБАЕВА</Link>
                <ul className="hidden md:flex space-x-6 ">
                    <li>
                        <Link to="/" className="text-black hover:underline">Главная</Link>
                    </li>
                    <li>
                        <Link to="/repertoire" className="text-black hover:underline">Репертуар</Link>
                    </li>
                    <li>
                        <a href="https://www.ticket.kg/place/teatr-opery-i-baleta" className="text-black hover:underline">Покупка билетов</a>
                    </li>
                    <li>
                        <Link to="/events-calendar" className="text-black hover:underline">Календарь событий</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

                </div>
                <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-10" : "fixed left-[-100%] h-full ease-in-out duration-500"}>
                    <h1 className="w-full text-black text-2xl font-bold m-4">Театр</h1>
                    <ul className="p-4 uppercase">
                        <li className="p-4 border-b border-black">
                            <Link to="/" className="text-black hover:underline">Главная</Link>
                        </li>
                        <li className="p-4 border-b border-black">
                            <Link to="/repertoire" className="text-black hover:underline">Репертуар</Link>
                        </li>
                        <li className="p-4 border-b border-black">
                            <Link to="/ticket-booking" className="text-black hover:underline">Покупка билетов</Link>
                        </li>
                        <li className="p-4 border-b border-black">
                            <Link to="/events-calendar" className="text-black hover:underline">Календарь событий</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
