"use client"

import Image from "next/image";


export default function Historia() {
  return (
    <section className="w-full h-auto max-w-[1362px] mx-auto flex flex-col lg:gap-8 gap-20 mb-20">

        {/*Primer par */}

        <article className="flex flex-col-reverse lg:flex-row lg:justify-start justify-center items-center gap-8 sm:mx-6 lg:mx-0">

            {/* Cuadro de texto */}
            <div className="lg:w-[752px] lg:h-[290px] w-full max-w-[752px] h-auto border rounded-[60px] flex flex-col 
                            justify-center text-[#374151] text-lg
                            hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <p className="md:px-36 lg:px-20 px-9 py-10 lg:py-0 text-start">
                La Fundación <strong>GESO</strong> es una organización sin fines de lucro, creada en 1993, en Costa Rica, como
                una iniciativa de profesionales de distintas áreas que identificaron la necesidad de promover la inclusión social
                a nivel local, nacional y regional, tanto en el ámbito público como privado.<br />
                Desde Costa Rica, proyectamos actividades a nivel centroamericano y latinoamericano.
                </p>
            </div>

            {/* py-10, px-9  */}

            {/* Cuadro amarillo */}
            <div className="w-[122px] h-[122px] border bg-[#FFD11A] rounded-3xl flex items-center justify-center">
                <Image
                src="/images/sobre-geso/manosHistoria.svg"
                alt="Ícono Hover Misión"
                width={44}
                height={44}
                className="transition duration-300"
                />
            </div>
        </article>

        {/*Segundo par */}

        <article className="flex flex-col lg:flex-row lg:justify-end justify-center items-center lg:gap-16 gap-8 sm:mx-6 lg:mx-0">

            {/* Cuadro */}
            <div className="w-[122px] h-[122px] border bg-[#5B1780] rounded-3xl flex items-center justify-center">
                <Image
                src="/images/sobre-geso/piezas.svg"
                alt="Ícono Hover Misión"
                width={44}
                height={44}
                className="transition duration-300"
                />
            </div>

            {/* Cuadro de texto */}
            <div className="lg:w-[752px] lg:h-[290px] w-full max-w-[752px] h-auto border rounded-[60px] flex flex-col 
                            justify-center lg:px-20 py-10 px-9 text-[#374151] text-lg
                            hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <p>
                    A lo largo de más de tres décadas, hemos impulsado proyectos innovadores en campos como:
                </p>
                
                <ul className="mt-4 list-disc list-inside marker:text-xs">
                    <li>Democracia de género.</li>
                    <li>Ciudadanía sustantiva.</li>
                    <li>Género y comercio internacional.</li>
                    <li>Migración y derechos humanos.</li>
                    <li>Medios de comunicación y representaciones sociales.</li>
                    <li>Políticas públicas de inclusión social.</li>
                </ul>
            </div>
        </article>

        {/*Tercer par */}

        <article className="flex flex-col-reverse lg:flex-row lg:justify-start justify-center items-center gap-8 sm:mx-6 lg:mx-0">

            {/* Cuadro de texto */}
            <div className="lg:w-[752px] lg:h-[290px] w-full max-w-[752px] h-auto border rounded-[60px] flex flex-col 
                            justify-center text-[#374151] text-lg
                            hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <p className="md:px-18 lg:px-20 py-10 px-9 text-start">
                    En este camino, GESO ha consolidado alianzas con instituciones públicas, organismos internacionales y organizaciones 
                    de la sociedad civil, lo que ha permitido ampliar su impacto en comunidades y en la agenda pública.
                </p>
            </div>

            {/* Cuadro */}
            <div className="w-[122px] h-[122px] border rounded-3xl flex items-center justify-center">
                <Image
                src="/images/sobre-geso/estrecharManos.svg"
                alt="Ícono Hover Misión"
                width={46}
                height={44}
                className="transition duration-300"
                />
            </div>
        </article>
    </section>
  );
}