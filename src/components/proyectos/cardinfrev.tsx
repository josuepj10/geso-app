"use client"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  text: React.ReactNode
  image: string
  button: string
  href: string
}

export default function Cardinfrev({ title, text, image, button, href }: CardProps) {
  return (
    <article
      className="w-full h-auto max-w-[750px]  
                xl:max-w-[1362px] xl:h-full
                bg-white rounded-[55px]
                flex overflow-hidden mb-4 outline xl:outline-0 xl:hover:outline
                hover:shadow-xl transition-shadow transition-outline duration-300 ease-in-out"
    >
      <div className="flex flex-col xl:flex-row xl:items-center">
        {/* Columna izquierda: Contenido */}
        <div
          className="flex flex-col justify-center items-center gap-6 sm:p-8 py-5 px-5
                      flex-[1_1_50%] min-w-[50%] xl:items-start xl:mx-2  
                      xl:gap-11 order-2 xl:order-1 group"
        >
          <h2 className="text-center xl:text-left text-2xl font-bold text-[#5B1780]">{title}</h2>

          <div 
            className="text-lg text-[#374151] mt-2 text-center xl:text-left [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-3 [&_li]:mb-2 [&_strong]:font-semibold"
            
          >
            {text }
          </div>
            
          {/* Se muestra botón solo si button y href tienen contenido) */}
          {button && href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5B1780] rounded-4xl text-white hover:text-[#5B1780] hover:shadow-md text-lg w-full xl:w-76 py-4 
              hover:bg-[#FFD11A] transition-colors duration-300 cursor-pointer inline-block text-center"
            >
              {button}
            </Link>
          ) : null}

        </div>

        {/* Columna derecha: Imagen */}
        <div
          className="flex xl:justify-end justify-center items-center p-5 sm:p-8
                      xl:flex-[1_1_auto] xl:max-w-[50%] 
                      order-1 xl:order-2"
        >
          
          <Image
            src={image}
            alt={title}
            width={616}
            height={517}
            className={`w-full h-full max-h-[547] lg:min-h-[547px] rounded-[34px] object-cover`}
          />
          
        </div>
      </div>
    </article>
  )
}