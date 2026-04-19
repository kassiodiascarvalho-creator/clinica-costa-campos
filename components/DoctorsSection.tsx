import Image from 'next/image'
import { UserCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import type { Medico } from '@/lib/types'

async function getMedicos(): Promise<Medico[]> {
  const { data, error } = await supabase
    .from('medicos')
    .select('*')
    .eq('ativo', true)
    .order('ordem')

  if (error || !data) return []
  return data as Medico[]
}

export default async function DoctorsSection() {
  const medicos = await getMedicos()

  if (medicos.length === 0) return null

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Nossos Profissionais</h2>
        <p className="text-gray-500 text-sm mb-6">
          Equipe multidisciplinar com especialistas nas mais diversas áreas da saúde.
        </p>

        {/* Carrossel horizontal */}
        <div
          className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {medicos.map((medico) => (
            <div
              key={medico.id}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3 hover:shadow-md hover:border-teal-200 transition-all"
              style={{ width: 200, scrollSnapAlign: 'start' }}
            >
              {/* Foto */}
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-teal-100 flex-shrink-0 mx-auto">
                {medico.foto_url ? (
                  <Image
                    src={medico.foto_url}
                    alt={medico.nome}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <UserCircle size={36} className="text-teal-300" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="font-semibold text-slate-800 text-sm leading-tight">{medico.nome}</p>
                <p className="text-teal-600 text-xs mt-0.5">{medico.titulo}</p>
                {medico.crm && (
                  <p className="text-gray-400 text-xs mt-0.5">CRM {medico.crm}</p>
                )}
              </div>

              {/* Especialidades */}
              {medico.especialidades && medico.especialidades.length > 0 && (
                <div className="flex flex-wrap gap-1 justify-center">
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

              {/* Convênios */}
              {medico.convenios && medico.convenios.length > 0 && (
                <div className="flex flex-wrap gap-1 justify-center pt-1 border-t border-gray-100">
                  {medico.convenios.map((conv) => (
                    <span
                      key={conv}
                      className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full"
                    >
                      {conv}
                    </span>
                  ))}
                </div>
              )}

              {/* Botão agendar */}
              {medico.agendamento_url && (
                <a
                  href={medico.agendamento_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-center text-xs font-semibold bg-teal-500 hover:bg-teal-400 text-white px-3 py-2 rounded-lg transition-colors"
                >
                  Agendar
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
