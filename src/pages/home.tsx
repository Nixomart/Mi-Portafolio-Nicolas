import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col">
      <Nav />
      <div className="flex-grow ">images</div>
      <div className="flex-grow max-w-md pl-5 ">
        <h1 className="italic text-xl font-bold">Un poco sobre mi.</h1>
        <p>
          Me llamo Nicolas, actualmente tengo {new Date().getFullYear() - 2003}{" "}
          años. Soy un apacionado por la tecnologia y todo lo que seria crear
          soluciones.
          <br />
          <br />A lo largo de mis años siempre me interesó la idea de poder
          crear soluciones o crear algo nuevo. Creo que fue una gran idea
          adentrarme en este mundo IT, ya que puedo ser capaz de plasmar mis
          conocimientos para poder crear un producto o alguna solución.
          
        </p>{" "}
      </div>
    </div>
  );
}
