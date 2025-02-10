"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-primary/20" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">¿Listo para mejorar el diseño y la seguridad de tu espacio?</h2>
          <p className="text-xl text-gray-300 mb-4">
            Contáctanos hoy mismo y uno de nuestros asistentes de ventas va a brindarte el mejor asesoramiento... 
          </p>
          <p className="text-l text-gray-300 mb-8">
            Presupuestos sin cargo
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Llámanos</h3>
              <p className="text-gray-400">+54 112555-7845</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Escríbenos</h3>
              <p className="text-gray-400">Aberturasalumbar@hotmail.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visítanos</h3>
              <p className="text-gray-400">Av. San Martin 4060 Rafael Calzada, Almirante
              Brown</p>
            </div>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Solicitar Presupuesto
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

