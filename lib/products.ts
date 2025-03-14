import Papa from "papaparse"

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
export async function getLocalImages(productName: string): Promise<string[]> {
  try {
    // Intentar cargar el archivo de mapeo directamente
    const response = await fetch("/image-mapping.json")
    if (!response.ok) {
      console.error(`Error cargando image-mapping.json: ${response.status}`)
      return ["/placeholder.svg"]
    }

    const imageMapping = await response.json()

    // Verificar si el producto existe en el mapeo
    if (imageMapping[productName] && imageMapping[productName].length > 0) {
      return imageMapping[productName]
    } else {
      console.warn(`No se encontraron imágenes para el producto: ${productName}`)
      return ["/placeholder.svg"]
    }
  } catch (error) {
    console.error("Error al cargar el mapeo de imágenes:", error)
    return ["/placeholder.svg"]
  }
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRifFTK7FoULaZt3bTH-jyqYKAWKicfvoF-S_Sxv3BWTutgH2hxKmZRclQP70ssfsatwfRS57isi6Fi/pub?output=csv",
    )

    if (!response.ok) {
      throw new Error(`Error al obtener datos CSV: ${response.status}`)
    }

    const csvData = await response.text()

    return new Promise((resolve, reject) => {
      Papa.parse(csvData, {
        header: true,
        complete: async (results) => {
          try {
            const groupedProducts: { [key: string]: Product } = {}

            // Primero agrupar los productos
            for (const item of results.data as any[]) {
              const productName = item.Producto
              if (!productName) continue

              if (!groupedProducts[productName]) {
                groupedProducts[productName] = {
                  Producto: productName,
                  Caracteristicas: item.Caracteristicas || "",
                  Medidas: [],
                  Precios: [],
                  Categoria: item.Categoria || "Sin categoría",
                  SubCategoria: item.SubCategoria || "",
                  Linea: item.Linea || "",
                  ImagenURL: [], // Se llenará después
                }
              }

              if (item.Medidas) groupedProducts[productName].Medidas.push(item.Medidas)
              if (item.Precio) groupedProducts[productName].Precios.push(Number.parseFloat(item.Precio) || 0)
            }

            // Luego obtener las imágenes para cada producto
            for (const productName of Object.keys(groupedProducts)) {
              const localImages = await getLocalImages(productName)
              groupedProducts[productName].ImagenURL = localImages
            }

            const transformedData = Object.values(groupedProducts)
            console.log(`Productos cargados: ${transformedData.length}`)
            resolve(transformedData as Product[])
          } catch (error) {
            console.error("Error procesando datos:", error)
            reject(error)
          }
        },
        error: (error: any) => {
          console.error("Error parseando CSV:", error)
          reject(error)
        },
      })
    })
  } catch (error) {
    console.error("Error en fetchProducts:", error)
    throw error
  }
}

