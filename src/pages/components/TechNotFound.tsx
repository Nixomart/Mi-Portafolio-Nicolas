import Nav from "../../components/Nav";
import "../../index.css";
export default function TechNotFound({ tech }: any) {
  return (
    <div className="">
    <div className="flex flex-col  sm:flex-row dark:bg-gray-800 ">
      <Nav />
      <h1 className="text-center  sm:text-left sm:pl-5 sm:py-5 py-10 uppercase sm:text-4xl text-8xl">
        Aun no he usado <span className="underline">{tech}</span>
      </h1>
      <hr className="h-[2px] container bg-black text-black" />
    </div>
    </div>
  );
}
