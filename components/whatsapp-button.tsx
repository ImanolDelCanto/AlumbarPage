"use client"

import { useState } from "react"
import Image from "next/image"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsappButton() {
  const [isOpen, setIsOpen] = useState(false)

  const vendedores = [
    { id: 1, nombre: "Estela", numero: "5491130817381" },
    { id: 2, nombre: "Aldana", numero: "5491161697249"},
    { id: 3, nombre: "Cristian", numero: "5491125557845" },
  ]

  const handleWhatsAppClick = (numero: string) => {
    const url = `https://wa.me/${numero}`
    window.open(url, "_blank", "noopener noreferrer")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            className="p-0 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Chatear por WhatsApp"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EHCkZgOQg5UOBgDIrfBuQWkFYDLHBT.png"
              alt="WhatsApp"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </Button>
        </PopoverTrigger>

        <AnimatePresence>
          {isOpen && (
            <PopoverContent
              className="w-80 p-0 bg-gradient-to-br from-slate-900 to-slate-800 border-none shadow-xl"
              forceMount
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-transparent border-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center text-xl font-bold text-white">
                      Conecta con nuestro equipo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-gray-300 mb-4">
                      Selecciona un especialista para iniciar tu chat
                    </p>
                    <ul className="space-y-3">
                      {vendedores.map((vendedor) => (
                        <li key={vendedor.id}>
                          <Button
                            variant="ghost"
                            className="w-full text-left hover:bg-primary/20 transition-colors duration-200 flex flex-col items-start p-3 rounded-lg"
                            onClick={() => handleWhatsAppClick(vendedor.numero)}
                          >
                            <span className="text-secondary font-semibold">{vendedor.nombre}</span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </PopoverContent>
          )}
        </AnimatePresence>
      </Popover>
    </div>
  )
}

