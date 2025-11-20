"use client";

import Cardinf from "@/components/proyectos/cardinf"
import Cardinfrev from "@/components/proyectos/cardinfrev"


export default function DemocraciaPage() { 
  const cards = [
    {
      
      type: "normal", // Cardinf
      title: "Género y Comercio Internacional (2024)",
      text: `En GESO investigamos y publicamos el ensayo “Género y Comercio Internacional: avances y desafíos, 
        en alianza con FOMEECARD. Además, organizamos el foro “Desafíos de género para el comercio exterior de Costa Rica”. 
        Con esta iniciativa buscamos visibilizar cómo los tratados comerciales afectan de manera diferenciada a mujeres y hombres, 
        generando propuestas para una economía más inclusiva.`,
      image: "/images/ejemplo2.jpg",
      button: "Ver publicación",
      href: "#",
    },
    {
      
      type: "reverse", // Cardinfrev
      title: "Apoyo técnico a FUNDEMUCA (2022-2024)",
      text: `Acompañamos el Programa Internacional de Alto Rendimiento (PIAR) “Alcalde Tomás Rodríguez Bolaños”, una iniciativa conjunta 
        de FUNDEMUCA y el Ayuntamiento de Valladolid (España). Contribuimos al fortalecimiento de capacidades municipales en Centroamérica 
        y el Caribe, con un enfoque de participación ciudadana y equidad.`,
      image: "/images/ejemplo2.jpg",
      button: "Conocer más",
      href: "#",
    },
    {
      
      type: "normal", // Cardinf
      title: "Gestión municipal y equidad de género (2005)",
      text: `En GESO desarrollamos, junto con la Unión Nacional de Gobiernos Locales (UNGL), el proyecto “Gestión municipal y equidad de género”. 
      A través de talleres y asesoría técnica, impulsamos la institucionalización del enfoque de género en los planes estratégicos municipales, 
      creando las bases para políticas locales inclusivas.`,
      image: "/images/ejemplo2.jpg",
      button: "Leer experiencia",
      href: "#",
    },
    {
      
      type: "reverse", // Cardinfrev
      title: "Políticas locales en San José, Cartago y Alajuela (2005-2007)",
      text: `Apoyamos a las municipalidades de San José, Cartago y Alajuela en el diseño y aprobación de sus políticas locales de igualdad y 
      equidad de género. Nuestro aporte incluyó asistencia técnica, metodológica y la facilitación de procesos participativos con autoridades y c
      omunidades.`,
      image: "/images/ejemplo2.jpg",
      button: "Ver resultados",
      href: "#",
    },
    {
      
      type: "normal", // Cardinf
      title: "Observación electoral con enfoque de género (2010-2011)",
      text: `Brindamos asistencia técnica en Guatemala y El Salvador, con el NDI y otras organizaciones, para promover la observación electoral con 
      perspectiva de género. Además, compartimos experiencias de Costa Rica sobre la transición de cuotas mínimas a la paridad política.`,
      image: "/images/ejemplo2.jpg",
      button: "Ver memoria",
      href: "#",
    },
    {
      
      type: "reverse", // Cardinfrev
      title: "Consultorías en el SICA (2009-2012)",
      text: `Elaboramos diagnósticos y lineamientos para la Política Regional de Igualdad y Equidad de Género (PRIEG-SICA), en conjunto con COMMCA/SICA 
      e instituciones nacionales. Este trabajo sentó bases regionales para la transversalización de género en políticas de integración y seguridad.`,
      image: "/images/ejemplo2.jpg",
      button: "Ver documento",
      href: "#",
    },
    {
      
      type: "normal", // Cardinf
      title: "Ciudadanía y Poder Local (2002)",
      text: `Producimos el programa radial “Ciudadanía y Poder Local” para el IFAM, con el fin de promover la participación ciudadana durante la primera 
      elección directa de alcaldías en Costa Rica.`,
      image: "/images/ejemplo2.jpg",
      button: "Escuchar programa",
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