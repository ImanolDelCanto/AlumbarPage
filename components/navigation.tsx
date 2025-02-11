"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-800/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo2.png" alt="Logo alumbar" width={48} height={48} className="w-auto h-10" />
            <span className="text-3xl font-bold text-outline-blue">ALUMBAR</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors">
              Inicio
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-blue-200 transition-colors">
                Catálogo <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-blue-700 text-white">
                <DropdownMenuItem className="hover:bg-blue-600">
                  <Link href="/catalogo" className="w-full">
                    Ver todos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-blue-600">
                  <Link href="/catalogo?categoria=rejas" className="w-full">
                    Ver rejas
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-blue-600">
                  <Link href="/catalogo?categoria=ventanas" className="w-full">
                    Ver ventanas
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">
              <a href="mailto:Aberturasalumbar@hotmail.com" aria-label="Solicitar Presupuesto">
                Solicitar Presupuesto
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-blue-800/95 backdrop-blur-sm py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <div className="flex flex-col gap-2">
                <Link
                  href="/catalogo"
                  className="text-white hover:text-blue-200 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver todos los productos
                </Link>
                <Link
                  href="/catalogo?categoria=rejas"
                  className="text-white hover:text-blue-200 transition-colors py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver rejas
                </Link>
                <Link
                  href="/catalogo?categoria=ventanas"
                  className="text-white hover:text-blue-200 transition-colors py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver ventanas
                </Link>
              </div>
              <Button className="bg-white text-blue-700 hover:bg-blue-100">
                <a href="mailto:Aberturasalumbar@hotmail.com" aria-label="Solicitar Presupuesto">
                  Solicitar Presupuesto
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}



