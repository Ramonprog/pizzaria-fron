'use client'

import { AuthProvider } from '@/contexts/AuthContext'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { checkIsPublic } from '@/utils/check-is-public'
import PrivateRoute from '@/components/ui/custom/PrivateRoutes'

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

  const pathName = usePathname()
  const isPublicPage = checkIsPublic(pathName)

  return (
    <html lang="pt-br">
      <body className='bg-zinc-800 text-neutral-50'>
        <AuthProvider>
          {isPublicPage && children}
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
          <Toaster />
        </AuthProvider>
      </body>
    </html >
  )
}
