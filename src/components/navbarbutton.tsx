"use client"

import Link from "next/link"

interface NavbarButtonProps {
  href: string
  active?: boolean
  children: React.ReactNode
  special?: boolean
}

export default function NavbarButton({ href, active, special, children }: NavbarButtonProps) {
  return (
    <Link
      href={href}
      className={`px-5 py-1.5 rounded-[30px] font-medium transition-colors
        ${
          special
            ? "bg-[#FFD11A] text-[#5B1780]" // estilo del botón especial (apóyanos)
            : active
              ? "bg-[#5B1780] text-white"
              : "text-[#374151] hover:text-[#5B1780]"
        }`}
    >
      {children}
    </Link>
  )
}