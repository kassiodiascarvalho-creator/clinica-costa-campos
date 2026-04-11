import { supabase } from '@/lib/supabase'
import DoctorCard from './DoctorCard'
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

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Nossos Profissionais</h2>
        <p className="text-gray-500 mb-8">
          Equipe multidisciplinar com especialistas nas mais diversas áreas da saúde.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {medicos.map((medico) => (
            <DoctorCard key={medico.id} medico={medico} />
          ))}
        </div>
      </div>
    </section>
  )
}
