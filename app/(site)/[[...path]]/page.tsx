// app/(site)/[[...path]]/page.tsx
import { notFound } from 'next/navigation'
import { Page as MakeswiftPage, Makeswift } from '@makeswift/runtime/next'
import { ReactRuntime } from '@makeswift/runtime/react'
import { getSiteVersion } from '@makeswift/runtime/next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

const msRuntime = new ReactRuntime()
const client = new Makeswift(process.env.MAKESWIFT_SITE_API_KEY ?? '', { runtime: msRuntime })

export default async function Page({ params }: { params: { path?: string[] } }) {
  const path = '/' + (params.path?.join('/') ?? '')
  const snapshot = await client.getPageSnapshot(path, { siteVersion: getSiteVersion() })
  if (snapshot == null) return notFound()
  return <MakeswiftPage snapshot={snapshot} />
}
