import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    ok: true,
    route: 'makeswift-version (app/api)',
    timestamp: new Date().toISOString(),
  })
}

export function HEAD() {
  // Health check: basta un 200
  return new Response(null, { status: 200 })
}
