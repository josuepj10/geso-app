"use client"

import { Reveal } from "@/components/reveal"
import { useState } from "react";
import CardPublicaciones from "@/components/publicaciones/cardPublicaciones";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function RecursosPage() {
  const cards = [
    {
      id: 1,
      title: "Manual para periodistas: informar sobre personas refugiadas y migrantes frente a los desafíos de la movilidad humana (2024) ",
      text: `En alianza con ACNUR, Banco Mundial y Aacrom. 
      Una guía esencial para periodistas que cubren temas de migración y refugio. Incluye herramientas sobre verificación de hechos, narrativas 
      responsables y marcos normativos de Costa Rica y Centroamérica. Busca promover una cobertura con enfoque de derechos, ética y empática. `,
      image: "/images/guia.webp",
      button: "Descargar el manual en ACNUR",
      href: "https://www.acnur.org/sites/default/files/2024-11/manual_para_periodistas_acnur_2024.pdf",
    },
    {
      id: 2,    
      title: "Capítulo: Cobertura periodística con enfoque de derechos humanos en migración y refugio (2024) ",
      text: `Parte de la <strong>Guía de Cobertura Periodística</strong> del Colegio de Periodistas de Costa Rica (COLPER). 
      GESO elaboró este capítulo en conjunto con ACNUR y Aacrom, ofreciendo recomendaciones prácticas para periodistas que trabajan temas 
      de migración y refugio. `,
      image: "/images/guia.webp",
      button: "Ver la guía completa",
      href: "https://colper.or.cr/wp-content/uploads/2024/09/Guia_cobertura_-periodistica_web.pdf?fbclid=IwY2xjawFqVZJleHRuA2FlbQIxMAABHUz8ebCZxeO1APnm55NqEXhzbx-t_U5bqYjoml9BkcCGqa-8w6V6EnhqQw_aem_QddrsA9ix8d0bxNUoNn1Ow",   
    },
    {
      id: 3,     
      title: "Género y Comercio Internacional: avances y desafíos (2024)",
      text: `Ensayo de Ana Isabel García Quesada, publicado por GESO y FOMEECARD. 
            Analiza cómo los tratados comerciales impactan de manera diferenciada a mujeres y hombres en Centroamérica. Señala retos pendientes 
            para lograr una política comercial inclusiva y equitativa en la región del SICA. `,     
      image: "/images/guia.webp",
      button: "Leer la publicación",
      href: "https://drive.google.com/file/d/19JzPpGPpjCqLZkrbRYWVISh_G7e584lr/view",   
    },
    {
      id: 4,     
      title: "Diagnóstico del contexto migratorio de Costa Rica (2017)",
      text: `Estudio para la Dirección General de Migración y Extranjería y MIEUX. 
              Proporciona un panorama actualizado sobre los flujos migratorios en Costa Rica, retos en materia de integración y políticas 
              públicas con perspectiva de derechos.`,     
      image: "/images/guia.webp",
      button: "Consultar diagnóstico",
      href: "https://docs.google.com/document/d/e/2PACX-1vTDbEuh7DX00N9CApMxgEFL37--1xXKfLE4GE20Y1CcyinVuAk1RuLKmi0goRDlf8Urlv3lT0-FTXcv/pub",   
    },
    {
      id: 5,     
      title: "Marco normativo de Costa Rica en materia de equidad de género (2016) ",
      text: `Documento de trabajo con un listado actualizado de normativa vigente hasta octubre de 2016. 
            Incluye <strong>16 leyes internacionales ratificadas y 50 leyes específicas nacionales</strong>, relacionadas con derechos políticos, 
            laborales, salud, violencia, migración, niñez y juventud. <br/><br/> Solicitar el documento a: 
            <span style="color:#5B1780; text-decoration: underline; font-weight: bold ">info@generoysociedad.com</span> `,     
      image: "/images/guia.webp",
      button: "",
      href: "",   
    },
    {
      id: 6,     
      title: "Género y seguridad democrática (2002–2003)",
      text: `Texto de Enrique Gomáriz y Ana Isabel García. 
            Explora la relación entre género, paz y seguridad desde una perspectiva conceptual y metodológica. Publicado en la revista 
            Aportes Andinos y en la conferencia “Reproducción de la Pobreza, Gobernabilidad Democrática y Equidad de Género”.`,     
      image: "/images/guia.webp",
      button: "Ver el documento",
      href: "https://docs.google.com/document/d/e/2PACX-1vQOsA-QpmcKoB-7cOHAh9PtEIPIJulP1p3XDth_-TIbTFoq1jO0c8whWa8gNDMZuixtov05KHwQxFVN/pub",   
    },
    {
      id: 7,     
      title: "Violencia doméstica: intervenciones para su prevención y tratamiento (2002)",
      text: `Investigación de GESO publicada por el BID. Analiza planes nacionales contra la violencia doméstica en Brasil, Bolivia, Chile y 
            Costa Rica, presentando lecciones aprendidas y recomendaciones para nuevas políticas públicas. `,     
      image: "/images/guia.webp",
      button: "Leer publicación BID",
      href: "https://publications.iadb.org/es/publicacion/14280/violencia-domestica-intervenciones-para-su-prevencion-y-tratamiento-3-planes",   
    },
    {
      id: 8,     
      title: "Mujeres, niños y niñas migrantes: situación actual y desafíos para la región (2000)",
      text: `Documento base del Seminario Regional organizado con OIM y FLACSO. 
            Estudia la situación de mujeres y menores migrantes en Centroamérica, aportando insumos para la V Conferencia Regional sobre 
            Migración (Washington, 2000). `,     
      image: "/images/guia.webp",
      button: "Consultar documento",
      href: "",   
    },
    {
      id: 9,     
      title: "Género y Desastres (1999)",
      text: `Investigación tras el huracán Mitch en Centroamérica. 
            Explora la relación entre género, gestión de desastres y desarrollo sostenible, subrayando la necesidad de incorporar la perspectiva 
            de género en políticas de prevención.`,     
      image: "/images/guia.webp",
      button: "Descargar publicación BID",
      href: "",   
    },
    {
      id: 10,     
      title: "Género y Ciudadanía en Centroamérica: otra mirada al horizonte (1996)",
      text: `Análisis sobre participación, exclusión y ciudadanía de las mujeres en Centroamérica en los años 90. 
            Ofrece perspectivas conceptuales y escenarios futuros sobre género y ciudadanía en la región.`,     
      image: "/images/guia.webp",
      button: "Descargar",
      href: "",   
    },

  ];

  // Configuración de paginación
  const itemsPerPage = 8;
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
    <section>
      {currentPage === 1 && (
        <main className="leading-relaxed text-[#374151] text-center text-lg md:my-10 my-7 mx-auto max-w-[1050px]">

          <h1 className=" flex justify-center pb-2 text-[44px] text-[#5B1780] font-bold ">Publicaciones y recursos</h1>

          <Reveal>
            <p className="text-[#374151] leading-relaxed text-lg">
              En la Fundación Género y Sociedad (GESO) ponemos a disposición de la ciudadanía material que refleja nuestro trabajo en investigación, 
              formación y comunicación. Son herramientas diseñadas para fortalecer la equidad de género, la participación ciudadana y los derechos 
              humanos en distintos ámbitos sociales y culturales. <br/><br/>
              Cada publicación es fruto de la experiencia en proyectos desarrollados junto a comunidades, periodistas, instituciones y organismos 
              internacionales. 
            </p>
          </Reveal>
        </main>
      )}

      <div className="grid grid-cols-1 items-center justify-center max-w-fit mx-auto
                      xl:grid-cols-2 gap-8 ">

        {/* Cards visibles */}
        {visibleCards.map((card) => 
        <CardPublicaciones
          key={card.id}
          title={card.title}
          text={card.text}
          image={card.image}
          button={card.button}
          href={card.href} 
        />
        )}
      </div>

      {/* Paginación */}
      <Pagination className="flex flex-col md:my-20 my-10 items-start">
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
    </section> 
  );
}