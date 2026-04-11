import { supabase } from '@/lib/supabase'
import DoctorCard from '@/components/DoctorCard'
import type { Medico } from '@/lib/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Especialidades Médicas | Clínica Costa Campos',
  description:
    'Conheça todas as especialidades médicas disponíveis na Clínica Costa Campos em Itapipoca-CE: Ginecologia, Cardiologia, Neurologia, Pediatria e muito mais.',
}

async function getMedicos(): Promise<Medico[]> {
  const { data, error } = await supabase
    .from('medicos')
    .select('*')
    .eq('ativo', true)
    .order('ordem')

  if (error || !data) return []
  return data as Medico[]
}

export default async function EspecialidadesPage() {
  const medicos = await getMedicos()

  // Agrupar por especialidade
  const especialidadesMap: Record<string, Medico[]> = {}
  for (const medico of medicos) {
    const esps = medico.especialidades?.length > 0 ? medico.especialidades : ['Outros']
    for (const esp of esps) {
      if (!especialidadesMap[esp]) especialidadesMap[esp] = []
      // Evitar duplicar médico em múltiplas especialidades na listagem geral
      if (!especialidadesMap[esp].find((m) => m.id === medico.id)) {
        especialidadesMap[esp].push(medico)
      }
    }
  }

  const especialidades = Object.keys(especialidadesMap).sort()

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Especialidades Médicas</h1>
      <p className="text-gray-500 mb-10">
        Atendemos Particular e Unimed. Consulte as especialidades disponíveis abaixo.
      </p>

      <div className="space-y-12">
        {especialidades.map((esp) => (
          <section key={esp} id={esp.toLowerCase().replace(/\s/g, '-')}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1 h-7 rounded-full brand-gradient inline-block" />
              <h2 className="text-xl font-semibold text-slate-700">{esp}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {especialidadesMap[esp].map((medico) => (
                <DoctorCard key={`${esp}-${medico.id}`} medico={medico} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
