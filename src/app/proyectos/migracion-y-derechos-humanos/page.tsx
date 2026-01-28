"use client"

import Cardinf from "@/components/proyectos/cardinf"
import Cardinfrev from "@/components/proyectos/cardinfrev"


export default function MigracionPage() {
  const cards = [
    
    {
      type: "reverse", // Cardinfrev
      title: "Secretaría Técnica de la REDNAM (2018-2019) ",
      text: <p>Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red Nacional de Organizaciones Civiles para las Migraciones (REDNAM). 
      Durante este período impulsamos la participación en la Conferencia Regional sobre Migración (CRM) y fortalecimos las acciones de acompañamiento, 
      protección e integración de personas migrantes, refugiadas y apátridas en Costa Rica. </p>,
      image: "/images/proyectos/migracion/Secretaría Técnica de la REDNAM.webp",
      button: "Visitar sitio de REDNAM",
      href: "https://rednam.org/",
    },
    {
      type: "normal", // Cardinf
      title: "Diagnóstico del contexto migratorio en Costa Rica (jun-ago 2017)",
      text: <p>En GESO elaboramos este diagnóstico para la Dirección General de Migración y Extranjería (DGME), con apoyo de la Unión Europea 
      (MIEUX). El estudio ofrece un panorama integral sobre inmigración y emigración en Costa Rica, abordando los procesos de integración social, 
      los retos de las comunidades migrantes y las herramientas institucionales disponibles.</p>,
      image: "/images/proyectos/migracion/Diagnóstico del contexto migratorio en Costa Rica.webp",
      button: "Consultar diagnóstico",
      href: "",
    },
    {
      type: "reverse", // Cardinfrev
      title: "Seminario sobre política migratoria integral (2006)",
      text: <p>En alianza con el Foro Permanente sobre Población Migrante y Refugiada, en GESO organizamos un seminario nacional en el Colegio de Abogados de 
      Costa Rica. Con el apoyo de UNIFEM/ONU, se discutieron lineamientos para una política migratoria integral, aportando propuestas para la nueva Ley de 
      Migración y Extranjería de Costa Rica.</p>,
      image: "/images/proyectos/migracion/Seminario sobre política migratoria integral (2006).webp",
      button: "Ver memorias del seminario",
      href: "http://www.generoysociedad.com/geso/wp-content/uploads/2011/08/Agenda-Provisional-seminario-migrantes-2006-1.pdf",
    },
    {
      type: "normal", // Cardinf
      title: "Plataforma Regional sobre la Resolución 1325 (2016)",
      text: <p>En GESO participamos en la I Reunión de la Plataforma Regional para la implementación de la Resolución 1325 de la ONU sobre mujeres, paz y 
      seguridad. El encuentro, realizado en Guatemala, reunió a gobiernos, sociedad civil y organismos internacionales de Centroamérica, con el objetivo 
      de fortalecer la participación de las mujeres en procesos de seguridad y justicia.</p>,
      image: "/images/proyectos/migracion/Plataforma Regional sobre la Resolución 1325 (2016).webp",
      button: "Más información",
      href: "",
    },
    {
      type: "reverse", // Cardinfrev
      title: "OIT: trabajadoras migrantes y tráfico de mujeres (2001)",
      text: <p>En colaboración con la <strong>Organización Internacional del Trabajo (OIT)</strong>, en GESO realizamos un estudio sobre las condiciones de las trabajadoras migrantes 
      en Costa Rica y los riesgos asociados a la trata de personas. El informe se convirtió en un referente para la formulación de políticas laborales y de protección de derechos.</p>,
      image: "/images/proyectos/migracion/OIT trabajadoras migrantes y tráfico de mujeres.webp",
      button: "Descargar publicación OIT",
      href: "",
    },
    
    {
      type: "normal", // Cardinf
      title: "Mujeres, niños y niñas migrantes (2000)",
      text: <p>En GESO desarrollamos un estudio en colaboración con la <strong>OIM y FLACSO</strong>, como insumo para la V Conferencia Regional sobre Migración (Proceso Puebla). 
      El documento analiza la situación de mujeres, niños y niñas migrantes en la región y los principales desafíos en materia de protección y derechos humanos.</p>,
      image: "/images/proyectos/migracion/Mujeres, niños y niñas migrantes.webp",
      button: "Consultar documento",
      href: "",
    },  
  ];


  return (
    <div className="flex flex-col items-center gap-8 mb-8 ">

      <h1 className=" flex justify-center text-center pb-2 text-[32px] md:text-[44px] text-[#5B1780] font-bold ">
        Migración y derechos humanos
      </h1>

      {/* Cards visibles */}
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