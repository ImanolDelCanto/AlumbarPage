"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { useSearchParams, usePathname } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { fetchProducts, type Product } from "@/lib/fetchProducts"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const PRODUCTS_PER_PAGE = 9

export function CatalogContent() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const searchParamsString = useMemo(() => {
    const params = new URLSearchParams(searchParams)
    return params.toString()
  }, [searchParams])

  const loadProducts = useCallback(async () => {
    setLoading(true)
    const fetchedProducts = await fetchProducts()
    setProducts(fetchedProducts)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchParamsString])

  const filteredProducts = useMemo(() => {
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
  }, [products, searchParams])

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const changePage = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <Loader2 className="w-16 h-16 text-white animate-spin mb-4" />
        <p className="text-xl text-white">Cargando productos...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {currentProducts.map((product, index) => (
          <ProductCard key={`${product.Producto}-${index}`} {...product} />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button onClick={() => changePage(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
          Anterior
        </Button>
        <span className="text-white">
          Página {currentPage} de {totalPages}
        </span>
        <Button onClick={() => changePage(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>
          Siguiente
        </Button>
      </div>
    </div>
  )
}

