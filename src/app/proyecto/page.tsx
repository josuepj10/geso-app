"use client"

import Card from "@/components/cards"


export default function misionPage() {
  return (


    <div>
      
      <br></br>
      <h1>
        Proyectos GESO
      </h1>
      <br></br>
      
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum quam quia natus 
        dignissimos quidem consectetur. Est dignissimos eveniet minus veniam, impedit laboriosam repudiandae, 
        rerum architecto, esse eius et doloribus?
       </p>
       <br></br>
      
    

      {/* cards */}

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 place-items-center my-10 ">

        
        <Card
          title="Ciudadanía"
          image="/images/ejemplo2.jpg"
          href="/proyecto/ciudadania"
        />

        <Card
          title="Medios"
          image="/images/ejemplo2.jpg"
          href="/proyecto/medios"
        />

        <Card
          title="Migración"
          image="/images/ejemplo2.jpg"
          href="/proyecto/migracion"
        />

        <Card
          title="Violencia de género"
          image="/images/ejemplo2.jpg"
          href="/proyecto/violencia-de-genero"
        />

      </div>

      <div className="flex justify-center gap-4 mt-8">

    </div>
      
    </div>
  );
}