"use client"

import Card from "@/components/cards"


export default function misionPage() {
  return (


    <div>
      
      <br></br>
      <h1 className="flex justify-center">
        Proyectos GESO
      </h1>
      <br></br>
      
       <p className="flex justify-center">"Impulsamos iniciativas que promueven la participación ciudadana, la equidad de género, los derechos humanos y 
        el desarrollo local, apoyando a comunidades con enfoque inclusivo y sostenible."
       </p>
       <br></br>
      
    

      {/* cards */}

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center my-10 justify-center ">

        
        <Card
          title="Democracia de género y participación ciudadana"
          image="/images/ejemplo2.jpg"
          href="/proyecto/ciudadania"
        />

        <Card
          title="Género y comercio internacional"
          image="/images/ejemplo2.jpg"
          href="/proyecto/g-y-comercio"
        />

        <Card
          title="Migración y derechos humanos"
          image="/images/ejemplo2.jpg"
          href="/proyecto/migracion"
        />

        <Card
          title="Medios de comunicación y cultura"
          image="/images/ejemplo2.jpg"
          href="/proyecto/medios"
        />

       
        <Card
          title="Violencia de género y prevención"
          image="/images/ejemplo2.jpg"
          href="/proyecto/violencia-de-genero"
        />

      </div>

      <div className="flex justify-center gap-4 mt-8">

    </div>
      
    </div>
  );
}