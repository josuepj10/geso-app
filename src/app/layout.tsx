import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"

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
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
