import { NextRequest, NextResponse } from 'next/server'
import { validateUser } from '@/lib/users'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    console.log('[v0] Login attempt:', { username, password })

    const user = validateUser(username, password)
    
    console.log('[v0] User validation result:', user)

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário ou senha inválidos' },
        { status: 401 }
      )
    }

    // Criar sessão usando cookies
    const cookieStore = await cookies()
    cookieStore.set('auth-token', Buffer.from(username).toString('base64'), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: '/' // Adicionando path explícito
    })
    
    console.log('[v0] Cookie set successfully')

    return NextResponse.json({ success: true, user: { username: user.username, name: user.name } })
  } catch (error) {
    console.error('[v0] Login error:', error)
    return NextResponse.json(
      { error: 'Erro ao processar login' },
      { status: 500 }
    )
  }
}
