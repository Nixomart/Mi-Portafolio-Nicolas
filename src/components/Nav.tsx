import { Link } from "react-router-dom";
import '../index.css'
import { useEffect, useState } from "react";
import { PiMoonThin, PiSunThin } from "react-icons/pi";
import { useDarkMode } from "../context/DarkMode";
export default function Nav() {
  const {theme, setTheme} = useDarkMode()
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="bg-transparent border-b sm:w-14 sm:border-r sm:border-gray-600  border-gray-600">
      <ul className="flex 2xl:gap-x-5 sm:gap-x-0 sm:h-screen  sm:gap-y-20 sm:pt-20  sm:flex-col-reverse  2xl:py-2 2xl:px-6">
        <li className="sm:-rotate-90 sm:h-max" >
          <Link to={"/"} className="font-medium text-xl dark:text-white ">Inicio</Link>
        </li>
        <li className="sm:-rotate-90">
          <Link to={"/projects"} className="font-medium text-xl  dark:text-white ">Proyectos</Link>
        </li>
        <li className="sm:-rotate-90">
          <Link to={"/info"} className="font-medium text-xl sm:pl-8 dark:text-white ">Info</Link>
        </li>
        <li className="sm:-rotate-90">
          <Link to={"/contact"} className="font-medium text-xl dark:text-white ">Contacto</Link>
        </li>
        <li className="lg:ml-auto sm:ml-0 sm:mb-auto  sm:-rotate-90">
          <button onClick={handleTheme}>
            {theme === 'dark' ? 
            
            
            <PiSunThin  className='dark:text-white'/>
            : 
            <PiMoonThin  className='dark:text-white'/> 

          }

          </button>
        </li>
      </ul>
    </nav>
  );
}
