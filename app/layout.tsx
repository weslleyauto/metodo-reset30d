import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reset 30D – Um Plano de 30 Dias Para Renovar Corpo, Mente e Hábitos',
  description: 'Guia completo de emagrecimento profissional com planos alimentares, receitas, treinos e estratégias psicológicas para transformar seu corpo em 30 dias.',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
