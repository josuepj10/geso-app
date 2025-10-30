"use client"

import { Reveal } from "@/components/reveal"
import Image from "next/image";
import IconMarquee from "@/components/IconMarquee";

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

          <IconMarquee />

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