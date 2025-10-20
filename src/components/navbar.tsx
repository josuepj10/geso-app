"use client"


import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
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
        { label: "Misión, visión e historia", href: "/nosotros/mision-vision" },
        { label: "Competencias y capacidades", href: "/nosotros/competencias-y-cap" },
        { label: "Principios", href: "/nosotros/principios" },
        { label: "Alianzas", href: "/nosotros/alianzas" },

      ],
    },
    
    { label: "Proyectos", href: "/proyecto" },

    { label: "Eventos", href: "/eventos" },
  
    
    { label: "GESO en medios", href: "/geso-en-medios" },
    { label: "Impacto", href: "/impacto" },
    { label: "Publicaciones y recursos", href: "/recursos" },
    { label: "Colabora", href: "/apoyo" },
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
          return (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 flex items-center rounded-3xl font-medium transition-colors
                  ${isActive
                    ? "bg-[#5B1780] text-white"
                    : "text-gray-700 hover:bg-[#5B1780] hover:text-white"
                  }`}
              >
                {item.label}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-colors ${
                    isActive ? "text-white" : "text-gray-600 group-hover:text-white"
                  }`}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-0 bg-[#8C339D] shadow-md rounded-3xl py-2 mt-0.5 gap-2 min-w-[190px] z-20 flex flex-col items-center "
                  >
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block w-[170px] py-2 text-lg pl-4 rounded-3xl transition-colors ${
                            isChildActive
                              ? "bg-[#5B1780] text-white font-semibold "
                              : "text-white bg-[#8C339D] hover:text-white hover:bg-[#5B1780]"
                          }`}
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
          <NavbarButton key={item.href} href={item.href} active={isActive}>
            {item.label}
          </NavbarButton>
        )
      })}
    </nav>

    {/* Mobile Menu */}
    <div className="flex lg:hidden">
      <MobileMenu menuItems={menuItems} />
    </div>
  </div>
</header>
  )
}