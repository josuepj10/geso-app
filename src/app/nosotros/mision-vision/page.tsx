import { Reveal } from "@/components/reveal"
import Link from "next/link"

export default function misionPage() {
  return (


    <div>
      
      <h1>
        Misión
      </h1>
      <br></br>
      <Reveal>
       <p>Promover y desarrollar proyectos sociales y culturales que, incorporando la perspectiva de 
       género, promuevan la equidad social.
       </p>
       <br></br>
      </Reveal>
      <h1>
        Visión
      </h1>
      <br></br>
      <Reveal> 
        <p>Ser una entidad reconocida a nivel nacional e internacional, por la calidad de los proyectos sociales 
         y culturales que realiza y el rigor con que incorpora la perspectiva de equidad de género tanto en el plano conceptual como metodológico.
        </p>
      </Reveal>

      {/* Botones */}
      <div className="flex justify-center gap-4 my-10 ">
        <button className="px-6 py-2 bg-purple-600 text-white rounded-2xl shadow hover:bg-purple-400 transition">
          Historia
        </button>
        <button className="px-6 py-2 bg-purple-600 text-white rounded-2xl shadow hover:bg-purple-400 transition">
          Equipo
        </button>
        <button className="px-6 py-2 bg-purple-600 text-white rounded-2xl shadow hover:bg-purple-400 transition">
          Principios
        </button>
      </div>
      <div className="flex justify-center gap-4 mt-8">

      {/* agregar links de abajo arriba, en los botones, combinar, tienje que servir*/}

      {/*
      <Link
        href="/historia"
        className="px-6 py-2 bg-purple-600 text-white rounded-2xl shadow hover:bg-purple-400 transition"
      >
        Historia
      </Link>
      <Link
        href="/equipo"
        className="px-6 py-2 bg-purple-600 text-white rounded-2xl shadow hover:bg-purple-400 transition"
      >
        Equipo
      </Link>
      <Link
        href="/principios"
        className="px-6 py-2 bg-purple-600 text-white rounded-2xl shadow hover:bg-purple-400 transition"
      >
        Principios
      </Link>
      */}
    </div>
      
    </div>
  );
}