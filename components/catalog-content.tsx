"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { fetchProducts, type Product } from "@/lib/fetchProducts"
import { Loader2 } from "lucide-react"

export function CatalogContent() {
  const searchParams = useSearchParams()
  const categoria = searchParams.get("categoria")
  const linea = searchParams.get("linea")
  const subcategoria = searchParams.get("subcategoria")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Cargar los productos solo si no hay productos cargados previamente
    async function loadProducts() {
      if (products.length === 0) {
        setLoading(true)
        const fetchedProducts = await fetchProducts()
        setProducts(fetchedProducts)
        setLoading(false)
      }
    }
    loadProducts()
  }, [products.length]) // Solo se ejecutará si el estado de productos está vacío

  const filteredProducts = products.filter(
    (product) =>
      (!categoria || product.Categoria.toLowerCase() === categoria.toLowerCase()) &&
      (!linea || product.Linea.toLowerCase() === linea.toLowerCase()) &&
      (!subcategoria || product.SubCategoria.toLowerCase() === subcategoria.toLowerCase()) // Asegúrate de agregar subcategoria aquí
  )

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <Loader2 className="w-16 h-16 text-white animate-spin mb-4" />
        <p className="text-xl text-white">Cargando productos...</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  )
}
