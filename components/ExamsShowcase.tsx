const exames = [
  {
    titulo: 'Ultrassonografia',
    descricao: 'Diagnóstico por imagem em tempo real para órgãos abdominais, pélvicos, vasculares e obstétricos.',
    cor: 'from-teal-500 to-teal-700',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Probe body */}
        <rect x="26" y="30" width="12" height="22" rx="3" fill="white" opacity="0.95"/>
        {/* Probe head */}
        <rect x="20" y="22" width="24" height="12" rx="5" fill="white"/>
        {/* Cabo */}
        <line x1="32" y1="52" x2="32" y2="58" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
        {/* Ondas de ultrassom */}
        <path d="M14 18 Q32 10 50 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        <path d="M10 13 Q32 3 54 13" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.35"/>
      </svg>
    ),
  },
  {
    titulo: 'Tomografia',
    descricao: 'Imagens de alta resolução em corte transversal para diagnósticos detalhados e precisos.',
    cor: 'from-slate-600 to-slate-800',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Anel externo do tomógrafo */}
        <circle cx="32" cy="32" r="26" stroke="white" strokeWidth="4" opacity="0.9"/>
        {/* Anel interno */}
        <circle cx="32" cy="32" r="17" stroke="white" strokeWidth="2.5" opacity="0.5"/>
        {/* Abertura (maca) */}
        <rect x="6" y="28" width="52" height="8" rx="1" fill="white" opacity="0.12"/>
        {/* Maca */}
        <rect x="14" y="30" width="36" height="4" rx="2" fill="white" opacity="0.8"/>
        {/* Indicadores de escaneamento */}
        <line x1="32" y1="6" x2="32" y2="11" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="32" y1="53" x2="32" y2="58" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="6" y1="32" x2="11" y2="32" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="53" y1="32" x2="58" y2="32" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titulo: 'Mamografia',
    descricao: 'Rastreamento e diagnóstico precoce do câncer de mama com equipamento digital moderno.',
    cor: 'from-pink-500 to-rose-600',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Placa superior */}
        <rect x="12" y="14" width="40" height="8" rx="3" fill="white" opacity="0.95"/>
        {/* Placa inferior */}
        <rect x="12" y="42" width="40" height="8" rx="3" fill="white" opacity="0.95"/>
        {/* Braço vertical esquerdo */}
        <rect x="12" y="22" width="5" height="20" rx="1" fill="white" opacity="0.5"/>
        {/* Área de compressão */}
        <rect x="18" y="24" width="28" height="16" rx="2" fill="white" opacity="0.18"/>
        {/* Silhueta mama */}
        <path d="M20 38 Q32 20 44 38" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.3" strokeLinecap="round"/>
        {/* Seta de compressão */}
        <line x1="32" y1="12" x2="32" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <line x1="32" y1="52" x2="32" y2="56" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    titulo: 'Raio X',
    descricao: 'Exame rápido e eficiente para avaliação óssea, pulmonar e de estruturas internas.',
    cor: 'from-blue-500 to-blue-700',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Moldura do filme */}
        <rect x="10" y="6" width="44" height="52" rx="3" stroke="white" strokeWidth="2.5" opacity="0.9"/>
        {/* Costelas esquerda */}
        <path d="M22 20 Q18 24 20 28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.85"/>
        <path d="M22 27 Q17 31 19 36" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.75"/>
        <path d="M22 34 Q17 38 20 43" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
        {/* Costelas direita */}
        <path d="M42 20 Q46 24 44 28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.85"/>
        <path d="M42 27 Q47 31 45 36" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.75"/>
        <path d="M42 34 Q47 38 44 43" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
        {/* Coluna vertebral */}
        <rect x="30" y="16" width="4" height="34" rx="2" fill="white" opacity="0.8"/>
        {/* Pulmões */}
        <path d="M22 18 Q22 36 28 40 L28 18 Q26 16 22 18Z" fill="white" opacity="0.2"/>
        <path d="M42 18 Q42 36 36 40 L36 18 Q38 16 42 18Z" fill="white" opacity="0.2"/>
      </svg>
    ),
  },
  {
    titulo: 'Densitometria Óssea',
    descricao: 'Avaliação da densidade mineral óssea para prevenção e diagnóstico da osteoporose.',
    cor: 'from-amber-500 to-orange-600',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Osso longo — formato clássico */}
        {/* Epífise superior esquerda */}
        <circle cx="18" cy="14" r="7" fill="white" opacity="0.9"/>
        {/* Epífise superior direita */}
        <circle cx="46" cy="14" r="7" fill="white" opacity="0.9"/>
        {/* Diáfise (corpo) */}
        <rect x="26" y="10" width="12" height="44" rx="4" fill="white" opacity="0.9"/>
        {/* Epífise inferior esquerda */}
        <circle cx="18" cy="50" r="7" fill="white" opacity="0.9"/>
        {/* Epífise inferior direita */}
        <circle cx="46" cy="50" r="7" fill="white" opacity="0.9"/>
        {/* Traço interno (medula) */}
        <rect x="29" y="18" width="6" height="28" rx="3" fill="white" opacity="0.3"/>
      </svg>
    ),
  },
  {
    titulo: 'Ecocardiograma',
    descricao: 'Ultrassom do coração que avalia estrutura e função cardíaca com precisão.',
    cor: 'from-red-500 to-red-700',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Coração */}
        <path d="M32 52 C32 52 8 36 8 22 C8 14 14 10 20 10 C25 10 29 13 32 17 C35 13 39 10 44 10 C50 10 56 14 56 22 C56 36 32 52 32 52Z" fill="white" opacity="0.9"/>
        {/* Linha de ECG sobre o coração */}
        <path d="M14 30 L20 30 L23 22 L27 38 L31 26 L34 30 L38 30 L41 25 L44 30 L50 30" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    titulo: 'Eletrocardiograma',
    descricao: 'Registro da atividade elétrica do coração para detecção de arritmias e cardiopatias.',
    cor: 'from-violet-500 to-violet-700',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Papel de ECG — fundo */}
        <rect x="8" y="12" width="48" height="40" rx="4" fill="white" opacity="0.15"/>
        {/* Grade leve */}
        <line x1="8" y1="32" x2="56" y2="32" stroke="white" strokeWidth="1" opacity="0.3"/>
        <line x1="22" y1="12" x2="22" y2="52" stroke="white" strokeWidth="1" opacity="0.2"/>
        <line x1="36" y1="12" x2="36" y2="52" stroke="white" strokeWidth="1" opacity="0.2"/>
        <line x1="50" y1="12" x2="50" y2="52" stroke="white" strokeWidth="1" opacity="0.2"/>
        {/* Traçado ECG */}
        <path
          d="M8 32 L16 32 L20 32 L23 20 L26 44 L29 28 L32 28 L35 16 L38 48 L41 32 L44 32 L56 32"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    titulo: 'Exames Laboratoriais',
    descricao: 'Ampla gama de análises clínicas realizadas com tecnologia e rigor científico.',
    cor: 'from-emerald-500 to-emerald-700',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Tubo de ensaio */}
        <rect x="26" y="8" width="12" height="34" rx="3" fill="white" opacity="0.9"/>
        {/* Fundo arredondado do tubo */}
        <path d="M26 42 Q26 54 32 54 Q38 54 38 42" fill="white" opacity="0.9"/>
        {/* Líquido interno */}
        <rect x="27" y="34" width="10" height="10" fill="white" opacity="0.35"/>
        <path d="M27 44 Q27 53 32 53 Q37 53 37 44" fill="white" opacity="0.35"/>
        {/* Marcações laterais */}
        <line x1="26" y1="20" x2="22" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <line x1="26" y1="28" x2="22" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <line x1="26" y1="36" x2="22" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        {/* Tampa/rolha */}
        <rect x="24" y="6" width="16" height="5" rx="2" fill="white" opacity="0.7"/>
        {/* Bolhinhas (reação) */}
        <circle cx="30" cy="46" r="1.5" fill="#10b981" opacity="0.8"/>
        <circle cx="34" cy="43" r="1" fill="#10b981" opacity="0.7"/>
        <circle cx="32" cy="49" r="1" fill="#10b981" opacity="0.6"/>
      </svg>
    ),
  },
]

export default function ExamsShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Exames e Procedimentos</h2>
        <p className="text-gray-500 text-sm sm:text-base mb-10">
          Contamos com estrutura completa para diagnóstico por imagem e análises clínicas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {exames.map((exame) => (
            <div
              key={exame.titulo}
              className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              {/* Área colorida com ícone */}
              <div
                className={`bg-gradient-to-br ${exame.cor} flex items-center justify-center`}
                style={{ height: 140 }}
              >
                {exame.icon}
              </div>

              {/* Texto */}
              <div className="p-5 bg-white">
                <p className="font-bold text-slate-800 text-base">{exame.titulo}</p>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{exame.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
