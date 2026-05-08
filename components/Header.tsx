'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, CalendarCheck } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Início' },
    { href: '/especialidades', label: 'Especialidades' },
    { href: '/exames', label: 'Exames' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="https://i.imgur.com/Z6PPjCL.png"
            alt="Clínica Costa Campos"
            width={40}
            height={40}
            className="object-contain"
          />
          <span
            className={`font-bold text-base hidden sm:block transition-colors duration-300 ${
              scrolled ? 'text-teal-700' : 'text-teal-600'
            }`}
          >
            Clínica Costa Campos
          </span>
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-teal-700 border-b-2 border-teal-600 pb-0.5'
                  : 'text-slate-600 hover:text-teal-700'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Botão de agendamento */}
          <a
            href="https://wa.me/558897242827"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            <CalendarCheck size={15} />
            Agendar Consulta
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-teal-700 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-md border-t border-gray-100`}
      >
        <div className="px-5 py-3 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-sm font-medium border-b border-gray-50 last:border-0 transition-colors ${
                pathname === link.href ? 'text-teal-700' : 'text-slate-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/558897242827"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 mb-1 flex items-center justify-center gap-2 bg-teal-600 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <CalendarCheck size={15} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  )
}
