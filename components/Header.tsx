'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Início' },
    { href: '/especialidades', label: 'Especialidades' },
    { href: '/exames', label: 'Exames' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="https://i.imgur.com/Z6PPjCL.png"
            alt="Clínica Costa Campos"
            width={42}
            height={42}
            className="object-contain"
          />
          <span className="text-teal-600 font-semibold text-lg hidden sm:block">
            Clínica Costa Campos
          </span>
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                pathname === link.href
                  ? 'text-teal-700 border-b-2 border-teal-600 pb-0.5'
                  : 'text-teal-600 hover:text-teal-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-teal-600 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-teal-600 font-medium border-b border-gray-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
