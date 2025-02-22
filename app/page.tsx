import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { ProductShowcase } from "@/components/product-showcase"
import { CompanyInfoSection } from "@/components/company-info-section"
import { ContactCTA } from "@/components/contact-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alumbar | Fábrica de Aberturas de Aluminio y Rejas de Seguridad en Buenos Aires",
  description:
    "Fabricamos aberturas de aluminio y rejas de seguridad en Rafael Calzada. Ventanas, puertas, portones y mosquiteros. Envíos a todo el país. Presupuesto sin cargo.",
  keywords: [
    "aberturas de aluminio rafael calzada",
    "rejas de seguridad zona sur",
    "ventanas de aluminio buenos aires",
    "puertas de aluminio",
    "portones de aluminio",
    "fábrica de aberturas",
    "herrería zona sur",
    "mosquiteros de aluminio",
  ],
}
export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <Features />
      <ProductShowcase />
      <CompanyInfoSection />
      <ContactCTA />
    </div>
  )
}

