import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 w-full text-gray-300">
      <div className="flex flex-col md:flex-row items-start mx-auto px-6 w-full gap-8">
        
        
        <div className="flex-1 text-left justify-between">
          <div className="text-sm leading-7 ">
            Oficina: Curridabat centro, 2 cuadras al Este y  <br />
            2 cuadras al Sur de la Municipalidad.<br />
            San José, Costa Rica.<br />
            Teléfono: (506) 2271-2247.<br />
            Horario de atención: <br />
            Correo electrónico: info@generoysociedad.com

          </div>
        </div>

        <hr className="border-t border-white my-6 w-full md:hidden" />

        
        <nav className="w-full md:w-auto grid grid-cols-2 md:grid-cols-8 gap-3 text-sm mx-auto justify-items-center items-start">
          
          <a href="/" className="font-semibold hover:underline text-gray-300 w-fit">Inicio</a>

          <div className="flex flex-col items-start ">
            <span className="font-semibold mb-2">Nosotros</span>
            <a href="/nosotros/mision-vision" className="hover:underline mb-2">Misión y Visión</a>
            <a href="/nosotros/historia" className="hover:underline mb-2">Historia</a>
            <a href="/nosotros/equipo" className="hover:underline mb-2">Equipo</a>
            <a href="/nosotros/principios" className="hover:underline mb-2">Principios</a>
          </div>

          <a href="/proyecto" className="font-semibold hover:underline w-fit">Proyectos</a>

          <div className="flex flex-col items-start ">
            <span className="font-semibold mb-2">Recursos</span>
            <a href="/recursos/entrevistas" className="hover:underline mb-2">Entrevistas</a>
            <a href="/recursos/archivos" className="hover:underline mb-2">Archivos</a>
          </div>

          <a href="/geso-en-medios" className="font-semibold hover:underline w-fit">GESO en medios</a>
          <a href="/impacto" className="font-semibold hover:underline text-gray-300 w-fit">Impacto</a>
          <a href="/apoyo" className="font-semibold hover:underline text-gray-300 w-fit">Apóyanos</a>
          <a href="/contacto" className="font-semibold hover:underline text-gray-300 w-fit">Contacto</a>
        </nav>

        <hr className="border-t border-white my-6 w-full md:hidden" />

        <div className="flex flex-col items-start gap-4">
          <div className="text-left text-sm leading-6 ">
            Fundación Género y Sociedad - GESO. <br></br>
            Fundación sin fines de lucro registrada en Costa Rica.
            
          </div>
          
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/FundacionGESO#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={30} />
            </a>
            <a href="https://www.instagram.com/fundaciongeso/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.youtube.com/channel/UCGghK4Q0ZFTG6lOay5qO1BQ" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
        
      </div>

      <hr className="border-gray-700 my-6" />
      <div className="w-full flex items-center justify-between md:px-4 text-sm relative">

        

        <div>
          &copy; {new Date().getFullYear()} Fundación GESO. Todos los derechos reservados.
        </div>

        <div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">Nuestros aliados</div>
        </div>

        <div>
          <a 
            href="/terminos" className=" underline">
            Términos y condiciones
          </a>
        </div>

      </div>

      {/* Logos patrocinadores */}
      
      <div className="flex justify-center flex-wrap gap-8 py-1">
        <img src="/images/AACROM.png" alt="aacrom" className="h-15" />
        <img src="/images/ACNUR.png" alt="ACNUR" className="h-15" />
      </div>

      {/*flex-1 grid grid-cols-3 sm:grid-cols-3 gap-6 md:flex md:justify-between md:px-4 text-sm */}

    </footer>
  );
}