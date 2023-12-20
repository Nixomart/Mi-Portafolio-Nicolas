import { useState } from "react";
import "../../index.css";
import data from "../../dataExample/data";
import ImageTextTech from "./ImageTextTech";
export default function InfoView({ state, text }: any) {
  const [frontend] = useState(data.frontend);
  const [backend] = useState(data.backend);
  const [texts] = useState(data.texts);
  const [learning] = useState(data.learning);

  return (
    <div
      id="div-scroll"
      style={{ maxHeight: "calc(100vh - 45px)", boxSizing: "border-box" }}
      className="border-l  sm:h-1/2 col-span-2 overflow-auto  sm:col-span-4 sm:border-l-0 sm:border-t  col-start-3 dark:text-white border-gray-600 "
    >
      {texts.map((text, index: any) => (
        <div
          key={index}
          className={`mx-auto  ${index === state ? "block" : "hidden"}`}
        >
          <h1 className="text-center border-b border-gray-600 py-5 font-semibold">
            ¿En donde?
          </h1>
          <div className="border-b flex justify-center border-gray-600">
            <a
              target="_blank"
              href={text.link}
              className="text-center  py-10 text-4xl "
            >
              {text.title}
            </a>
          </div>
          <h1 className="text-center border-b border-gray-600 py-5 font-semibold">
            Acerca de
          </h1>
          <p className="text-center py-5 border-gray-600 border-b text-xl  ">
            {text.paragraph}
          </p>
          <h1 className="text-center border-b border-gray-600 py-5 font-semibold">
            ¿Que hice?
          </h1>
          <div className="gap-3 gap-x-20 ">
            {text.how.map((text: any, index: any) => (
              <p key={index} className="text-center">
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}

      {text == "front" && (
        <div className="flex  justify-around">
          {" "}
          <div className="grid grid-cols-2 self-center gap-x-52 sm:gap-x-10 gap-y-10 ">
            {frontend.map((fron: any, index: any) => (
              
              <ImageTextTech fron={fron} index={index} />

            ))}
          </div>
        </div>
      )}
      {text == "back" && (
        <div className="flex overflow-y-auto justify-around">
          {" "}
          <div className="grid grid-cols-2  self-center gap-x-52 sm:gap-x-10 gap-y-10 ">
            {backend.map((fron: any, index: any) => (
                          <ImageTextTech fron={fron} index={index} />

            ))}
          </div>
        </div>
      )}
      {text == "aprendiendo" && (
        <div className="flex justify-around">
          {" "}
          <div className="grid grid-cols-2 self-center gap-x-52 sm:gap-x-10 gap-y-10 ">
            {learning.map((fron: any, index: any) => (
             <ImageTextTech fron={fron} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
