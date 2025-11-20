"use client"

import { Reveal } from "@/components/reveal"
import Slider from "@/components/landing/slider"
import ImageButton from "@/components/landing/imageButton"
import CardInicio from "@/components/landing/cardInicio"

export default function Home() {
  return (
    <>    
      <Slider />
        
      <div>
        <h1 className="mx-auto w-full p-6 text-center lg:mt-10 mt-6">Noticias más recientes</h1>
      </div>

      <div className="my-2 lg:my-8 gap-8 max-w-[1362px] mx-auto
                      lg:grid-cols-2
                      grid grid-cols-1 
                        ">
        <Reveal> 
          <CardInicio
            titulo="Secretaría Técnica de la REDNAM (2018-2019)"
            descripcion="Entre 2018 y 2019, en GESO asumimos la Secretaría Técnica de la Red  Nacional de Organizaciones Civiles para las 
              Migraciones (REDNAM).  Durante este período impulsamos la participación en la Conferencia Regional sobre Migración 
              (CRM) y fortalecimos las acciones de ..."
            enlace="/proyectos/migracion-y-derechos-humanos"
            textoB="Leer más"
          />
        </Reveal>
        <Reveal>
          <CardInicio
            titulo="Género y Comercio Internacional (2024)"
            descripcion="En GESO investigamos y publicamos el ensayo “Género y Comercio Internacional: avances y desafíos, en alianza con 
              FOMEECARD. Además, organizamos el foro “Desafíos de género para el comercio exterior de Costa Rica”. Con esta 
              iniciativa buscamos ..."
            enlace="/proyectos/democracia-de-genero"
            textoB="Leer más"
          />
        </Reveal>
        <Reveal>  
          <CardInicio
            titulo="Manual para periodistas sobre migración y refugio (2024)"
            descripcion="En GESO elaboramos, junto con ACNUR, el Banco Mundial y Aacrom , un manual práctico para periodistas que cubren 
              temas de migración y refugio. La publicación ofrece herramientas para ..."
            enlace="/proyectos/medios-de-comunicacion-y-cultura"
            textoB="Leer más"
          />
        </Reveal>  
        <Reveal>
          <CardInicio
            titulo="Fortalecimiento de políticas públicas en Gobiernos Locales (2018)"
            descripcion="En GESO implementamos este proyecto junto con la Unión Nacional de Gobiernos Locales (UNGL) y el Gobierno de 
              Estados Unidos, con el objetivo de reforzar las capacidades técnicas de ..."
            enlace="/proyectos/violencia-de-genero-y-prevencion"
            textoB="Leer más"
          />
        </Reveal>
      </div>
      
      <main>
        <ImageButton
          imageSrc="/images/imagen_colabora.webp"
          title="Colabora con la Fundación GESO y ayúdanos a promover la equidad social."
          description="Cada aporte que usted realiza se transforma en oportunidades reales para quienes más lo necesitan. Sus donaciones permiten financiar programas de educación, inclusión y desarrollo comunitario que buscan reducir las brechas sociales en nuestro país."
          buttonText="Dona aquí"
          buttonHref="/apoyanos"
        />
      </main>

    </>
  )
}

        