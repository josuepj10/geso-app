"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg"
}

export default function Button({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        // Variantes
        variant === "default" && "bg-[#5B1780] text-white hover:bg-[#8C339D]", // primary
        variant === "outline" && "bg-white border border-[#5B1780] text-[#5B1780] hover:bg-[#5B1780] hover:text-white", // secundary
        variant === "ghost" && "bg-[#FFD11A] hover:shadow-md ", // tertiary
        variant === "link" && "text-[#5B1780] underline-offset-4 hover:underline",
        // Tamaños
        size === "sm" && "px-3 py-1 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}