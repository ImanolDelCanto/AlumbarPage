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
    default: "Alumbar | Aberturas de Aluminio y Rejas de Seguridad en Buenos Aires",
    template: "%s | Alumbar",
  },
  description:
    "Fabricamos y vendemos aberturas de aluminio y rejas de seguridad de alta calidad. Ventanas, puertas, portones y más. Envíos a todo el país. Ubicados en Rafael Calzada, Buenos Aires.",
  keywords: [
    "aberturas de aluminio",
    "rejas de seguridad",
    "ventanas de aluminio",
    "puertas de aluminio",
    "portones",
    "Buenos Aires",
    "Rafael Calzada",
    "herrería",
    "cerramientos",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://alumbaronline.com",
    siteName: "Alumbar",
    title: "Alumbar | Aberturas de Aluminio y Rejas de Seguridad",
    description:
      "Fabricamos y vendemos aberturas de aluminio y rejas de seguridad de alta calidad. Ventanas, puertas, portones y más.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alumbar Logo",
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
    google: "tu-codigo-de-verificacion", // Reemplazar con el código de verificación de Google Search Console
  },
  alternates: {
    canonical: "https://alumbaronline.com",
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

