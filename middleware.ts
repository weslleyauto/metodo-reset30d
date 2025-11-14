import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')
  const isLoginPage = request.nextUrl.pathname === '/login'
  const isApiAuth = request.nextUrl.pathname.startsWith('/api/auth')

  // Se está tentando acessar a página de login ou API de auth, permite
  if (isLoginPage || isApiAuth) {
    return NextResponse.next()
  }

  // Se não tem token e não está na página de login, redireciona
  if (!authToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)']
}
