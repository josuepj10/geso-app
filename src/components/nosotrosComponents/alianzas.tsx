"use client"

import Image from "next/image";

export default function Alianzas() {

    return (

        <section className="max-w-[1200px] mx-auto my-8 lg:mt-15">

            <p className="text-center text-[#374151] mb-14 lg:mb-2 font-bold">
                Estas alianzas nos permiten:
            </p>

            <div className="grid gap-14 lg:gap-8 xl:gap-14 
                            grid-cols-1 
                            lg:grid-cols-3
                            items-center justify-center max-w-fit mx-auto
                            ">
                {/* Elemento 1 */}
                <article className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300 "> 
                        <p className="text-[40px] text-[#5B1780] font-bold">
                            1
                        </p>
                    </div>
                    <p className="text-center text-[#374151] px-13 mt-9">
                        Participar en espacios de diálogo y toma de <br/>decisiones.
                    </p>
                </article>

                {/* Elemento 2 */}
                <article className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out lg:mt-15 ">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300 "> 
                        <p className="text-[40px] text-[#5B1780] font-bold">
                            2
                        </p>
                    </div>
                    <p className="text-center text-[#374151] px-13 mt-9">
                        Incidir en políticas públicas desde una perspectiva de género y derechos humanos.
                    </p>
                </article>

                {/* Elemento 3 */}
                <article className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300 "> 
                        <p className="text-[40px] text-[#5B1780] font-bold">
                            3
                        </p>
                    </div>
                    <p className="text-center text-[#374151] px-13 mt-9">
                        Intercambio de experiencias con organizaciones e instituciones.
                    </p>
                </article>
            </div>
        </section>
    )
}