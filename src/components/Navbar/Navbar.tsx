import { useState } from "react";
import { NavLink } from "react-router-dom";
import blackLogo from "assets/Logo/Black.png";
import burgerIcon from "assets/burger-icon.svg";
// import "assets/index.css"

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    function handleToggleOpen() {
        setOpen(!isOpen);
    }

    return (
        <div className={`${isOpen ? "h-[4.5rem] lg:h-fit" : ""} absolute top-0 left-0 w-full`}>
        <nav className={`lg:sticky top-0 left-0 w-full flex justify-between overflow-hidden nav-blur lg:items-center ${isOpen ? "fixed lg:static h-dvh lg:h-fit text-white lg:text-black" : "w-full h-fit items-center sticky"}`}>
            <NavLink className={``} to="/">
                <img src={blackLogo} alt="logo" className="m-5 w-14 lg:w-20" />
            </NavLink>
            <div className={`transition-all ease-in-out w-5/6 md:w-3/4 lg:w-full h-full lg:h-fit flex flex-col lg:flex-row justify-start lg:justify-center gap-14 lg:gap-5 p-5 ${isOpen ? "pt-6 lg:pt-5 bg-ngv-blue lg:bg-transparent" : "translate-x-full mr-16 pointer-events-none lg:translate-x-0 lg:m-0 lg:pointer-events-auto"}`}>
                <button type="button" onClick={handleToggleOpen} className="pointer-events-auto lg:hidden">
                    <p className="sr-only">Open or close navigation</p>
                    <img src={burgerIcon} alt="logo" className={`transition-all ease-in-out delay-75 duration-200 w-8 ${!isOpen && "[transform:rotateY(180deg)] [filter:invert(100%)]"}`} />
                </button>
                <ul className={`flex flex-col lg:flex-row gap-10 ${!isOpen && "hidden lg:flex"}`}>
                    {['home', 'about', 'contact', 'resources', 'bootcamp']
                        .map(tab => (
                            <NavLink 
                                to={tab == "home" ? "/" : tab}
                                className={({ isActive }) => `nav-text capitalize lg:p-2 lg:px-3 ${isActive && "border-l-8 lg:border-l-0 lg:border-b-4 px-5 border-white lg:border-black"}`}
                                onClick={handleToggleOpen}
                            >{tab}</NavLink>
                        )
                    )}
                </ul>
            </div>
            {/* <Button></Button> */}
        </nav>
        </div>
    )
}

export default Navbar
