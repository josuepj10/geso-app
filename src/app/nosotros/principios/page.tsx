"use client"

import { Reveal } from "@/components/reveal"

export default function principiosPage() {
  return (
    <div>
      <div className="md:my-20 my-10">
              
        <div className="flex justify-center pb-10 ">
          
          <h1>Cómo operamos / principios</h1>
          
        </div>

        <div className="leading-relaxed text-[#374151] text-lg my-6">

          <Reveal>
            <p>
              Nuestro trabajo se inspira en la Democracia de Género: una propuesta normativa y estratégica que impulsa ciudadanía desde la igualdad, 
              la justicia social y la corresponsabilidad. Este enfoque atraviesa nuestros proyectos, transformando prácticas sociales, culturales y políticas, 
              y partiendo de la convicción de que la igualdad sustantiva es esencial para un desarrollo democrático y sostenible.
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-2">
              En la Fundación GESO operamos bajo los siguientes principios rectores: 
            </p>
          </Reveal>    
          <Reveal>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><b>Equidad e inclusión</b>: igualdad sustantiva, diversidad y no discriminación. </li>
              <li><b>Derechos y democracia</b>: ciudadanía activa, justicia social y cultura de paz. </li>
              <li><b>Innovación y conocimiento</b>: metodologías creativas y producción de saberes. </li>
              <li><b>Alianzas y transparencia</b>: trabajo en red, ética y responsabilidad social. </li>
            </ul>
          </Reveal>
            
          
        </div>
      </div> 
    </div>
  );
}