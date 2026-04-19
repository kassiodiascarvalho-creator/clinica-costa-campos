export default function Hero() {
  const videoId = '0HaDm84zKUI'
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1`

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900"
      style={{ height: 'clamp(320px, 55vw, 580px)' }}
    >
      {/* Vídeo de fundo — técnica cover para 16:9 */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <iframe
          src={src}
          title="Vídeo institucional Clínica Costa Campos"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            /* mantém proporção 16:9 cobrindo o container */
            width: 'max(100%, 177.78vh)',
            height: 'max(100%, 56.25vw)',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Overlay escuro para legibilidade do texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to left, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.15) 100%)',
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
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 flex justify-end">
          <div className="max-w-xs sm:max-w-sm text-right">
            <p className="text-white text-base sm:text-lg leading-relaxed font-light drop-shadow-lg">
              A{' '}
              <strong className="font-bold text-teal-300">
                Clínica Costa Campos
              </strong>{' '}
              tem{' '}
              <strong className="font-bold text-teal-300">
                35 anos de história
              </strong>{' '}
              na cidade de Itapipoca, contando com diversas especialidades
              médicas e exames clínicos.
            </p>
            <a
              href="https://wa.me/558897242827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-7 py-3.5 rounded-full shadow-xl transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
