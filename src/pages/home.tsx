import Nav from "../components/Nav";
import home from '../../public/home.gif'
export default function Home() {
  return (
    <div className="bg-gray-100 relative dark:bg-gray-800  h-screen w-screen flex flex-col sm:flex-row">
      <Nav />
      <div className=" sm:bg-cover bg-opacity-75 h-screen bg-contain bg-[url('../../public/home.gif')] w-full bg-right drop-shadow-2xl bg-no-repeat dark:opacity-75 pl-5">
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
   <img src={home} alt="" />
    </div>
  );
}
