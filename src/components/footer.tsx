import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start mx-auto px-6 w-full gap-8">
        
        
        <div className="flex-1 text-left">
          <p className="text-sm leading-7">
            Oficina: Curridabat centro, 2 cuadras al Este y 2 cuadras al Sur de la Municipalidad.<br />
            San José, Costa Rica.<br />
            Teléfono: (506) 2271-2247.<br />
            Horario de atención: Lunes a Viernes
          </p>
        </div>

        <hr className="border-t border-white my-6 w-full md:hidden" />

        
        <nav className="flex-1 grid grid-cols-3 sm:grid-cols-3 gap-6 md:flex md:justify-between md:px-4 text-sm">
          
          <a href="/" className="font-semibold hover:underline">Inicio</a>

          <div className="flex flex-col items-start">
            <span className="font-semibold mb-1">Nosotros</span>
            <a href="/nosotros/mision-vision" className="hover:underline">Misión y Visión</a>
            <a href="/nosotros/historia" className="hover:underline">Historia</a>
            <a href="/nosotros/equipo" className="hover:underline">Equipo</a>
            <a href="/nosotros/principios" className="hover:underline">Principios</a>
          </div>

          <div className="flex flex-col items-start">
            <span className="font-semibold mb-1">Proyectos</span>
            <a href="/proyecto/destacados" className="hover:underline">Destacados</a>
            <a href="/proyecto/migracion" className="hover:underline">Migración</a>
            <a href="/proyecto/violencia-de-genero" className="hover:underline">Violencia de género</a>
            <a href="/proyecto/medios" className="hover:underline">Medios</a>
            <a href="/proyecto/ciudadania" className="hover:underline">Ciudadanía</a>
          </div>

          <div className="flex flex-col items-start">
            <span className="font-semibold mb-1">Recursos</span>
            <a href="/recursos/debates" className="hover:underline">Debates</a>
            <a href="/recursos/entrevistas" className="hover:underline">Entrevistas</a>
            <a href="/recursos/archivos" className="hover:underline">Archivos</a>
          </div>

          <a href="/actualidad" className="font-semibold hover:underline">Actualidad</a>
          <a href="/impacto" className="font-semibold hover:underline">Impacto</a>
          <a href="/apoyo" className="font-semibold hover:underline">Apóyanos</a>
          <a href="/contacto" className="font-semibold hover:underline">Contacto</a>
        </nav>

        <hr className="border-t border-white my-6 w-full md:hidden" />

        <div className="flex flex-col items-start gap-4">
          <div className="text-left text-sm leading-6">
            <p>Fundación Género y Sociedad - GESO.</p>
            <p>Fundación sin fines de lucro registrada en Costa Rica.</p>
            <p>&copy; {new Date().getFullYear()} Fundación GESO. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/FundacionGESO#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/fundaciongeso/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UCGghK4Q0ZFTG6lOay5qO1BQ" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Logos patrocinadores */}
      <div>
        <p className="text-center mb-4">Aliados de GESO</p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 py-1">
        <img src="/images/AACROM.png" alt="aacrom" className="h-25" />
        <img src="/images/ACNUR.png" alt="ACNUR" className="h-25" />
      </div>
      <div>
        <a 
          href="/terminos" className="text-center mb-4 text-blue-500 hover:underline block">
          Términos y condiciones
        </a>
      </div>

    </footer>
  );
}