export const dynamic = 'force-dynamic'

import { supabase } from '@/lib/supabase'
import type { Exame } from '@/lib/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exames Clínicos | Clínica Costa Campos',
  description:
    'Tabela completa de exames da Clínica Costa Campos: Ultrassom, Tomografia, Raio X, Eletrocardiograma, Mamografia e muito mais. Atendemos Particular e Unimed em Itapipoca-CE.',
}

const CATEGORIA_ORDER = [
  'Ultrassom',
  'Tomografia',
  'Raio X',
  'Cardiologia',
  'Outros',
]

async function getExames(): Promise<Exame[]> {
  const { data, error } = await supabase
    .from('exames')
    .select('*')
    .eq('ativo', true)
    .order('categoria')
    .order('nome')

  if (error || !data) return []
  return data as Exame[]
}

export default async function ExamesPage() {
  const exames = await getExames()

  const porCategoria: Record<string, Exame[]> = {}
  for (const exame of exames) {
    if (!porCategoria[exame.categoria]) porCategoria[exame.categoria] = []
    porCategoria[exame.categoria].push(exame)
  }

  const categorias = [
    ...CATEGORIA_ORDER.filter((c) => porCategoria[c]),
    ...Object.keys(porCategoria).filter((c) => !CATEGORIA_ORDER.includes(c)).sort(),
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Exames Clínicos</h1>
      <p className="text-gray-500 mb-4">
        Atendemos Particular e Unimed. Valores sujeitos a alteração — consulte sempre na recepção.
      </p>

      {/* Índice rápido */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categorias.map((cat) => (
          <a
            key={cat}
            href={`#${cat.toLowerCase().replace(/\s/g, '-')}`}
            className="bg-teal-50 hover:bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1.5 rounded-full border border-teal-200 transition-colors"
          >
            {cat}
          </a>
        ))}
      </div>

      <div className="space-y-10">
        {categorias.map((cat) => (
          <section key={cat} id={cat.toLowerCase().replace(/\s/g, '-')}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-7 rounded-full brand-gradient inline-block" />
              <h2 className="text-xl font-semibold text-slate-700">{cat}</h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-5 py-3 text-gray-600 font-semibold">Exame</th>
                    <th className="text-left px-5 py-3 text-gray-600 font-semibold w-32">Valor</th>
                    <th className="text-left px-5 py-3 text-gray-600 font-semibold w-48">Convênios</th>
                  </tr>
                </thead>
                <tbody>
                  {porCategoria[cat].map((exame, idx) => (
                    <tr
                      key={exame.id}
                      className={`border-b border-gray-100 last:border-0 ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-5 py-3.5 text-slate-700">{exame.nome}</td>
                      <td className="px-5 py-3.5 text-teal-700 font-medium">
                        {exame.valor
                          ? `R$ ${exame.valor.toFixed(2).replace('.', ',')}`
                          : <span className="text-gray-400 text-xs">Consultar</span>
                        }
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex flex-wrap gap-1">
                          {exame.convenios?.map((conv) => (
                            <span
                              key={conv}
                              className="bg-teal-50 text-teal-700 text-xs px-2 py-0.5 rounded-full border border-teal-100"
                            >
                              {conv}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
