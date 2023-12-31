import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import "../index.css";
import { PiArrowRightThin, PiArrowLeftThin } from "react-icons/pi";
import home from "../../public/home.gif";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Projects() {
  const [gifLoaded, setGifLoaded] = useState(false);
  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = home; // Ruta del GIF

    gifImage.onload = () => {
      // Una vez que el GIF ha cargado, cambia el estado a true.
      setGifLoaded(true);
    };
  }, []);

  const [currentText, setCurrentText] = useState(0);
  const texts = [
    {
      title: "Pedir Turno Online",
      paragraph:
        "Sitio creado en 2023, con la idea de crear un sistema para gestionar un consultorio. Consta con las funciones principales para que un consultorio pueda trabajar en el sistema.",
      technologies: [
        "https://www.ritechpune.com/backend/courseicon/ReactJS.png",
        "https://i.pinimg.com/564x/66/d5/23/66d5238900aab3d7b86dc5e53a77c817.jpg",
        "https://i0.wp.com/thinkground.studio/wp-content/uploads/2019/04/190421_Docker-Logo.png?resize=314%2C268",
        "https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj",
        "https://www.gstatic.com/devrel-devsite/prod/v670576875a5cc9e38d1ef4dc0b1c46d2dc586275242dba27f9cea38af0674100/firebase/images/touchicon-180.png",
        "https://i.pinimg.com/564x/08/86/77/0886779176db12da5565ca4b9541e2b8.jpg",
        "https://yt3.googleusercontent.com/h6cGMuMQo9kjtFACrBi5X86evZz8oudwh1Wo5gjIinW6UqwdnSTXH0Yj_D8gS-QlQ7OHLGnfDQ=s900-c-k-c0x00ffffff-no-rj",
        "https://i.pinimg.com/564x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg",
      ],
      link: "https://www.pedirturno.online/",
    },
    {
      title: "Ver Catálogo Online",
      paragraph:
        "Este sitio permite crear tiendas virtuales con opciones de suscripción. Los pedidos se realizan a través de WhatsApp.",
      technologies: [
        "https://www.ritechpune.com/backend/courseicon/ReactJS.png",
        "https://i.pinimg.com/564x/66/d5/23/66d5238900aab3d7b86dc5e53a77c817.jpg",
        "https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj",
        "https://www.gstatic.com/devrel-devsite/prod/v670576875a5cc9e38d1ef4dc0b1c46d2dc586275242dba27f9cea38af0674100/firebase/images/touchicon-180.png",
        "https://i.pinimg.com/564x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg",
        "https://i.pinimg.com/564x/08/86/77/0886779176db12da5565ca4b9541e2b8.jpg",
        "https://yt3.googleusercontent.com/h6cGMuMQo9kjtFACrBi5X86evZz8oudwh1Wo5gjIinW6UqwdnSTXH0Yj_D8gS-QlQ7OHLGnfDQ=s900-c-k-c0x00ffffff-no-rj",
      ],
      link: "https://www.vercatalogo.online/",
    }
  ];
  return gifLoaded ? (
    <div className="bg-gray-100 h-screen dark:bg-gray-800 2xl:w-screen flex flex-col sm:flex-row">
      <Nav />
      <div className="sm:w-5/6 flex-grow dark:text-white flex sm:flex-col-reverse">
        <div
          style={{ backgroundImage: `url('${home}')` }}
          className="w-5/6 bg-contain dark:opacity-75 sm:w-full bg-right drop-shadow-2xl sm:h-5 sm:pb-20 sm:py-10 sm:border-t align-bottom flex bg-no-repeat  sm:border-gray-600  sm:pl-0 "
        >
          <div
            className={` justify-center h-20 items-center mx-auto mt-auto flex`}
          >
            <button
              onClick={() =>
                setCurrentText(currentText == 0 ? 1 : currentText - 1)
              }
            >
              <PiArrowLeftThin className="font-thin z-50 sm:text-4xl text-4xl" />
            </button>
            {texts.map((text, index) => (
              <div key={index} className="">
                <h1
                  className={`text-center text-3xl w-80 sm:w-52 ${
                    index === currentText ? "block" : "hidden"
                  }`}
                >
                  {text.title}
                </h1>
              </div>
            ))}
            <button
              onClick={() =>
                setCurrentText(currentText === 1 ? 0 : currentText + 1)
              }
            >
              <PiArrowRightThin className="font-thin sm:text-4xl text-4xl" />
            </button>
          </div>
        </div>
        <div
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
            maxHeight: "calc(100vh - 45px)",
            boxSizing: "border-box",
          }}
          id="div-scroll"
          className="w-full  max sm:flex-grow sm:border-l-0  overflow-auto "
        >
          {texts.map((text, index) => (
            <div
            key={index}
              className={`mx-auto border-l sm:border-l-0 border-gray-600 ${
                index === currentText ? "block" : "hidden"
              }`}
            >
              <h1 className="text-center  sm:text-lg border-b sm:py-1 border-gray-600 py-5 font-semibold">
                Proyecto
              </h1>
              <div className="border-b flex justify-center border-gray-600">
                <a
                  target="_blank"
                  href={text.link}
                  className="text-center sm:text-xl sm:py-1 py-10 text-4xl "
                >
                  {text.title}
                </a>
              </div>
              <h1 className="text-center border-b border-gray-600 py-5 sm:py-1 font-semibold">
                Acerca del Proyecto
              </h1>
              <p className="text-center py-5 border-gray-600 border-b text-xl sm:text-sm  ">
                {text.paragraph}
              </p>
              <h1 className="text-center border-b border-gray-600 py-5 font-semibold">
                ¿Que tecnología use?
              </h1>
              <div className="h-full flex-grow flex justify-center ">
                <div
                  id="div-scroll"
                  style={{
                    maxHeight: "calc(100vh - 50px)",
                    boxSizing: "border-box",
                  }}
                  className="grid grid-cols-3 gap-3 px-3 max-h-11 gap-x-20 w-max"
                >
                  {text.technologies.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      className="rounded-full w-36 object-cover hover:shadow-2xl transition-all ease-in-out"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex h-screen w-screen items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
    </div>
  );
}
