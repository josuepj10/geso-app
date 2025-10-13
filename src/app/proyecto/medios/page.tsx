"use client"

import { useState } from "react";
import Cardinf from "@/components/cardinf"
import Cardinfrev from "@/components/cardinfrev"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";

export default function mediosPage() {
  const cards = [
    {
      id: 1,
      type: "normal", // Cardinf
      title: "Manual para periodistas sobre migración y refugio (2024)",
      text: `En GESO elaboramos, junto con <strong>ACNUR, el Banco Mundial y Aacrom </strong>, un manual práctico para periodistas que cubren temas de migración y refugio. 
      La publicación ofrece herramientas para una cobertura ética, responsable y con enfoque de derechos humanos, contribuyendo a contrarrestar estereotipos 
      y narrativas negativas.`,
      image: "/images/ejemplo2.jpg",
      button: "Descargar manual",
      href: " ",
    },
    {
      id: 2,
      type: "reverse", // Cardinfrev
      title: "Capítulo en la Guía de Cobertura Periodística del COLPER (2024)",
      text: `En alianza con el <strong>Colegio de Periodistas de Costa Rica (COLPER)</strong>, <strong>ACNUR</strong> y <strong>Aacrom</strong>, desarrollamos el capítulo 
      sobre cobertura periodística con enfoque de derechos humanos en migración y refugio. Esta guía fortalece la práctica profesional de la comunicación en el país. `,
      image: "/images/apoyo.webp",
      button: "Ver guía completa",
      href: " ",
      imageClass: "lg:h-[360px]",
    },
    {
      id: 3,
      type: "normal", // Cardinf
      title: "Programa radial Gente sin Fronteras (2002-2010)",
      text: `Durante ocho años produjimos y transmitimos el programa radial Gente sin Fronteras, un espacio pionero que visibilizó las voces de la población 
      migrante y promovió la convivencia positiva entre personas costarricenses y migrantes. Este programa recibió el <strong>Premio Jorge Vargas Gené</strong> del Colegio 
      de Periodistas de Costa Rica por su aporte a la comunicación inclusiva.`,
      image: "/images/ejemplo2.jpg",
      button: "Escuchar programa",
      href: " ",
    },
    {
      id: 4,
      type: "reverse", // Cardinfrev
      title: "Programas radiales para promover la ciudadanía (2002)",
      text: `Producimos programas radiales en alianza con instituciones nacionales: 
            <ul>
              <li><strong>“Ciudadanía y Poder Local”</strong> con el IFAM, para fomentar la participación en la primera elección directa de alcaldes/as. </li> 
              <li><strong>“La Voz del Tribunal” </strong> con el TSE, orientado a informar y motivar la participación ciudadana durante el mismo proceso electoral. </li>
            </ul> `,
      image: "/images/apoyo.webp",
      button: "Más información",
      href: " ",
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