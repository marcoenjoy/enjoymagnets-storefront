import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    ok: true,
    route: 'makeswift-version',
    timestamp: new Date().toISOString(),
  })
}

export function HEAD() {
  // Usato dai curl -I / health check: basta che risponda 200
  return new Response(null, { status: 200 })
}
