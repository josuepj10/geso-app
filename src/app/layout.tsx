import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"

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
    <html lang="es">
      <body className="antialiased bg-white text-gray-900">
        {/* Navbar fijo en todas las páginas */}
        <Navbar />

        {/* Contenido de cada página */}
        <main>{children}</main>

        {/* Footer fijo en todas las páginas */}
        <Footer />

      </body>
    </html>
  )
}
