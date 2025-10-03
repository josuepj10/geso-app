"use client"

import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  text: string
  image: string
  button: string
  href: string
}

export default function Cardinf({ title, text, image, button, href }: CardProps) {
  return (
    <div
      className="w-full max-w-[41rem] h-auto
                lg:max-w-full lg:h-full
                bg-white text-black rounded-[45px]
                border flex overflow-hidden mb-4"
    >
      {/* Columna izquierda: Imagen */}

      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex items-center justify-between gap-6 m-2 md:m-5 p-5">
          <Image
            src={image}
            alt={title}
            width={616}
            height={517}
            className="w-full h-auto rounded-[45px] overflow-hidden object-contain"
                      
                      
          />
        </div>
                      
        {/* Columna derecha: Contenido */}
        <div className=" flex flex-col justify-center items-center gap-6 lg:p-5 p-2 
                        lg:w-1/2 lg:items-start lg:mx-5 my-5
                        xl:gap-11 lg:gap-7">
          {/* Título */}
          <h1 className="text-center lg:text-left">{title}</h1>

          {/* Texto */}
          <p className="text-lg text-[#374151] mt-2 text-center lg:text-left ">{text}</p>

          <Link href={href}>
            <button className="bg-[#5B1780] rounded-3xl text-white text-lg px-6 py-1 hover:bg-[#8C339D] transition cursor-pointer mb-4">
              {button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}