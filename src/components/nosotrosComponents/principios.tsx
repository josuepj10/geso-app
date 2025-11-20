"use client"

import Image from "next/image";

export default function Principios() {

    return (

        <section className="max-w-[1362px] mx-auto my-20 xl:my-35 md:px-4 lg:px-0">

            <p className="xl:hidden text-center text-[#374151] mb-10 md:col-span-2 font-bold">
                En la Fundación GESO operamos bajo los siguientes principios rectores:
            </p>

            {/* Contenedor GRID de los 4 elementos */}
            <div className="grid gap-6 
                            grid-cols-1 
                            md:grid-cols-2 
                            xl:grid-cols-[318px_1fr_318px]
                            items-center justify-center max-w-fit mx-auto
                            xl:items-start xl:justify-start xl:max-w-none xl:mx-0
                            "                        
            >
                {/* Elemento 1 */}
                <div className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300 "> 
                        <Image 
                            src="/images/principios/equidad.svg"
                            width={64} 
                            height={64} 
                            alt="Libro engranaje" 
                        />
                    </div>
                    <p className="text-center text-[#374151] px-13 mt-9">
                        <span className="text-[#5B1780] font-bold">Equidad e inclusión: </span>
                        igualdad sustantiva, diversidad y no discriminación.
                    </p>
                </div>

                {/* Elemento 2 hidden */}
                <div className="xl:hidden w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300 relative "> 
                        <Image 
                            src="/images/principios/derechos.svg" 
                            width={64} 
                            height={64} 
                            alt="Libro engranaje" 
                        />
                    </div>
                    <p className="text-center text-[#374151] px-13 mt-9">
                        <span className="text-[#5B1780] font-bold">Derechos y democracia: </span>
                        ciudadanía activa, justicia social y cultura de paz.
                    </p>
                </div>

                {/* Elemento 3 hidden */}
                <div className="xl:hidden w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300 "> 
                        <Image 
                            src="/images/principios/innovacion.svg" 
                            width={64} 
                            height={64} 
                            alt="Libro engranaje" 
                        />
                    </div>
                    <p className="text-center text-[#374151] px-13 mt-9">
                        <span className="text-[#5B1780] font-bold">Innovación y conocimiento: </span>
                        metodologías creativas y producción de saberes.
                    </p>
                </div>


                {/* Texto arriba + elementos 2xl y 3xl abajo */}
                <div className="
                    hidden
                    xl:grid 
                    grid-cols-1 
                    md:grid-cols-2 
                    place-items-center 
                    gap-6
                ">
                    <p className="text-center text-[#374151] mb-10 md:col-span-2 font-bold">
                        En la Fundación GESO operamos bajo los siguientes principios rectores:
                    </p>

                    {/* Elemento 2 */}
                    <div className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                    group hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                        <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                        group-hover:border-0 group-hover:bg-[#5B1780] transition-colors duration-300 relative "> 
                            <Image 
                                src="/images/principios/derechos.svg" 
                                width={64} 
                                height={64} 
                                alt="Libro engranaje" 
                            />
                            <Image
                                src="/images/principios/derechosW.svg"
                                width={64}
                                height={64}
                                alt="pizarra"
                                className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
                            />
                        </div>
                        <p className="text-center text-[#374151] px-13 mt-9">
                            <span className="text-[#5B1780] font-bold">Derechos y democracia: </span>
                            ciudadanía activa, justicia social y cultura de paz.
                        </p>
                    </div>

                    {/* Elemento 3 */}
                    <div className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                    group hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                        <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                        group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300 "> 
                            <Image 
                                src="/images/principios/innovacion.svg" 
                                width={64} 
                                height={64} 
                                alt="innovacion" 
                            />
                        </div>
                        <p className="text-center text-[#374151] px-13 mt-9">
                            <span className="text-[#5B1780] font-bold">Innovación y conocimiento: </span>
                            metodologías creativas y producción de saberes.
                        </p>
                    </div>
                </div>

                {/* Elemento 4 */}
                <div className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-[#5B1780] transition-colors duration-300 relative "> 
                        <Image 
                            src="/images/principios/alianzas.svg" 
                            width={64} 
                            height={64} 
                            alt="pizarra" 
                        />
                        <Image
                            src="/images/principios/alianzasW.svg"
                            width={64}
                            height={64}
                            alt="pizarra"
                            className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
                        />
                    </div>
                    <p className="text-center text-[#374151] px-13 mt-9">
                        <span className="text-[#5B1780] font-bold">Alianzas y transparencia: </span>
                        trabajo en red, ética y responsabilidad social.
                    </p>

                </div>

            </div>

        </section>
    )
}

