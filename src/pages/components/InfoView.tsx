import "../../index.css";

export default function InfoView({ state, text }: any) {
  const frontend = [
    "https://www.ritechpune.com/backend/courseicon/ReactJS.png",
    "https://i.pinimg.com/564x/66/d5/23/66d5238900aab3d7b86dc5e53a77c817.jpg",
    "https://i0.wp.com/thinkground.studio/wp-content/uploads/2019/04/190421_Docker-Logo.png?resize=314%2C268",
    "https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/h6cGMuMQo9kjtFACrBi5X86evZz8oudwh1Wo5gjIinW6UqwdnSTXH0Yj_D8gS-QlQ7OHLGnfDQ=s900-c-k-c0x00ffffff-no-rj",
    "https://i.pinimg.com/564x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg",
    "data:image/png;base64,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",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/602px-Bootstrap_logo.svg.png",
  ];
  const backend = [
    "https://i.pinimg.com/564x/66/d5/23/66d5238900aab3d7b86dc5e53a77c817.jpg",
    "https://i0.wp.com/thinkground.studio/wp-content/uploads/2019/04/190421_Docker-Logo.png?resize=314%2C268",
    "https://www.gstatic.com/devrel-devsite/prod/v670576875a5cc9e38d1ef4dc0b1c46d2dc586275242dba27f9cea38af0674100/firebase/images/touchicon-180.png",
    "https://i.pinimg.com/564x/08/86/77/0886779176db12da5565ca4b9541e2b8.jpg",
    "https://yt3.googleusercontent.com/h6cGMuMQo9kjtFACrBi5X86evZz8oudwh1Wo5gjIinW6UqwdnSTXH0Yj_D8gS-QlQ7OHLGnfDQ=s900-c-k-c0x00ffffff-no-rj",
    "https://i.pinimg.com/564x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1iBtf8Doeac9meBtxvGb6oGqOuEhU2z6YPvdB1RsiEUGAeFnrtVjB-SzcBvowceMwSQ&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
    "https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Emblem.jpg",
  ];

  const learning = [
    "https://i0.wp.com/thinkground.studio/wp-content/uploads/2019/04/190421_Docker-Logo.png?resize=314%2C268",
    "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
    "https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2Faabfcf1734f9e1e4379f4f80042bdf11e2e57dbf-420x308.png&w=1080&q=75",
  ];
  const texts = [
    {
      title: "Douvery - 2022",
      link: "https://www.douvery.com/",
      how: [
        "Maquetaciones Responsivas (grid - flexbox)",
        "Creación de Componentes Reutilizables (Operadores Ternarios)",
        "Uso de Librerias (React Icons - Tailwind - React Bootstrap - Formik)",
        "Creación de nuevas funcionalidades (useEffect - useContext - useState - useMemo)",
      ],
      paragraph:
        'Fue mi primer trabajo "Formal" en donde tenia que hacer entregas de avances en el tiempo estimado y documentar lo que hacia',
    },
    {
      title: "Agencia de Marketing - Perú - 2022",
      how: [
        "euphoria.pe",
        "thelittlemarketperu.com",
        "santos-films.com",
        "lacorrientedelgolfo.net",
      ],
      paragraph:
        "Estuve como Diseñador haciendo uso de la Herramienta figma - Creación de Logos, Banners, imágenes publicitarias - Rediseños de Webs en Wordpresss/React js - Estrategias de Marketing / Facebook ADS / Segmentación ",
    },
    {
      title: "Desarrollador Web Freelancer - 2021 - Actualidad",
      how: [
        "piedrasuma.com",
        "gato.tv",
        "mandarinatv.com",
        "mohinorafm.com",
        "jrcontenidos.com.ar",
      ],
      paragraph: "Actualmente hago paginas web usando el CMS wordpress. ",
    },
  ];

  return (
    <div
      id="div-scroll"
      style={{ maxHeight: "calc(100vh - 50px)", boxSizing: "border-box" }}
      className="border-l  sm:h-1/2 col-span-2 overflow-auto  sm:col-span-4 sm:border-l-0 sm:border-t  col-start-3 dark:text-white border-gray-600 "
    >
      {texts.map((text, index) => (
        <div className={`mx-auto  ${index === state ? "block" : "hidden"}`}>
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
          {text.how.map((text:any)=>(
            <p className="text-center">{text}</p>
          ))}
          </div>
        </div>
      ))}

      {text == "front" && (
        <div className="flex  justify-around">
          {" "}
          <div className="grid grid-cols-2 self-center gap-x-52 sm:gap-x-10 gap-y-10 ">
            {frontend.map((fron: any) => (
              <div className="self-auto">
                <img
                  src={fron}
                  className="w-36 sm:w-20 rounded-full hover:shadow-lg transition-all ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {text == "back" && (
        <div className="flex overflow-y-auto justify-around">
          {" "}
          <div className="grid grid-cols-2  self-center gap-x-52 sm:gap-x-10 gap-y-10 ">
            {backend.map((fron: any) => (
              <div className="self-auto">
                <img
                  src={fron}
                  className="w-36 sm:w-20 rounded-full hover:shadow-lg transition-all ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {text == "aprendiendo" && (
        <div className="flex justify-around">
          {" "}
          <div className="grid grid-cols-2 self-center gap-x-52 sm:gap-x-10 gap-y-10 ">
            {learning.map((fron: any) => (
              <div className="self-auto">
                <img
                  src={fron}
                  className="w-36 sm:w-20 rounded-full hover:shadow-lg transition-all ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
