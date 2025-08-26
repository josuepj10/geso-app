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
  
  { image: "/images/ejemplo2.jpg" },
  { image: "/images/ejemplo3.jpg" }
]

export default function Slider() {
  return (
    <div className=" -mt-20 top-0 left-0 w-full mx-auto my-0 relative">
      

      {/* pl-5 pr-5 */}

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
            <div className="relative w-full h-screen overflow-hidden shadow-lg">
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