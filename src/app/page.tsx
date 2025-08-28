import { Reveal } from "@/components/reveal"
import Slider from "@/components/slider"

export default function Home() {
  return (
    <>
      {/* Slider full width */}
     
      <Slider />
      

      
      <section className="max-w-4xl mx-auto w-full p-6 text-center text-4xl">
        <h2>Presentación institucional</h2>
        <Reveal>
          <p>
            La Fundación Género y Sociedad (GESO) es una organización sin fines de lucro, creada en 1993 en San José de Costa Rica, 
            cuyo ámbito de trabajo es regional con énfasis en el área centroamericana, tal como lo demuestran las investigaciones, consultorías y 
            asesorías brindadas y que se enlistan más adelante. Su principal objetivo es elaborar e implementar proyectos sociales y culturales que, 
            incorporando la perspectiva de género, promuevan la equidad social.
          </p>
        </Reveal>
      </section>
    </>
  )
}