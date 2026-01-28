"use client"

import { Reveal } from "@/components/reveal"
import Verticales from "@/components/apoyanos/cardsVerticales"

export default function ApoyoPage() {

  return (
    <section className="flex flex-col items-center gap-8">
      <main className="leading-relaxed text-[#374151] text-lg text-center my-3 mx-auto max-w-[1050px]">
        
        <h1 className=" flex justify-center pb-2 text-[32px] md:text-[44px] text-[#5B1780] font-bold mb-2 ">
          Haz parte del cambio
        </h1>       

        <Reveal>
          <p className="text-[#374151] leading-relaxed text-lg">
            En la Fundación Género y Sociedad (GESO) creemos que la transformación social se construye en colectivo. Cada donación, cada hora de voluntariado y cada
            alianza institucional nos acerca a una sociedad más justa, inclusiva y equitativa.
          </p>
        </Reveal>
      </main>  

      <Verticales/>
      
      <div className="leading-relaxed text-[#374151] text-lg mb-9">
          
        <h2 className="text-center text-xl text-[#374151] font-bold pb-6">
          Tu compromiso transforma vidas
        </h2>
        <Reveal>
          <p>
              Gracias a tu apoyo hemos podido desarrollar iniciativas reconocidas a nivel nacional e internacional, 
            como el programa Gente sin Fronteras o la elaboración de manuales para periodistas con enfoque de derechos humanos.
          </p>
          <p className="mt-3">Ahora, contigo, podemos llegar más lejos.</p>
        </Reveal>
        
      </div>

    </section>
  )
}