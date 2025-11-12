"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { FaBars } from "react-icons/fa"
import { usePathname } from "next/navigation"
import { menuItems } from "@/components/menu/menuItems"

export default function MovilMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Bloqueo del scroll de la página mientras el menú esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setOpenDropdown(null)
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Botón hamburguesa */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-2 right-8 z-[60] p-2 flex items-center justify-center lg:hidden"
        whileTap={{ scale: 0.9 }}
        aria-label="Abrir menú"
        style={{ perspective: 900 }}
      >
        <motion.div
          key={isOpen ? "close" : "menu"}
          initial={{ rotateX: -75, skewY: 6, opacity: 0.2 }}
          animate={{ rotateX: 0, skewY: 0, opacity: 1 }}
          exit={{ rotateX: 75, skewY: -6, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.4, 1.2, 0.5, 1.2],
          }}
          className="origin-top"
        >
          {isOpen ? (
            <X className="h-10 w-10 text-[#5B1780]" strokeWidth={3}  />
          ) : (
            <FaBars className="h-9 w-9 text-[#5B1780]" />
          )}
        </motion.div>
      </motion.button>

      {/* Panel del menú */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo semitransparente */}
            <motion.div
              className="fixed top-[6%] left-0 w-full h-[15%] backdrop-blur-lg bg-[#5B1780]/20 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Contenedor principal */}
            <motion.div
              className="fixed left-0 bottom-0 w-full h-[80%] max-h-[80vh] bg-white z-50 flex flex-col items-center"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="w-full h-full overflow-y-auto relative md:flex items-center justify-start">
                
                {/* Menú principal */}
                <nav className="grid grid-cols-1 gap-6 max-w-lg pt-12 my-auto
                                md:grid-cols-2 md:max-w-2xl md:gap-9 md:pt-0
                                w-full text-center relative z-20 mx-auto px-2">
                  {menuItems.map((item) => {
                    const isChildActive = item.children?.some(
                      (child) => pathname === child.href
                    )
                    const isActive = pathname === item.href || isChildActive
                    const isDropdownOpen = openDropdown === item.href 

                    return (
                      <div key={item.href} className="flex flex-col w-full">
                        {item.children ? (
                          <>
                            {/* Botón dropdown */}
                            <div className="flex">
                              <button
                                onClick={() =>
                                  setOpenDropdown(
                                    isDropdownOpen ? null : item.href
                                  )
                                }
                                className={`w-full flex items-center text-lg justify-between px-4 py-3 pl-11 rounded-[30px] transition-colors
                                  ${
                                    isActive || isDropdownOpen
                                      ? "bg-[#5B1780] text-white"
                                      : "hover:bg-gray-100 text-[#374151]"
                                  }`}
                              >
                                <span className="flex-1 text-center">{item.label}</span>
                                <ChevronDown
                                  className={`h-6 w-6 transition-transform duration-300
                                    ${isDropdownOpen ? "rotate-180" : ""}
                                    ${
                                      isActive || isDropdownOpen
                                        ? "text-white"
                                        : "text-[#374151]"
                                    }`}
                                />
                              </button>
                            </div>

                            {/* Submenú animado */}
                            <AnimatePresence>
                              {isDropdownOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="p-4 bg-[#FFD11A] rounded-4xl flex flex-col gap-2 mt-2"
                                >
                                  {item.children.map((child) => {
                                    const isChildActive = pathname === child.href
                                    return (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={() => {
                                          setIsOpen(false)
                                          setOpenDropdown(null) // cierra el dropdown al navegar
                                        }}
                                        className={`px-3 py-2 rounded-[30px] text-lg border transition-colors
                                          ${
                                            isChildActive
                                              ? "bg-[#5B1780] text-white border-none"
                                              : "border-none hover:bg-white text-[#374151]"
                                          }`}
                                      >
                                        {child.label}
                                      </Link>
                                    )
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          // Elemento sin dropdown
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`w-full px-4 py-3 rounded-[30px] transition-colors text-lg
                              ${
                                isActive
                                  ? "bg-[#5B1780] text-white"
                                  : "hover:bg-gray-100 text-[#374151]"
                              }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    )
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}