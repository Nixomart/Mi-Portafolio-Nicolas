import { Link, NavLink, useLocation } from "react-router-dom";
import '../index.css'
import { useEffect, useState } from "react";
import { PiMoonThin, PiSunThin } from "react-icons/pi";
import { useDarkMode } from "../context/DarkMode";
export default function Nav() 
{
  const location = useLocation();

  const {pathname} = location;
  console.log("pathname: ", pathname);
  
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
          <NavLink to={"/"} className={`${pathname === '/' ? 'font-bold' : 'font-medium '} hover:font-bold  text-xl dark:text-white`} >Inicio</NavLink>
        </li>
        <li className="sm:-rotate-90">
          <NavLink to={"/projects"} className={`${pathname.includes('/projects') ? 'font-bold' : 'font-medium '} hover:font-bold  text-xl  dark:text-white`} >Proyectos</NavLink>
        </li>
        <li className="sm:-rotate-90">
          <Link to={"/info"} className={`${pathname.includes('/info') ? 'font-bold' : 'font-medium '} hover:font-bold  text-xl sm:pl-8 dark:text-white`} >Info</Link>
        </li>
        <li className="sm:-rotate-90">
          <Link to={"/contact"} className={`${pathname.includes('/contact') ? 'font-bold' : 'font-medium '} hover:font-bold  text-xl dark:text-white`} >Contacto</Link>
        </li>
        <li className=" ml-auto sm:ml-0 my-auto max-h-max  sm:-rotate-90">
          <button onClick={handleTheme}>
            {theme === 'dark' ? 
            
            
            <PiSunThin  className='dark:text-white text-xl'/>
            : 
            <PiMoonThin  className='dark:text-white text-xl'/> 

          }

          </button>
        </li>
      </ul>
    </nav>
  );
}
