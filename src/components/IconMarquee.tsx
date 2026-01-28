"use client";

import Image from "next/image";

const icons = [
  "/images/iconos-marquee/REDNAM.webp",
  "/images/iconos-marquee/redcepaz.webp",
  "/images/iconos-marquee/FORO.webp",
  "/images/iconos-marquee/CANAESS.webp",
];

export default function IconMarquee() {
  
  const repeatCount = 30; 
  const repeatedIcons = Array.from({ length: repeatCount }, () => icons).flat();

  return (
    <div className="relative overflow-hidden w-full py-6">
      
      <div
        className="pointer-events-none absolute inset-0 z-10 "
                    
      />
      {/*Efecto que desaparece a los lados para el marquee: bg-[linear-gradient(to_right,_white_0%,_transparent_10%,_transparent_90%,_white_100%)]*/}

      {/* Cinta animada */}
      <div className="flex animate-marquee space-x-16">
        {repeatedIcons.map((src, i) => (
          <div key={i} className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={src}
              alt={`Icon ${i + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}