import '../globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'EnjoyMagnets',
  description: 'Storefront',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        <main className="container mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  )
}
