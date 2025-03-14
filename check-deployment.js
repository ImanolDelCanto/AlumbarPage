// Este script verifica que las imágenes estén incluidas en el despliegue
const fs = require("fs")
const path = require("path")

// Verificar si estamos en un entorno de producción
const isProduction = process.env.NODE_ENV === "production"
console.log(`Entorno: ${isProduction ? "Producción" : "Desarrollo"}`)

// Ruta a la carpeta public
const publicDir = path.join(process.cwd(), "public")
console.log(`Directorio public: ${publicDir}`)

// Ruta a la carpeta de imágenes de productos
const productImagesDir = path.join(publicDir, "product-images")
console.log(`Directorio de imágenes: ${productImagesDir}`)

// Verificar si la carpeta de imágenes existe
if (!fs.existsSync(productImagesDir)) {
  console.error("❌ ERROR: La carpeta product-images no existe en public")
  console.log("Debes crear esta carpeta y colocar tus imágenes allí")
  process.exit(1)
}

// Contar las imágenes en la carpeta
const imageFiles = fs
  .readdirSync(productImagesDir)
  .filter((file) => file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png") || file.endsWith(".webp"))

console.log(`Número de imágenes encontradas: ${imageFiles.length}`)

if (imageFiles.length === 0) {
  console.error("❌ ERROR: No se encontraron imágenes en la carpeta product-images")
  console.log("Debes colocar tus imágenes en esta carpeta")
  process.exit(1)
}

// Mostrar algunas imágenes de ejemplo
console.log("\nAlgunas imágenes encontradas:")
imageFiles.slice(0, 5).forEach((file) => {
  console.log(`- ${file}`)
})

// Verificar el archivo de mapeo
const mappingPath = path.join(publicDir, "image-mapping.json")
console.log(`\nArchivo de mapeo: ${mappingPath}`)

if (!fs.existsSync(mappingPath)) {
  console.error("❌ ERROR: El archivo image-mapping.json no existe en public")
  console.log("Debes crear este archivo para mapear productos a imágenes")
  process.exit(1)
}

// Leer el archivo de mapeo
try {
  const mapping = JSON.parse(fs.readFileSync(mappingPath, "utf8"))
  const productCount = Object.keys(mapping).length
  console.log(`Número de productos en el mapeo: ${productCount}`)

  // Verificar algunas rutas de imágenes
  let missingImages = 0
  let checkedImages = 0

  for (const [product, images] of Object.entries(mapping)) {
    for (const imagePath of images) {
      checkedImages++

      // Normalizar la ruta (quitar la barra inicial si existe)
      const normalizedPath = imagePath.startsWith("/") ? imagePath.substring(1) : imagePath

      const fullPath = path.join(publicDir, normalizedPath)

      if (!fs.existsSync(fullPath)) {
        console.log(`❌ Imagen no encontrada: ${imagePath} (${product})`)
        missingImages++

        // Solo mostrar las primeras 5 imágenes faltantes
        if (missingImages >= 5) {
          console.log("... y posiblemente más imágenes faltantes")
          break
        }
      }
    }

    if (missingImages >= 5) {
      break
    }
  }

  if (missingImages === 0) {
    console.log("✅ Todas las imágenes verificadas existen")
  } else {
    console.log(`❌ Se encontraron ${missingImages} imágenes faltantes de ${checkedImages} verificadas`)
  }
} catch (error) {
  console.error("❌ ERROR: No se pudo leer el archivo image-mapping.json")
  console.error(error)
  process.exit(1)
}

console.log("\n✅ Verificación completada")
console.log("\nRecomendaciones para el despliegue:")
console.log(
  "1. Asegúrate de que la carpeta public/product-images y el archivo public/image-mapping.json se incluyan en tu despliegue",
)
console.log("2. Si estás usando Vercel, verifica que estos archivos se suban correctamente")
console.log("3. Considera usar un CDN para las imágenes si tienes muchas")

