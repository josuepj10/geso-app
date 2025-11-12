"use client";

import Card from "@/components/proyectos/cards";

export default function misionPage() {
  return (
    <div>
      <div className="flex justify-center text-[#374151] md:text-3xl text-2xl font-bold my-6">
        <span>Proyectos</span>
        <span className="text-[#5B1780]">&nbsp;GESO</span>

      </div>
      
      {/* cards */}
      
      <div className="flex flex-wrap justify-center gap-8 my-10 max-w-[1200px] mx-auto px-8">
        <Card
          title="Democracia de género y participación ciudadana"
          image="/images/manos.webp"
          href="/proyecto/ciudadania"
        />

        <Card
          title="Violencia de género y prevención"
          image="/images/ejemplo2.jpg"
          href="/proyecto/violencia-de-genero"
        />

        <Card
          title="Migración y derechos humanos"
          image="/images/encuentro.webp"
          href="/proyecto/migracion"
        />

        <Card
          title="Medios de comunicación y cultura"
          image="/images/ejemplo2.jpg"
          href="/proyecto/medios"
        />

        <Card
          title="Género y comercio internacional"
          image="/images/trabajadora.webp"
          href="/proyecto/g-y-comercio"
        />
      </div>
    

    </div>
  );
}
