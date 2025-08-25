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
    href: "/..",
  },
  {
    image: "/images/ejemplo2.jpg",
    title: "Fotografía de FB GESO",
    href: "/...",
  },
  {
    image: "/images/ejemplo3.jpg",
    title: "Fotografía de FB GESO",
    href: "/....",
  },
]

export default function Slider() {
  return (
    <div className="pl-5 pr-5 w-full mx-auto my-8">
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

                {/* Barra negra */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/5 bg-black/25 text-white p-4 
                  text-lg font-semibold text-center rounded-md shadow-md"
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