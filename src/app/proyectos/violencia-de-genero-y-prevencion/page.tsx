"use client"

import Cardinf from "@/components/proyectos/cardinf"
import Cardinfrev from "@/components/proyectos/cardinfrev"

export default function ViolenciaPage() {
  const cards = [
    {
      type: "normal", // Cardinf
      title: "Fortalecimiento de políticas públicas en Gobiernos Locales (2018)",
      text: `En GESO implementamos este proyecto junto con la Unión Nacional de Gobiernos Locales (UNGL) y el Gobierno de Estados Unidos, con el objetivo de reforzar 
      las capacidades técnicas de las Oficinas de Género municipales en Costa Rica. Realizamos seis talleres regionales y un taller nacional con la participación de 
      57 municipalidades, donde se compartieron buenas prácticas y se construyó una agenda común para prevenir la violencia y promover la igualdad de género a 
      nivel local. `,
      image: "/images/proyectos/violencia/Fortalecimiento de políticas públicas en Gobiernos Locales.webp",
      button: "Ver resultados",
      href: "#",
    },
    {
      type: "reverse", // Cardinfrev
      title: "Estrategia comunitaria contra la violencia hacia las mujeres (2017-2018) ",
      text: `Diseñamos y ejecutamos, en alianza con el INAMU, una estrategia comunitaria para el empoderamiento de mujeres en cantones seleccionados de Costa Rica. 
      A través de talleres participativos, impulsamos procesos de liderazgo, organización y prevención de la violencia en todas sus formas. `,
      image: "/images/proyectos/violencia/Estrategia comunitaria contra la violencia hacia las mujeres.webp",
      button: "Conocer experiencia",
      href: "#",
    },
    {
      type: "normal", // Cardinf
      title: "Proyectos comunitarios en Tirrases de Curridabat (2016-2017)",
      text: `En alianza con la Municipalidad de Curridabat y otras instituciones, desarrollamos proyectos como el Programa de formación humana para un proyecto de 
      vida con equidad, Huertas Urbanas y el proceso Es tiempo de cambiar. Estas iniciativas beneficiaron a mujeres costarricenses y migrantes en condición de 
      pobreza, brindándoles herramientas para fortalecer sus competencias personales, sociales y productivas. `,
      image: "/images/proyectos/violencia/Proyectos comunitarios en Tirrases de Curridabat.webp",
      button: "Ver testimonios",
      href: "#",
    },
    {
      type: "reverse", // Cardinfrev
      title: "Investigación regional sobre violencia doméstica (2002) ",
      text: `En GESO colaboramos con el Banco Interamericano de Desarrollo (BID) en la investigación Violencia doméstica: intervenciones para su prevención y 
      tratamiento. El estudio analizó políticas y planes nacionales en Brasil, Bolivia, Chile y Costa Rica, identificando lecciones aprendidas y propuestas para 
      mejorar la atención de la violencia en América Latina.`,
      image: "/images/proyectos/violencia/Investigación regional sobre violencia doméstica.webp",
      button: "Descargar publicación BID",
      href: "#",
    },
    {
      type: "normal", // Cardinf
      title: "Informes regionales sobre violencia de género en América Latina y el Caribe (1999-2000)",
      text: `Lideramos, junto con el PNUD, un estudio en 18 países de la región para evaluar la situación de la violencia de género contra las mujeres. Este 
      trabajo comparativo se convirtió en una referencia regional para la elaboración de políticas públicas y estrategias de prevención. `,
      image: "/images/proyectos/violencia/Informes regionales sobre violencia de género en América Latina y el Caribe.webp",
      button: "Consultar informe PNUD",
      href: "#",
    },
    
  ];

  
  return (
    <div className="flex flex-col items-center gap-8 mb-8 ">
      
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