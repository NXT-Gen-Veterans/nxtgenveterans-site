import { useState } from "react";
import { NavLink } from "react-router-dom";
import blackLogo from "assets/Logo/Black.png";
import burgerIcon from "assets/burger-icon.svg";

import BookConsultation from "components/BookConsultation/BookConsultation";

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    function handleToggleOpen() {
        setOpen(!isOpen);
    }

    return (
        <div className={`${isOpen ? "h-[4.5rem] lg:h-fit" : ""} absolute top-0 left-0 w-full`}>
        <nav className={`lg:sticky top-0 left-0 w-full flex justify-between lg:justify-evenly overflow-hidden nav-blur lg:items-center ${isOpen ? "fixed lg:static h-dvh lg:h-fit text-white lg:text-black" : "w-full h-fit items-center sticky"}`}>
            <NavLink className={``} to="/">
                <img src={blackLogo} alt="logo" className={`ml-3 lg:m-0 w-14 xl:w-16 ${isOpen && "mt-2 lg:m-0"}`} />
            </NavLink>
            <div className={`transition-all ease-in-out w-5/6 md:w-3/4 lg:w-fit h-full lg:h-fit flex flex-col lg:flex-row justify-start lg:justify-evenly lg:items-center gap-14 lg:gap-20 xl:gap-40 p-3 ${isOpen ? "pt-6 lg:pt-3 bg-ngv-blue lg:bg-transparent" : "translate-x-full mr-16 pointer-events-none lg:translate-x-0 lg:m-0 lg:pointer-events-auto"}`}>
                <button type="button" onClick={handleToggleOpen} className="pointer-events-auto lg:hidden">
                    <p className="sr-only">Open or close navigation</p>
                    <img src={burgerIcon} alt="logo" className={`transition-all ease-in-out delay-75 duration-200 w-8 ${!isOpen && "[transform:rotateY(180deg)] [filter:invert(100%)]"}`} />
                </button>
                <ul className={`flex flex-col lg:flex-row gap-10 lg:items-center ${!isOpen && "hidden lg:flex"}`}>
                    {['home', 'about', 'contact', 'resources', 'bootcamp']
                        .map(tab => (
                            <NavLink 
                                key={`${tab}${Math.floor(Math.random()*9)}`}
                                to={tab == "home" ? "/" : tab}
                                className={({ isActive }) => `w-fit body-btn capitalize lg:p-2 lg:px-3 hover:bg-white/10 ${isActive && "border-l-8 lg:border-l-0 lg:border-b-4 px-5 border-white lg:border-black"}`}
                                onClick={handleToggleOpen}
                            >{tab}</NavLink>
                        )
                    )}
                </ul>
                <BookConsultation handleToggleOpen={handleToggleOpen} isNav={true} isNavOpen={isOpen} />
            </div>
        </nav>
        </div>
    )
}

export default Navbar
