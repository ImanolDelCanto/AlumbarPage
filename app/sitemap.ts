import type { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alumbaronline.com"
  const lastModified = new Date()

  // Rutas principales
  const mainRoutes = ["", "/catalogo"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "daily" as const,
    priority: 1,
  }))

  // Categorías principales
  const categories = ["Abertura de aluminio", "Rejas", "Insumos para fabricantes"].map((category) => ({
    url: `${baseUrl}/catalogo?categoria=${encodeURIComponent(category)}`.replace(/&/g, "&amp;"),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Líneas de productos
  const productLines = [
    { categoria: "Abertura de aluminio", linea: "Linea herrero estandar" },
    { categoria: "Abertura de aluminio", linea: "Linea alta prestacion" },
    { categoria: "Rejas", linea: "Linea economica estandar" },
    { categoria: "Rejas", linea: "Linea residencial pesada" },
  ].map(({ categoria, linea }) => ({
    url: `${baseUrl}/catalogo?categoria=${encodeURIComponent(categoria)}&amp;linea=${encodeURIComponent(linea)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...mainRoutes, ...categories, ...productLines]
}
