import Nav from "../components/Nav";
import Pdf from "../../public/Nicolas_Martinez_CV.pdf";
import PdfE from "../../public/Resume_Nicolas_Martinez_CV.pdf";
import home from "../../public/home.gif";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Contact() {
  const [gifLoaded, setGifLoaded] = useState(false);
  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = home; // Ruta del GIF

    gifImage.onload = () => {
      // Una vez que el GIF ha cargado, cambia el estado a true.
      setGifLoaded(true);
    };
  }, []);
  return gifLoaded ? (
    <div className="bg-gray-100 dark:bg-gray-800 h-screen 2xl:w-screen flex flex-col sm:flex-row">
      <Nav />
      <div
        style={{ backgroundImage: `url('${home}')` }}
        className="  sm:bg-cover bg-opacity-75 h-screen bg-contain w-full bg-right drop-shadow-2xl bg-no-repeat dark:opacity-75 "
      >
        <div className="sm:w-3/4 w-96 h-full  dark:text-white pl-5 flex flex-col flex-grow">
          <h1 className="italic text-xl font-bold py-5 ">
            Estoy Disponible para cualquier Proyecto o Cualquier propuesta.
          </h1>
          <p className=" font-semibold underline">Contactame:</p>
          <div className="flex-grow flex flex-col  pb-10 ">
            <div className="">
              <h2 className="font-semibold">Email: </h2>
              <p>martinezz.nnicolas@gmail.com</p>
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
              <div className="space-y-1 flex flex-col">
                <h2 className="font-semibold">Descargar CV | Download Resume: </h2>
                <a href={Pdf} download className="hover:underline">
                  Mi Curriculum
                </a>
                <a href={PdfE} download className="hover:underline">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex h-screen w-screen items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
    </div>
  );
}
