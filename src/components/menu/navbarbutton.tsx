"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavbarButtonProps {
  href: string
  special?: boolean
  children: React.ReactNode
}

export default function NavbarButton({ href, special, children }: NavbarButtonProps) {
  const pathname = usePathname()

  // Marca activo si:
  // - La ruta actual es exactamente igual
  // - La ruta actual empieza con href (para hijos)
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"))

  return (
    <Link
      href={href}
      className={`xl:px-5 px-3 py-1.5 rounded-[30px] font-medium transition-colors
        ${
          special
            ? "bg-[#FFD11A] text-[#5B1780]"
            : isActive
              ? "bg-[#5B1780] text-white"
              : "text-[#374151] hover:text-[#5B1780]"
        }`}
    >
      {children}
    </Link>
  )
}