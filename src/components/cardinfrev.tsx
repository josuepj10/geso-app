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

export default function Cardinfrev({ title, text, image, button, href, imageClass }: CardProps) {
  return (
    <div
      className="w-full h-auto sm:max-w-[680px]
                lg:max-w-[1362px] lg:h-full
                bg-white text-black rounded-[45px]
                border flex overflow-hidden mb-4
                hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Columna izquierda: Contenido */}
        <div
          className="flex flex-col justify-center items-center gap-6 lg:p-5 p-4 xl:pl-7 
                      flex-[1_1_50%] min-w-[50%] lg:items-start lg:mx-2  
                      xl:gap-11 lg:gap-7 order-2 lg:order-1 group"
        >
          <h2 className="text-center lg:text-left">{title}</h2>

          <div 
            className="text-lg lg:text-base 2xl:text-lg text-[#374151] mt-2 text-center lg:text-left [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-3 [&_li]:mb-2 [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
            
          {/* Se muestra botón solo si button y href tienen contenido) */}
          {button && href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5B1780] rounded-4xl text-white text-lg w-full lg:w-76 py-4 hover:bg-[#8C339D] transition cursor-pointer mb-4 inline-block text-center"
            >
              {button}
            </Link>
          ) : null}

        </div>

        {/* Columna derecha: Imagen */}
        <div
          className="flex lg:justify-end justify-center items-center lg:py-4 lg:pr-4 xl:py-10 xl:pr-10 p-4
                      lg:flex-[1_1_auto] lg:max-w-[50%] 
                      order-1 lg:order-2"
        >
          
          <Image
            src={image}
            alt={title}
            width={616}
            height={517}
            className={`w-full h-auto max-h-[517px] rounded-[45px] object-cover ${imageClass || ""}`}
          />
          
        </div>
      </div>
    </div>
  )
}