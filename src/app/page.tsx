"use client"

import { Reveal } from "@/components/reveal"
import Slider from "@/components/slider"
import { MessageSquareMore } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <>
     
      <Slider />
        <h1 className="text-center mt-26 mb-13">Cifras de impacto de la fundación</h1>

        <Reveal>
        

          <div className="
            my-8
            grid
            grid-cols-1
            gap-x-8
            gap-y-8
            [@media(min-width:950px)]:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]
            w-full
          "> 
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="w-80 h-40 rounded-4xl bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-4 flex flex-col h-full justify-between items-center">
                <h2 className="text-3xl font-semibold text-[#5B1780] mt-4">+3000</h2>

                <div className="flex mx-auto items-center gap-6 my-5">
                  
                  <MessageSquareMore className="w-6 h-6 text-[#5B1780]" />

                  <p className="text-[#374151] text-lg">
                    Personas ayudadas
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="w-80 h-40 rounded-4xl bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-4 flex flex-col h-full justify-between items-center">
                <h2 className="text-3xl font-semibold text-[#5B1780] mt-4">+3000</h2>

                <div className="flex mx-auto items-center gap-6 my-5">
                  
                  <MessageSquareMore className="w-6 h-6 text-[#5B1780]" />

                  <p className="text-[#374151] text-lg">
                    Personas ayudadas
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="w-80 h-40 rounded-4xl bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-4 flex flex-col h-full justify-between items-center">
                <h2 className="text-3xl font-semibold text-[#5B1780] mt-4">+3000</h2>

                <div className="flex mx-auto items-center gap-6 my-5">
                  
                  <MessageSquareMore className="w-6 h-6 text-[#5B1780]" />

                  <p className="text-[#374151] text-lg">
                    Personas ayudadas
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="w-80 h-40 rounded-4xl bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-4 flex flex-col h-full justify-between items-center">
                <h2 className="text-3xl font-semibold text-[#5B1780] mt-4">+3000</h2>

                <div className="flex mx-auto items-center gap-6 my-5">
                  
                  <MessageSquareMore className="w-6 h-6 text-[#5B1780]" />

                  <p className="text-[#374151] text-lg">
                    Personas ayudadas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>

      <div>
        <h1 className="mx-auto w-full p-6 text-center mt-40">Noticias más recientes</h1>
      </div>

      <Reveal>

        <div className="my-8 grid grid-cols-1 [@media(min-width:1850px)]:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-full max-w-214 min-w-100 max-h-100 min-h-40
            rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-11 flex flex-col h-full justify-between items-start "> 
              {/* items-start alinea todo a la izquierda */}
              <h2 className="text-[40px] font-semibold text-[#5B1780]">
                Secretaría Técnica de la REDNAM
                (2018–2019)
              </h2>

              <p className="text-[#374151] text-lg">
                Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red  Nacional de Organizaciones Civiles para las 
                Migraciones (REDNAM).  Durante este período impulsamos la participación en la Conferencia...
              </p>

              <Link 
                href="/proyecto"
                className="mt-2 inline-block px-10 py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#7a2c97] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300"
              >
                Leer más
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-214 h-100 rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-11 flex flex-col h-full justify-between items-start "> 
              {/* items-start alinea todo a la izquierda */}
              <h2 className="text-[40px] font-semibold text-[#5B1780]">
                Secretaría Técnica de la REDNAM
                (2018–2019)
              </h2>

              <p className="text-[#374151] text-lg">
                Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red  Nacional de Organizaciones Civiles para las 
                Migraciones (REDNAM).  Durante este período impulsamos la participación en la Conferencia...
              </p>

              <Link 
                href="/proyecto"
                className="mt-2 inline-block px-10 py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#7a2c97] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300"
              >
                Leer más
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-214 h-100 rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-11 flex flex-col h-full justify-between items-start "> 
              {/* items-start alinea todo a la izquierda */}
              <h2 className="text-[40px] font-semibold text-[#5B1780]">
                Secretaría Técnica de la REDNAM
                (2018–2019)
              </h2>

              <p className="text-[#374151] text-lg">
                Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red  Nacional de Organizaciones Civiles para las 
                Migraciones (REDNAM).  Durante este período impulsamos la participación en la Conferencia...
              </p>
              <Link 
                href="/proyecto"
                className="mt-2 inline-block px-10 py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#7a2c97] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300"
              >
                Leer más
              </Link>
              
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-214 h-100 rounded-[50px] bg-white border border-[#D1D5DB] shadow-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-11 flex flex-col h-full justify-between items-start "> 
              {/* items-start alinea todo a la izquierda */}
              <h2 className="text-[40px] font-semibold text-[#5B1780]">
                Secretaría Técnica de la REDNAM
                (2018–2019)
              </h2>

              <p className="text-[#374151] text-lg">
                Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red  Nacional de Organizaciones Civiles para las 
                Migraciones (REDNAM).  Durante este período impulsamos la participación en la Conferencia...
              </p>
              <Link 
                href="/proyecto"
                className="mt-2 inline-block px-10 py-4 bg-[#5B1780] text-white rounded-4xl text-lg hover:bg-[#7a2c97] 
                pointer-events-auto hover:shadow-2xl transition-shadow duration-300"
              >
                Leer más
              </Link>
              
            </div>
          </motion.div>

        </div>
      </Reveal>

      <section className="w-full relative">

        <Image 
          src="/images/encuentro-mujeres.webp" 
          alt="Imagen principal" 
          width={1200} 
          height={720} 
          className="w-full h-auto object-cover rounded-[50px] mt-40 mb-30"
          priority
        />

        
        <div
            className="absolute top-1/2 right-[7%] transform -translate-y-1/2
                      w-[90%] max-w-[770px] sm:h-[auto] bg-white rounded-[50px] border border-[#D1D5DB] 
                      shadow-sm p-10 flex flex-col justify-between"
          > 
            <h2 className="text-[40px] font-semibold text-[#5B1780] mb-4">
              Colabora con la Fundación GESO y ayúdanos a promover la equidad social.
            </h2>

            <p className="text-[#374151] text-base sm:text-lg mb-4">
              Cada aporte que usted realiza se transforma en oportunidades reales para quienes más lo necesitan. 
              Sus donaciones permiten financiar programas de educación, inclusión y desarrollo comunitario que 
              buscan reducir las brechas sociales en nuestro país.
            </p>
            
            <Link 
              href="/apoyo"
              className="self-start mt-2 px-10 py-4 text-lg bg-[#5B1780] text-white rounded-4xl hover:bg-[#7a2c97] inline-block text-center"
            >
              Dona aquí
            </Link>
        </div>

      </section>

    </>
  )
}