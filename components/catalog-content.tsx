"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { fetchProducts, type Product } from "@/lib/fetchProducts"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const PRODUCTS_PER_PAGE = 9

export function CatalogContent() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [isClient, setIsClient] = useState(false)

  // Ensure hydration matching by only rendering client-side content after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true)
      const fetchedProducts = await fetchProducts()
      setProducts(fetchedProducts)
    } catch (error) {
      console.error("Error loading products:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    if (!isClient) return []

    return products.filter((product) => {
      const categoria = searchParams.get("categoria")
      const linea = searchParams.get("linea")
      const subcategoria = searchParams.get("subcategoria")

      return (
        (!categoria || product.Categoria.toLowerCase() === categoria.toLowerCase()) &&
        (!linea || product.Linea.toLowerCase() === linea.toLowerCase()) &&
        (!subcategoria || product.SubCategoria.toLowerCase() === subcategoria.toLowerCase())
      )
    })
  }, [products, searchParams, isClient])

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const changePage = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <Loader2 className="w-12 h-12 text-white animate-spin mb-4" />
        <p className="text-xl text-white">Cargando productos...</p>
      </div>
    )
  }

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl text-white mb-4">No se encontraron productos</h3>
          <p className="text-blue-100 mb-8">Intenta con otros filtros o categorías</p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product, index) => (
              <ProductCard key={`${product.Producto}-${index}`} {...product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                onClick={() => changePage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                Anterior
              </Button>
              <span className="text-white">
                Página {currentPage} de {totalPages}
              </span>
              <Button
                onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                Siguiente
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
