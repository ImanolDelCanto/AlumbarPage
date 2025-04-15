"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Animación más eficiente usando CSS en lugar de framer-motion
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/banner.webp" 
          alt="Fondo decorativo"
          fill
          priority={true}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjIiIGZpbGw9IiMxZDRlZDgiLz48L3N2Zz4="
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Capa de superposición para mejorar el contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-700 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex justify-center mb-4 mt-4">
            <Image
              src="/logo.webp"
              alt="Alumbar Logo"
              width={500}
              height={250}
              priority={true}
              className="w-auto h-auto max-w-[80%] md:max-w-[60%] lg:max-w-[40%]"
            />
          </div>
          <p className="text-xl md:text-2xl text-blue-100">
            ¿Buscas una forma de mejorar la seguridad y el estilo de tu propiedad?
          </p>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            En Alumbar, ofrecemos Aberturas de aluminio y Rejas de seguridad diseñadas para satisfacer tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100 w-full sm:w-auto">
                Ver Catálogo
              </Button>
            </Link>
            <Link href="https://wa.me/5491166741449" target="_blank" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                Solicitar Presupuesto
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Efecto decorativo más ligero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
    </div>
  )
}
