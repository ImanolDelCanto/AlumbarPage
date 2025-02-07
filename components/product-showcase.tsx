"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    name: "Serie Elegance",
    description: "Diseño minimalista con máxima seguridad",
    price: "Desde $89,999",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Serie Fortress",
    description: "Protección superior con estilo moderno",
    price: "Desde $119,999",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Serie Artisan",
    description: "Diseños personalizados de alta gama",
    price: "Desde $149,999",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestras Colecciones</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre nuestra línea de productos premium, donde cada pieza es una obra maestra de seguridad y diseño
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-0 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <p className="text-amber-500 font-semibold mb-4">{product.price}</p>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700">
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

