import Nav from "../components/Nav";
import Pdf from "../../public/Nicolas_Martinez_CV.pdf";
export default function Contact() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 h-screen 2xl:w-screen flex flex-col sm:flex-row">
      <Nav />
      <div className=" sm:bg-cover bg-opacity-75 h-screen bg-contain bg-[url('../../public/home.gif')] w-full bg-right drop-shadow-2xl bg-no-repeat dark:opacity-75 pl-5">
        <div className="sm:w-3/4 w-96   dark:opacity-75 dark:text-white pl-5 flex flex-col flex-grow">
          <h1 className="italic text-xl font-bold py-5 ">
            Estoy Disponible para cualquier Proyecto o Cualquier propuesta.
          </h1>
          <p className=" font-semibold underline">Mis redes:</p>
          <div className="flex-grow flex flex-col  pb-10 ">
            <div className="">
              <h2 className="font-semibold">Email: </h2>
              <p>martinezz.nnicolas@gmail.com</p>
              <h2 className="font-semibold ">Instagram: </h2>
              <a
                href="https://www.instagram.com/nixo_sslsl/"
                className="hover:underline"
              >
                Nixo_sslsl
              </a>
            </div>
            <div className="mt-auto ">
              <h2 className="font-semibold">Github: </h2>
              <a href="https://github.com/Nixomart" className="hover:underline">
                Nixomart
              </a>
              <h2 className="font-semibold">Repositorio de este proyecto: </h2>
              <a
                href="https://github.com/Nixomart/Mi-Portafolio-Nicolas"
                target="_blank"
                className="hover:underline"
              >
                Mi portafolio - Github
              </a>
              <h2 className="font-semibold">Descargar CV: </h2>
              <a href={Pdf} download className="hover:underline">
                Mi Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
