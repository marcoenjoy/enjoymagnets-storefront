'use client'
import { ReactRuntimeProvider } from '@makeswift/runtime/next'
import type { SiteVersion } from '@makeswift/runtime/next'
import { runtime } from './runtime'

export function MakeswiftProvider({
  children,
  siteVersion,
}: {
  children: React.ReactNode
  siteVersion: SiteVersion | null
}) {
  return <ReactRuntimeProvider runtime={runtime} siteVersion={siteVersion}>{children}</ReactRuntimeProvider>
}
