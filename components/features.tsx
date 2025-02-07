"use client"

import { Shield, PenToolIcon as Tool, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Máxima Seguridad",
    description: "Sistemas de seguridad de última generación integrados en diseños elegantes",
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
  {
    icon: Award,
    title: "Garantía Premium",
    description: "5 años de garantía en todos nuestros productos",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

