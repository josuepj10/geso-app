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
      className={`px-3 py-1.5 rounded-2xl text-sm font-medium transition-colors
        ${active 
          ? "bg-purple-700 text-white" 
          : "text-gray-700 hover:bg-purple-700 hover:text-white"
        }`}
    >
      {children}
    </Link>
  )
}