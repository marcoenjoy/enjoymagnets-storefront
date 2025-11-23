import './globals.css'
import type { Metadata } from 'next'
import { getSiteVersion } from '@makeswift/runtime/next/server'
import { MakeswiftProvider } from '../makeswift/provider'

export const metadata: Metadata = {
  title: 'EnjoyMagnets',
  description: 'EnjoyMagnets storefront',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <MakeswiftProvider siteVersion={await getSiteVersion()}>{children}</MakeswiftProvider>
      </body>
    </html>
  )
}
