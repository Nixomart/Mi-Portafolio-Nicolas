import { Link } from "react-router-dom";
import '../index.css'
export default function Nav() {
  return (
    <nav className="bg-transparent border-b sm:w-14 sm:border-r sm:border-gray-600  border-gray-600">
      <ul className="flex md:gap-x-5 sm:gap-x-0 sm:h-screen sm:gap-y-20 sm:pt-20  sm:flex-col  md:py-2 md:px-6">
        <li className="sm:-rotate-90 sm:h-max" >
          <Link to={"/"} className="font-medium text-xl  cursor-vertical-text ">Inicio</Link>
        </li>
        <li className="sm:-rotate-90">
          <Link to={"/projects"} className="font-medium text-xl   ">Proyectos</Link>
        </li>
        <li className="sm:-rotate-90">
          <Link to={"/info"} className="font-medium text-xl  ">Info</Link>
        </li>
        <li className="sm:-rotate-90">
          <Link to={"/contact"} className="font-medium text-xl  ">Contacto</Link>
        </li>
        <li className="lg:ml-auto sm:ml-0 sm:mt-auto  sm:-rotate-90">
          <Link to={"/"} className="font-medium text-xl  ">Cosa</Link>
        </li>
      </ul>
    </nav>
  );
}
