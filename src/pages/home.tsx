import Nav from "../components/Nav";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import home from "../../public/home.gif";
export default function Home() {
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
    <div className="bg-gray-100 relative dark:bg-gray-800  h-screen w-screen flex flex-col sm:flex-row">
      <Nav />
      <div
        style={{ backgroundImage: `url('${home}')` }}
        className={`sm:bg-cover bg-opacity-75 h-screen w-full bg-right drop-shadow-2xl bg-no-repeat dark:opacity-75 pl-5`}
      >
        <div className="sm:w-full w-1/3   sm:pt-5 pt-5">
          <h1 className="italic dark:text-white text-xl font-bold">
            Un poco sobre mi.
          </h1>
          <p className="dark:text-white">
            Me llamo Nicolas, actualmente tengo{" "}
            {new Date().getFullYear() - 2003} años. Soy un apacionado por la
            tecnologia y todo lo que seria crear soluciones.
            <br />
            <br />A lo largo de mis años siempre me interesó la idea de poder
            crear soluciones o crear algo nuevo. Creo que fue una gran idea
            adentrarme en este mundo IT, ya que puedo ser capaz de plasmar mis
            conocimientos para poder crear un producto o alguna solución.
          </p>{" "}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex h-screen w-screen items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
    </div>
  );
}
