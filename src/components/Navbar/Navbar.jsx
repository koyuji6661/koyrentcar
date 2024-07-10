import React, {useState} from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import {HiMenuAlt1, HiMenuAlt3} from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

export const NavLinks = [
    {
        id:"1",
        name: "HOME",
        link:"/#",
    },
    {
        id:"2",
        name:"CARS",
        link:"/#cars",
    },
    {
        id:"3",
        name: "ABOUT",
        link:"/#about",
    },
    {
        id:"4",
        name: "BOOKING",
        link:"/#booking",
    },
]
const Navbar = ({theme, setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
  return (
    <div className="relative z-10 shadow-md w-full dark:bg-dark dark:text-white duration-300 ">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
            <div>
                <span className="text-3xl font-bold font-serif">
                    Rentcar Koyuji
                </span>
            </div>
            <nav className="hidden md:block">
                <ul className="flex items-center gap-8">
                    {
                        NavLinks.map(({id, name, link}) => (
                            <li key={id} className="py-4">
                        <a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium" href={link}>{name}</a>
                    </li>
                        ))}
                        {/* Darkmode feature implement */}
                        {theme === "dark" ? (
                            <BiSolidSun onClick={() => setTheme("light")}
                            className="text-2xl" />
                        ) : (
                            <BiSolidMoon
                            onClick ={() => setTheme("dark")}
                            className="text-2xl" />
                        )}
                </ul>
            </nav>
            {/* Mobile View  */}
            <div className="flex items-center  gap-4 md:hidden">
                {/* dark mode  */}
                {theme === "dark" ? (
                            <BiSolidSun onClick={() => setTheme("light")}
                            className="text-2xl" />
                        ) : (
                            <BiSolidMoon
                            onClick ={() => setTheme("dark")}
                            className="text-2xl" />
                        )}
                        {/* mobile hamburger icon  */}
                        {showMenu ? (
                            <HiMenuAlt1
                            onClick={toggleMenu}
                            className="cursor-pointer transition-all"
                            size={30} />
                        ) : (
                            <HiMenuAlt3
                            onClick={toggleMenu}
                            className="cursor-pointer transition-all"
                            size={30} />
                        )}
            </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar
