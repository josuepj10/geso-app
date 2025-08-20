"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"

// Importar los estilos de Swiper
import "swiper/css"
import "swiper/css/pagination"

const slides = [
  {
    image: "/images/ejemplo1.jpg",
    title: "Lucha por los derechos",
    href: "/proyecto-manifestar",
  },
  {
    image: "/images/ejemplo2.jpg",
    title: "Fotografía de FB GESO",
    href: "/lugar-presentaciones",
  },
  {
    image: "/images/ejemplo3.jpg",
    title: "Fotografía de FB GESO",
    href: "/equipo-GESO",
  },
]

export default function Slider() {
  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      <Swiper
        modules={[Pagination, Autoplay]}   
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.href}>
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Texto con animación */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4/5 bg-black/50 text-white p-4 text-lg font-semibold text-center rounded-md shadow-md"
                >
                  {slide.title}
                </motion.div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}