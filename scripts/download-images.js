// Este script descarga las imágenes de Google Drive y las guarda localmente
// Ejecutar con: node scripts/download-images.js

const fs = require("fs")
const path = require("path")
const https = require("https")
const http = require("http")
const { URL } = require("url")
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args))

// Directorio donde se guardarán las imágenes
const IMAGE_DIR = path.join(process.cwd(), "public", "product-images")

// Asegurarse de que el directorio existe
if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true })
  console.log(`Directorio creado: ${IMAGE_DIR}`)
}

// Función para extraer el ID de Google Drive
function extractGoogleDriveId(url) {
  if (!url) return null

  // Diferentes patrones de URL de Google Drive
  const patterns = [
    /\/file\/d\/([^/?]+)/, // https://drive.google.com/file/d/FILE_ID/view
    /[?&]id=([^&]+)/, // https://drive.google.com/open?id=FILE_ID
    /\/folders\/([^/?]+)/, // https://drive.google.com/drive/folders/FILE_ID
    /\/d\/([^/?]+)/, // https://drive.google.com/d/FILE_ID/
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

// Función para descargar una imagen usando fetch
async function downloadImage(url, filePath) {
  try {
    const fileId = extractGoogleDriveId(url)
    if (!fileId) {
      throw new Error(`No se pudo extraer el ID de Google Drive: ${url}`)
    }

    // URL directa para descargar de Google Drive
    const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

    console.log(`Intentando descargar: ${directUrl}`)

    // Configurar headers para simular un navegador
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      Referer: "https://drive.google.com/",
      Connection: "keep-alive",
      "Upgrade-Insecure-Requests": "1",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "cross-site",
    }

    // Realizar la solicitud con fetch
    const response = await fetch(directUrl, {
      headers,
      redirect: "follow", // Seguir redirecciones automáticamente
    })

    if (!response.ok) {
      throw new Error(`Error al descargar la imagen: ${response.status} ${response.statusText}`)
    }

    // Obtener el buffer de la imagen
    const buffer = await response.buffer()

    // Guardar la imagen en el sistema de archivos
    fs.writeFileSync(filePath, buffer)

    return true
  } catch (error) {
    console.error(`Error al descargar ${url}: ${error.message}`)
    return false
  }
}

// Función alternativa para descargar usando una URL diferente
async function downloadImageAlternative(url, filePath) {
  try {
    const fileId = extractGoogleDriveId(url)
    if (!fileId) {
      throw new Error(`No se pudo extraer el ID de Google Drive: ${url}`)
    }

    // URL alternativa para descargar de Google Drive
    const alternativeUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`

    console.log(`Intentando método alternativo: ${alternativeUrl}`)

    const response = await fetch(alternativeUrl, {
      redirect: "follow",
    })

    if (!response.ok) {
      throw new Error(`Error al descargar la imagen (método alternativo): ${response.status}`)
    }

    const buffer = await response.buffer()
    fs.writeFileSync(filePath, buffer)

    return true
  } catch (error) {
    console.error(`Error al descargar (método alternativo) ${url}: ${error.message}`)
    return false
  }
}

// Función principal para procesar el CSV y descargar imágenes
async function processCSVAndDownloadImages() {
  try {
    // Instalar node-fetch si no está disponible
    try {
      require("node-fetch")
    } catch (e) {
      console.log("Instalando node-fetch...")
      require("child_process").execSync("npm install node-fetch")
      console.log("node-fetch instalado correctamente.")
    }

    // Instalar papaparse si no está disponible
    try {
      require("papaparse")
    } catch (e) {
      console.log("Instalando papaparse...")
      require("child_process").execSync("npm install papaparse")
      console.log("papaparse instalado correctamente.")
    }

    const Papa = require("papaparse")

    // Descargar el CSV
    console.log("Descargando CSV de Google Sheets...")
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRifFTK7FoULaZt3bTH-jyqYKAWKicfvoF-S_Sxv3BWTutgH2hxKmZRclQP70ssfsatwfRS57isi6Fi/pub?output=csv",
    )
    const csvData = await response.text()

    // Crear archivo de mapeo
    const imageMapping = {}

    // Parsear CSV
    Papa.parse(csvData, {
      header: true,
      complete: async (results) => {
        const groupedProducts = {}

        // Agrupar productos
        results.data.forEach((item) => {
          const productName = item.Producto
          if (!productName) return

          if (!groupedProducts[productName]) {
            groupedProducts[productName] = {
              Producto: productName,
              ImagenURL: item.ImagenURL ? item.ImagenURL.split(",").map((url) => url.trim()) : [],
            }
          }
        })

        // Procesar cada producto
        const products = Object.values(groupedProducts)
        console.log(`Encontrados ${products.length} productos con imágenes para descargar.`)

        for (const product of products) {
          const productSlug = product.Producto.toLowerCase()
            .replace(/[^\w\s]/g, "")
            .replace(/\s+/g, "-")

          const productImages = []

          // Descargar cada imagen del producto
          for (let i = 0; i < product.ImagenURL.length; i++) {
            const url = product.ImagenURL[i]
            if (!url) continue

            const fileName = `${productSlug}-${i + 1}.jpg`
            const filePath = path.join(IMAGE_DIR, fileName)

            console.log(`Descargando imagen para ${product.Producto}: ${fileName}`)

            // Intentar el método principal
            let success = await downloadImage(url, filePath)

            // Si falla, intentar el método alternativo
            if (!success) {
              console.log(`Intentando método alternativo para ${fileName}`)
              success = await downloadImageAlternative(url, filePath)
            }

            if (success) {
              productImages.push(`/product-images/${fileName}`)
              console.log(`✓ Imagen descargada: ${fileName}`)
            } else {
              console.log(`✗ No se pudo descargar la imagen: ${fileName}`)
            }
          }

          // Guardar mapeo de imágenes
          imageMapping[product.Producto] = productImages
        }

        // Guardar archivo de mapeo
        const mappingPath = path.join(process.cwd(), "public", "image-mapping.json")
        fs.writeFileSync(mappingPath, JSON.stringify(imageMapping, null, 2))
        console.log(`Mapeo de imágenes guardado en: ${mappingPath}`)

        console.log("Proceso completado.")
      },
      error: (error) => {
        console.error("Error al parsear CSV:", error)
      },
    })
  } catch (error) {
    console.error("Error en el proceso:", error)
  }
}

// Ejecutar el script
processCSVAndDownloadImages()

