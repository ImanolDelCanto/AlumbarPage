"use client"

import { Shield, PenToolIcon as Tool, Clock } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Máxima Seguridad",
    description: "Seguridad y confianza, en cada commpra",
  },
  {
    icon: Tool,
    title: "Artesanía Superior",
    description: "Cada pieza es fabricada con precisión y atención al detalle",
  },
  {
    icon: Clock,
    title: "Entrega Puntual",
    description: "Cumplimos con los plazos establecidos, respetando tu tiempo",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-700 to-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-blue-600/50 backdrop-blur-sm rounded-lg p-6 hover:bg-blue-600/70 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-blue-100 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center text-white">{feature.title}</h3>
                <p className="text-blue-100 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

