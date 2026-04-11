import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://i.imgur.com/hpUscFz.png"
                alt="Clínica Costa Campos"
                width={38}
                height={38}
                className="object-contain"
              />
              <span className="text-white font-semibold">Clínica Costa Campos</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              30 anos cuidando da saúde de Itapipoca e região com dedicação, tecnologia e humanização.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">Início</Link></li>
              <li><Link href="/especialidades" className="hover:text-teal-400 transition-colors">Especialidades</Link></li>
              <li><Link href="/exames" className="hover:text-teal-400 transition-colors">Exames</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Itapipoca - CE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-teal-400 flex-shrink-0" />
                <span>(85) 9 9999-9999</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Seg – Sex: 07h às 18h<br />Sáb: 07h às 12h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Clínica Costa Campos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
