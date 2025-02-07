import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { ProductShowcase } from "@/components/product-showcase"
import { CompanyInfoSection } from "@/components/company-info-section"
import { ContactCTA } from "@/components/contact-cta"

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

