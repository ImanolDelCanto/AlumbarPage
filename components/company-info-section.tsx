"use client"

import { motion } from "framer-motion"
import { MapPin, Truck, PenToolIcon as Tool } from "lucide-react"

export function CompanyInfoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Sobre Nosotros</h2>
            <p className="text-xl text-gray-600">
              Nosotros Somos Alumbar, Fabrica de Aberturas de Aluminio y Rejas de Seguridad.
            </p>
          </div>

          <div className="prose prose-blue max-w-none">
            <div className="bg-gray-50 rounded-lg p-8 mb-8 shadow-sm">
              <p className="text-lg mb-6 text-gray-700">
                Somos una empresa familiar dedicada a fabricar estilo y seguridad para tu hogar. Realizamos Ventanas,
                Mosquiteros, Ventiluz, Puerta balcón, Puertas y Portones de Aluminio, Rejas fijas de Seguridad, Puertas
                rejas de abrir, Portones reja de abrir.
              </p>
              <p className="text-gray-600">Muchos modelos disponibles que podes visualizar en nuestro catálogo.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Tool className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-primary">ENTREGA</h3>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Nuestras Ventanas y Rejas se entregan listas para ser instaladas por un albañil o persona con
                    conocimiento básico.
                  </p>
                  <p>
                    Las rejas se entregan pre-pintadas con convertidor antióxido 3 en 1. De color negro, o blanco, según
                    elija el cliente.
                  </p>
                  <p>
                    También ofrecemos Varias opciones con las patas de fijación que se adapte a tus necesidades, previo
                    a tomar el pedido.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-primary">ENVÍOS</h3>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-gray-800">ENVÍOS A DOMICILIO</strong> con flete particular a CABA Y GBA.
                    (Consultar previo a la compra el costo del envío).
                  </p>
                  <p>
                    <strong className="text-gray-800">ENVÍOS AL INTERIOR</strong> con empresa de transporte VIA CARGO,
                    sin costo alguno de traslado y despacho hasta la empresa. Se proporciona GUÍA DE ENVÍO para
                    seguimiento online.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-primary">UBICACIÓN</h3>
              </div>
              <p className="mb-6 text-gray-600">
                 <b>Av. San Martin 4060 entre San Luis y Santiago del Estero, Rafael Calzada, Almirante
                Brown</b>
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.745825787107!2d-58.348450899999996!3d-34.7871735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32c95539b0437%3A0xdc3b85a0b0ba3aa2!2sAv.%20San%20Mart%C3%ADn%204060%2C%20B1847EZL%20Rafael%20Calzada%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738957004094!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-gray-600">
                Nuestros Años de experiencia nos avalan en el rubro de las Aberturas de Aluminio y Rejas de Seguridad
                para el hogar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

