import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  icons: {
    icon: 'https://i.imgur.com/Z6PPjCL.png',
    apple: 'https://i.imgur.com/Z6PPjCL.png',
  },
  title: 'Clínica Costa Campos | Itapipoca - CE',
  description:
    'Clínica Costa Campos — 30 anos de história em Itapipoca-CE. Especialidades médicas, exames clínicos, Particular e Unimed. Agende sua consulta.',
  keywords: [
    'clínica médica Itapipoca',
    'especialidades médicas Itapipoca',
    'exames clínicos Itapipoca',
    'Unimed Itapipoca',
    'Clínica Costa Campos',
    'médico Itapipoca',
  ],
  openGraph: {
    title: 'Clínica Costa Campos | Itapipoca - CE',
    description: '30 anos cuidando da saúde de Itapipoca e região.',
    url: 'https://clinicacostacampos.com.br',
    siteName: 'Clínica Costa Campos',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
