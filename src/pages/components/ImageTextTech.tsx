import React from 'react'
import { Link } from 'react-router-dom'
interface Tech {
    name: string,
    image: string
}
export default function ImageTextTech({index, fron}:any ) {
  return (
    <div
    key={index}
    className="self-auto relative"
  >
    <div className="hover:bg-black/70 rounded-full ease-in-out transition-all duration-300  absolute h-full w-full ">
      <Link to={fron.name} className="uppercase z-30 hover:opacity-100 hover:text-white ease-in-out transition-all duration-300 w-full h-full opacity-0 flex items-center justify-center">
        {fron.name}
      </Link>
    </div>
    <img
      src={fron.image}
      className="w-36 sm:w-20 rounded-full hover:shadow-lg transition-all ease-in-out"
    />
  </div>
  )
}
