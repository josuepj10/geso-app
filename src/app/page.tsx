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
        <h1 className="mx-auto w-full p-6 text-center mt-20">Noticias más recientes</h1>
      </div>

      <Reveal>

        <div className="my-8 gap-8
                        lg:grid-cols-2
                        grid grid-cols-1 
                         ">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="
            rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-11 flex flex-col h-full justify-between items-start "> 
              
              <h2 className="md:text-3xl text-2xl font-semibold text-[#5B1780] mb-3 ">
                Secretaría Técnica de la REDNAM
                (2018–2019)
              </h2>

              <p className="text-[#374151] text-base mb-3">
                Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red  Nacional de Organizaciones Civiles para las 
                Migraciones (REDNAM).  Durante este período impulsamos la participación en la Conferencia...
              </p>

              <Link 
                href="/proyecto"
                className="mt-2 inline-block px-10 py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#8C339D] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300"
              >
                Leer más
              </Link>
            </div>
          </motion.div>


        </div>
      </Reveal>

      <section className="relative flex flex-col items-center my-10">

        <div className="relative w-full lg:h-[82vh] h-[60vh] rounded-[50px] overflow-hidden mt-20 ">
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
                        shadow-lg p-6 lg:p-10 flex flex-col

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

        