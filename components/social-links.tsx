import { Facebook, Instagram, MapPin, PhoneIcon as WhatsApp } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4">
      <a
        href="#"
        className="bg-slate-800 p-3 rounded-full hover:bg-orange-500 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-orange-500 transition-colors" aria-label="Facebook">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-orange-500 transition-colors" aria-label="WhatsApp">
        <WhatsApp className="w-6 h-6" />
      </a>
      <a
        href="#"
        className="bg-slate-800 p-3 rounded-full hover:bg-orange-500 transition-colors"
        aria-label="Ubicación"
      >
        <MapPin className="w-6 h-6" />
      </a>
    </div>
  )
}

