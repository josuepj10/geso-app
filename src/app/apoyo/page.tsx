"use client"

import { Reveal } from "@/components/reveal"
import Cardinf from "@/components/cardinf"
import Cardinfrev from "@/components/cardinfrev"

export default function ApoyoPage() {
  const cards = [
    {
      type: "normal", // Cardinf
      title: "Dona y apoya nuestros proyectos",
      text: `Tu aporte económico permite que sigamos desarrollando proyectos sociales y culturales con perspectiva de género en Costa Rica y la región. <br></br> 
            Con tu ayuda podemos: 
            <ul>
              <li>Formar líderes comunitarios.</li>
              <li>Fortalecer políticas públicas con enfoque de género.</li>
              <li>Producir recursos educativos y comunicativos que generan impacto real.</li>
            </ul>`,
      image: "/images/ejemplo2.jpg",
      button: "Quiero donar ahora",
      href: "#",
    },
    {
      type: "reverse", // Cardinfrev
      title: "Únete como voluntario/a",
      text: `¿Quieres ser parte activa del cambio? 
            En GESO abrimos espacios para que estudiantes, profesionales y activistas aporten sus conocimientos en: 
            <ul>
              <li>Comunicación y medios.</li>
              <li>Investigación social.</li>
              <li>Educación y formación.</li>
              <li>Gestión de proyectos comunitarios.</li>
            </ul>`,
      image: "/images/apoyo.webp",
      button: "Postúlate como voluntario/a",
      href: "#",
      imageClass: "lg:h-[360px]",
    },
    {
      type: "normal", // Cardinf
      title: "Alianzas y apoyo institucional",
      text: `El trabajo colaborativo potencia nuestro impacto. Por eso construimos alianzas con: 
            <ul>
              <li>Organismos internacionales,</li>
              <li>Gobiernos locales y municipales,</li>
              <li>Universidades y centros de investigación,</li>
              <li>Organizaciones de la sociedad civil y empresas comprometidas con la equidad.</li>
            </ul>`,
      image: "/images/ejemplo2.jpg",
      button: "Conversemos sobre alianzas",
      href: "#",
    },
  ]

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="leading-relaxed text-[#374151] text-lg md:my-10 my-7">
        <div className="flex justify-center pb-10">
          <h1>Haz parte del cambio</h1>
        </div>

        <Reveal>
          <p className="text-[#374151] leading-relaxed text-lg">
            En la Fundación Género y Sociedad (GESO) creemos que la transformación social se construye en colectivo. Cada donación, cada hora de voluntariado y cada
            alianza institucional nos acerca a una sociedad más justa, inclusiva y equitativa.
          </p>
        </Reveal>
      </div>
      
      {/* Cards */}
      {cards.map((card, index) =>
        card.type === "normal" ? (
          <Cardinf
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}
            button={card.button}
            href={card.href}
            imageClass={card.imageClass}
          />
        ) : (
          <Cardinfrev
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}
            button={card.button}
            href={card.href}
            imageClass={card.imageClass}
          />
        )
      )}

      <div className="leading-relaxed text-[#374151] text-lg md:my-10 my-7">
        
        <Reveal>
          <p className="mb-3">Tu compromiso transforma vidas</p>
          <p>
             Gracias a tu apoyo hemos podido desarrollar iniciativas reconocidas a nivel nacional e internacional, 
            como el programa Gente sin Fronteras o la elaboración de manuales para periodistas con enfoque de derechos humanos.
          </p>
          <p className="mt-3">Ahora, contigo, podemos llegar más lejos.</p>
        </Reveal>
      </div>

    </div>
  )
}