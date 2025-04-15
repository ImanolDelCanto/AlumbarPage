"use client"

import { MapPin, Truck, PenToolIcon as Tool } from "lucide-react"
import { lazy, Suspense } from "react"

// Lazy load the map component
const MapComponent = lazy(() => import("./map-component"))

export function CompanyInfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre Nosotros</h2>
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

            <div className="bg-gray-50 rounded-lg p-8 shadow-sm h-[500px] ">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-primary">UBICACIÓN</h3>
              </div>
              <p className="mb-6 text-gray-600">
                <b>Av. San Martin 4060 entre San Luis y Santiago del Estero, Rafael Calzada, Almirante Brown</b>
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <Suspense
                  fallback={
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center min-h-[300px]">
                      <div className="animate-pulse text-gray-500">Cargando mapa...</div>
                    </div>
                  }
                >
                  <MapComponent />
                </Suspense>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-gray-600">
                Nuestros Años de experiencia nos avalan en el rubro de las Aberturas de Aluminio y Rejas de Seguridad
                para el hogar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
