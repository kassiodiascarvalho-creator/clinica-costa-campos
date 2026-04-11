import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gray-50 overflow-hidden" style={{ minHeight: 280 }}>
      {/* Bloco verde com clip diagonal */}
      <div
        className="absolute inset-0 brand-gradient hero-clip"
        aria-hidden="true"
      />

      {/* Imagem da clínica no bloco verde */}
      <div
        className="absolute inset-0 hero-clip overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="https://i.imgur.com/meEgJEA.jpeg"
          alt="Clínica Costa Campos"
          fill
          className="object-cover opacity-40"
          priority
          sizes="70vw"
        />
        {/* Overlay gradiente para manter leitura */}
        <div className="absolute inset-0 brand-gradient opacity-60" />
      </div>

      {/* Conteúdo */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 flex items-center min-h-[280px]">
        <div className="ml-auto max-w-sm text-right">
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A <strong className="text-teal-700">Clínica Costa Campos</strong> tem{' '}
            <strong className="text-teal-700">30 anos de história</strong> na cidade de Itapipoca,
            contando com diversas especialidades médicas e exames clínicos.
          </p>
        </div>
      </div>
    </section>
  )
}
