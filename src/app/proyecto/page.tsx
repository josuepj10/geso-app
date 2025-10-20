"use client";

import Card from "@/components/cards";

export default function misionPage() {
  return (
    <div>
      <div className="flex justify-center text-[#374151] md:text-3xl text-2xl font-bold my-6">
        <span>Proyectos</span>
        <span className="text-[#5B1780]">&nbsp;GESO</span>

      </div>
      
      {/* cards */}
      
      <div className="flex flex-wrap gap-8 my-10 items-center justify-center">
        <Card
          title="Democracia de género y participación ciudadana"
          image="/images/ejemplo2.jpg"
          href="/proyecto/ciudadania"
        />

        <Card
          title="Violencia de género y prevención"
          image="/images/ejemplo2.jpg"
          href="/proyecto/violencia-de-genero"
        />

        <Card
          title="Migración y derechos humanos"
          image="/images/ejemplo2.jpg"
          href="/proyecto/migracion"
        />

      </div>

      <div className="flex flex-wrap gap-8 mb-8 md:mb-30 items-center justify-center">

        <Card
          title="Medios de comunicación y cultura"
          image="/images/ejemplo2.jpg"
          href="/proyecto/medios"
        />
        
        <Card
          title="Género y comercio internacional"
          image="/images/ejemplo2.jpg"
          href="/proyecto/g-y-comercio"
        />
      </div>
    

    </div>
  );
}
