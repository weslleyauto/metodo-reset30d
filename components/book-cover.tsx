import { Dumbbell, Heart, Sparkles, TrendingDown, Activity, Target } from 'lucide-react'

export function BookCover() {
  return (
    <section id="cover" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-300/10 rounded-full blur-3xl"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-32 right-20 w-32 h-32 border-4 border-white/10 rotate-45"></div>
        <div className="absolute bottom-40 left-16 w-24 h-24 border-4 border-white/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rotate-12"></div>
        
        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="bg-white/15 backdrop-blur-md p-5 rounded-3xl border-2 border-white/30 hover:scale-110 transition-transform shadow-xl">
            <Target className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
          <div className="bg-white/15 backdrop-blur-md p-5 rounded-3xl border-2 border-white/30 hover:scale-110 transition-transform shadow-xl">
            <Activity className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
          <div className="bg-white/15 backdrop-blur-md p-5 rounded-3xl border-2 border-white/30 hover:scale-110 transition-transform shadow-xl">
            <TrendingDown className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
          <div className="bg-white/15 backdrop-blur-md p-5 rounded-3xl border-2 border-white/30 hover:scale-110 transition-transform shadow-xl">
            <Heart className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
        </div>

        <div className="mb-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 mb-6">
            <p className="text-white font-bold text-sm tracking-widest uppercase">Guia Completo de Transformação</p>
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter text-balance drop-shadow-2xl">
          Reset 30D
        </h1>
        
        <div className="h-2 w-32 bg-white/80 mx-auto rounded-full mb-8 shadow-lg"></div>
        
        <p className="text-3xl md:text-5xl text-white font-light mb-12 text-balance leading-tight drop-shadow-lg">
          Um Plano de 30 Dias Para<br />
          <span className="font-bold text-emerald-100">Renovar Corpo, Mente e Hábitos</span>
        </p>

        <div className="bg-white/15 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-emerald-200" />
            <h2 className="text-xl font-bold text-white">O Que Você Vai Conquistar</h2>
            <Sparkles className="w-6 h-6 text-emerald-200" />
          </div>
          <p className="text-lg text-white/95 leading-relaxed text-pretty mb-6">
            O guia completo e profissional para transformar seu corpo com segurança, 
            baseado em ciência e métodos comprovados.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="font-bold text-white mb-1">📋 Cardápios</p>
              <p className="text-white/80 text-xs">Completos e balanceados</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="font-bold text-white mb-1">🍳 Receitas</p>
              <p className="text-white/80 text-xs">Práticas e saborosas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="font-bold text-white mb-1">💪 Treinos</p>
              <p className="text-white/80 text-xs">Para todos os níveis</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-white/20 backdrop-blur-md px-10 py-5 rounded-full border-2 border-white/40 shadow-xl">
            <p className="text-white font-bold text-lg">Por Especialistas em Nutrição e Fitness</p>
          </div>
          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span className="text-sm font-medium">Baseado em Ciência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span className="text-sm font-medium">Resultados Reais</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span className="text-sm font-medium">100% Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
