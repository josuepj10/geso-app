"use client"


import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function misionPage() {
  return (


    <div>
      <br></br>
      <h1>
        Misión
      </h1>
      <br></br>
      
       <p>Promover y desarrollar proyectos sociales y culturales que, incorporando la perspectiva de 
       género, promuevan la equidad social.
       </p>
       <br></br>
      
      <h1>
        Visión
      </h1>
      <br></br>
      
        <p>Ser una entidad reconocida a nivel nacional e internacional, por la calidad de los proyectos sociales 
         y culturales que realiza y el rigor con que incorpora la perspectiva de equidad de género tanto en el plano conceptual como metodológico.
        </p>
      
      <br></br>
      <h1>
        Más sobre nosotros:
      </h1>

      {/* Botones */}
      <div className="flex justify-center gap-20 my-10 ">
        

        {/* Efecto de react tilt */}
        

        <Link href="historia">
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

        

        <Link href="equipo">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-60 h-60 bg-purple-600 text-white rounded-2xl shadow  hover:bg-purple-500
                       flex flex-col justify-between items-center p-4 cursor-pointer"
          >
            <Image src="/images/logo.png" alt="logo" width={170} height={170} />
            <span className="mt-4 text-xl">Equipo</span>  
          </motion.div>
        </Link>
        
        <Link href="principios">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-60 h-60 bg-purple-600 text-white rounded-2xl shadow  hover:bg-purple-500
                       flex flex-col justify-between items-center p-4 cursor-pointer"
          >
            <Image src="/images/logo.png" alt="logo" width={170} height={170} />
            <span className="mt-4 text-xl">Principios</span>  
          </motion.div>
        </Link>

      </div>
      <div className="flex justify-center gap-4 mt-8">

    </div>
      
    </div>
  );
}