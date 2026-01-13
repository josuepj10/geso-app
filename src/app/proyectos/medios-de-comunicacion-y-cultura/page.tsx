"use client"

import Cardinf from "@/components/proyectos/cardinf"
import Cardinfrev from "@/components/proyectos/cardinfrev"


export default function MediosPage() {
  const cards = [
    {
      type: "normal", // Cardinf
      title: "Manual para periodistas sobre migración y refugio (2024)",
      text: `En GESO elaboramos, junto con <strong>ACNUR, el Banco Mundial y Aacrom </strong>, un manual práctico para periodistas que cubren temas de migración y refugio. 
      La publicación ofrece herramientas para una cobertura ética, responsable y con enfoque de derechos humanos, contribuyendo a contrarrestar estereotipos 
      y narrativas negativas.`,
      image: "/images/proyectos/medios/Manual para periodistas sobre migración y refugio.webp",
      button: "Descargar manual",
      href: "#",
    },
    {
      type: "reverse", // Cardinfrev
      title: "Capítulo en la Guía de Cobertura Periodística del COLPER (2024)",
      text: `En alianza con el <strong>Colegio de Periodistas de Costa Rica (COLPER)</strong>, <strong>ACNUR</strong> y <strong>Aacrom</strong>, desarrollamos el capítulo 
      sobre cobertura periodística con enfoque de derechos humanos en migración y refugio. Esta guía fortalece la práctica profesional de la comunicación en el país. `,
      image: "/images/proyectos/medios/Capitulo-en-la-Guia-de-Cobertura-Periodistica-del-COLPER.webp",
      button: "Ver guía completa",
      href: "#",
    },
    {
      type: "normal", // Cardinf
      title: "Programa radial Gente sin Fronteras (2002-2010)",
      text: `Durante ocho años produjimos y transmitimos el programa radial Gente sin Fronteras, un espacio pionero que visibilizó las voces de la población 
      migrante y promovió la convivencia positiva entre personas costarricenses y migrantes. Este programa recibió el <strong>Premio Jorge Vargas Gené</strong> del Colegio 
      de Periodistas de Costa Rica por su aporte a la comunicación inclusiva.`,
      image: "/images/ejemplo2.jpg",
      button: "Escuchar programa",
      href: "#",
    },
    {
      type: "reverse", // Cardinfrev
      title: "Programas radiales para promover la ciudadanía (2002)",
      text: `Producimos programas radiales en alianza con instituciones nacionales: 
            <ul>
              <li><strong>“Ciudadanía y Poder Local”</strong> con el IFAM, para fomentar la participación en la primera elección directa de alcaldes/as. </li> 
              <li><strong>“La Voz del Tribunal” </strong> con el TSE, orientado a informar y motivar la participación ciudadana durante el mismo proceso electoral. </li>
            </ul> `,
      image: "/images/ejemplo2.jpg",
      button: "Más información",
      href: "#",
    },
    
  ];

  return (
    <div className="flex flex-col items-center gap-8 mb-8">
      
      {cards.map((card, index) =>
        card.type === "normal" ? (
          <Cardinf
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}
            button={card.button}
            href={card.href}
          />
        ) : (
          <Cardinfrev
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}
            button={card.button}
            href={card.href}
          />
        )
      )}
    </div> 
  );
}