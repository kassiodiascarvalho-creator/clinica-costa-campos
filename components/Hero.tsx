import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900" style={{ height: 420 }}>
      {/* Foto da clínica cobrindo 100% da largura */}
      <Image
        src="https://i.imgur.com/NzQN4di.png"
        alt="Clínica Costa Campos — Itapipoca CE"
        fill
        className="object-cover object-center opacity-90"
        priority
        sizes="100vw"
      />

      {/* Overlay escuro suave só no lado direito para leitura do texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to left, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.20) 55%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Faixa teal fina na base */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 brand-gradient"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex justify-end">
          <div className="max-w-sm text-right">
            <p className="text-white text-base sm:text-lg leading-relaxed font-light drop-shadow-md">
              A{' '}
              <strong className="font-bold text-teal-300">
                Clínica Costa Campos
              </strong>{' '}
              tem{' '}
              <strong className="font-bold text-teal-300">
                30 anos de história
              </strong>{' '}
              na cidade de Itapipoca, contando com diversas especialidades
              médicas e exames clínicos.
            </p>
            <a
              href="https://wa.me/558897242827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
