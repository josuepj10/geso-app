"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import BarSlider from "@/components/barheader"

// Importar estilos de Swiper
import "swiper/css"
import "swiper/css/pagination"

const slides = [
  
  { image: "/images/img1.wepb" },
  { image: "/images/ejemplo2.jpg" }
  
]

export default function Slider() {
  return (
    <div className="relative -mt-22 left-1/2 right-1/2 -mx-[50vw] max-w-screen overflow-hidden">

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
            <div className="relative w-full h-screen overflow-hidden">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}