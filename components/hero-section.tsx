"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Updated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <Image src="/logo2.png" alt="Alumbar Logo" width={2000} height={2000} className="w-80 h-80" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-outline-blue">ALUMBAR</h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Donde la innovación se encuentra con la excelencia en aluminio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
                Ver Catálogo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a
                href="mailto:Aberturasalumbar@hotmail.com"
                aria-label="Solicitar Presupuesto"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Solicitar Presupuesto
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Updated Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
    </div>
  )
}

