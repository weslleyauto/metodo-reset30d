'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, User, BookOpen, Dumbbell, Utensils, Heart, ThumbsUp } from 'lucide-react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()

      if (response.ok) {
        window.location.href = '/'
      } else {
        setError(data.error || 'Usuário ou senha inválidos')
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {/* Ícones de fitness flutuantes */}
        <Dumbbell className="absolute top-10 left-10 w-16 h-16 text-emerald-600 animate-pulse" />
        <Utensils className="absolute top-32 right-20 w-14 h-14 text-teal-600 rotate-12" />
        <Heart className="absolute bottom-40 left-32 w-12 h-12 text-rose-500 animate-bounce" />
        <Dumbbell className="absolute bottom-20 right-40 w-20 h-20 text-emerald-700 -rotate-45" />
        <Utensils className="absolute top-1/2 left-20 w-16 h-16 text-cyan-600 -rotate-12" />
      </div>

      {/* Mockups de depoimentos WhatsApp */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-emerald-100 transform -rotate-2 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-semibold text-sm">
              MS
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">Maria Silva</p>
              <p className="text-xs text-gray-500">há 2 dias</p>
            </div>
          </div>
          <div className="bg-emerald-50 rounded-lg p-3 mb-2">
            <p className="text-sm text-gray-800">Gente, perdi 8kg em 30 dias com o Reset 30D! Estou impressionada, método incrível! 🎉</p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-600">
              <ThumbsUp className="w-3 h-3" /> 7
            </span>
            <span className="flex items-center gap-1 text-rose-500">
              <Heart className="w-3 h-3 fill-current" /> 5
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-8 hidden lg:block">
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-teal-100 transform rotate-2 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
              JP
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">João Pedro</p>
              <p className="text-xs text-gray-500">há 1 semana</p>
            </div>
          </div>
          <div className="bg-teal-50 rounded-lg p-3 mb-2">
            <p className="text-sm text-gray-800">Melhor investimento que fiz! Eliminei 12kg e ganhei muito mais disposição 💪</p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-600">
              <ThumbsUp className="w-3 h-3" /> 14
            </span>
            <span className="flex items-center gap-1 text-rose-500">
              <Heart className="w-3 h-3 fill-current" /> 9
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-12 hidden xl:block">
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-cyan-100 transform -rotate-3 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
              AP
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">Ana Paula</p>
              <p className="text-xs text-gray-500">há 3 dias</p>
            </div>
          </div>
          <div className="bg-cyan-50 rounded-lg p-3 mb-2">
            <p className="text-sm text-gray-800">Consegui entrar naquele vestido que não cabia mais! Reset 30D é vida ✨❤️</p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-600">
              <ThumbsUp className="w-3 h-3" /> 9
            </span>
            <span className="flex items-center gap-1 text-rose-500">
              <Heart className="w-3 h-3 fill-current" /> 8
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-40 left-12 hidden xl:block">
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-emerald-100 transform rotate-1 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-semibold text-sm">
              CM
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">Carlos Mendes</p>
              <p className="text-xs text-gray-500">há 5 dias</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-3 mb-2">
            <p className="text-sm text-gray-800">10kg a menos e muita autoestima! Método simples e eficaz de seguir 🔥</p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-600">
              <ThumbsUp className="w-3 h-3" /> 6
            </span>
            <span className="flex items-center gap-1 text-rose-500">
              <Heart className="w-3 h-3 fill-current" /> 4
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-32 hidden 2xl:block">
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-purple-100 transform rotate-3 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-semibold text-sm">
              JC
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">Juliana Costa</p>
              <p className="text-xs text-gray-500">há 4 dias</p>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 mb-2">
            <p className="text-sm text-gray-800">Achei que não ia conseguir, mas o Reset 30D mudou minha vida! -6kg ❤️</p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-600">
              <ThumbsUp className="w-3 h-3" /> 8
            </span>
            <span className="flex items-center gap-1 text-rose-500">
              <Heart className="w-3 h-3 fill-current" /> 6
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/2 left-40 hidden 2xl:block">
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-orange-100 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-semibold text-sm">
              RS
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">Rafael Santos</p>
              <p className="text-xs text-gray-500">há 1 dia</p>
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-3 mb-2">
            <p className="text-sm text-gray-800">Perdi 9kg e finalmente consegui ver meu shape! Reset 30D é top demais 💯</p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-600">
              <ThumbsUp className="w-3 h-3" /> 10
            </span>
            <span className="flex items-center gap-1 text-rose-500">
              <Heart className="w-3 h-3 fill-current" /> 7
            </span>
          </div>
        </div>
      </div>

      {/* Card de login - agora com z-index maior */}
      <Card className="w-full max-w-md shadow-2xl border-0 relative z-10 bg-white/95 backdrop-blur-sm mb-8">
        <CardHeader className="space-y-4 text-center pb-8">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Reset 30D
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Acesse o eBook completo para transformar seu corpo e mente
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Usuário</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Digite seu usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Acessar eBook'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>🔒 Acesso restrito a usuários autorizados</p>
          </div>
        </CardContent>
      </Card>

      <div className="relative z-10 text-center">
        <p className="text-lg md:text-xl font-semibold text-gray-700 italic">
          "O melhor dia para começar foi ontem. O segundo melhor dia é hoje."
        </p>
        <p className="text-sm text-gray-500 mt-2">Não deixe para amanhã a transformação que você pode começar agora</p>
      </div>
    </div>
  )
}
