"use client"

import { Reveal } from "@/components/reveal"

export default function competenciasPage() {
  return (
    <div>
                                      
      <div className="md:my-20 my-10 ">
      
        <div className="flex justify-center pb-10 ">
          
          <h1>Competencias y capacidades</h1>
          
        </div>

        <div className="leading-relaxed text-[#374151] text-lg my-6">

          <Reveal>

            
            <p>
              GESO cuenta con un Know How especializado con propósito, creatividad y sentido de innovación presente en 
              cada uno de los servicios que integra su portafolio: 
            </p>
            
            
              
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Formulación y ejecución de proyectos propios.</li>
              <li>Ejecución y evaluación de políticas, programas y proyectos impulsados por otras entidades.</li>
              <li>Desarrollo de oferta de capacitación y formación para el fortalecimiento del talento humano e institucional.</li>
              <li>Asesoría puntual con acompañamiento especializado.</li>
              <li>Estudios e Investigación. </li>
              
            </ul>
            
          </Reveal>
        </div>
      </div>   
    </div>
  );
}