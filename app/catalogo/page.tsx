import { Suspense } from "react"
import { CatalogContent } from "@/components/catalog-content"

export default function Catalogo() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestro Catálogo</h1>
      <Suspense fallback={<CatalogLoading />}>
        <CatalogContent />
      </Suspense>
    </div>
  )
}

function CatalogLoading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-slate-800/50 rounded-lg p-6 space-y-4 animate-pulse">
          <div className="h-8 bg-slate-700 rounded w-3/4"></div>
          <div className="aspect-square bg-slate-700 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
            <div className="space-y-1">
              <div className="h-3 bg-slate-700 rounded w-full"></div>
              <div className="h-3 bg-slate-700 rounded w-5/6"></div>
              <div className="h-3 bg-slate-700 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

