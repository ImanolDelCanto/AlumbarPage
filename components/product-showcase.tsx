"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const products = [
  {
    name: "Ventanan 150x110 Vidrio Entero + Reja Tubular Inter",
    image: "/media/Ventana 150x110 Vidrio Entero + Reja Tubular Inter.jpg", 
  },

  {
    name: "Ventana 150x110 Americana + Reja redondo 10",
    image: "/media/Ventana 150x110 Americana + Reja redondo 10_.jpg", 
  },
  {
    name: "Ventana 120x110 Vidrio entero",
    image: "/media/Ventana 120x110 Vidrio entero.jpg", 
  },
  {
    name: "Ventana 150x110 Vidrio Entero + Reja Tubular Inter",
    image: "/media/Ventana 150x110 Vidrio Entero + Reja Tubular Inter_.jpg", 
  },
  {
    name: "Ventana 100x100 Vidrio Entero + Reja Tubular Eco",
    image: "/media/Ventana 100x100 Vidrio Entero + Reja Tubular Eco.jpg", 
  },
  {
    name: "Aireador 40x26",
    image: "/media/Aireador 40x26.jpg", 
  },
  {
    name: "Mosquiteros Para ventana",
    image: "/media/Mosquiteros Para ventana_.jpg", 
  },
  {
    name: "Porton Reja Redondo 1/2 de 2 horas de abrir",
    image: "/media/Porton Reja Redondo 1_2 de 2 hojas de abrir.jpg", 
  },
  {
    name: "Porton Reja Tubular 2 hojas de abrir",
    image: "/media/Porton Reja Tubular 2 hojas de abrir_.jpg", 
  },
  {
    name: "Puerta Balcon 200x200 Vidrio Entero",
    image: "/media/Puerta Balcon 200x200 Vidrio Entero_.jpg", 
  },
  {
    name: "Puerta Balcon Americana 150x200",
    image: "/media/Puerta Balcon Americana 150x200_.jpg", 
  },
  {
    name: "Puerta Reja Hierro Redondo 1/2",
    image: "/media/Puerta Reja Hierro Redondo 1_2.jpg", 
  },
  {
    name: "Puerta Reja Maya",
    image: "/media/Puerta Reja Maya_.jpg", 
  },
  {
    name: "Puerta Reja Tubular",
    image: "/media/Puerta Reja Tubular_.jpg", 
  },
  {
    name: "Ventana 60x40 Vidrio entero",
    image: "/media/Ventana 60x40 Vidrio entero_.jpg", 
  },
  {
    name: "Ventana 60x40 Vidrio Entero + Reja Tubular Inter",
    image: "/media/Ventana 60x40 Vidrio Entero+ Reja Tubular Inter_.jpg", 
  },
  {
    name: "Ventana 100x40 + Reja Redondo 10mm",
    image: "/media/Ventana 100x40 + Reja Redondo 10mm.jpg", 
  },
  {
    name: "Ventana 100x100 Americana + Reja Redondo 10mm",
    image: "/media/Ventana 100x100 Americana+ Reja Redondo 10mm.jpg", 
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
                <CarouselItem key={index} className="flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative w-auto mx-auto"
                  >
                    <div className="relative h-[400px] flex justify-center"> {/* Altura fija de 400px */}
                      <Image 
                        src={product.image || "/placeholder.svg"} 
                        alt={product.name} 
                        width={500}
                        height={400}
                        className="object-contain w-auto h-full" // h-full para ocupar todo el alto del contenedor
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      </div>
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