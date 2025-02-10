import Papa from "papaparse"

export interface Product {
  Producto: string
  Caracteristicas: string
  Medidas: string
  Precio: number
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
        const transformedData = results.data.map((item:any) => ({
          ...item,
          Precio: Number.parseFloat(item.Precio) || 0,
        }))
        resolve(transformedData as Product[])
      },
      error: (error:any) => {
        reject(error)
      },
    })
  })
}

