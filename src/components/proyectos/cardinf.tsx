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
      className="w-full h-auto 
                xl:max-w-[1362px] xl:h-full
                bg-white rounded-[55px]
                flex overflow-hidden mb-4 border xl:border-0 xl:hover:border
                hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    > 
      

      <div className="flex flex-col xl:flex-row xl:items-center">
        <div
          className="flex xl:justify-start justify-center items-center xl:items-start p-5 sm:p-8 
                      xl:flex-[1_1_auto] xl:max-w-[50%]
                      "
        >
          
          <Image
            src={image}
            alt={title}
            width={616}
            height={517}
            className={`w-full h-full max-h-[547] lg:min-h-[547px] rounded-[34px] object-cover ${imageClass || ""}`}
          />
        
        </div>
                      
        
        <div className=" flex flex-col justify-center items-center gap-6 sm:p-8 py-5 px-5
                      flex-[1_1_50%] min-w-[50%] xl:items-start  
                      ">
          {/* Título */}
          <h2 className="text-center xl:text-left ">{title}</h2>

          {/* Texto */}
          <div 
            className="text-lg text-[#374151] mt-2 text-center xl:text-left 
            [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-3 [&_li]:mb-2 [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>

          {/* Se muestra botón solo si button y href tienen contenido) */}
          {button && href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5B1780] rounded-4xl text-white hover:text-[#5B1780] hover:shadow-md text-lg w-full xl:w-76 py-4 
              hover:bg-[#FFD11A] transition cursor-pointer mb-4 inline-block text-center"
                        
            >
              {button}
            </Link>
          ) : null}
        </div>
      </div>
        
    </div>

  )
}