"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import Link from "next/link";

// Importar estilos de Swiper
import "swiper/css"
import "swiper/css/pagination"
import "./slider.css"

const slides = [
  {
    image: "/images/inicio/fundadora.webp",
    title: (
      <>
        Fundación Género
        <div className="xl:pt-4">y Sociedad</div>
      </>
    ),
    text: null,
    button: null,
  },
  {
    image: "/images/inicio/abajo_inicio.webp",
    title: (
      <>
        <div className="xl:text-[48px]">
          Democracia de género y 
          <div className="xl:pt-3">participación ciudadana</div>
        </div>
      </>
    ),
    text: (
      <>
        Iniciativas que promueven la igualdad en <br></br>la toma de decisiones y en las políticas <br></br> públicas locales y nacionales.
      </>
    ),
    button: {
      label: "Conocer más",
      href: "/proyectos/democracia-de-genero",
    },
  },
]

export default function Slider() {
  return (
    <div className="relative -mt-22 left-1/2 right-1/2 -mx-[50vw] max-w-screen overflow-hidden 
                    pt-21 lg:pt-11 "
                    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={700} // Duración de la animación
        effect="slide"
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-hidden">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className={`object-cover ${index === 0 ? "object-[70%_center]" : ""}`}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-[#5B1780]/60" />

              {/* Card sobre la imagen */}
              <div
                className="absolute flex flex-col 
                sm:text-left
                px-4 sm:px-10 md:px-12 w-full
                sm:max-w-[790px]
                left-1/2 transform -translate-x-1/2
                top-4/11 sm:top-1/2 sm:left-[12.5%] sm:bottom-auto sm:-translate-y-1/2 sm:translate-x-0 "
              > {/* Otra opcion es usar botton-20 y el top-4/11 borrarlo */}

                {/* Título */}
                <h3 className="xl:text-6xl text-[40px] font-bold text-white">
                  {slide.title}
                </h3>

                {/* Texto opcional */}
                {slide.text && (
                  <p className="md:text-[26px] text-lg text-white mt-4">{slide.text}</p>
                )}

                {/* Botón opcional */}
                {slide.button && (
                  <Link
                    href={slide.button.href}
                    className="self-start mt-5 px-2 w-full sm:w-[180px] py-4 text-lg bg-[#FFD11A] text-[#5B1780] 
                              rounded-4xl inline-block text-center font-semibold "
                  >
                    {slide.button.label}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}