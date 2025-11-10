import '../globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'EnjoyMagnets',
  description: 'Storefront',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='it'>
      <body className='min-h-screen bg-white text-slate-900 antialiased'>
        {children}
      </body>
    </html>
  )
}
