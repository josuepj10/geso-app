"use client"

import Cardinf from "@/components/cardinf"
import Cardinfrev from "@/components/cardinfrev"
import Image from "next/image"


export default function ciudadaniaPage() {
  return (
    <div>

      
        <div className="gap-6 place-items-center">
          <Cardinf
                    title="Género y Comercio Internacional (2024)"
                    text= {`En GESO investigamos y publicamos el ensayo “Género y Comercio Internacional: avances y desafíos, 
                      en alianza con FOMEECARD. Además, organizamos el foro “Desafíos de género para el comercio exterior de Costa Rica”. 
                      Con esta iniciativa buscamos visibilizar cómo los tratados comerciales afectan de manera diferenciada a mujeres y hombres, 
                      generando propuestas para una economía más inclusiva.`}      
                    image="/images/ejemplo2.jpg"
                    button="Ver publicación"
                    href=""
          />
        </div>
        <div className="gap-6 place-items-center">
          <Cardinfrev
                    title="Apoyo técnico a FUNDEMUCA (2022-2024)"
                    text= {`Acompañamos el Programa Internacional de Alto Rendimiento (PIAR) “Alcalde Tomás Rodríguez Bolaños”, una iniciativa conjunta 
                      de FUNDEMUCA y el Ayuntamiento de Valladolid (España). Contribuimos al fortalecimiento de capacidades municipales en Centroamérica 
                      y el Caribe, con un enfoque de participación ciudadana y equidad.`} 
     
                    image="/images/apoyo.webp"
                    button="Conocer más"
                    href=""
          />
        </div>
      

    </div>
  );
}