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
    "ventanas alumbar",
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

