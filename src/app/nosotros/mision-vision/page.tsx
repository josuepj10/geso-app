"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"


export default function misionPage() {
  return (

    
    <div>
      
      <div className="flex justify-center mt-4 ">
        <h1>Nosotros</h1>
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:justify-between py-6 lg:py-20">
      
        <div className="md:w-1/2 lg:mr-10 my-10 ">
          <Reveal>
            <h1 className="my-5">Misión</h1>
          
            <p className="text-[#374151] leading-relaxed text-lg">
              La Fundación Género y Sociedad (GESO) promueve y desarrolla proyectos sociales y culturales que, 
              desde una perspectiva de género, buscan contribuir a la equidad social y al fortalecimiento de la 
              democracia en Costa Rica y la región. 
            </p>
          </Reveal>
          
        </div>
        
        <div className="relative w-full h-70 md:w-150 md:h-110 rounded-[50px] overflow-hidden group px-2 ">
          <Image 
            src="/images/mision.webp" 
            alt="Imagen principal" 
            fill 
            className="object-cover transition duration-300"
            priority
          />
          <div className="absolute inset-0 bg-[#5B1780]/65 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
          {/* Imagen hover */}
          <Image
            src="/images/HoverMision.webp"
            alt="Ícono Hover Misión"
            width={197}
            height={247}
            className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
          />
        </div>
      </div>
      
      <div className="bg-[#F3F4F6] -ml-4 -mr-4 lg:relative lg:left-1/2 lg:-mx-[50vw] w-[100vw] overflow-x-hidden ">

        <div className="lg:w-[75vw] px-4 mx-auto flex flex-col md:flex-row items-center md:items-center gap-4 md:justify-between py-6 lg:py-20">
          <div className="relative w-full h-70 md:w-150 md:h-110 rounded-[50px] overflow-hidden order-2 md:order-1 group">
            <Image 
              src="/images/vision.webp" 
              alt="Imagen principal" 
              fill
              className="object-cover transition duration-300"
              priority
            />
            <div className="absolute inset-0 bg-[#FFD11A]/65 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
            {/* Imagen hover */}
            <Image
              src="/images/HoverVision.webp"
              alt="Ícono Hover Visión"
              width={246}
              height={247}
              className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 my-10 order-1 md:order-2">
            <Reveal>
              <h1 className="my-5">Visión</h1>
            
              <p className="text-[#374151] leading-relaxed text-lg">
                Ser una entidad reconocida a nivel nacional e internacional por la calidad de los proyectos sociales y culturales 
                que desarrolla, así como por el rigor con que incorpora la perspectiva de equidad de género, tanto en el plano 
                conceptual como en el metodológico. 
              </p>
            </Reveal>
          </div>
          
        </div>
      </div>

      <div className="md:my-20 my-10 ">

        <div className="flex justify-center ">
          <h1>Historia</h1>
        </div>
        <div className="leading-relaxed text-[#374151] text-lg my-6">
          <Reveal>
            <p>
              La Fundación GESO es una organización sin fines de lucro, creada en 1993, en Costa Rica, como una iniciativa de 
              profesionales de distintas áreas que identificaron la necesidad de promover la inclusión social a nivel local, 
              nacional y regional, tanto en el ámbito público como privado. Desde Costa Rica, proyectamos actividades a nivel 
              centroamericano y latinoamericano. 
            </p>
            
            
              <p className="mt-4">
                A lo largo de más de tres décadas, hemos impulsado proyectos innovadores en campos como:
              </p>
            
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Democracia de género.</li>
                <li>Ciudadanía sustantiva.</li>
                <li>Género y comercio internacional.</li>
                <li>Migración y derechos humanos.</li>
                <li>Medios de comunicación y representaciones sociales.</li>
                <li>Políticas públicas de inclusión social.</li>
              </ul>
            
            <p className="mt-4">
              En este camino, GESO ha consolidado alianzas con instituciones públicas, organismos internacionales y organizaciones 
              de la sociedad civil, lo que ha permitido ampliar su impacto en comunidades y en la agenda pública.
            </p>
            
          </Reveal>

        </div>

      </div>  
    </div>
  );
}      