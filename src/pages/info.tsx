import Nav from "../components/Nav";
import "../index.css";
import InfoView from "./components/InfoView";
import home from '../../public/home.gif'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState, useEffect } from "react";
export default function Info() {
  const [current, setCurrent] = useState(0);
  const [tech, setTech] = useState("");
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
    <div className="bg-gray-100  dark:bg-gray-800 h-screen w-full sm:flex ">
      <Nav />
      <section className="grid sm:border-b sm:border-r  grid-cols-4 sm:flex sm:flex-col w-full">
        <div style={{backgroundImage: `url('${home}')`}} className="col-span-2 sm:w-full sm:h-1/2 bg-no-repeat bg-contain bg-right drop-shadow-2xl dark:opacity-75">
          <div
            id="div-scroll"
            style={{ maxHeight: "calc(100vh - 45px)", boxSizing: "border-box" }}
            className="py-5 sm:h-full sm:w-full pl-5 sm:pr-0 pr-52 col-span-1 dark:text-white sm:col-span-4 overflow-y-auto"
          >
            <h1 className="italic dark:text-white text-2xl font-bold underline">
              Me llamo Nicolas
            </h1>
            <p>
              Actualmente estoy estudiando en la Universidad - UnJu - Argentina,
              Analista Programador Universitario
              <br />
              <br />
              Ademas de mis proyectos personales he tenido la oportunidad de
              tabajar como freelancer, colaborando en proyectos como:
            </p>{" "}
            <div
              onMouseEnter={() => {
                setCurrent(0), setTech("");
              }}
              /*   onMouseLeave={() => {
            setCurrent(-1), setTech("");
          }} */
              className="py-5 transition-all ease-in-out hover:bg-gray-700 hover:text-white"
            >
              <h1 className="font-semibold">Douvery</h1>

              <hr className="py-[0.5px] my-2 w-full   bg-gray-600" />
            </div>
            <div
              onMouseEnter={() => {
                setCurrent(1), setTech("");
              }}
              /* onMouseLeave={()=>{setCurrent(-1), setTech('')}} */ className="py-5 transition-all ease-in-out hover:bg-gray-700 hover:text-white"
            >
              <h1 className="font-semibold">
                Agencia de Marketing - Perú - 2022
              </h1>

              <hr className="py-[0.3px] my-2 w-full   bg-gray-600" />
            </div>
            <div
              onMouseEnter={() => {
                setCurrent(2), setTech("");
              }}
              /* onMouseLeave={()=>{setCurrent(-1), setTech('')}} */ className="py-5 transition-all ease-in-out hover:bg-gray-700 hover:text-white"
            >
              <h1 className="font-semibold">
                Desarrollador Web Freelancer - 2021 - Actualidad
              </h1>

              <hr className="py-[0.3px] my-2 w-full   bg-gray-600" />
            </div>
            {/*  {texts.map((text, index) => (
        ))} */}
            <h1 className="italic text-2xl font-bold underline">
              Tecnologías que manejo
            </h1>
            <p>
              Estas son las tecnologias que manejo tanto como Frontend y Backend
            </p>
            <div
              onMouseEnter={() => {
                setTech("front"), setCurrent(-1);
              }}
              className="py-5 transition-all ease-in-out hover:bg-gray-700 hover:text-white"
            >
              <h1 className="font-semibold">Como Frontend</h1>

              <hr className="py-[0.5px] my-2 w-full   bg-gray-600" />
            </div>
            <div
              onMouseEnter={() => {
                setTech("back"), setCurrent(-1);
              }}
              className="py-5 transition-all ease-in-out hover:bg-gray-700 hover:text-white"
            >
              <h1 className="font-semibold">Como Backend</h1>
              <hr className="py-[0.5px] my-2 w-full   bg-gray-600" />
            </div>
            <div
              onMouseEnter={() => {
                setTech("aprendiendo"), setCurrent(-1);
              }}
              className="py-5 transition-all ease-in-out hover:bg-gray-700 hover:text-white"
            >
              <h1 className="font-semibold">Aprendiendo...</h1>
              <hr className="py-[0.5px] my-2 w-full   bg-gray-600" />
            </div>
          </div>
        </div>

        <InfoView text={tech} state={current} />
      </section>
    </div>
  ) :  <div className="flex h-screen w-screen items-center justify-center">
  <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
</div>;
}
