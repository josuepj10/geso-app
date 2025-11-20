"use client"

import Image from "next/image";



export default function Competencias() {
    return (
        <section className="flex flex-wrap justify-center gap-18 my-20 xl:my-35 max-w-[1362px] mx-auto">

            {/* Primer elemento */}
            <div className="relative w-full max-w-[401px] h-[199px] border-1 border-[#D1D5DB] rounded-[40px] mt-12
                                flex flex-col text-center justify-center hover:shadow-xl transition-shadow duration-300 ease-in-out group ">

                <p className="text-lg text-[#374151] pt-6">
                    Formulación y ejecución de proyectos <br /> propios.
                </p>

                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                                    
                    <div className="bg-white border-1 border-[#D1D5DB] flex items-center justify-center 
                                    w-[121px] h-[121px] rounded-4xl group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300">  

                        <div className="pl-3">
                            <Image
                                src="/images/competencias/libro_engranaje.svg"
                                width={55}
                                height={55}
                                alt="Libro engranaje"
                            />
                        </div>                    
                    </div>
                </div>
            </div>

            {/* Segundo elemento */}
            <div className="relative w-full max-w-[401px] h-[199px] border-1 border-[#D1D5DB] rounded-[40px] mt-12 2xl:mt-0
                                flex flex-col text-center justify-center hover:shadow-xl transition-shadow duration-300 ease-in-out group ">

                <p className="text-lg text-[#374151] pt-6">
                    Ejecución y evaluación de políticas, <br/>programas y proyectos impulsados por <br/>otras entidades.
                </p>

                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                                    
                    <div className="bg-white border-1 border-[#D1D5DB] flex items-center justify-center 
                                    w-[121px] h-[121px] rounded-4xl group-hover:border-0 group-hover:bg-[#5B1780] transition-colors duration-300">  

                        <div>
                            <Image
                                src="/images/competencias/pizarra.svg"
                                width={55}
                                height={55}
                                alt="pizarra"
                            />

                            <Image
                                src="/images/competencias/pizarra_blanca.svg"
                                width={52}
                                height={53}
                                alt="pizarra"
                                className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
                            />
                        </div>                    
                    </div>
                </div>
            </div>

            {/* Tercer elemento */}
            <div className="relative w-full max-w-[401px] h-[199px] border-1 border-[#D1D5DB] rounded-[40px] mt-12
                                flex flex-col text-center justify-center hover:shadow-xl transition-shadow duration-300 ease-in-out group ">

                <p className="text-lg text-[#374151] pt-6">
                    Desarrollo de oferta de capacitación y <br/>formación para el fortalecimiento del <br/>talento humano e institucional.
                </p>

                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                                    
                    <div className="bg-white border-1 border-[#D1D5DB] flex items-center justify-center 
                                    w-[121px] h-[121px] rounded-4xl group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300">  

                        <div className="pt-2">
                            <Image
                                src="/images/competencias/sombrero.svg"
                                width={66}
                                height={66}
                                alt="sombrero"
                            />
                        </div>                    
                    </div>
                </div>
            </div>

            {/* Cuarto elemento */}
            <div className="relative w-full max-w-[401px] h-[199px] border-1 border-[#D1D5DB] rounded-[40px] mt-12
                                flex flex-col text-center justify-center hover:shadow-xl transition-shadow duration-300 ease-in-out group ">

                <p className="text-lg text-[#374151] pt-6">
                    Asesoría puntual con acompañamiento <br/>especializado.
                </p>

                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                                    
                    <div className="bg-white border-1 border-[#D1D5DB] flex items-center justify-center 
                                    w-[121px] h-[121px] rounded-4xl group-hover:border-0 group-hover:bg-[#5B1780] transition-colors duration-300">  

                        <div>
                            <Image
                                src="/images/competencias/audifonos.svg"
                                width={55}
                                height={55}
                                alt="audifonos"
                            />

                            <Image
                                src="/images/competencias/audifonos_blanco.svg"
                                width={53}
                                height={53}
                                alt="audifonos"
                                className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
                            />
                        </div>                    
                    </div>
                </div>
            </div>

            {/* Quinto elemento */}
            <div className="relative w-full max-w-[401px] h-[199px] border-1 border-[#D1D5DB] rounded-[40px] mt-12
                                flex flex-col text-center justify-center hover:shadow-xl transition-shadow duration-300 ease-in-out group ">

                <p className="text-lg text-[#374151] pt-6">
                    Estudios e Investigación.
                </p>

                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                                    
                    <div className="bg-white border-1 border-[#D1D5DB] flex items-center justify-center 
                                    w-[121px] h-[121px] rounded-4xl group-hover:border-0 group-hover:bg-[#FFD11A] transition-colors duration-300">  

                        <div>
                            <Image
                                src="/images/competencias/buscador.svg"
                                width={64}
                                height={59}
                                alt="buscador"
                            />
                        </div>                    
                    </div>
                </div>
            </div>



        </section>    
    ); 
}