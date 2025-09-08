import "./globals.css"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import BarHeader from "@/components/barheader"


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
      <body className="antialiased text-base bg-white text-gray-900 overflow-x-hidden " suppressHydrationWarning>


        <nav className="max-w-[75%] mx-auto px-4">
        
          {/* Navbar fijo en todas las páginas */}


            <BarHeader/>
    
          

          {/* Contenido de cada página */}
          <main className="pt-32">
          {children}</main>
          

          {/* Footer fijo en todas las páginas */}
          
        </nav>

        


        <Footer />

      </body>
    </html>
  )
}
