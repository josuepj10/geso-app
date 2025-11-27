"use client"

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function Mision() {
  return (
    <section 
      aria-labelledby="mision-heading"
      className="overflow-x-hidden max-w-[1362px] mx-auto flex flex-col items-center gap-4 pl-10 pr-7 py-8
                        lg:flex-row lg:justify-between lg:py-40 lg:pr-14  ">
      
      {/* Texto de la sección */}
      <article className="lg:w-1/2 my-10 -ml-10 -mr-7 lg:-mr-4 lg:pr-6">
        <Reveal>
          <h2 
          id="mision-heading"
          className="my-5 text-4xl font-bold text-[#5B1780]">Misión</h2>
          <p className="text-[#374151] leading-relaxed text-lg">
            La Fundación Género y Sociedad (GESO) promueve y desarrolla proyectos sociales y culturales que, 
            desde una perspectiva de género, buscan contribuir a la equidad social y al fortalecimiento de la 
            democracia en Costa Rica y la región. 
          </p>
        </Reveal> 
      </article>
      
      

        <div className="relative w-full h-70 lg:w-150 lg:h-110 group  ">
          
          {/* Contenedor interno que mantiene el redondeado y overflow */}
          <div className="relative w-full h-full rounded-[50px] overflow-hidden">
            
            {/* Imagen principal */}
            <Image 
              src="/images/sobre-geso/mision_3.webp"
              alt="Misión Fundación Genero y Sociedad" 
              fill 
              className="object-cover transition duration-300"
              priority
            />

            <div className="absolute inset-0 bg-[#5B1780]/65 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Imagen hover */}
            <Image
              src="/images/sobre-geso/iconoBandera.svg"
              alt="Imagen hover ícono misión Fundación Género y Sociedad"
              width={197}
              height={247}
              className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Cuadro superior izquierdo */}
          <div className="absolute bg-white border shadow-md flex items-center justify-center
                          lg:-top-[35px] lg:-left-[84px] lg:w-[168px] lg:h-[168px] lg:rounded-[50px] 
                          w-[90px] h-[90px] -top-[17px] -left-[40px] rounded-3xl ">
            <AcademicCapIcon className="lg:w-12 lg:h-12 w-8 h-8 text-[#5B1780]" />
          </div>
          
          {/* Cuadro inferior derecho */}
          <div className="absolute bg-white border shadow-md flex items-center justify-center
                          lg:-bottom-[71px] lg:-right-[50px] lg:w-[213px] lg:h-[213px] lg:rounded-[50px] 
                          -bottom-[30px] -right-[25px] w-[120px] h-[120px] rounded-4xl">
            <BriefcaseIcon className="lg:w-20 lg:h-20 w-10 h-10 text-[#5B1780]"/>
          </div>
        </div>
      
    </section>
  );
}