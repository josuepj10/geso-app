"use client"

import Image from "next/image";

interface ImageButtonProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function Vision({
  imageSrc,
  title,
  description,
}: ImageButtonProps) {
    return (
        <section className="relative flex flex-col items-center my-20 mb-60
                            left-1/2 right-1/2 -mx-[50vw] max-w-screen 
                            lg:my-20 lg:mb-60">
            {/* Imagen de fondo */}
            <div className="relative w-full h-[600px] lg:h-[830px]">
                <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover lg:object-[50%_20%] object-[45%_10%] transition duration-300"
                priority
                />
            </div>

            {/* Caja de texto */}
            <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 px-3 sm:px-10 xl:px-0 ">
                <div
                    className="
                    mx-auto w-full max-w-[724px]
                    bg-white rounded-[50px] border border-[#D1D5DB]
                    shadow-lg p-9 lg:px-13 lg:py-9 flex flex-col
                    "
                >
                    <h3 className="text-2xl text-center lg:text-[40px] font-semibold text-[#5B1780] mb-4">
                        {title}
                    </h3>

                    <p className="text-[#374151] text-center text-lg mb-4">
                        {description}
                    </p>

                </div>
            </div>
        </section>
    );
}