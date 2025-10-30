"use client"

import { useState } from "react";
import Cardinf from "@/components/cardinf"
import Cardinfrev from "@/components/cardinfrev"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


export default function MigracionPage() {
  const cards = [
    {
      id: 1,
      type: "normal", // Cardinf
      title: "Diagnóstico del contexto migratorio en Costa Rica (jun-ago 2017)",
      text: `En GESO elaboramos este diagnóstico para la Dirección General de Migración y Extranjería (DGME), con apoyo de la Unión Europea 
      (MIEUX). El estudio ofrece un panorama integral sobre inmigración y emigración en Costa Rica, abordando los procesos de integración social, 
      los retos de las comunidades migrantes y las herramientas institucionales disponibles.`,
      image: "/images/ejemplo2.jpg",
      button: "Consultar diagnóstico",
      href: "#",
    },
    {
      id: 2,
      type: "reverse", // Cardinfrev
      title: "Secretaría Técnica de la REDNAM (2018-2019) ",
      text: `Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red Nacional de Organizaciones Civiles para las Migraciones (REDNAM). 
      Durante este período impulsamos la participación en la Conferencia Regional sobre Migración (CRM) y fortalecimos las acciones de acompañamiento, 
      protección e integración de personas migrantes, refugiadas y apátridas en Costa Rica. `,
      image: "/images/apoyo.webp",
      button: "Visitar sitio de REDNAM",
      href: "https://rednam.org/",
      imageClass: "lg:h-[360px]",
    },
    {
      id: 3,
      type: "normal", // Cardinf
      title: "Plataforma Regional sobre la Resolución 1325 (2016)",
      text: `En GESO participamos en la I Reunión de la Plataforma Regional para la implementación de la Resolución 1325 de la ONU sobre mujeres, paz y 
      seguridad. El encuentro, realizado en Guatemala, reunió a gobiernos, sociedad civil y organismos internacionales de Centroamérica, con el objetivo 
      de fortalecer la participación de las mujeres en procesos de seguridad y justicia.`,
      image: "/images/ejemplo2.jpg",
      button: "Más información",
      href: "#",
    },
    {
      id: 4,
      type: "reverse", // Cardinfrev
      title: "Seminario sobre política migratoria integral (2006)",
      text: `En alianza con el Foro Permanente sobre Población Migrante y Refugiada, en GESO organizamos un seminario nacional en el Colegio de Abogados de 
      Costa Rica. Con el apoyo de UNIFEM/ONU, se discutieron lineamientos para una política migratoria integral, aportando propuestas para la nueva Ley de 
      Migración y Extranjería de Costa Rica.`,
      image: "/images/apoyo.webp",
      button: "Ver memorias del seminario",
      href: "#",
      imageClass: "lg:h-[360px]",
    },
    {
      id: 5,
      type: "normal", // Cardinf
      title: "Mujeres, niños y niñas migrantes (2000)",
      text: `En GESO desarrollamos un estudio en colaboración con la <strong>OIM y FLACSO</strong>, como insumo para la V Conferencia Regional sobre Migración (Proceso Puebla). 
      El documento analiza la situación de mujeres, niños y niñas migrantes en la región y los principales desafíos en materia de protección y derechos humanos.`,
      image: "/images/ejemplo2.jpg",
      button: "Consultar documento",
      href: "#",
    },
    {
      id: 6,
      type: "reverse", // Cardinfrev
      title: "OIT: trabajadoras migrantes y tráfico de mujeres (2001)",
      text: `En colaboración con la <strong>Organización Internacional del Trabajo (OIT)</strong>, en GESO realizamos un estudio sobre las condiciones de las trabajadoras migrantes 
      en Costa Rica y los riesgos asociados a la trata de personas. El informe se convirtió en un referente para la formulación de políticas laborales y de protección de derechos.`,
      image: "/images/apoyo.webp",
      button: "Descargar publicación OIT",
      href: "#",
      imageClass: "lg:h-[360px]",
    },

  ];

  // Configuración de paginación
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  // Calcular las cards visibles
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleCards = cards.slice(startIndex, startIndex + itemsPerPage);

  // Cambio de página
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 ">
      {/* Cards visibles */}
      {visibleCards.map((card) =>
        card.type === "normal" ? (
          <Cardinf
            key={card.id}
            title={card.title}
            text={card.text}
            image={card.image}
            button={card.button}
            href={card.href}
            imageClass={card.imageClass}
          />
        ) : (
          <Cardinfrev
            key={card.id}
            title={card.title}
            text={card.text}
            image={card.image}
            button={card.button}
            href={card.href}
            imageClass={card.imageClass}
          />
        )
      )}

      {/* Paginación */}
      <Pagination className="mb-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}