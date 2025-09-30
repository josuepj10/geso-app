"use client"

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#5B1780] text-white" >
      
      
      <div className="lg:max-w-[75%] mx-auto px-6 py-8">
        
        <div className="flex flex-col md:flex-row ">

          
          <div className="flex-shrink-0 mr-10 mb-8 gap-10">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo Fundación" width={80} height={80} priority />
            </Link>
          </div>

          <div className="
           grid grid-cols-1 gap-10
           sm:grid-cols-2 
           md:grid-cols-2 
           lg:grid-cols-4 
           flex-1 w-full">

            
            <div className="flex flex-col gap-2">
              <span className="font-bold mb-2 text-xl text-white">Nosotros</span>
              <Link href="/nosotros/alianzas" className="hover:underline">Alianzas</Link>
              <Link href="/nosotros/competencias-y-cap" className="hover:underline">Competencias y capacidades</Link>
              <Link href="/nosotros/historia" className="hover:underline">Historia</Link>
              <Link href="/nosotros/mision-vision" className="hover:underline">Misión y Visión</Link>
              <Link href="/nosotros/principios" className="hover:underline">Principios</Link>
            </div>

            
            <div className="flex flex-col gap-2">
              <span className="font-semibold mb-2 text-xl text-white">Enlaces rápidos</span>
              <Link href="/" className="hover:underline">Inicio</Link>
              <Link href="/proyecto" className="hover:underline">Proyectos</Link>
              <Link href="/recursos" className="hover:underline">Recursos</Link>
              <Link href="/geso-en-medios" className="hover:underline">GESO en medios</Link>
              <Link href="/impacto" className="hover:underline">Impacto</Link>
              <Link href="/apoyo" className="hover:underline">Colabora</Link>
            </div>

            
            <div className="flex flex-col gap-2 ">
              <span className="font-semibold mb-2 text-xl text-white">Identidad legal</span>
              <p>Fundación Género y Sociedad - GESO.</p>
              <p>Fundación sin fines de lucro registrada en Costa Rica.</p>
              
            </div>

            
            <div className="flex flex-col gap-2 text-left "> {/* lg:justify-self-end acomodo a la derecha, problemas de gap con responsive*/}
              <span className="font-semibold mb-2 text-xl  text-white">Contacto</span>
              <p>Oficina: Curridabat, Abedules II, </p>
              <p>No. 14-, San José, Costa Rica.</p>
              <p>Teléfono: (506) 2271-2247</p>
              <p>Email: info@generoysociedad.com</p>
            
            </div>
          </div>

        </div>

        
        <hr className="border-t border-white my-8 w-full" />

        

        <div className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3
          gap-14 pb-12 
          w-full">
            
            
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-xl text-white">Redes</span>
            <div className="flex gap-4 space-x-6 ">
              <Link href="https://www.facebook.com/FundacionGESO#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebookF size={30} />
              </Link>
              <Link href="https://www.instagram.com/fundaciongeso/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram size={30} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCGghK4Q0ZFTG6lOay5qO1BQ" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                <FaYoutube size={30} />
              </Link>
            </div>
          </div>

          
          <div className="flex flex-col gap-4 ">
            <span className="font-semibold text-xl text-white">Nuestros aliados</span>
            <Link href="https://aacrom.com/" target="_blank" rel="noopener noreferrer" className="flex gap-8 flex-wrap ">
              <Image src="/images/aacrom.svg" alt="AACROM" width={170} height={170} priority />
            </Link>
          </div>

          
          <div className="flex flex-col gap-4 lg:items-end">
            
            <Link href="/apoyo"> {/* Aquí poner la ruta deseada */}
              <Button className="bg-[#FFD11A] text-[#5B1780] rounded-3xl text-lg px-8 py-6 cursor-pointer hover:bg-[#FFD11A]">
                Colabora con nosotros
              </Button>
            </Link>
            
            <div className="text-gray-200 text-sm ">
              &copy; {new Date().getFullYear()} Fundación GESO. Todos los derechos reservados.
            </div>

          </div>

        </div>
      
      </div>
    </footer>
  );
}