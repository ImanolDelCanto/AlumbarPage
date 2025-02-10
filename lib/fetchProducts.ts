import Papa from "papaparse"

export interface Product {
  Producto: string
  Caracteristicas: string
  Medidas: string
  Precio: number
  ImagenURL: string[]
  Categoria: string
}

function convertGoogleDriveUrl(url: string): string {
  if (url.includes("uc?export=view")) {
    return url
  }

  const fileId = url.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/)?.[1] || url.match(/\/d\/(.+?)$/)?.[1]

  if (!fileId) {
    return url
  }

  return `https://drive.google.com/uc?export=view&id=${fileId}`
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
        const transformedData = results.data.map((item: any) => ({
          ...item,
          Precio: Number.parseFloat(item.Precio) || 0,
          ImagenURL: item.ImagenURL
            ? item.ImagenURL.split(",").map((url: string) => convertGoogleDriveUrl(url.trim()))
            : [],
          Categoria: item.Categoria || "Sin categoría",
        }))
        resolve(transformedData as Product[])
      },
      error: (error: any) => {
        reject(error)
      },
    })
  })
}

