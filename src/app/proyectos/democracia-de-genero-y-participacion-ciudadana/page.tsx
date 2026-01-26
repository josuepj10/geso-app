"use client";

import Cardinf from "@/components/proyectos/cardinf"
import Cardinfrev from "@/components/proyectos/cardinfrev"


export default function DemocraciaPage() { 
  const cards = [
    {
      
      type: "normal", // Cardinf
      title: "Género y Comercio Internacional (2024)",
      text: <p>En GESO investigamos y publicamos el ensayo “Género y Comercio Internacional: avances y desafíos, 
        en alianza con FOMEECARD. Además, organizamos el foro “Desafíos de género para el comercio exterior de Costa Rica”. 
        Con esta iniciativa buscamos visibilizar cómo los tratados comerciales afectan de manera diferenciada a mujeres y hombres, 
        generando propuestas para una economía más inclusiva.</p>,
      image: "/images/proyectos/democracia/Genero-y-comercio-internacional.webp",
      button: "Ver publicación",
      href: "https://drive.google.com/file/d/19JzPpGPpjCqLZkrbRYWVISh_G7e584lr/view",
    },
    {
      
      type: "reverse", // Cardinfrev
      title: "Apoyo técnico a FUNDEMUCA (2022-2024)",
      text: <p>Acompañamos el Programa Internacional de Alto Rendimiento (PIAR) “Alcalde Tomás Rodríguez Bolaños”, una iniciativa conjunta 
        de FUNDEMUCA y el Ayuntamiento de Valladolid (España). Contribuimos al fortalecimiento de capacidades municipales en Centroamérica 
        y el Caribe, con un enfoque de participación ciudadana y equidad.</p>,
      image: "/images/proyectos/democracia/Apoyo-tecnico-a-FUNDEMUCA.webp",
      button: "Conocer más",
      href: "",
    },
    {
      
      type: "normal", // Cardinf
      title: "Gestión municipal y equidad de género (2005)",
      text: <p>En GESO desarrollamos, junto con la Unión Nacional de Gobiernos Locales (UNGL), el proyecto “Gestión municipal y equidad de género”. 
      A través de talleres y asesoría técnica, impulsamos la institucionalización del enfoque de género en los planes estratégicos municipales, 
      creando las bases para políticas locales inclusivas.</p>,
      image: "/images/proyectos/democracia/Gestion-municipal-y-equidad-de-genero.webp",
      button: "Leer experiencia",
      href: "",
    },
    {
      
      type: "reverse", // Cardinfrev
      title: "Políticas locales en San José, Cartago y Alajuela (2005-2007)",
      text: <p>Apoyamos a las municipalidades de San José, Cartago y Alajuela en el diseño y aprobación de sus políticas locales de igualdad y 
      equidad de género. Nuestro aporte incluyó asistencia técnica, metodológica y la facilitación de procesos participativos con autoridades y 
      comunidades.</p>,
      image: "/images/proyectos/democracia/Politicas-locales-en-San-Jose,-Cartago-y-Alajuela.webp",
      button: "Ver resultados",
      href: "",
    },
    {
      
      type: "normal", // Cardinf
      title: "Observación electoral con enfoque de género (2010-2011)",
      text: <p>Brindamos asistencia técnica en Guatemala y El Salvador, con el NDI y otras organizaciones, para promover la observación electoral con 
      perspectiva de género. Además, compartimos experiencias de Costa Rica sobre la transición de cuotas mínimas a la paridad política.</p>,
      image: "/images/proyectos/democracia/Observacion-electoral-con-enfoque-de-genero.webp",
      button: "Ver memoria",
      href: "",
    },
    {
      
      type: "reverse", // Cardinfrev
      title: "Consultorías en el SICA (2009-2012)",
      text: <p>Elaboramos diagnósticos y lineamientos para la Política Regional de Igualdad y Equidad de Género (PRIEG-SICA), en conjunto con COMMCA/SICA 
      e instituciones nacionales. Este trabajo sentó bases regionales para la transversalización de género en políticas de integración y seguridad.</p>,
      image: "/images/proyectos/democracia/Consultorias-en-el-SICA.webp",
      button: "Ver documento",
      href: "",
    },
    {
      
      type: "normal", // Cardinf
      title: "Ciudadanía y Poder Local (2002)",
      text: <p>Producimos el programa radial “Ciudadanía y Poder Local” para el IFAM, con el fin de promover la participación ciudadana durante la primera 
      elección directa de alcaldías en Costa Rica.</p>,
      image: "/images/proyectos/democracia/Ciudadania-y-Poder-Local.webp",
      button: "Escuchar programa",
      href: "",
    },

  ];

  return (
    <div className="flex flex-col items-center gap-8 mb-8">

      <h1 className=" flex justify-center text-center pb-2 text-[32px] md:text-[44px] text-[#5B1780] font-bold ">
        Democracia de género y participación ciudadana
      </h1>
      
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