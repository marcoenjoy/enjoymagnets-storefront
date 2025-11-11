// app/(site)/[[...path]]/page.tsx
import { notFound } from 'next/navigation'
import { Page as MakeswiftPage, Makeswift } from '@makeswift/runtime/next'
import { ReactRuntime } from '@makeswift/runtime/react'
import { getSiteVersion } from '@makeswift/runtime/next/server'

const runtime = new ReactRuntime()
const client = new Makeswift(process.env.MAKESWIFT_SITE_API_KEY ?? '', { runtime })

export async function generateStaticParams() {
  const pages = await client.getPages().toArray()
  return pages.map(p => ({ path: p.path.split('/').filter(Boolean) }))
}

export default async function Page({ params }: { params: { path?: string[] } }) {
  const path = '/' + (params.path?.join('/') ?? '')
  const snapshot = await client.getPageSnapshot(path, { siteVersion: getSiteVersion() })
  if (snapshot == null) return notFound()
  return <MakeswiftPage snapshot={snapshot} />
}
