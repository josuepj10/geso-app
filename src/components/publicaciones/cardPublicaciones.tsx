"use client"

import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  text: string
  image: string
  button: string
  href: string
  imageClass?: string
}

export default function CardPublicaciones({ title, text, image, button, href, imageClass }: CardProps) {
  return (

    <div className="w-full max-w-[666px] min-h-[732px]
                bg-white rounded-[55px]
                overflow-hidden outline
                hover:shadow-xl transition-shadow transition-outline duration-300 ease-in-out
                flex flex-col"
    >

      <div className="flex flex-col justify-center items-center sm:pt-8 sm:px-8 pt-4 px-4">
        <Image
          src={image}
          alt={title}
          width={586}
          height={299}
          className={`w-[586px] h-[299px] rounded-[34px] object-cover ${imageClass || ""}`}
        />
      </div>

      <div className=" flex flex-col flex-1 justify-start gap-6 sm:px-8 px-4">
          
        {/* Título */}
        <h3 className="text-left text-[#5B1780] font-bold text-2xl pt-4">{title}</h3>

        {/* Texto */}
        <div 
          className="text-lg text-[#374151] mt-2 text-center xl:text-left 
          [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-3 [&_li]:mb-2 [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </div>

        {/* Se muestra botón solo si button y href tienen contenido) */}
        {button && href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5B1780] rounded-4xl text-white hover:text-[#5B1780] hover:shadow-md text-lg w-full py-4 
            hover:bg-[#FFD11A] transition cursor-pointer mb-4 sm:mb-8 inline-block text-center mt-auto"           
          >
            {button}
          </Link>
        ) : null}
      </div>
        


    </div>


  )
}