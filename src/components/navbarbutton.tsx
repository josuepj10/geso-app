"use client"

import Link from "next/link"

interface NavbarButtonProps {
  href: string
  active?: boolean
  children: React.ReactNode
}

export default function NavbarButton({ href, active, children }: NavbarButtonProps) {
  return (
    <Link
      href={href}
      className={`px-3 py-1.5 rounded-[30px] font-medium transition-colors
        ${active 
          ? "bg-[#5B1780] text-white" 
          : "text-gray-700 hover:bg-[#8C339D] hover:text-white"
        }`}
    >
      {children}
    </Link>
  )
}