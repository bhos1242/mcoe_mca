import bcrypt from 'bcryptjs'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const secretKey = process.env.JWT_SECRET || 'your-secret-key'
const key = new TextEncoder().encode(secretKey)

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function createSession(userId: string, email: string) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
  const session = await encrypt({ userId, email, expires })

  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (!session) return

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const res = new Response(null, {
    status: 200,
    headers: { 'Set-Cookie': `session=${await encrypt(parsed)}; Path=/; HttpOnly` },
  })
  return res
}
