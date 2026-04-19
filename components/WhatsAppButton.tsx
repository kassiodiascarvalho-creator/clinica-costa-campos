'use client'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/558897242827"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl"
      style={{ boxShadow: '0 0 0 0 rgba(34,197,94,0.7)' }}
    >
      {/* Anel de pulso */}
      <span
        className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75"
        style={{ animation: 'whatsapp-ping 1.4s cubic-bezier(0,0,0.2,1) infinite' }}
      />
      {/* Ícone WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="relative w-8 h-8 fill-white"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.785 1.82 6.77L2 30l7.43-1.793A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.893-1.608l-.422-.25-4.41 1.064 1.1-4.296-.277-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.34-8.64c-.347-.174-2.055-1.013-2.374-1.129-.32-.116-.552-.174-.784.174-.232.347-.9 1.129-1.103 1.36-.203.232-.406.26-.753.087-.347-.174-1.465-.54-2.79-1.72-1.031-.92-1.727-2.055-1.93-2.402-.203-.347-.022-.535.153-.708.157-.155.347-.406.52-.609.174-.203.232-.347.347-.579.116-.232.058-.435-.029-.609-.087-.174-.784-1.89-1.074-2.588-.283-.678-.57-.586-.784-.597l-.668-.011c-.232 0-.609.087-.927.435-.32.347-1.22 1.19-1.22 2.903s1.25 3.366 1.423 3.598c.174.232 2.46 3.756 5.96 5.268.833.36 1.483.575 1.99.736.836.266 1.597.228 2.199.138.671-.1 2.055-.84 2.346-1.652.29-.812.29-1.508.203-1.652-.087-.145-.319-.232-.667-.406z" />
      </svg>

      <style>{`
        @keyframes whatsapp-ping {
          0%   { transform: scale(1);   opacity: 0.75; }
          70%  { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </a>
  )
}
