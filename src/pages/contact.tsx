import Nav from "../components/Nav";

export default function Contact() {
  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col">
      <Nav />
      <h1 className="italic text-xl font-bold py-5 pl-10">
        Estoy Disponible para cualquier Proyecto o Cualquier propuesta.
      </h1>
      <p className="pl-10 font-semibold underline">Mis redes:</p>
      <div className="flex-grow flex flex-col pl-10 pb-10 ">
        <div className="">
          <h2 className="font-semibold">Email: </h2>
          <p>martinezz.nnicolas@gmail.com</p>
          <h2 className="font-semibold ">Instagram: </h2>
          <a href="https://www.instagram.com/nixo_sslsl/" className="hover:underline">martinezz.nnicolas@gmail.com</a>
        </div>
        <div className="mt-auto">
          <h2 className="font-semibold">Github: </h2>
          <a href="https://github.com/Nixomart" className="hover:underline">Nixomart</a>
          <h2 className="font-semibold">Repositorio de este proyecto: </h2>
          <p>martinezz.nnicolas@gmail</p>
        </div>
      </div>
    </div>
  );
}
