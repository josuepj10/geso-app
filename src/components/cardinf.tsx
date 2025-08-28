"use client"

import Image from "next/image"

interface CardProps {
  title: string
  text: string
  image: string
  href: string
}

export default function Cardinf({ title, text, image }: CardProps) {
  return (
    <div
      className="w-[1362px] h-[617px] bg-white text-black rounded-[70px] 
                 shadow-2xl flex overflow-hidden"
    >
      {/* Columna izquierda: Imagen */}
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={616}
          height={517}
          className="rounded-[70px]"
        />
      </div>

      {/* Columna derecha: Contenido */}
      <div className="w-1/2 flex flex-col justify-between pr-10 py-10">
        {/* Título */}
        <h2 className="text-2xl font-semibold">{title}</h2>

        {/* Texto */}
        <p className="text-base mt-2 flex-1">{text}</p>

        {/* Botones */}
        <div className="flex gap-4 mt-4 ">
          <button className="bg-[#5B1780] text-white px-4 py-2 rounded-lg hover:bg-[#8C339D] transition cursor-pointer">
            Abrir
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-[#5B1780] transition cursor-pointer">
            Volver
          </button>
        </div>
      </div>
    </div>
  )
}