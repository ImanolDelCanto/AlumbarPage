"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

interface ProductCardProps {
  title: string
  characteristics: string[]
  prices: { size: string; price: number }[]
  imageUrls: string[]
  category: string
}

const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="relative aspect-square bg-slate-700 flex items-center justify-center">
        <span className="text-sm text-gray-400">Error al cargar la imagen</span>
      </div>
    )
  }

  return (
    <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" onError={() => setError(true)} />
  )
}

export function ProductCard({ title, characteristics, prices, imageUrls, category }: ProductCardProps) {
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl text-blue-700 font-bold mb-4">{title}</h2>
        <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {imageUrls.map((url, index) => (
                <div className="embla__slide" key={index}>
                  <div className="relative aspect-square w-full">
                    <ProductImage src={url} alt={`${title} - Imagen ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {imageUrls.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-blue-700/50 hover:bg-blue-700/70 text-white rounded-full p-2"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-blue-700/50 hover:bg-blue-700/70 text-white rounded-full p-2"
                onClick={scrollNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
        <div className="space-y-2 mb-4">
          <h3 className="font-semibold text-blue-800">Características:</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            {characteristics.map((characteristic, index) => (
              <li key={index}>{characteristic}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-blue-700 text-white text-xs px-2 py-1 rounded">{category}</span>
        </div>
        {showPrices && <PriceList prices={prices} />}
      </div>
      <div className="px-6 pb-6">
        <Button
          variant="outline"
          className="w-full text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
          onClick={() => setShowPrices(!showPrices)}
        >
          {showPrices ? "OCULTAR PRECIOS" : "VER PRECIOS X MEDIDA"}
        </Button>
      </div>
    </div>
  )
}

const PriceList = ({ prices }: { prices: { size: string; price: number }[] }) => (
  <div className="mt-4 bg-blue-100 rounded-lg p-4 max-h-60 overflow-y-auto">
    <h4 className="font-semibold mb-2 text-blue-800">Precios por medida:</h4>
    <ul className="space-y-1">
      {prices.map((item, index) => (
        <li key={index} className="flex justify-between text-sm">
          <span>{item.size}</span>
          <span className="font-semibold">${(Number.parseFloat(item.price.toString()) || 0).toFixed(2)}</span>
        </li>
      ))}
    </ul>
  </div>
)


