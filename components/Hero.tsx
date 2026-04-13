import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900" style={{ minHeight: 380 }}>
      {/* Foto da clínica ocupando quase tudo — opacity alta */}
      <Image
        src="https://i.imgur.com/meEgJEA.jpeg"
        alt="Clínica Costa Campos — Itapipoca CE"
        fill
        className="object-cover opacity-90"
        priority
        sizes="100vw"
      />

      {/* Overlay suavíssimo só no lado direito para leitura do texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Faixa teal bem fina na parte inferior — identidade da marca */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 brand-gradient"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 flex items-center min-h-[380px]">
        <div className="ml-auto max-w-md text-right">
          <p className="text-white text-lg sm:text-xl leading-relaxed font-light drop-shadow-md">
            A{' '}
            <strong className="font-bold text-teal-300">
              Clínica Costa Campos
            </strong>{' '}
            tem{' '}
            <strong className="font-bold text-teal-300">
              30 anos de história
            </strong>{' '}
            na cidade de Itapipoca, contando com diversas especialidades médicas
            e exames clínicos.
          </p>
          <a
            href="https://wa.me/5585999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  )
}
