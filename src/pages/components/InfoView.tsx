export default function InfoView({ state, text }: any) {
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
    <div className="border-l col-span-2 sm:hidden col-start-3 border-gray-600 ">
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
          <div className="gap-3 gap-x-20">
            <p className="text-center">{text.how}</p>
          </div>
        </div>
      ))}

      {text == 'front' && <p>frontend</p>}
      {text == 'back' && <p>backend</p>}
    </div>
  );
}
