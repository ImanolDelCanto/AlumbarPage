import { Suspense } from "react"
import { CatalogContent } from "@/components/catalog-content"
import { Loader2 } from "lucide-react"

export default function Catalogo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Nuestro Catálogo</h1>
        <Suspense fallback={<CatalogLoading />}>
          <CatalogContent />
        </Suspense>
      </div>
    </div>
  )
}

function CatalogLoading() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <Loader2 className="w-16 h-16 text-white animate-spin mb-4" />
      <p className="text-xl text-white">Cargando productos...</p>
    </div>
  )
}

