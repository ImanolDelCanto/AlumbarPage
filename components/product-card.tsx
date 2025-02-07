"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string
  image: string
  characteristics: string[]
}

interface PriceItem {
  size: string
  price: number
}

const PriceList = ({ prices }: { prices: PriceItem[] }) => (
  <div className="mt-4 bg-slate-700/50 rounded-lg p-4 max-h-60 overflow-y-auto">
    <h4 className="font-semibold mb-2 text-orange-500">Precios por medida:</h4>
    <ul className="space-y-1">
      {prices.map((item, index) => (
        <li key={index} className="flex justify-between text-sm">
          <span>{item.size}</span>
          <span>${item.price.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  </div>
)

export function ProductCard({ title, characteristics }: ProductCardProps) {
  const [showPrices, setShowPrices] = useState(false)

  const prices: PriceItem[] = [
    { size: "100x100 cm", price: 15000 },
    { size: "120x120 cm", price: 18000 },
    { size: "150x150 cm", price: 22500 },
    { size: "180x180 cm", price: 27000 },
    { size: "200x200 cm", price: 30000 },
    { size: "220x220 cm", price: 33000 },
    { size: "250x250 cm", price: 37500 },
    { size: "280x280 cm", price: 42000 },
    { size: "300x300 cm", price: 45000 },
    { size: "320x320 cm", price: 48000 },
  ]

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl text-orange-500 font-bold mb-4">{title}</h2>
        <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
          <Image src={ ""} alt={title} fill className="object-cover" />
        </div>
        <div className="space-y-2 mb-4">
          <h3 className="font-semibold">Características:</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            {characteristics.map((characteristic, index) => (
              <li key={index}>{characteristic}</li>
            ))}
          </ul>
        </div>
        {showPrices && <PriceList prices={prices} />}
      </div>
      <div className="px-6 pb-6">
        <Button
          variant="outline"
          className="w-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
          onClick={() => setShowPrices(!showPrices)}
        >
          {showPrices ? "OCULTAR PRECIOS" : "VER PRECIOS X MEDIDA"}
        </Button>
      </div>
    </div>
  )
}

