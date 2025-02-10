import type { Metadata } from "next"
import { Montserrat } from 'next/font/google'
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react"
import { WhatsappButton } from "@/components/whatsapp-button"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alumbar | Diseño y Seguridad en Aluminio",
  description: "Soluciones elegantes en aluminio y herrería para hogares y empresas",
  icons: {
    icon: '/favicon.ico', 
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.className} bg-gradient-to-b from-background to-background/90 text-foreground`}>
        <div className="relative min-h-screen">
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsappButton />
        </div>
      </body>
    </html>
  )
}

