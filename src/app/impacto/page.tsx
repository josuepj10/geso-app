"use client"

import { Reveal } from "@/components/reveal"
import Image from "next/image"

export default function impactoPage() {
  return (
    <div>
      <div className="md:my-20 my-10 ">
        <div className="leading-relaxed text-[#374151] text-lg my-6">

          <Reveal>
            <p className="text-[#374151] leading-relaxed text-lg">
              Historias reales, datos de alcance, testimonios de participantes, indicadores de impacto. 
            </p>
          </Reveal>
        </div>

      </div>

      <div className="flex justify-center my-20">
        <Image src="/images/development.png" alt="Construyendo" width={700} height={700} priority />
      </div>


    </div>
  );
}