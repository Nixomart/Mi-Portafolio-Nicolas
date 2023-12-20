import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../dataExample/data";
import Nav from "../components/Nav";
import "../index.css"
import TechNotFound from "./components/TechNotFound";
export default function Infotech() {
  let { tech } = useParams();
  const [projects] = useState(
    data.infotech.filter((item) => {
      return item.tags.some((tag) =>
        tag.toLowerCase().includes(tech!.toLowerCase())
      );
    })
  );
  return projects.length === 0 ? (
      <TechNotFound tech={tech} />
  ) : (
    <>
      <div className="flex overflow-y-hidden sm:h-screen flex-col sm:flex-row dark:bg-gray-800 dark:text-white">
        <Nav />
        <div className="sm:w-5/6 ">
          <div className="sm:h-1/4">
            <h1 className="text-center sm:text-left dark:text-white sm:pl-5 sm:py-5 py-10 uppercase sm:text-4xl text-8xl">
              Use <span className="underline">{tech}</span> para estos proyectos
            </h1>
            <hr className="h-[2px] bg-black text-black" />
          </div>
          <div id="div-scroll" className="pl-20 overflow-auto sm:h-3/4 sm:p-5 pt-20 overflo ">
            {projects.map((project: any) => (
              <div className="flex  pb-20">
                <div className="w-3/4 sm:w-full pl pr-32 sm:pr-10 gap-y-5 flex flex-col">
                  <h2 className="text-6xl tracking-wider underline">
                    {project.name}
                  </h2>
                  <p className="tracking-wider">{project.where}</p>
                  <h2 className="w-3/4 sm:w-full text-4xl sm:text-2xl tracking-wider">
                    {project.how}
                  </h2>

                  <div className="  flex flex-col ">
                    {project.job.map((job: any, index: any) => {
                      const lastIndex = project.job.length - 1;
                      return (
                        <>
                          <div key={index} className="flex  sm:ml-1 ml-10 ">
                            <div
                              className={`  border-l flex flex-col dark:border-white  w-4 ${
                                index === lastIndex ? "h-1/2 border-b " : "h-16"
                              }  border-black`}
                            >
                              {index !== lastIndex && (
                                <>
                                  <div className="h-1/2 border-b dark:border-white  border-black"></div>
                                  <div className={`h-1/2  `}></div>
                                </>
                              )}
                            </div>
                            <p className="tracking-wider my-auto text-xl sm:text-sm">
                              {job}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="w-auto hidden absolute">images</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
