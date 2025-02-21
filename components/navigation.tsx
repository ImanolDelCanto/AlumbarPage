"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronRight, Instagram, Facebook, Phone, MapPin } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"

const catalogStructure = [
  {
    name: "Catálogo",
    subCategories: [
      {
        name: "Ver todo",
        href: "/catalogo",
      },
    ],
  },
  {
    name: "Aberturas de aluminio",
    subCategories: [
      { name: "Ver todo", href: "/catalogo?categoria=Abertura de aluminio" },
      {
        name: "Línea Herrero Estandar",
        subCategories: [
          { name: "Ver todo", href: "/catalogo?categoria=Abertura de aluminio&linea=Linea herrero estandar" },
          {
            name: "Ventanas",
            href: "/catalogo?categoria=Abertura de aluminio&linea=Linea herrero estandar&subcategoria=Ventana",
          },
          {
            name: "Puertas y portones",
            href: "/catalogo?categoria=Abertura de aluminio&linea=Linea herrero estandar&subcategoria=Puertas y portones",
          },
        ],
      },
      {
        name: "Línea Alta Prestación",
        subCategories: [
          { name: "Ver todo", href: "/catalogo?categoria=Abertura de aluminio&linea=Linea alta prestacion" },
          {
            name: "Línea Modena",
            href: "/catalogo?categoria=Abertura de aluminio&linea=Linea alta prestacion&subcategoria=Linea moderna",
          },
          {
            name: "Línea A30",
            href: "/catalogo?categoria=Abertura de aluminio&linea=Linea alta prestacion&subcategoria=Linea A30",
          }, 
          {
            name: "Línea A40",
            href: "/catalogo?categoria=Abertura de aluminio&linea=Linea alta prestacion&subcategoria=Linea A40",
          },
        ],
      },
    ],
  },
  {
    name: "Rejas de seguridad",
    subCategories: [
      { name: "Ver todo", href: "/catalogo?categoria=Rejas" },
      {
        name: "Línea Económica Estándar",
        subCategories: [
          { name: "Ver todo", href: "/catalogo?categoria=Rejas&linea=Linea economica estandar" },
          {
            name: "Rejas para ventanas",
            href: "/catalogo?categoria=Rejas&linea=Linea economica estandar&subcategoria=Rejas para ventanas",
          },
          {
            name: "Puertas y portones",
            href: "/catalogo?categoria=Rejas&linea=Linea economica estandar&subcategoria=Puertas y portones",
          },
        ],
      },
      {
        name: "Línea Residencial Pesada",
        subCategories: [
          { name: "Ver todo", href: "/catalogo?categoria=Rejas&linea=Linea residencial pesada" },
          {
            name: "Rejas para ventanas",
            href: "/catalogo?categoria=Rejas&linea=Linea residencial pesada&subcategoria=Rejas para ventanas",
          },
          {
            name: "Puertas y portones",
            href: "/catalogo?categoria=Rejas&linea=Linea residencial pesada&subcategoria=Puertas y portones",
          },
        ],
      },
    ],
  },
  {
    name: "Insumos para fabricantes",
    subCategories: [
      {
        name: "Ver todo",
        href: "/catalogo/insumos fabricantes"
      },
      {
        name: "Accesorios de aberturas",
        href: "/catalogo/insumos fabricantes/accesorios aberturas",
      },
      {
        name: "Insumos de herrería",
        href: "/catalogo/insumos fabricantes/insumos herreria",
      },
    ],
  }
]

const NestedDropdownMenu = ({ item, closeMenu }: { item: any; closeMenu: () => void }) =>
  item.subCategories && item.subCategories.length > 0 ? (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="w-full text-left">{item.name}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="bg-blue-700">
          {item.subCategories.map((subItem: any, index: number) => (
            <NestedDropdownMenu key={index} item={subItem} closeMenu={closeMenu} />
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  ) : (
    <DropdownMenuItem className="hover:bg-blue-600">
      <Link href={item.href || "#"} className="w-full" onClick={closeMenu}>
        {item.name}
      </Link>
    </DropdownMenuItem>
  )

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
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 lx:ml-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo2.png" alt="Logo alumbar" width={48} height={48} className="w-auto h-10 " />
              <span className="sm:text-3xl text-2xl font-bold text-outline-blue">ALUMBAR</span>
            </Link>
            <div className="flex items-center gap-2 sm:ml-4 mx-auto ml-2">
              <Link
                href="https://www.instagram.com/alumbar.rejas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/alumbar.rejas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link href="tel:+54 116674-1449" className="text-white hover:text-blue-200 transition-colors">
                <Phone size={20} />
              </Link>
              <Link
                href="https://maps.app.goo.gl/GsURTyXhdu9WGNYg6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors "
              >
                <MapPin size={20} />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors">
              Inicio
            </Link>
            {catalogStructure.map((category, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className="flex items-center text-white hover:text-blue-200 transition-colors">
                  {category.name} <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-blue-700 text-white rounded-md overflow-hidden shadow-lg">
                  {category.subCategories.map((subCategory, subIndex) => (
                    <NestedDropdownMenu key={subIndex} item={subCategory} closeMenu={() => {}} />
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-blue-800/95 py-4 shadow-lg">
            <div className="container mx-auto px-4">
              <Link
                href="/"
                className="text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <MobileNestedMenu items={catalogStructure} level={0} closeMenu={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const MobileNestedMenu = ({ items, level, closeMenu }: { items: any[]; level: number; closeMenu: () => void }) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null)

  return (
    <ul className={` mt-3 space-y-2 ${level > 0 ? "ml-4 " : ""}`}>
      {items.map((item, index) => (
        <li key={index}>
          {item.subCategories && item.subCategories.length > 0 ? (
            <div>
              <button
                className="flex items-center justify-between w-full text-white hover:text-blue-200 transition-colors pl-2 py-2"
                onClick={() => setOpenSubMenu(openSubMenu === index ? null : index)}
              >
                {item.name}
                <ChevronRight className={`h-4 w-4 transition-transform ${openSubMenu === index ? "rotate-90" : ""}`} />
              </button>
              {openSubMenu === index && (
                <MobileNestedMenu items={item.subCategories} level={level + 1} closeMenu={closeMenu} />
              )}
            </div>
          ) : (
            <Link
              href={item.href || "#"}
              className="block text-white hover:text-blue-200 transition-colors py-2 pl-2"
              onClick={() => {
                closeMenu()
                setOpenSubMenu(null)
              }}
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

