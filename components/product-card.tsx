"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

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
  const [loaded, setLoaded] = useState(false)

  const isGoogleDriveUrl = src.includes("drive.google.com") || src.includes("googleusercontent.com")

  const imageSrc = isGoogleDriveUrl ? "/placeholder.svg" : src

  const handleError = () => {
    console.error(`Error cargando imagen: ${src}`)
    setError(true)
  }

  const handleLoad = () => {
    setLoaded(true)
  }

  if (error) {
    return (
      <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-sm text-gray-500">Error al cargar la imagen</span>
      </div>
    )
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain"
        onError={handleError}
        onLoad={handleLoad}
        loading="eager"
        priority={true}
      />
    </>
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") scrollPrev()
        if (e.key === "ArrowRight") scrollNext()
      }
      document.addEventListener("keydown", onKeyDown)
      return () => document.removeEventListener("keydown", onKeyDown)
    }
  }, [emblaApi, scrollPrev, scrollNext])

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-2xl text-blue-800 font-bold mb-4">{Producto}</h2>
        <div className="relative w-full" style={{ paddingBottom: "100%" }}>
          <div className="embla absolute inset-0" ref={emblaRef}>
            <div className="embla__container h-full">
              {ImagenURL && ImagenURL.length > 0 ? (
                ImagenURL.map((imagePath, index) => (
                  <div className="embla__slide h-full" key={index}>
                    <div className="relative w-full h-full">
                      <ProductImage src={imagePath} alt={`${Producto} - Imagen ${index + 1}`} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="embla__slide h-full">
                  <div className="relative w-full h-full">
                    <ProductImage src="/placeholder.svg" alt={`${Producto} - Sin imagen`} />
                  </div>
                </div>
              )}
            </div>
          </div>
          {ImagenURL && ImagenURL.length > 1 && (
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

const PriceList = ({ medidas, precios }: { medidas: string[]; precios: number[] }) => (
  <div className="mt-4 bg-blue-100 rounded-lg p-4 max-h-60 overflow-y-auto">
    <h4 className="font-semibold mb-2 text-blue-800">Precios por medida:</h4>
    <ul className="space-y-1">
      {medidas.map((medida, index) => (
        <li key={index} className="flex justify-between text-sm">
          <span className="text-black">{medida}</span>
          <span className="font-semibold text-black">${precios[index].toFixed(2)}</span>
        </li>
      ))}
    </ul>
  </div>
)

