"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { fetchProducts, type Product } from "@/lib/fetchProducts"

export function CatalogContent() {
  const searchParams = useSearchParams()
  const categoria = searchParams.get("categoria")
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts()
      setProducts(fetchedProducts)
    }
    loadProducts()
  }, [])

  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.Producto]) {
        acc[product.Producto] = {
          title: product.Producto,
          characteristics: product.Caracteristicas.split(". "),
          prices: [],
          imageUrls: product.ImagenURL,
          category: product.Categoria,
        }
      }
      acc[product.Producto].prices.push({
        size: product.Medidas,
        price: product.Precio,
      })
      return acc
    },
    {} as Record<
      string,
      {
        title: string
        characteristics: string[]
        prices: { size: string; price: number }[]
        imageUrls: string[]
        category: string
      }
    >,
  )

  const filteredProducts = categoria
    ? Object.values(groupedProducts).filter((product) => product.category.toLowerCase() === categoria.toLowerCase())
    : Object.values(groupedProducts)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  )
}

