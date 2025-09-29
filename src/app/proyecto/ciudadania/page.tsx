"use client"

import Cardinf from "@/components/cardinf"
import Image from "next/image"


export default function ciudadaniaPage() {
  return (
    <div>
      
      <div className="flex justify-center my-20">
              <Image src="/images/development.png" alt="Construyendo" width={1000} height={1000} priority />
      </div>

      {/*
        <div className="gap-6 place-items-center my-10 ml-10 mr-10">
          <p>Esta es la página de ciudadania.</p>

          <Cardinf
                    title="Ciudadanía"
                    text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum quam quia natus"        
                    image="/images/ejemplo2.jpg"
                    href="/proyecto/ciudadania"
          />
        </div>
      */}

    </div>
  );
}