"use client"

import { useState } from "react";
import Cardinf from "@/components/cardinf"
import Cardinfrev from "@/components/cardinfrev"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";

export default function violenciaPage() {
  const cards = [
    {
      id: 1,
      type: "normal", // Cardinf
      title: "Fortalecimiento de políticas públicas en Gobiernos Locales (2018)",
      text: `En GESO implementamos este proyecto junto con la Unión Nacional de Gobiernos Locales (UNGL) y el Gobierno de Estados Unidos, con el objetivo de reforzar 
      las capacidades técnicas de las Oficinas de Género municipales en Costa Rica. Realizamos seis talleres regionales y un taller nacional con la participación de 
      57 municipalidades, donde se compartieron buenas prácticas y se construyó una agenda común para prevenir la violencia y promover la igualdad de género a 
      nivel local. `,
      image: "/images/ejemplo2.jpg",
      button: "Ver resultados",
      href: " ",
    },
    {
      id: 2,
      type: "reverse", // Cardinfrev
      title: "Estrategia comunitaria contra la violencia hacia las mujeres (2017-2018) ",
      text: `Diseñamos y ejecutamos, en alianza con el INAMU, una estrategia comunitaria para el empoderamiento de mujeres en cantones seleccionados de Costa Rica. 
      A través de talleres participativos, impulsamos procesos de liderazgo, organización y prevención de la violencia en todas sus formas. `,
      image: "/images/apoyo.webp",
      button: "Conocer experiencia",
      href: " ",
      imageClass: "lg:h-[360px]",
    },
    {
      id: 3,
      type: "normal", // Cardinf
      title: "Proyectos comunitarios en Tirrases de Curridabat (2016-2017)",
      text: `En alianza con la Municipalidad de Curridabat y otras instituciones, desarrollamos proyectos como el Programa de formación humana para un proyecto de 
      vida con equidad, Huertas Urbanas y el proceso Es tiempo de cambiar. Estas iniciativas beneficiaron a mujeres costarricenses y migrantes en condición de 
      pobreza, brindándoles herramientas para fortalecer sus competencias personales, sociales y productivas. `,
      image: "/images/ejemplo2.jpg",
      button: "Ver testimonios",
      href: " ",
    },
    {
      id: 4,
      type: "reverse", // Cardinfrev
      title: "Investigación regional sobre violencia doméstica (2002) ",
      text: `En GESO colaboramos con el Banco Interamericano de Desarrollo (BID) en la investigación Violencia doméstica: intervenciones para su prevención y 
      tratamiento. El estudio analizó políticas y planes nacionales en Brasil, Bolivia, Chile y Costa Rica, identificando lecciones aprendidas y propuestas para 
      mejorar la atención de la violencia en América Latina.`,
      image: "/images/apoyo.webp",
      button: "Descargar publicación BID",
      href: " ",
      imageClass: "lg:h-[360px]",
    },
    {
      id: 5,
      type: "normal", // Cardinf
      title: "Informes regionales sobre violencia de género en América Latina y el Caribe (1999-2000)",
      text: `Lideramos, junto con el PNUD, un estudio en 18 países de la región para evaluar la situación de la violencia de género contra las mujeres. Este 
      trabajo comparativo se convirtió en una referencia regional para la elaboración de políticas públicas y estrategias de prevención. `,
      image: "/images/ejemplo2.jpg",
      button: "Consultar informe PNUD",
      href: " ",
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
    <div className="flex flex-col items-center gap-8 p-4">
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
      <Pagination className="mt-4">
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