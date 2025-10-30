"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"
import { FaBars } from "react-icons/fa"
import { X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MenuItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export default function MobileMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <Dialog>
      {/* Botón abrir */}
      <DialogTrigger asChild>
        <button className="p-2">
          <FaBars className="h-10 w-10 text-[#5B1780]" />
        </button>
      </DialogTrigger>

      {/* Contenido fullscreen */}
      <DialogContent
        showCloseButton={false}
        className="bg-white/65 backdrop-blur-sm flex flex-col w-screen max-w-none h-screen "
      >
        {/* Header fijo */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b">
          <DialogTitle className="text-3xl font-bold text-[#5B1780]">
            GESO
          </DialogTitle>
          <DialogClose asChild>
            <button>
              <X className="h-7 w-7 text-[#5B1780]" />
            </button>
          </DialogClose>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto p-6 ">
          <div className="grid grid-cols-1 
                          gap-3 text-[#374151] font-bold
                          "> 
            {menuItems.map((item) => {
              
              const isChildActive = item.children?.some(
                (child) => pathname === child.href
              )
              const isActive = pathname === item.href || isChildActive
              const isDropdownOpen = openDropdown === item.label

              return (
                <div key={item.href} className="flex flex-col">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-[30px] border transition-colors ${
                          isActive
                            ? "bg-[#5B1780] text-white"
                            : "border-[#5B1780] hover:bg-gray-100 text-gray-800"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                          } ${isActive ? "text-white" : "text-[#5B1780]"}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-4 bg-[#8C339D] rounded-4xl flex flex-col gap-2 mt-2  "
                          >
                            {item.children.map((child) => {
                              const isChildActive = pathname === child.href
                              return (
                                <DialogClose asChild key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={`px-3 py-2 rounded-[30px] text-sm border transition-colors ${
                                      isChildActive
                                        ? "bg-[#5B1780] text-white border-none"
                                        : "border-none hover:bg-gray-100  text-white"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </DialogClose>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <DialogClose asChild>
                      <Link
                        href={item.href}
                        className={`w-full px-4 py-3 rounded-[30px] border transition-colors ${
                          isActive
                            ? "bg-[#5B1780] text-white"
                            : "border-[#5B1780] hover:bg-gray-100 text-[#374151]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </DialogClose>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}