import { Activity, Heart, Zap, Microscope, Shield, Eye, Waves } from 'lucide-react'

const exames = [
  {
    titulo: 'Ultrassonografia',
    descricao: 'Diagnóstico por imagem em tempo real para órgãos abdominais, pélvicos, vasculares e obstétricos.',
    icon: Waves,
    cor: 'from-teal-500 to-teal-700',
  },
  {
    titulo: 'Tomografia',
    descricao: 'Imagens de alta resolução em corte transversal para diagnósticos detalhados e precisos.',
    icon: Eye,
    cor: 'from-slate-600 to-slate-800',
  },
  {
    titulo: 'Mamografia',
    descricao: 'Rastreamento e diagnóstico precoce do câncer de mama com equipamento digital moderno.',
    icon: Heart,
    cor: 'from-pink-500 to-rose-600',
  },
  {
    titulo: 'Raio X',
    descricao: 'Exame rápido e eficiente para avaliação óssea, pulmonar e de estruturas internas.',
    icon: Zap,
    cor: 'from-blue-500 to-blue-700',
  },
  {
    titulo: 'Densitometria Óssea',
    descricao: 'Avaliação da densidade mineral óssea para prevenção e diagnóstico da osteoporose.',
    icon: Shield,
    cor: 'from-amber-500 to-orange-600',
  },
  {
    titulo: 'Ecocardiograma',
    descricao: 'Ultrassom do coração que avalia a estrutura e função cardíaca com precisão.',
    icon: Activity,
    cor: 'from-red-500 to-red-700',
  },
  {
    titulo: 'Eletrocardiograma',
    descricao: 'Registro da atividade elétrica do coração para detecção de arritmias e cardiopatias.',
    icon: Activity,
    cor: 'from-violet-500 to-violet-700',
  },
  {
    titulo: 'Exames Laboratoriais',
    descricao: 'Ampla gama de análises clínicas realizadas com tecnologia e rigor científico.',
    icon: Microscope,
    cor: 'from-emerald-500 to-emerald-700',
  },
]

export default function ExamsShowcase() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Exames e Procedimentos</h2>
        <p className="text-gray-500 text-sm mb-8">
          Contamos com estrutura completa para diagnóstico por imagem e análises clínicas.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {exames.map((exame) => {
            const Icon = exame.icon
            return (
              <div
                key={exame.titulo}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                {/* Imagem / ícone colorido */}
                <div className={`bg-gradient-to-br ${exame.cor} flex items-center justify-center`} style={{ height: 120 }}>
                  <Icon size={44} className="text-white opacity-90" />
                </div>

                {/* Texto */}
                <div className="p-4 bg-white">
                  <p className="font-semibold text-slate-800 text-sm">{exame.titulo}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{exame.descricao}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
