"use client";

import Image from "next/image";

const icons = [
  "/images/REDNAM.webp",
  "/images/redcepaz.webp",
  "/images/FORO.webp",
  "/images/CANAESS.webp",
];

export default function IconMarquee() {
  // Puedes ajustar el número de repeticiones
  const repeatCount = 30; // 4 o 6 según el ancho que quieras cubrir
  const repeatedIcons = Array.from({ length: repeatCount }, () => icons).flat();

  return (
    <div className="relative overflow-hidden w-full py-6">
      {/* Gradiente para el fade */}
      <div
        className="pointer-events-none absolute inset-0 z-10
                   bg-[linear-gradient(to_right,_white_0%,_transparent_10%,_transparent_90%,_white_100%)]"
      />

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