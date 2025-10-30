"use client"


import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import NavbarButton  from "@/components/navbarbutton"
import MobileMenu from "@/components/mobileMenu"

export function Navbar() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    { label: "Inicio", href: "/" },

    {
      label: "Nosotros", href: "/nosotros",
      children: [
        { label: "Sobre GESO", href: "/nosotros/mision-vision" },
        { label: "Competencias", href: "/nosotros/competencias-y-cap" },
        { label: "Principios", href: "/nosotros/principios" },
        { label: "Alianzas", href: "/nosotros/alianzas" },

      ],
    },
    
    { label: "Proyectos", href: "/proyecto" },

    { label: "Eventos", href: "/eventos" },
  
    
    { label: "GESO en medios", href: "/geso-en-medios" },
    { label: "Impacto", href: "/impacto" },
    { label: "Publicaciones", href: "/recursos" },
    { label: "Apóyanos", href: "/apoyo" },
  ]

  return (

    <header className="w-full max-w-[1860px] ">

      <div className="
        2xl:w-[73.8%] mx-auto 
        
        flex  
        justify-between py-2">
        
        {/* Logo */}
        <Link href="/" className="p-2 lg:p-0">
          <Image src="/images/logo.png" alt="Logo Fundación" width={40} height={40} priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex  lg:gap-2 xl:gap-6 2xl:gap-4 ">
          {menuItems.map((item) => {
            // Un padre es activo si su href coincide O si alguno de sus hijos coincide
            const isChildActive = item.children?.some(
              (child) => pathname === child.href
            )
            const isActive = pathname === item.href || isChildActive

            if (item.children) {
              
              const isOpen = openDropdown === item.href 

              return (
                <div
                  key={item.href}
                  className="relative group"
                >
                  <button
                    onClick={() =>
                      setOpenDropdown(isOpen ? null : item.href)
                    } // clickear menu

                    className={`px-5 py-1.5 gap-3 flex items-center rounded-3xl font-medium transition-colors
                      ${(isActive || isOpen)
                        ? "bg-[#5B1780] text-white"
                        : "text-[#374151] hover:text-[#5B1780]"
                      }`}
                  >
                    {item.label}
                    {/* Cambia el icono según el estado */}
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 transition-colors text-white" />
                    ) : (
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-[#374151] group-hover:text-[#5B1780]"
                        }`}
                      />  
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 bg-[#FFD11A] shadow-md rounded-2xl py-5 mt-0.5 gap-2 min-w-[210px] z-20 flex flex-col items-center "
                      >
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block w-[170px] py-2 text-lg pl-6 rounded-3xl transition-colors ${
                                isChildActive
                                  ? "bg-[#5B1780] text-white font-semibold "
                                  : "text-[#5B1780] hover:bg-white"
                              }`}
                              onClick={() => setOpenDropdown(null)} // Cierra al seleccionar hijo
                            >
                              {child.label}
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <NavbarButton 
                key={item.href} 
                href={item.href} 
                active={isActive} 
                special={item.label === "Apóyanos"}
              >
                {item.label}
              </NavbarButton>
            )
          })}
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileMenu menuItems={menuItems} />
        </div>
        
      </div>
    </header>
  )
}