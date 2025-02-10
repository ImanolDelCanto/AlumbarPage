"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string
  characteristics: string[]
  prices: { size: string; price: number }[]
}

const PriceList = ({ prices }: { prices: { size: string; price: number }[] }) => (
  <div className="mt-4 bg-slate-700/50 rounded-lg p-4 max-h-60 overflow-y-auto">
    <h4 className="font-semibold mb-2 text-primary">Precios por medida:</h4>
    <ul className="space-y-1">
      {prices.map((item, index) => (
        <li key={index} className="flex justify-between text-sm">
          <span>{item.size}</span>
          <span>${(Number.parseFloat(item.price.toString()) || 0).toFixed(2)}</span>
        </li>
      ))}
    </ul>
  </div>
)

export function ProductCard({ title, characteristics, prices }: ProductCardProps) {
  const [showPrices, setShowPrices] = useState(false)

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
        <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
          <Image src="/placeholder.svg" alt={title} fill className="object-cover" />
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
          className="w-full text-white border-gray-400 hover:text-primary hover:text-white"
          onClick={() => setShowPrices(!showPrices)}
        >
          {showPrices ? "OCULTAR PRECIOS" : "VER PRECIOS X MEDIDA"}
        </Button>
      </div>
    </div>
  )
}

