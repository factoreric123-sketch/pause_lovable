import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status,
  })
}

// Simple in-memory rate limit: 3 submissions per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 3
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (rateLimited(ip)) {
    return json({ error: 'Too many messages. Please try again later.' }, 429)
  }

  try {
    const payload = await req.json().catch(() => null)
    const name = typeof payload?.name === 'string' ? payload.name.trim() : ''
    const email = typeof payload?.email === 'string' ? payload.email.trim() : ''
    const message =
      typeof payload?.message === 'string' ? payload.message.trim() : ''

    if (
      !name ||
      name.length > 100 ||
      !EMAIL_RE.test(email) ||
      email.length > 255 ||
      !message ||
      message.length > 2000
    ) {
      return json({ error: 'Invalid submission' }, 400)
    }

    const result = await sendTemplateEmail('contact-message', '', {
      templateData: { name, email, message },
      replyTo: email,
      idempotencyKey: `contact-message-${crypto.randomUUID()}`,
    })

    if (!result.sent) {
      console.warn('Contact notification suppressed')
    }

    return json({ success: true })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error'
    console.error('send-contact-email failed', msg)
    return json({ error: 'Could not send message' }, 500)
  }
})
