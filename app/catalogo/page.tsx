"use client"

import { ProductCard } from "@/components/product-card"
import { useSearchParams } from "next/navigation"

export default function Catalogo() {
  const searchParams = useSearchParams()
  const tipo = searchParams.get("tipo")

  const allProducts = [
    {
      title: "Reja Tubo Estándar",
      image: "/placeholder.svg",
      characteristics: [
        "Caño redondo de 1 pulgada",
        "Marco perimetral con estructural 30x20",
        "Refuerzo con planchuela de 1' x 1/8",
      ],
      type: "rejas",
    },
    {
      title: "Reja Tubo Eco",
      image: "/placeholder.svg",
      characteristics: [
        "Caño redondo horizontal de 1 pulgada",
        "Marco lateral con planchuela de 1' y 1/4 x 3/16",
        "Refuerzo central de planchuela 1' x 1/8",
      ],
      type: "rejas",
    },
    {
      title: "Reja Tubo Reforzada",
      image: "/placeholder.svg",
      characteristics: [
        "Caño redondo de 1 pulgada",
        "Marco perimetral con estructural 30x20",
        "Refuerzo con estructural 30x20",
      ],
      type: "rejas",
    },
    {
      title: "Ventana Corrediza",
      image: "/placeholder.svg",
      characteristics: ["Aluminio anodizado", "Doble vidrio hermético", "Sistema de cierre de seguridad"],
      type: "ventanas",
    },
    {
      title: "Ventana Abatible",
      image: "/placeholder.svg",
      characteristics: ["PVC de alta resistencia", "Triple vidrio aislante", "Herrajes de acero inoxidable"],
      type: "ventanas",
    },
  ]

  const filteredProducts = tipo ? allProducts.filter((product) => product.type === tipo) : allProducts

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestro Catálogo</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

