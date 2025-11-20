"use client"

import { Reveal } from "@/components/reveal"
import ImageGESO from "@/components/imageGESO"
import Competencias from "@/components/nosotrosComponents/competencias";
import Image from "next/image";

export default function competenciasPage() {
  return (
    <>

      <ImageGESO 
        imageSrc="/images/observar.webp" 
        title="Competencias y capacidades"
        imageClassName="object-[60%_center]"
      />
      
      <p className="text-center text-[#374151] mt-20 xl:mt-30 max-w-[660px] mx-auto">
        GESO cuenta con un <span className="text-[#5B1780] font-bold">Know How</span> especializado con propósito, creatividad y 
        sentido de innovación presente en cada uno de los servicios que integra su portafolio: 
      </p>

      <Competencias />

    </>
  );
}