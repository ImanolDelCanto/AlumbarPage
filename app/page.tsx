import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { ProductShowcase } from "@/components/product-showcase"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <Features />
      <ProductShowcase />
      <ContactCTA />
    </div>
  )
}

