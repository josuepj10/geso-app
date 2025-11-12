import "./globals.css"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import BarHeader from "@/components/menu/barheader"
import MovilMenu from "@/components/menu/movilMenu"
import * as React from "react"

export const metadata: Metadata = {
  title: "GESO",
  description: "Sitio web de GESO",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className="antialiased text-base bg-white text-gray-900 overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* Navbar fijo */}
        <BarHeader />

        {/* Menú móvil */}
        <div className="lg:hidden">
          <MovilMenu />
        </div>

        {/* Contenido principal */}
        <main className="pt-18 lg:pt-32">
          <div className="max-w-[1362px] mx-auto md:px-6 2xl:px-0 px-4">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}