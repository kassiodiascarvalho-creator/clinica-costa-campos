import { MapPin, Clock, Phone, Instagram } from 'lucide-react'

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
    <section className="bg-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Onde nos encontrar</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {locais.map((local) => (
            <div
              key={local.nome}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-4"
            >
              <h3 className="text-lg font-bold text-teal-400">{local.nome}</h3>

              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <span>{local.endereco}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Clock size={16} className="text-teal-500 flex-shrink-0" />
                <span>{local.horario}</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-700">
                {local.whatsapp && (
                  <a
                    href={`https://wa.me/${local.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    <Phone size={14} />
                    WhatsApp
                  </a>
                )}

                {local.instagram && (
                  <a
                    href={local.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    <Instagram size={14} />
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
