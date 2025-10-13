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

export default function Cardinf({ title, text, image, button, href, imageClass }: CardProps) {
  return (
    
    <div
      className="w-full h-auto sm:max-w-[680px]
                lg:max-w-[1362px] lg:h-full
                bg-white text-black rounded-[45px]
                border flex overflow-hidden mb-4 
                hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    >
      

      <div className="flex flex-col lg:flex-row lg:items-center">
        <div
          className="flex lg:justify-start justify-center items-center lg:items-start lg:py-4 lg:pl-4 xl:py-10 xl:pl-10 p-4 
                      lg:flex-[1_1_auto] lg:max-w-[50%]
                      "
        >
          
          <Image
            src={image}
            alt={title}
            width={616}
            height={517}
            className={`w-full h-auto max-h-[517px] rounded-[45px] object-cover ${imageClass || ""}`}
          />
        
        </div>
                      
        
        <div className=" flex flex-col justify-center items-center gap-6 lg:p-5 p-4 xl:pr-7
                      flex-[1_1_50%] min-w-[50%] lg:items-start  
                      xl:gap-11 lg:gap-7">
          {/* Título */}
          <h1 className="text-center lg:text-left">{title}</h1>

          {/* Texto */}
          <div 
            className="text-lg text-[#374151] mt-2 text-center lg:text-left [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-3 [&_li]:mb-2 [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>

          {/* Se muestra botón solo si button y href tienen contenido) */}
          {button && href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5B1780] rounded-3xl text-white text-lg px-6 py-1 hover:bg-[#8C339D] transition cursor-pointer mb-4 inline-block text-center"
            >
              {button}
            </Link>
          ) : null}
        </div>
      </div>
        
    </div>

  )
}