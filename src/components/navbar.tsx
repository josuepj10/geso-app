"use client"

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
    { label: "Inicio", href: "/dfgd" },
    { label: "Proyectos", href: "/gdrgdr" },
    { label: "Recursos", href: "/ytn" },
    {
      label: "Nosotros", href: "/gdfgtr",
      
      children: [
        { label: "Equipo", href: "/nyun" },
        { label: "Historia", href: "/dfrg" },
        { label: "Misión y visión", href: "/yttyh" },
      ],
    },
    { label: "Dona", href: "/8kjiu" },
  ]
  return (
    <header className="w-full border-b p-4 flex items-center justify-between">
      {/* Logo */}
      <span className="font-bold text-lg">GESO</span>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          if (item.children) {
            // Dropdown para "Nosotros"
            return (
    <DropdownMenu key={item.href}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex items-center gap-1 text-sm font-medium ${
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
              className={`text-sm font-medium hover:text-primary ${
                isActive ? "text-primary underline" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

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
            <nav className="flex flex-col gap-4 mt-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <div key={item.href} className="flex flex-col">
                    <Link
                      href={item.href}
                      className={`text-lg font-medium hover:text-primary ${
                        isActive ? "text-primary underline" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
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