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
import NavbarButton  from "@/components/navbarbutton"

export function Navbar() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    { label: "Inicio", href: "/" },
    
    { label: "Proyectos", href: "/proyecto" },

    { label: "Eventos", href: "/eventos" },
  
    
    { label: "GESO en medios", href: "/geso-en-medios" },
    { label: "Impacto", href: "/impacto" },
    { 
      label: "Recursos", href: "/recursos", 
      children: [
        { label: "Entrevistas", href: "/recursos/entrevistas" },
        { label: "Publicaciones", href: "/recursos/publicaciones" },
      ],
    },

    {
      label: "Nosotros", href: "/nosotros",
      children: [
        { label: "Misión y visión", href: "/nosotros/mision-vision" },
        { label: "Historia", href: "/nosotros/historia" },
        { label: "Competencias y capacidades", href: "/nosotros/competencias-y-cap" },
        { label: "Principios", href: "/nosotros/principios" },
        { label: "Alianzas", href: "/nosotros/alianzas" },

      ],
    },

    { label: "Colabora", href: "/apoyo" },
  ]

  return (
    <header className="w-full">
  <div className="w-[75%] mx-auto flex items-center justify-between py-2">
    
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2">
      <Image src="/images/logo.png" alt="Logo Fundación" width={40} height={40} priority />
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex gap-6">
      {menuItems.map((item) => {
        const isActive = pathname === item.href

        if (item.children) {
          return (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 flex items-center rounded-2xl text-lg font-medium transition-colors ${
                  isActive
                    ? "bg-purplePrimary text-white"
                    : "text-gray-700 hover:bg-purplePrimary hover:text-white"
                }`}
              >
                {item.label}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-0 bg-[#8C339D] shadow-md rounded-2xl py-2 mt-1 min-w-[170px] z-20 flex flex-col items-center"
                  >
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block w-[144px] py-2 text-lg pl-2 rounded-2xl transition-colors ${
                            isChildActive
                              ? "bg-[#5B1780] text-white font-semibold"
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
  </div>
</header>
  )
}