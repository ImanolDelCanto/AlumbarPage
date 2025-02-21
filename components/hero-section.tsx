"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
   <div className="absolute inset-0">
        <Image
          src="/banner.jpeg" 
          alt="Fondo decorativo"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-100"
        />
      </div>

      {/* Capa de superposición para mejorar el contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50" />
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-4 mt-4">
            <Image src="/logo.png" alt="Alumbar Logo" width={10000} height={5000} className="2xl:w-3/5 2xl:h-3/5 sm:w-4/5 md:w-4/5 lg:w-2/5" />
          </div>
          <p className="text-xl md:text-2xls text-blue-100">
            ¿Buscas una forma de mejorar la seguridad y el estilo de tu propiedad?
          </p>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            En Alumbar, ofrecemos Aberturas de aluminio y Rejas de seguridad diseñadas para satisfacer tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
                Ver Catálogo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link
                href="https://wa.me/541166741449"
                aria-label="Solicitar Presupuesto"
                className="text-white hover:text-blue-200 transition-colors"
                target="_blank"
              >
                Solicitar Presupuesto
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Updated Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
    </div>
  )
}

