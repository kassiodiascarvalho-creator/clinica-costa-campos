import Link from 'next/link'
import { Cross, Microscope, Phone } from 'lucide-react'

const items = [
  {
    href: '/especialidades',
    icon: Cross,
    label: 'Especialidades Médicas',
  },
  {
    href: '/exames',
    icon: Microscope,
    label: 'Exames',
  },
  {
    href: 'https://wa.me/558897242827',
    icon: Phone,
    label: 'Agende sua Consulta',
    external: true,
  },
]

export default function QuickAccess() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item) => {
            const Icon = item.icon
            const Tag = item.external ? 'a' : Link
            const extraProps = item.external
              ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: item.href }

            return (
              <Tag
                key={item.label}
                {...(extraProps as { href: string })}
                className="flex items-center gap-5 bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-teal-300 rounded-2xl px-6 py-6 transition-all group"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center">
                  <Icon size={24} className="text-teal-600" />
                </span>
                <span className="text-teal-700 font-semibold text-base">{item.label}</span>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
