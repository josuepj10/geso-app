"use client"

import { Reveal } from "@/components/reveal"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"


export default function misionPage() {
  return (


    <div>
      

      {/* Botones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 place-items-center my-10 ">
        

        {/* Efecto de react tilt */}
        

        <Link href="ciudadania">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-60 h-60 bg-purple-600 text-white rounded-2xl shadow  hover:bg-purple-500
                       flex flex-col justify-between items-center p-4 cursor-pointer"
          >
            
            <Image src="/images/logo.png" alt="logo" width={170} height={170} />
            <span className="mt-4 text-xl">Historia</span>  
          </motion.div>  
          
        </Link>

        

        <Link href="destacados">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-60 h-60 bg-purple-600 text-white rounded-2xl shadow  hover:bg-purple-500
                       flex flex-col justify-between items-center p-4 cursor-pointer"
          >
            <Image src="/images/logo.png" alt="logo" width={170} height={170} />
            <span className="mt-4 text-xl">Destacados</span>  
          </motion.div>
        </Link>
        
        <Link href="medios">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-60 h-60 bg-purple-600 text-white rounded-2xl shadow  hover:bg-purple-500
                       flex flex-col justify-between items-center p-4 cursor-pointer"
          >
            <Image src="/images/logo.png" alt="logo" width={170} height={170} />
            <span className="mt-4 text-xl">Medios</span>  
          </motion.div>
        </Link>

        <Link href="migracion">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-60 h-60 bg-purple-600 text-white rounded-2xl shadow  hover:bg-purple-500
                       flex flex-col justify-between items-center p-4 cursor-pointer"
          >
            <Image src="/images/logo.png" alt="logo" width={170} height={170} />
            <span className="mt-4 text-xl">Migración</span>  
          </motion.div>
        </Link>

        <Link href="violencia-de-genero">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-60 h-60 bg-purple-600 text-white rounded-2xl shadow  hover:bg-purple-500
                       flex flex-col justify-between items-center p-4 cursor-pointer"
          >
            <Image src="/images/logo.png" alt="logo" width={170} height={170} />
            <span className="mt-4 text-xl">Violencia de género</span>  
          </motion.div>
        </Link>



      </div>
      <div className="flex justify-center gap-4 mt-8">

    </div>
      
    </div>
  );
}