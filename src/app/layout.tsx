import { AuthProvider } from '@/contexts/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fratelli Pizzaria',
  description: 'A melhor pizza do vale',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-zinc-800 text-neutral-50'>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html >
  )
}
