"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import Link from "next/link";

// Importar estilos de Swiper
import "swiper/css"
import "swiper/css/pagination"

const slides = [
  
  { image: "/images/img1.webp" }
  
  
]

export default function Slider() {
  return (
    <div className="relative -mt-22 left-1/2 right-1/2 -mx-[50vw] max-w-screen overflow-hidden ">

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
              {/* Card sobre la imagen */}
              <div
                className="absolute top-1/2 lg:left-[12.5%] transform -translate-y-1/2
                          w-[90%] max-w-[770px] sm:h-auto p-10 flex flex-col justify-between"
              >
                <h1 className="mb-4">
                  Democracia de género y participación ciudadana
                </h1>

                <p className="text-[#374151] text-base sm:text-lg mb-4">
                  Iniciativas que promueven la igualdad en la toma de decisiones y en las políticas públicas locales y nacionales.
                </p>
                
                <Link 
                  href="/proyecto"
                  className="self-start mt-2 px-10 py-4 text-lg bg-[#5B1780] text-white rounded-4xl hover:bg-[#7a2c97] inline-block text-center"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </SwiperSlide>

            
        ))}
      </Swiper>
    </div>
  )
}