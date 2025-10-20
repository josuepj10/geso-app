"use client"

import { Reveal } from "@/components/reveal"
import Image from "next/image";

export default function alianzasPage() {
  return (
    <div>
      
      <div className="md:my-20 my-10 ">
        <div className="flex justify-center pb-10 ">
          
          <h1>Alianzas</h1>
  
        </div>

        <div className="leading-relaxed text-[#374151] text-lg my-6">

          <Reveal>
            <p>
              En la Fundación Género y Sociedad (GESO) creemos en el trabajo colectivo como motor de transformación. Por eso, formamos parte activa 
              de redes nacionales y regionales que potencian nuestro impacto, fortalecen nuestra voz y multiplican las oportunidades de incidencia.
            </p>
          </Reveal>
          <Reveal>
            <p className="my-4">
              Somos miembros de:
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6">
            
            <Image src="/images/REDNAM.webp" alt="REDNAM" width={250} height={300} className="object-contain w-[200px] h-[240px] md:w-[250px] md:h-[300px]" priority />
            <Image src="/images/redcepaz.webp" alt="redcepaz" width={300} height={200} className="object-contain w-[240px] h-[190px] md:w-[300px] md:h-[200px]" priority />
            <Image src="/images/FORO.webp" alt="FORO" width={250} height={300} className="object-contain w-[200px] h-[240px] md:w-[250px] md:h-[300px]" priority />
            <Image src="/images/CANAESS.webp" alt="CANAESS" width={330} height={230} className="object-contain w-[280px] h-[200px] md:w-[330px] md:h-[230px]" priority />
          </div>

          <Reveal>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <p>Estas alianzas nos permiten:</p>
              <li>Participar en espacios de diálogo y toma de decisiones. </li>
              <li>Incidir en políticas públicas desde una perspectiva de género y derechos humanos. </li>
              <li>Compartir aprendizajes y experiencias con organizaciones de la sociedad civil, instituciones públicas y organismos internacionales. </li>
            </ul>
          </Reveal>
        
        </div>
      </div>   
      
    </div>
  );
}