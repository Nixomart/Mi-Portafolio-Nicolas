import Nav from "../components/Nav";
import Pdf from '../../public/Nicolas_Martinez_CV.pdf'
export default function Contact() {
  const handleDownload = () => {
    // Crear un objeto Blob (por ejemplo, un archivo de texto)
    const data = 'Contenido del archivo a descargar';
    const blob = new Blob([data], { type: 'text/plain' });

    // Crear un enlace de descarga y hacer clic en él
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    //pdf
    a.download = Pdf;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-800 h-screen 2xl:w-screen flex flex-col sm:flex-row">
      <Nav />
      <div className="sm:w-3/4 dark:text-white pl-10 flex flex-col flex-grow">
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
            <a
            href={Pdf}
            download
              className="hover:underline"
            >
              Mi Curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
