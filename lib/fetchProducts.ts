import Papa from "papaparse"
import imageMapping from "@/public/image-mapping.json"

export interface Product {
  Producto: string
  Caracteristicas: string
  Medidas: string[]
  Precios: number[]
  Categoria: string
  SubCategoria: string
  Linea: string
  ImagenURL: string[] // Ahora contendrá rutas locales
}

// Función para obtener imágenes locales para un producto
export function getLocalImages(productName: string): string[] {
  // Usar el mapeo de imágenes o devolver un array vacío
  return (imageMapping as Record<string, string[]>)[productName] || ["/placeholder.svg"]
}

// Función para convertir URLs de Google Drive a rutas locales
function convertToLocalImages(productName: string, googleDriveUrls: string[]): string[] {
  // Primero intentamos obtener imágenes locales del mapeo
  const localImages = getLocalImages(productName)

  // Si encontramos imágenes locales, las usamos
  if (localImages.length > 0 && localImages[0] !== "/placeholder.svg") {
    console.log(`Usando imágenes locales para: ${productName}`)
    return localImages
  }

  // Si no hay imágenes locales, usamos placeholder
  console.warn(`No se encontraron imágenes locales para: ${productName}`)
  return ["/placeholder.svg"]
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRifFTK7FoULaZt3bTH-jyqYKAWKicfvoF-S_Sxv3BWTutgH2hxKmZRclQP70ssfsatwfRS57isi6Fi/pub?output=csv",
  )
  const csvData = await response.text()

  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        const groupedProducts: { [key: string]: Product } = {}

        results.data.forEach((item: any) => {
          const productName = item.Producto
          if (!productName) return

          if (!groupedProducts[productName]) {
            // Extraer URLs de Google Drive (si existen)
            const googleDriveUrls = item.ImagenURL ? item.ImagenURL.split(",").map((url: string) => url.trim()) : []

            // Convertir a imágenes locales usando el mapeo
            const localImages = convertToLocalImages(productName, googleDriveUrls)

            groupedProducts[productName] = {
              Producto: productName,
              Caracteristicas: item.Caracteristicas,
              Medidas: [],
              Precios: [],
              Categoria: item.Categoria || "Sin categoría",
              SubCategoria: item.SubCategoria || "Sin subcategoría",
              Linea: item.Linea || "Sin línea",
              ImagenURL: localImages,
            }
          }
          groupedProducts[productName].Medidas.push(item.Medidas)
          groupedProducts[productName].Precios.push(Number.parseFloat(item.Precio) || 0)
        })

        const transformedData = Object.values(groupedProducts)
        resolve(transformedData as Product[])
      },
      error: (error: any) => {
        reject(error)
      },
    })
  })
}

