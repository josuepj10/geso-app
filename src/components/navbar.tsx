"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function Navbar() {
  const pathname = usePathname()

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
    
    { 
      label: "Proyectos", href: "/proyecto", 
      
      children: [
        { label: "Destacados", href: "/proyecto/destacados" },
        { label: "Migración", href: "/proyecto/migracion" },
        { label: "Violencia de género", href: "/proyecto/violencia-de-genero" },
        { label: "Medios", href: "/proyecto/medios" },
        { label: "Ciudadanía", href: "/proyecto/ciudadania" },
      ],
    
    },

    { 
      label: "Recursos", href: "/recursos", 
      
      children: [
        { label: "Debates", href: "/recursos/debates" },
        { label: "Entrevistas", href: "/recursos/entrevistas" },
        { label: "Archivos", href: "/recursos/archivos" },
      ],
    
    },
    { label: "Actualidad", href: "/actualidad" },
    { label: "Impacto", href: "/impacto" },
    { label: "Apóyanos", href: "/apoyo" },
    { label: "Contacto", href: "/contacto" },
  ]
  return (
    <header className="w-full border-b p-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo Fundación" width={60} height={60} priority />
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
            // Dropdown 
            return (
           <DropdownMenu key={item.href}>
           <DropdownMenuTrigger asChild>
           <Button
             variant="ghost"
             className={`flex items-center px-2.5 gap-1 text-sm font-medium ${
             isActive ? "text-primary underline" : "text-muted-foreground"
          }`}
        >
          {item.label}
          <ChevronDown className="w-4 h-4" /> 
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {item.children.map((child) => {
          const isChildActive = pathname === child.href
          return (
            <DropdownMenuItem key={child.href} asChild>
              <Link
                href={child.href}
                className={`${
                  isChildActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {child.label}
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
            )
          }

          // Normal link
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex items-center px-2.5 text-sm font-medium hover:text-primary ${
                isActive ? "text-primary underline" : "text-muted-foreground"
              }`}
            >
              {item.label}

            </Link>
          )
        })}
      </nav>

        {/* Barra de búsqueda */}
        <div className="hidden md:flex items-center border rounded-md px-3 py-2 w-48 md:w-64 bg-white shadow-sm">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Mobile Menu */}
      <div className="md:hidden">
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
            <div className="flex items-center border rounded-md px-3 py-2 w-40 mt-4 bg-white shadow-sm ml-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
              />
            </div>

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