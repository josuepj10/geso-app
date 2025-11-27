"use client"

import IconMarquee from "@/components/IconMarquee"
import ImageGESO from "@/components/imageGESO"
import Alianzas from "@/components/nosotrosComponents/alianzas"

export default function alianzasPage() {
  return (
    <>
      <ImageGESO 
        imageSrc="/images/alianzas/estrechar_manos.webp" 
        title="Nuestras alianzas"
        imageClassName="#"
      />
      
      <div className="md:my-25 my-10 ">

        <main className="leading-relaxed text-center text-[#374151] text-lg my-8 mx-auto max-w-[1040px]">
          <p>
            <span className="text-[#5B1780] text-[24px] font-bold">En la Fundación Género y Sociedad (GESO)</span> creemos en el trabajo colectivo 
            como motor de transformación. Por eso, formamos parte activa de redes nacionales y regionales que potencian nuestro impacto, 
            fortalecen nuestra voz y multiplican las oportunidades de incidencia.
          </p>

        </main>

        <p className="text-center text-[#374151] mb-2 font-bold">
          Somos miembros de:
        </p>

        <IconMarquee />

        <Alianzas />
      </div>    
    </>
  );
}