export const runtime = "nodejs"

export async function GET() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  })
}

export async function HEAD() {
  return new Response(null, { status: 200 })
}
