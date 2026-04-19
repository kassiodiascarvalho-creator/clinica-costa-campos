import { supabase } from '@/lib/supabase'
import type { Medico } from '@/lib/types'
import DoctorCarouselClient from './DoctorCarouselClient'

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
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Nossos Profissionais</h2>
        <p className="text-gray-500 text-sm sm:text-base mb-8">
          Equipe multidisciplinar com especialistas nas mais diversas áreas da saúde.
        </p>
        <DoctorCarouselClient medicos={medicos} />
      </div>
    </section>
  )
}
