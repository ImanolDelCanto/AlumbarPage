import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { ProductShowcase } from "@/components/product-showcase"
import { CompanyInfoSection } from "@/components/company-info-section"
import { ContactCTA } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Alumbar | Aberturas y Rejas de Seguridad - Rafael Calzada",
  description:
    "Alumbar - Expertos en aberturas de aluminio y rejas de seguridad. Fabricación y venta en Rafael Calzada. Ventanas, puertas y portones. Tel: 11 6674-1449",
  keywords: [
    "alumbar",
    "ventanas",
    "rejas",
    "alumbar aberturas",
    "alumbar online",
    "alumbar rejas",
    "alumbar rafael calzada",
    "aberturas alumbar",
    "rejas alumbar",
    "ventanas alumbar","ventanas zona sur",
    "aberturas zona sur",
    "ventana con reja",
    "rejas zona sur",
    "portón reja",
    "puerta reja",
    "herrería",
    "herrero",
    "mosquitero",
    "línea módena",
    "línea herrero",
    "aberturas de aluminio",
    "reja tubular",
    "reja tubo",
    "reja caño",
    "ventana estilo americano",
    "aberturas calzada",
    "aberturas solano",
    "aberturas Temperley",
    "aberturas Claypole",
    "aberturas Adrogué",
    "aberturas Varela",
    "ventanas con reja Buenos Aires",
    "ventana con reja calzada",
    "fábrica de rejas",
    "fábrica de ventanas",
    "fábrica de aberturas",
    "ventana de aluminio",
    "reja para ventana",
    "reja para balcón",
    "puerta balcón",
    "reja para puerta balcón",
    "portón reja",
    "rejas de seguridad",    
    "Rafael Calzada",
    "Avenida San Martín",
    "ventanas Almirante Brown",
    "rejas Almirante Brown",
    "ventanas Avellaneda",
    "rejas Avellaneda",
    "ventanas Lomas de Zamora",
    "rejas Lomas de Zamora",
    "ventanas Berazategui",
    "rejas Berazategui",
    "ventanas Quilmes",
    "rejas Quilmes",    
    "reja hierro cuadrado media",
    "reja hierro redondo media",
    "reja hierro vertical",
    "reja hierro macizo",
    "reja hierro del 10",
    "reja hierro de media pulgada",
    "reja maya",
    "reja metal desplegado",
    "puerta reja tubo",
    "puerta reja maya",
    "puerta reja de media"
  ],
}

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <Features />
        <ProductShowcase />
        <CompanyInfoSection />
        <ContactCTA />
      </div>
      <div className="hidden">
        <h1>Alumbar - Aberturas y Rejas de Seguridad</h1>
        <p>
          Alumbar es tu fábrica de confianza en aberturas de aluminio y rejas de seguridad en Rafael Calzada.
        </p>
      </div>
    </>
  )
}

