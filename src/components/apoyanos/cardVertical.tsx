"use client";

import Link from "next/link";
import { useRef, useEffect, RefObject } from "react";
import { useInView } from "@/hooks/useInView";

interface CardProps {
  title: string;
  text: React.ReactNode;
  media?: 
    | React.ReactNode
    | ((lottieRef: RefObject<any>) => React.ReactNode);
  button: string;
  href: string;
  animationDelay?: number; // delay en ms
}

export default function CardIcons({
  title,
  text,
  media,
  button,
  href,
  animationDelay = 0,
}: CardProps) {

  const lottieRef = useRef<any>(null);

  // IntersectionObserver
  const { ref: cardRef, isInView } = useInView<HTMLElement>({
    threshold: 0.20, // % visible para activar
    once: true,      // solo una vez hace animación
  });

  // Animar cuando entra en pantalla
  useEffect(() => {
  if (!isInView) return;

    const timeout = setTimeout(() => {
      lottieRef.current?.goToAndPlay(0, true);
    }, animationDelay);

    return () => clearTimeout(timeout);
  }, [isInView, animationDelay]);

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
      className="w-full max-w-[432px] h-full
        bg-white rounded-[55px]
        overflow-hidden outline
        hover:shadow-xl transition-shadow duration-300 ease-in-out
        flex flex-col p-3"
    >
      {/* Media (icono / lottie) */}
      {media && (
        <div className="flex justify-center items-center px-2">
          {typeof media === "function"
            ? media(lottieRef)
            : media}
        </div>
      )}

      <div className="flex flex-col flex-1 gap-2 px-5">
        <h2 className="text-[#5B1780] font-bold text-center text-2xl pt-4">
          {title}
        </h2>

        <div className="text-lg text-[#374151] mt-2 mb-2 text-left [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:text-[16px] [&_ul]:mt-3 
                        [&_li]:mb-2 [&_strong]:font-semibold">
          {text}
        </div>

        {button && href && (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5B1780] rounded-4xl text-white hover:text-[#5B1780]
              hover:shadow-md text-lg w-full py-4 hover:bg-[#FFD11A]
              transition-colors duration-300 mb-5 mt-auto text-center"
          >
            {button}
          </Link>
        )}
      </div>
    </article>
  );
}