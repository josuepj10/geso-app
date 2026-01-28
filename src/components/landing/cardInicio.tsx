"use client"

import Link from "next/link";
import { motion } from "framer-motion"

interface CardInicioProps {
  titulo: string;
  descripcion: string;
  enlace: string;
  textoB: string;
}

export default function CardInicio({ titulo, descripcion, enlace, textoB }: CardInicioProps) {
  return (

    <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="
        rounded-[50px] bg-white border w-full max-w-[666px] mx-auto border-[#D1D5DB] shadow-sm hover:shadow-2xl  
        transition-shadow duration-300 ease-in-out"
    >
        <article className="p-5 lg:p-8 xl:p-9 flex flex-col h-full xl:min-h-[355px] justify-between items-center lg:items-start">
            <h2 className="lg:text-[28px] text-2xl font-semibold text-[#5B1780] text-center lg:text-start">
                {titulo}
            </h2>

            <p className="text-[#374151] text-base lg:my-7 my-4 text-start">
                {descripcion}
            </p>

            <Link
                href={enlace}
                className="mt-auto inline-block w-full sm:w-[180px] text-center py-4 bg-[#5B1780] text-white hover:text-[#5B1780] 
                rounded-4xl text-lg hover:bg-[#FFD11A] transition-colors duration-200
                pointer-events-auto hover:shadow-2xl "
            >
                {textoB}
            </Link>
        </article>
    </motion.div>
    
  );
}