import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react"
import { WhatsappButton } from "@/components/whatsapp-button"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://alumbaronline.com"),
  title: {
    default: "Alumbar | Fábrica de Aberturas de Aluminio y Rejas de Seguridad en Rafael Calzada",
    template: "%s | Alumbar - Aberturas y Rejas",
  },
  description:
    "Fábrica de aberturas de aluminio y rejas de seguridad en Rafael Calzada. Ventanas, puertas, portones y mosquiteros. ✓ Envíos a todo el país ✓ Presupuesto sin cargo ✓ Más de 15 años de experiencia",
  keywords: [
    "aberturas de aluminio rafael calzada",
    "rejas de seguridad zona sur",
    "ventanas de aluminio buenos aires",
    "puertas de aluminio",
    "portones de aluminio",
    "fábrica de aberturas zona sur",
    "herrería rafael calzada",
    "mosquiteros de aluminio buenos aires",
    "cerramientos de aluminio",
    "abertura modena",
    "línea herrero",
    "aberturas a30",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://alumbaronline.com",
    siteName: "Alumbar - Aberturas y Rejas",
    title: "Alumbar | Fábrica de Aberturas de Aluminio y Rejas de Seguridad",
    description:
      "Fábrica de aberturas de aluminio y rejas de seguridad en Rafael Calzada. Ventanas, puertas, portones y mosquiteros. Presupuesto sin cargo.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alumbar - Aberturas y Rejas",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion", // Reemplazar con el código real
  },
  alternates: {
    canonical: "https://alumbaronline.com",
  },
  authors: [{ name: "Alumbar" }],
  generator: "Next.js",
  applicationName: "Alumbar",
  referrer: "origin-when-cross-origin",
  creator: "Alumbar",
  publisher: "Alumbar",
  category: "Aberturas y Rejas",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Rafael Calzada" />
        <meta name="geo.position" content="-34.7871735;-58.3484509" />
        <meta name="ICBM" content="-34.7871735, -58.3484509" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Alumbar",
              image: "https://alumbaronline.com/logo.png",
              "@id": "https://alumbaronline.com",
              url: "https://alumbaronline.com",
              telephone: "+54 116674-1449",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. San Martin 4060",
                addressLocality: "Rafael Calzada",
                addressRegion: "Buenos Aires",
                postalCode: "B1847",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.7871735,
                longitude: -58.3484509,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
              sameAs: ["https://www.facebook.com/alumbar.rejas/", "https://www.instagram.com/alumbar.rejas/"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Productos Alumbar",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Aberturas de Aluminio",
                    description: "Ventanas, puertas y portones en aluminio",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Rejas de Seguridad",
                    description: "Rejas fijas y móviles para ventanas y puertas",
                  },
                ],
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -34.7871735,
                  longitude: -58.3484509,
                },
                geoRadius: "100000",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.className} bg-gradient-to-b from-background to-background/90 text-foreground m-0 p-0`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsappButton />
        </div>
      </body>
    </html>
  )
}

