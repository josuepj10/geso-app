"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import NavbarButton from "@/components/menu/navbarbutton"
import { menuItems } from "@/components/menu/menuItems"

export function Navbar() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // Detectar clic fuera del dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="w-full max-w-[1362px]">
      <div className="mx-auto flex justify-between items-center py-2 px-4 lg:px-0">
        {/* Logo */}
        <Link href="/" className="py-2 pl-4 lg:pl-0">
          <Image
            src="/images/logo.png"
            alt="Logo Fundación"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden lg:flex lg:gap-4 xl:gap-6">
          {menuItems.map((item) => {
            const isChildActive = item.children?.some(
              (child) => pathname === child.href
            )
            const isActive = pathname === item.href || isChildActive
            const isOpen = openDropdown === item.href

            // retorna el bloque dropdown
            if (item.children) {
              return (
                <div key={item.href} className="relative group" ref={dropdownRef}>
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.href)}
                    className={`xl:px-5 px-2 py-1.5 xl:gap-3 flex items-center rounded-3xl font-medium transition-colors cursor-pointer box-border
                      ${
                        isChildActive
                          ? "bg-[#5B1780] text-white outline-none"
                          : isOpen
                          ? " text-[#374151] outline-1 outline-[#5B1780]"
                          : "text-[#374151] hover:text-[#5B1780]"
                      }`}
                  >
                    {item.label}
                    {isOpen ? (
                      <ChevronUp
                        className={`w-5 h-5 ${
                          isChildActive ? "text-white" : "text-[#374151]"
                        }`}
                      />
                    ) : (
                      <ChevronDown
                        className={`w-5 h-5 ${
                          isChildActive
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
                        className="absolute top-full left-0 bg-[#FFD11A] shadow-md rounded-2xl py-5 mt-2 gap-2 min-w-[210px] 
                                  z-20 flex flex-col items-center"
                      >
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block w-[170px] py-2 text-lg pl-6 rounded-3xl transition-colors ${
                                isChildActive
                                  ? "bg-[#5B1780] text-white font-semibold"
                                  : "text-[#5B1780] hover:bg-white"
                              }`}
                              onClick={() => setOpenDropdown(null)}
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

             // else, retorna un botón normal
            return (
              <NavbarButton
                key={item.href}
                href={item.href}
                special={item.label === "Apóyanos"}
              >
                {item.label}
              </NavbarButton>
            )
          })}
        </nav>
      </div>
    </header>
  )
}