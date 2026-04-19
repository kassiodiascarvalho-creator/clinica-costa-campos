'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { UserCircle, ChevronLeft, ChevronRight, CalendarCheck } from 'lucide-react'
import type { Medico } from '@/lib/types'

export default function DoctorCarouselClient({ medicos }: { medicos: Medico[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const CARD_WIDTH = 232 // card + gap

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    updateArrows()
  }, [medicos])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      const el = scrollRef.current
      if (!el) return
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + CARD_WIDTH, behavior: 'smooth' })
    }, 3200)
    return () => clearInterval(interval)
  }, [isPaused])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -CARD_WIDTH : CARD_WIDTH, behavior: 'smooth' })
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Seta esquerda */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-2 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:border-teal-300 transition-all"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Seta direita */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-2 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:border-teal-300 transition-all"
        >
          <ChevronRight size={18} />
        </button>
      )}

      {/* Track */}
      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
      >
        {medicos.map((medico) => (
          <div
            key={medico.id}
            className="flex-shrink-0 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-teal-200 transition-all flex flex-col"
            style={{ width: 216, scrollSnapAlign: 'start' }}
          >
            {/* Foto retangular no topo */}
            <div className="relative w-full bg-gray-100" style={{ height: 160 }}>
              {medico.foto_url ? (
                <Image
                  src={medico.foto_url}
                  alt={medico.nome}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-teal-50">
                  <UserCircle size={64} className="text-teal-200" />
                </div>
              )}
              {/* Gradiente inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Info */}
            <div className="px-4 pb-4 flex flex-col gap-2 flex-1">
              <div>
                <p className="font-bold text-slate-800 text-sm leading-tight">{medico.nome}</p>
                <p className="text-teal-600 text-xs mt-0.5">{medico.titulo}</p>
                {medico.crm && (
                  <p className="text-gray-400 text-xs">CRM {medico.crm}</p>
                )}
              </div>

              {medico.especialidades && medico.especialidades.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {medico.especialidades.slice(0, 2).map((esp) => (
                    <span
                      key={esp}
                      className="bg-teal-50 text-teal-700 text-xs px-2 py-0.5 rounded-full border border-teal-100"
                    >
                      {esp}
                    </span>
                  ))}
                </div>
              )}

              {medico.convenios && medico.convenios.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {medico.convenios.map((conv) => (
                    <span key={conv} className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                      {conv}
                    </span>
                  ))}
                </div>
              )}

              {medico.agendamento_url && (
                <a
                  href={medico.agendamento_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors"
                >
                  <CalendarCheck size={13} />
                  Agendar Consulta
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}
