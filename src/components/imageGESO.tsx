"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface ImageGESOProps {
  imageSrc: string;
  title: string;
  imageClassName?: string;
}

export default function ImageGESO({ imageSrc, title, imageClassName }: ImageGESOProps) {

  // Función para hacer scroll al siguiente viewport "click con flecha"
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // baja exactamente 1 altura de pantalla
      behavior: "smooth",      // desplazamiento suave
    });
  };

  return (
    <section
      role="banner"
      aria-label={`Hero de la página ${title}`}
      className="relative -mt-22 left-1/2 right-1/2 -mx-[50vw]
      max-w-screen overflow-hidden pt-21 lg:pt-11"
    >
      {/* Imagen de fondo */}
      <div className="relative w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-all duration-500 ease-in-out ${imageClassName || ""}`}
        />

        
        <div className="absolute inset-0 bg-[#5B1780]/60" />

       
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[40px] lg:text-[60px] font-semibold text-white mb-4">
            {title}
          </h1>
        </div>

        
        <div className="absolute bottom-20 inset-x-0 flex flex-col items-center text-center text-white gap-6">
          <p className="text-lg">Echa un vistazo a GESO</p>

          
          <ArrowDown
            onClick={handleScrollDown}
            className="w-20 h-20 text-white animate-soft-bounce cursor-pointer transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}