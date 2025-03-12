import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic" // Asegura que la ruta sea dinámica

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url")
  const id = request.nextUrl.searchParams.get("id")

  if (!url && !id) {
    return new NextResponse("URL o ID parameter es requerido", { status: 400 })
  }

  let imageUrl = url

  // Si se proporciona un ID de Google Drive, construir la URL
  if (id) {
    imageUrl = `https://drive.google.com/uc?export=view&id=${id}`
  }

  try {
    // Configurar headers para la solicitud a Google Drive
    const headers = new Headers()
    headers.append(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    )
    headers.append("Referer", "https://drive.google.com/")

    const response = await fetch(imageUrl as string, {
      headers,
      cache: "no-store", // Evitar caché en el servidor
    })

    if (!response.ok) {
      console.error(`Error fetching image: ${response.status} ${response.statusText}`)
      return new NextResponse("Error fetching image", { status: response.status })
    }

    const buffer = await response.arrayBuffer()
    const contentType = response.headers.get("Content-Type") || "image/jpeg"

    // Configurar headers para la respuesta
    const responseHeaders = new Headers()
    responseHeaders.append("Content-Type", contentType)
    responseHeaders.append("Cache-Control", "public, max-age=86400") // Caché por 24 horas
    responseHeaders.append("Access-Control-Allow-Origin", "*")

    return new NextResponse(buffer, {
      headers: responseHeaders,
    })
  } catch (error) {
    console.error("Error proxying image:", error)
    return new NextResponse("Error fetching image", { status: 500 })
  }
}

