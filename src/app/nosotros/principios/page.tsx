"use client"

import { Reveal } from "@/components/reveal"
import ImageGESO from "@/components/imageGESO"
import Principios from "@/components/nosotrosComponents/principios";

export default function principiosPage() {
  return (
    <>

      <ImageGESO 
        imageSrc="/images/lectura.webp" 
        title="Nuestros principios"
        imageClassName="#"
      />

      <div className="md:my-25 my-10 text-center">
        <h1>Nuestro trabajo se inspira en la Democracia de Género</h1>
        <Reveal>
          <p className="leading-relaxed text-[#374151] text-lg my-8 mx-auto max-w-[1060px]">
              Una propuesta normativa y estratégica que impulsa ciudadanía desde la igualdad, 
              la justicia social y la corresponsabilidad. Este enfoque atraviesa nuestros proyectos, transformando prácticas sociales, culturales 
              y políticas, y partiendo de la convicción de que la igualdad sustantiva es esencial para un desarrollo democrático y sostenible.

          </p>
        </Reveal>

      </div>

      <Principios />

    </>
  );
}