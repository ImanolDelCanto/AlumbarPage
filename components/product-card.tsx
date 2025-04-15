"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import PriceList from "./pricelist"


interface ProductCardProps {
    Producto: string
    Caracteristicas: string
    Medidas: string[]
    Precios: number[]
    Categoria: string
    SubCategoria: string
    Linea: string
    ImagenURL: string[]
  }

  const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
    const [error, setError] = useState(false)
  
    const isGoogleDriveUrl = src.includes("drive.google.com") || src.includes("googleusercontent.com")
    const imageSrc = isGoogleDriveUrl ? "/placeholder.svg" : src
  
    if (error) {
      return (
        <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm text-gray-500">Error al cargar la imagen</span>
        </div>
      )
    }
  
    return (
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain"
        onError={() => setError(true)}
        loading="lazy"
      />
    )
  }
  

export function ProductCard({
  Producto,
  Caracteristicas,
  Medidas,
  Precios,
  Categoria,
  SubCategoria,
  Linea,
  ImagenURL,
}: ProductCardProps) {
  const [showPrices, setShowPrices] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const hasMultipleImages = ImagenURL?.length > 1

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!hasMultipleImages) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev()
      if (e.key === "ArrowRight") scrollNext()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [scrollPrev, scrollNext, hasMultipleImages])

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-2xl text-blue-800 font-bold mb-4">{Producto}</h2>
        <div className="relative w-full" style={{ paddingBottom: "100%" }}>
          <div className="embla absolute inset-0" ref={emblaRef}>
            <div className="embla__container h-full">
              {(ImagenURL?.length ? ImagenURL : ["/placeholder.svg"]).map((src, index) => (
                <div className="embla__slide h-full" key={index}>
                  <div className="relative w-full h-full">
                    <ProductImage src={src} alt={`${Producto} - Imagen ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {hasMultipleImages && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-blue-600/50 hover:bg-blue-600/70 text-white rounded-full p-2"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-blue-600/50 hover:bg-blue-600/70 text-white rounded-full p-2"
                onClick={scrollNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="font-semibold text-blue-700">Características:</h3>
          <p className="text-sm text-blue-600">{Caracteristicas}</p>
        </div>

        <div className="mb-4">
          <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold mr-2">
            {Categoria}
          </span>
          {SubCategoria && (
            <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold mr-2">
              {SubCategoria}
            </span>
          )}
          {Linea && (
            <span className="inline-block bg-blue-400 text-white text-xs px-3 py-1 rounded-full font-semibold">
              {Linea}
            </span>
          )}
        </div>

        {showPrices && <PriceList medidas={Medidas} precios={Precios} />}
      </div>

      <div className="px-6 pb-6">
        <Button
          variant="outline"
          className="w-full text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
          onClick={() => setShowPrices(!showPrices)}
        >
          {showPrices ? "Ocultar precios" : "Ver precios por medida"}
        </Button>
      </div>
    </div>
  )
}
