import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-transparent border-b  border-gray-600">
      <ul className="flex gap-x-5 py-2 px-6">
        <li >
          <Link to={"/"} className="font-medium text-xl  ">Inicio</Link>
        </li>
        <li>
          <Link to={"/projects"} className="font-medium text-xl  ">Proyectos</Link>
        </li>
        <li>
          <Link to={"/info"} className="font-medium text-xl  ">Info</Link>
        </li>
        <li>
          <Link to={"/contact"} className="font-medium text-xl  ">Contacto</Link>
        </li>
        <li className="ml-auto">
          <Link to={"/"} className="font-medium text-xl  ">Cosa</Link>
        </li>
      </ul>
    </nav>
  );
}
