import { MapPin, Clock, Phone } from 'lucide-react'

const ENDERECO = 'R. João Araújo Teixeira Alves, 188 - Fazendinha, Itapipoca - CE, 62502-260'
const HORARIO = 'Segunda a Sexta: 7h às 17h'

const locais = [
  {
    nome: 'Clínica Costa Campos',
    endereco: ENDERECO,
    horario: HORARIO,
    whatsapp: '558897242827',
    instagram: 'https://www.instagram.com/clinicacostacampos',
    instagramLabel: '@clinicacostacampos',
  },
  {
    nome: 'Laboratório Vida Itapipoca',
    endereco: ENDERECO,
    horario: HORARIO,
    whatsapp: null,
    instagram: null,
    instagramLabel: null,
  },
]

export default function LocationCards() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
          Onde nos encontrar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {locais.map((local) => (
            <div
              key={local.nome}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-7 sm:p-8 flex flex-col gap-5"
            >
              <h3 className="text-xl font-bold text-teal-400">{local.nome}</h3>

              <div className="flex items-start gap-4 text-gray-300 text-sm sm:text-base">
                <MapPin size={18} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{local.endereco}</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300 text-sm sm:text-base">
                <Clock size={18} className="text-teal-500 flex-shrink-0" />
                <span>{local.horario}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-700">
                {local.whatsapp && (
                  <a
                    href={`https://wa.me/${local.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
                  >
                    <Phone size={16} />
                    WhatsApp
                  </a>
                )}

                {local.instagram && (
                  <a
                    href={local.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    {local.instagramLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
