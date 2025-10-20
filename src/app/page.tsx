"use client"

import { Reveal } from "@/components/reveal"
import Slider from "@/components/slider"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <>
     
      <Slider />
        

      <div>
        <h1 className="mx-auto w-full p-6 text-center lg:mt-10 mt-6">Noticias más recientes</h1>
      </div>

      <div className="my-2 lg:my-8 gap-8
                      lg:grid-cols-2
                      grid grid-cols-1 
                        ">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="
            rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-5 lg:p-8 xl:p-9 flex flex-col h-full justify-between items-center lg:items-start  "> 
              
              <h2 className="md:text-3xl text-2xl font-semibold text-[#5B1780] text-center lg:text-start">
                Secretaría Técnica de la REDNAM (2018–2019)
              </h2>

              <p className="text-[#374151] text-base lg:my-7 my-4 text-start ">
                Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red  Nacional de Organizaciones Civiles para las 
                Migraciones (REDNAM).  Durante este período impulsamos la participación en la Conferencia...
              </p>

              <Link 
                href="/proyecto/migracion"
                className="inline-block w-full text-center py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#8C339D] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300 "
              >
                Leer más
              </Link>
            </div>
          </motion.div>
        </Reveal>
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="
            rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-5 lg:p-8 xl:p-9 flex flex-col h-full justify-between items-center lg:items-start  "> 
              
              <h2 className="md:text-3xl text-2xl font-semibold text-[#5B1780] text-center lg:text-start">
                Género y Comercio Internacional (2024)
              </h2>

              <p className="text-[#374151] text-base lg:my-8 my-4 text-start ">
                En GESO investigamos y publicamos el ensayo “Género y Comercio Internacional: avances y desafíos, en alianza con 
                FOMEECARD. Además, organizamos el foro “Desafíos de género para el comercio exterior de Costa Rica”. Con esta 
                iniciativa buscamos ...
              </p>

              <Link 
                href="/proyecto/ciudadania"
                className=" inline-block w-full text-center py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#8C339D] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300 "
              >
                Leer más
              </Link>
            </div>
          </motion.div>
        </Reveal>
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="
            rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-5 lg:p-8 xl:p-9 flex flex-col h-full justify-between items-center lg:items-start  "> 
              
              <h2 className="md:text-3xl text-2xl font-semibold text-[#5B1780] text-center lg:text-start">
                Manual para periodistas sobre migración y refugio (2024)
              </h2>

              <p className="text-[#374151] text-base lg:my-7 my-4 text-start ">
                En GESO elaboramos, junto con ACNUR, el Banco Mundial y Aacrom , un manual práctico para periodistas que cubren 
                temas de migración y refugio. La publicación ofrece herramientas para ...
              </p>

              <Link 
                href="/proyecto/medios"
                className=" inline-block w-full text-center py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#8C339D] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300 "
              >
                Leer más
              </Link>
            </div>
          </motion.div>
        </Reveal>
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="
            rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-5 lg:p-8 xl:p-9 flex flex-col h-full justify-between items-center lg:items-start  "> 
              
              <h2 className="md:text-3xl text-2xl font-semibold text-[#5B1780] text-center lg:text-start">
                Fortalecimiento de políticas públicas en Gobiernos Locales (2018)
              </h2>

              <p className="text-[#374151] text-base lg:my-7 my-4 text-start ">
                En GESO implementamos este proyecto junto con la Unión Nacional de Gobiernos Locales (UNGL) y el Gobierno de 
                Estados Unidos, con el objetivo de reforzar las capacidades técnicas de ...
              </p>

              <Link 
                href="/proyecto/violencia-de-genero"
                className=" inline-block w-full text-center py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#8C339D] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300 "
              >
                Leer más
              </Link>
            </div>
          </motion.div>
        </Reveal>
        
      </div>
      

      <section className="relative flex flex-col items-center mb-12">

        <div className="relative w-full xl:h-[82vh] lg:h-[70vh] h-[60vh] rounded-[50px] overflow-hidden mt-20">
          <Image 
            src="/images/encuentro-mujeres.webp" 
            alt="Imagen principal" 
            fill 
            className="object-cover"
            priority
          />
        </div>
          
          <div
              className="
                        relative -mt-55 z-10
                        lg:mt-10   
                        mx-auto w-[98%] sm:w-[80%]
                        bg-white rounded-[30px] border border-[#D1D5DB] 
                        shadow-lg p-6 lg:p-8 flex flex-col

                        lg:absolute lg:top-1/2 lg:right-20 lg:transform lg:-translate-y-1/2 lg:w-150 
                        "
            > 
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#5B1780] mb-4">
                Colabora con la Fundación GESO y ayúdanos a promover la equidad social.
              </h2>

              <p className="text-[#374151] text-base sm:text-lg mb-4">
                Cada aporte que usted realiza se transforma en oportunidades reales para quienes más lo necesitan. 
                Sus donaciones permiten financiar programas de educación, inclusión y desarrollo comunitario que 
                buscan reducir las brechas sociales en nuestro país.
              </p>
              
              <Link 
                href="/apoyo"
                className="self-start mt-2 px-8 py-3 text-lg bg-[#5B1780] text-white rounded-full hover:bg-[#8C339D] inline-block text-center"
              >
                Dona aquí
              </Link>
          </div>
          

      </section>

    </>
  )
}

        