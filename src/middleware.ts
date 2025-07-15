import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/auth'

// Define protected routes
const protectedRoutes = ['/dashboard', '/profile/edit']
const authRoutes = ['/login', '/register']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
  const isAuthRoute = authRoutes.includes(path)

  // Get session from cookies
  const cookie = req.cookies.get('session')?.value
  const session = cookie ? await decrypt(cookie) : null

  // Redirect to login if accessing protected route without session
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // Redirect to dashboard if accessing auth routes with valid session
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
