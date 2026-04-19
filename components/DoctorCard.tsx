import Image from 'next/image'
import { UserCircle, CalendarCheck } from 'lucide-react'
import type { Medico } from '@/lib/types'

interface Props {
  medico: Medico
}

export default function DoctorCard({ medico }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md hover:border-teal-200 transition-all">
      {/* Foto + nome */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-teal-100">
          {medico.foto_url ? (
            <Image
              src={medico.foto_url}
              alt={medico.nome}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <UserCircle size={48} className="text-teal-300" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-800 text-base leading-tight">{medico.nome}</h3>
          <p className="text-teal-600 text-sm mt-0.5">{medico.titulo}</p>
          {medico.crm && (
            <p className="text-gray-400 text-xs mt-0.5">CRM {medico.crm}</p>
          )}
        </div>
      </div>

      {/* Especialidades */}
      {medico.especialidades && medico.especialidades.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {medico.especialidades.map((esp) => (
            <span
              key={esp}
              className="bg-teal-50 text-teal-700 text-xs font-medium px-2.5 py-1 rounded-full border border-teal-100"
            >
              {esp}
            </span>
          ))}
        </div>
      )}

      {/* Rodapé: convênios */}
      {medico.convenios && medico.convenios.length > 0 && (
        <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
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

      {/* Botão de agendamento — só exibe se tiver link */}
      {medico.agendamento_url && (
        <a
          href={medico.agendamento_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <CalendarCheck size={16} />
          Agendar Consulta
        </a>
      )}
    </div>
  )
}
