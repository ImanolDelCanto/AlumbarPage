"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const products = [
  {
    name: "Reja Modelo Clásico",
    description: "Diseño tradicional con máxima seguridad",
    image: "", // Reemplazar con imágenes reales
  },
  {
    name: "Ventana Corrediza Premium",
    description: "Elegancia y funcionalidad en aluminio",
    image: "", // Reemplazar con imágenes reales
  },
  {
    name: "Puerta Balcón",
    description: "Diseño moderno con cristal templado",
    image: "", // Reemplazar con imágenes reales
  },
  {
    name: "Reja de Seguridad Premium",
    description: "Máxima protección con estilo contemporáneo",
    image: "", // Reemplazar con imágenes reales
  },
]

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Productos de alta demanda </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
          Aquí encontrarás nuestros productos mas solicitados.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl"
                  >
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-blue-100 mb-4">{product.description}</p>
                      <Button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white">
                        Ver Detalles
                      </Button>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-blue-500/10 hover:bg-blue-500/20 text-white border-none" />
            <CarouselNext className="bg-blue-500/10 hover:bg-blue-500/20 text-white border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

