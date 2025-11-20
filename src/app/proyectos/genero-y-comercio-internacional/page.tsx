"use client"

import { Reveal } from "@/components/reveal"



export default function GeneroComercioPage() {
  return (
    
    <div className="md:mb-20 lg:mb-17 mb-10 ">
      <div className="leading-relaxed text-[#374151] text-lg my-6">

        <div className="flex justify-center pb-10 ">
        
          <h1>Género y comercio internacional</h1>

        </div>

        <Reveal>
          <p className="text-[#374151] leading-relaxed text-lg lg:text-center">
            Propuestas pioneras que analizan cómo los tratados y dinámicas comerciales afectan de manera diferenciada a mujeres y hombres. 
          </p>
        </Reveal>
      </div>
      
      <div className="flex justify-center py-4 lg:py-7 ">
        
        <h1>Foro Desafios de género para el comercio exterior de Costa Rica (18 de julio de 2024).</h1>

      </div>
      
      <div className="flex justify-center">
        <div className="w-full max-w-3xl aspect-video my-6 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0rjmUrA1wsY?si=_ASiHlzVBsbwLpqg"
            title="Video de YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    
  );
}