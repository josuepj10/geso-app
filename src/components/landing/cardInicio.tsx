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
        rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    >
        <div className="p-5 lg:p-8 xl:p-9 flex flex-col h-full justify-between items-center lg:items-start">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#5B1780] text-center lg:text-start">
                {titulo}
            </h2>

            <p className="text-[#374151] text-base lg:my-7 my-4 text-start">
                {descripcion}
            </p>

            <Link
                href={enlace}
                className="inline-block w-full sm:w-[180px] text-center py-4 bg-[#5B1780] text-white hover:text-[#5B1780] 
                rounded-4xl text-lg hover:bg-[#FFD11A] 
                pointer-events-auto hover:shadow-2xl "
            >
                {textoB}
            </Link>
        </div>
    </motion.div>
    
  );
}