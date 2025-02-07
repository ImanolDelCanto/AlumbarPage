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
        isScrolled ? "bg-background/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Alumbar-fotor-bg-remover-20250207121747-xAUj4FOtqLOv4hiV4DKJ3Tnk2FZbVJ.png"
              alt="Alumbar Logo"
              width={48}
              height={48}
              className="w-auto h-10"
            />
            <span className="text-3xl font-bold text-primary">Alumbar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-primary transition-colors">
                Catálogo <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/catalogo">Ver todos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/catalogo?tipo=rejas">Ver rejas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/catalogo?tipo=ventanas">Ver ventanas</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-primary hover:bg-primary/90">Solicitar Presupuesto</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <Link href="/" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <div className="flex flex-col gap-2">
                <Link
                  href="/catalogo"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver todos los productos
                </Link>
                <Link
                  href="/catalogo?tipo=rejas"
                  className="hover:text-primary transition-colors py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver rejas
                </Link>
                <Link
                  href="/catalogo?tipo=ventanas"
                  className="hover:text-primary transition-colors py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver ventanas
                </Link>
              </div>
              <Button className="bg-primary hover:bg-primary/90">Solicitar Presupuesto</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

