"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavbarButtonProps {
  href: string
  label: string
}

export default function NavbarButton({ href, label }: NavbarButtonProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
        pathname === href
          ? "bg-purple-400 text-white"
          : "text-gray-700 hover:bg-purple-400 hover:text-white"
      )}
    >
      {label}
    </Link>
  )
}