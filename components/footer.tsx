import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 ">
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-amber-500 transition-colors">
                Productos
                </Link>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Horarios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes a Viernes</li>
              <li>9:00 - 18:00</li>
              <li>Sábados</li>
              <li>9:00 - 13:00</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ventanasalumbar/?locale=es_LA"
                target="_blank"
                aria-label="Facebook"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/alumbar.rejas/"
                target="_blank"
                aria-label="Instagram"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:Aberturasalumbar@hotmail.com"
                aria-label="Instagram"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Alumbar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
