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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Función para determinar si una ruta está activa o es hija
  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  // Estilos unificados
  const baseBtn = "w-full px-4 py-3 rounded-[30px] transition-colors text-lg"
  const activeBtn = "bg-[#5B1780] text-white transition-colors duration-300"
  const inactiveBtn = "hover:bg-gray-100 text-[#374151] transition-colors duration-300"

  const childBase = "px-3 py-2 rounded-[30px] text-lg border transition-colors duration-300"
  const childActive = "bg-[#5B1780] text-white border-none transition-colors duration-300 "
  const childInactive = "border-none hover:bg-white text-[#374151] transition-colors duration-300"

  return (
    <>
      {/* Botón hamburguesa */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
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
            <X className="h-10 w-10 text-[#5B1780]" strokeWidth={3} />
          ) : (
            <FaBars className="h-9 w-9 text-[#5B1780]" />
          )}
        </motion.div>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed top-[6%] left-0 w-full h-[15%] backdrop-blur-lg bg-[#5B1780]/20 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed left-0 bottom-0 w-full h-[80%] max-h-[80vh] bg-white z-50 flex flex-col items-center"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="w-full h-full overflow-y-auto relative md:flex items-center justify-start">
                <nav className="grid grid-cols-1 gap-6 max-w-lg pt-12 md:grid-cols-2 md:max-w-2xl md:gap-9 md:pt-0 w-full text-center px-2">

                  {menuItems.map((item) => {
                    // Determinamos si algún hijo está activo (boolean)
                    const hasActiveChild = item.children?.some((child) =>
                      isRouteActive(child.href)
                    )

                    // El padre está activo si su ruta o cualquier hijo está activa
                    const active = isRouteActive(item.href) || Boolean(hasActiveChild)
                    const dropdownOpen = openDropdown === item.href

                    return (
                      <div key={item.href} className="flex flex-col w-full">
                        {item.children ? (
                          <>
                            {/* Botón dropdown */}
                            <button
                              onClick={() =>
                                setOpenDropdown(dropdownOpen ? null : item.href)
                              }
                              className={`${baseBtn} flex items-center justify-between pl-11 
                                ${active || dropdownOpen ? activeBtn : inactiveBtn}`}
                            >
                              <span className="flex-1 text-center">{item.label}</span>
                              <ChevronDown
                                className={`h-6 w-6 transition-transform duration-300 
                                  ${dropdownOpen ? "rotate-180" : ""}
                                  ${dropdownOpen || active ? "text-white" : "text-[#374151]"}
                                `}
                              />
                            </button>

                            {/* Submenú */}
                            <AnimatePresence>
                              {dropdownOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="p-4 bg-[#FFD11A] rounded-4xl flex flex-col gap-2 mt-2"
                                >
                                  {item.children.map((child) => { 
                                    const isChildActive = isRouteActive(child.href)
                                    return (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={() => {
                                          setIsOpen(false)
                                          setOpenDropdown(null)
                                        }}
                                        className={`${childBase} ${
                                          isChildActive ? childActive : childInactive
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
                          // Sin dropdown
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`${baseBtn} ${active ? activeBtn : inactiveBtn}`}
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