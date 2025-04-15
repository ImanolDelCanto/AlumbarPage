"use client"

import Image from "next/image"
import { useState, useCallback, useRef, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel" 


// Versión simplificada de los productos con nombres de archivo sin espacios ni caracteres especiales
const products = [
  {
    name: "Ventana 150x110 Vidrio Entero + Reja Tubular Inter",
    image: "/media/Ventana 150x110 Vidrio Entero Reja Tubular Inter.webp",
  },
  {
    name: "Ventana 150x110 Americana + Reja redondo 10mm",
    image: "/media/Ventana 150x110 Americana Reja redondo 10_.webp",
  },
  {
    name: "Ventana 120x110 Vidrio entero",
    image: "/media/Ventana 120x110 Vidrio entero.webp",
  },
  {
    name: "Ventana 150x40 Vidrio Entero + Reja Tubular Inter",
    image: "/media/Ventana 150x110 Vidrio Entero Reja Tubular Inter_.webp",
  },
  {
    name: "Ventana 100x100 Vidrio Entero + Reja Tubular Eco",
    image: "/media/Ventana 100x100 Vidrio Entero Reja Tubular Eco.webp",
  },
  {
    name: "Aireador 40x26",
    image: "/media/Aireador 40x26.webp",
  },
  {
    name: "Mosquiteros Para ventana",
    image: "/media/Mosquiteros Para Ventana_.webp",
  },
  {
    name: "Porton Reja Redondo 1/2 de 2 hojas de abrir",
    image: "/media/Porton Reja Redondo 1_2 de 2 hojas de abrir.webp",
  },
  {
    name: "Porton Reja Tubular 2 hojas de abrir",
    image: "/media/Porton Reja Tubular 2 hojas de abrir_.webp",
  },
  {
    name: "Puerta Balcon 200x200 Vidrio Entero",
    image: "/media/Puerta Balcon 200x200 Vidrio Entero_.webp",
  },
  {
    name: "Puerta Balcon Americana 150x200",
    image: "/media/Puerta Balcon Americana 150x200_.webp",
  },
  {
    name: "Puerta Reja Hierro Redondo 1/2",
    image: "/media/Puerta Reja Hierro Redondo 1_2.webp",
  },
  {
    name: "Puerta Reja Maya",
    image: "/media/Puerta Reja Maya_.webp",
  },
  {
    name: "Puerta Reja Tubular",
    image: "/media/Puerta Reja Tubular_.webp",
  },
  {
    name: "Ventana 60x40 Vidrio entero",
    image: "/media/Ventana 60x40 Vidrio entero_.webp",
  },
  {
    name: "Ventana 60x40 Vidrio Entero + Reja Tubular Inter",
    image: "/media/Ventana 60x40 Vidrio Entero Reja Tubular Inter_.webp",
  },
  {
    name: "Ventana 100x40 + Reja Redondo 10mm",
    image: "/media/Ventana 100x40 Reja Redondo 10mm.webp",
  },
  {
    name: "Ventana 100x100 Americana + Reja Redondo 10mm",
    image: "/media/Ventana 100x100 Americana Reja Redondo 10mm.webp",
  },
]

// Componente optimizado para manejar la carga de imágenes
const ProductImage = ({ src, alt, isVisible }: { src: string; alt: string; isVisible: boolean }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20">
        <p className="text-white text-sm text-center p-4">{alt}</p>
      </div>
    )
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20">
          <div className="w-8 h-8 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {isVisible && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className={`object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
          quality={75}
        />
      )}
    </>
  )
}




export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselApi = useRef<CarouselApi | null>(null)

  // Para saber cuándo está visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Escuchar cambios en el carrusel
  useEffect(() => {
    if (!carouselApi.current) return

    const onSelect = () => {
      setCurrentIndex(carouselApi.current!.selectedScrollSnap())
    }

    carouselApi.current.on("select", onSelect)

    // Set el index inicial
    onSelect()

    return () => {
      carouselApi.current?.off("select", onSelect)
    }
  }, [carouselApi.current])

  const shouldLoad = useCallback(
    (index: number) => {
      return isVisible && (index === currentIndex || index === currentIndex - 1 || index === currentIndex + 1)
    },
    [currentIndex, isVisible],
  )

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Productos de alta demanda</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">Aquí encontrarás nuestros productos más solicitados.</p>
        </div>

        <div className="relative max-w-4xl mx-auto px-8">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            setApi={(api) => {
              carouselApi.current = api
            }}
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="flex items-center justify-center">
                  <div className="relative w-full mx-auto">
                    <div className="relative h-[350px] w-full">
                      <ProductImage src={product.image} alt={product.name} isVisible={shouldLoad(index)} />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-4 text-white">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-blue-500/10 hover:bg-blue-500/20 text-white border-none" />
            <CarouselNext className="bg-blue-500/10 hover:bg-blue-500/20 text-white border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

