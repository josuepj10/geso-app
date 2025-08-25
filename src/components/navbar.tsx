"use client"


import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import SearchBar from "./searchbar" 

export function Navbar() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    { label: "Inicio", href: "/" },
    {
      label: "Nosotros", href: "/nosotros",
      children: [
        { label: "Misión y visión", href: "/nosotros/mision-vision" },
        { label: "Historia", href: "/nosotros/historia" },
        { label: "Equipo", href: "/nosotros/equipo" },
        { label: "Principios", href: "/nosotros/principios" },
      ],
    },
    { label: "Proyectos", href: "/proyecto" },
  
    { 
      label: "Recursos", href: "/recursos", 
      children: [
        { label: "Entrevistas", href: "/recursos/entrevistas" },
        { label: "Publicaciones", href: "/recursos/publicaciones" },
      ],
    },
    { label: "GESO en medios", href: "/geso-en-medios" },
    { label: "Impacto", href: "/impacto" },
    { label: "Apóyanos", href: "/apoyo" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="w-full border-b p-4 flex flex-col md:flex-row items-start md:items-center 
      justify-between gap-4 md:gap-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo Fundación" width={60} height={60} priority />
        <div className="flex flex-col leading-none">
          <span className="font-bold text-lg">Fundación GESO</span>
          <span className="text-sm text-gray-500">GENTE QUE CONSTRUYE SOCIEDAD</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          if (item.children) {
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center px-2.5 gap-1 text-sm font-medium ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label} <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {openDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-1 min-w-[200px] z-20"
                    >
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm ${
                              isChildActive
                                ? "text-primary font-semibold"
                                : "text-gray-700 hover:bg-gray-100"
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

          // Normal link
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item text-sm font-medium ${
                isActive ? "active text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Barra de búsqueda */}
      {/* <div className="hidden sm:block">
        <SearchBar />
      </div> */}


      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menú</SheetTitle>
            </SheetHeader>

            {/* Barra de búsqueda en mobile */}
            {/* <div className="block sm:hidden mt-4">
              <SearchBar />
            </div> */}

            <nav className="flex flex-col gap-4 mt-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <div key={item.href} className="flex flex-col">
                    <Link
                      href={item.href}
                      className={`ml-2 text-lg font-medium hover:text-primary ${
                        isActive ? "text-primary underline" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-6 mt-2 flex flex-col gap-2">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`text-sm hover:text-primary ${
                                isChildActive ? "text-primary underline" : "text-muted-foreground"
                              }`}
                            >
                              {child.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}