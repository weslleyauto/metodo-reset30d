'use client'

import { useState } from 'react'
import { ChapterLayout } from './chapter-layout'
import { Dumbbell, Clock, Zap, Heart, Footprints, Activity, Flame, Target, Timer, Bike, Droplets, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const workoutPlans = [
  {
    level: 'Iniciante',
    duration: '10-15 minutos/dia',
    description: 'Perfeito para quem está começando ou é sedentário',
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/50',
    weekPlan: [
      {
        day: 'Segunda-feira',
        focus: 'Corpo todo leve',
        exercises: [
          { name: 'Alongamento geral', icon: Activity, duration: '5 min', type: 'Aquecimento' },
          { name: 'Caminhada no lugar', icon: Footprints, duration: '3 min', type: 'Cardio' },
          { name: 'Agachamento livre', icon: Target, duration: '2x10 reps', type: 'Força' },
          { name: 'Flexão de joelhos', icon: Dumbbell, duration: '2x8 reps', type: 'Força' },
          { name: 'Prancha', icon: Timer, duration: '2x15s', type: 'Core' },
        ]
      },
      {
        day: 'Terça-feira',
        focus: 'Cardio leve',
        exercises: [
          { name: 'Aquecimento', icon: Activity, duration: '3 min', type: 'Aquecimento' },
          { name: 'Polichinelo', icon: Zap, duration: '3x20s', type: 'Cardio' },
          { name: 'Elevação de joelhos', icon: Footprints, duration: '2x30s', type: 'Cardio' },
          { name: 'Marcha estacionária', icon: Footprints, duration: '3 min', type: 'Cardio' },
          { name: 'Respiração profunda', icon: Droplets, duration: '2 min', type: 'Desaquecimento' },
        ]
      },
      {
        day: 'Quarta-feira',
        focus: 'Membros superiores',
        exercises: [
          { name: 'Alongamento dinâmico', icon: Activity, duration: '4 min', type: 'Aquecimento' },
          { name: 'Flexão na parede', icon: Dumbbell, duration: '3x8 reps', type: 'Força' },
          { name: 'Elevação lateral de braços', icon: Target, duration: '2x12 reps', type: 'Força' },
          { name: 'Rosca de braço (sem peso)', icon: Dumbbell, duration: '2x15 reps', type: 'Força' },
          { name: 'Alongamento', icon: Activity, duration: '3 min', type: 'Desaquecimento' },
        ]
      },
      {
        day: 'Quinta-feira',
        focus: 'Membros inferiores',
        exercises: [
          { name: 'Aquecimento geral', icon: Activity, duration: '4 min', type: 'Aquecimento' },
          { name: 'Agachamento', icon: Target, duration: '3x12 reps', type: 'Força' },
          { name: 'Avanço alternado', icon: Footprints, duration: '2x10 reps', type: 'Força' },
          { name: 'Elevação de panturrilha', icon: Target, duration: '3x15 reps', type: 'Força' },
          { name: 'Alongamento de pernas', icon: Activity, duration: '3 min', type: 'Desaquecimento' },
        ]
      },
      {
        day: 'Sexta-feira',
        focus: 'Core e finalização',
        exercises: [
          { name: 'Aquecimento', icon: Activity, duration: '3 min', type: 'Aquecimento' },
          { name: 'Prancha frontal', icon: Timer, duration: '3x20s', type: 'Core' },
          { name: 'Prancha lateral', icon: Timer, duration: '2x15s cada', type: 'Core' },
          { name: 'Bicicleta no ar', icon: Bike, duration: '2x20 reps', type: 'Core' },
          { name: 'Caminhada leve', icon: Footprints, duration: '5 min', type: 'Desaquecimento' },
        ]
      },
    ]
  },
  {
    level: 'Intermediário',
    duration: '20-25 minutos/dia',
    description: 'Para quem já tem algum condicionamento físico',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/50',
    weekPlan: [
      {
        day: 'Segunda-feira',
        focus: 'Corpo inteiro',
        exercises: [
          { name: 'Aquecimento dinâmico', icon: Activity, duration: '5 min', type: 'Aquecimento' },
          { name: 'Agachamento', icon: Target, duration: '3x15 reps', type: 'Força' },
          { name: 'Flexão tradicional', icon: Dumbbell, duration: '3x12 reps', type: 'Força' },
          { name: 'Avanço alternado', icon: Footprints, duration: '3x12 reps', type: 'Força' },
          { name: 'Prancha', icon: Timer, duration: '3x30s', type: 'Core' },
          { name: 'Mountain climber', icon: Zap, duration: '3x30s', type: 'Cardio' },
        ]
      },
      {
        day: 'Terça-feira',
        focus: 'Cardio intenso',
        exercises: [
          { name: 'Aquecimento', icon: Activity, duration: '4 min', type: 'Aquecimento' },
          { name: 'Burpee', icon: Flame, duration: '3x10 reps', type: 'Cardio' },
          { name: 'Polichinelo', icon: Zap, duration: '4x40s', type: 'Cardio' },
          { name: 'High knees', icon: Footprints, duration: '4x30s', type: 'Cardio' },
          { name: 'Jump squat', icon: Target, duration: '3x12 reps', type: 'Cardio' },
          { name: 'Desaquecimento', icon: Droplets, duration: '3 min', type: 'Desaquecimento' },
        ]
      },
      {
        day: 'Quarta-feira',
        focus: 'Superiores e core',
        exercises: [
          { name: 'Aquecimento', icon: Activity, duration: '4 min', type: 'Aquecimento' },
          { name: 'Flexão tradicional', icon: Dumbbell, duration: '4x12 reps', type: 'Força' },
          { name: 'Tríceps no chão', icon: Dumbbell, duration: '3x10 reps', type: 'Força' },
          { name: 'Prancha lateral', icon: Timer, duration: '3x30s cada', type: 'Core' },
          { name: 'Bicicleta no ar', icon: Bike, duration: '3x30 reps', type: 'Core' },
          { name: 'Superman', icon: Target, duration: '3x15 reps', type: 'Core' },
        ]
      },
      {
        day: 'Quinta-feira',
        focus: 'Inferiores e glúteos',
        exercises: [
          { name: 'Aquecimento', icon: Activity, duration: '5 min', type: 'Aquecimento' },
          { name: 'Agachamento', icon: Target, duration: '4x15 reps', type: 'Força' },
          { name: 'Avanço', icon: Footprints, duration: '3x12 reps cada', type: 'Força' },
          { name: 'Ponte de glúteo', icon: Target, duration: '4x15 reps', type: 'Força' },
          { name: 'Agachamento sumô', icon: Target, duration: '3x12 reps', type: 'Força' },
          { name: 'Elevação de panturrilha', icon: Target, duration: '3x20 reps', type: 'Força' },
        ]
      },
      {
        day: 'Sexta-feira',
        focus: 'HIIT circuito',
        exercises: [
          { name: 'Aquecimento rápido', icon: Activity, duration: '3 min', type: 'Aquecimento' },
          { name: 'Burpee', icon: Flame, duration: '4x40s', type: 'HIIT' },
          { name: 'Mountain climber', icon: Zap, duration: '4x40s', type: 'HIIT' },
          { name: 'Jump squat', icon: Target, duration: '4x40s', type: 'HIIT' },
          { name: 'Prancha dinâmica', icon: Timer, duration: '3x30s', type: 'HIIT' },
          { name: 'Alongamento', icon: Activity, duration: '5 min', type: 'Desaquecimento' },
        ]
      },
    ]
  },
  {
    level: 'Avançado HIIT',
    duration: '15-20 minutos intensos',
    description: 'Treino intervalado de alta intensidade para máximos resultados',
    color: 'from-red-500/20 to-red-600/20',
    borderColor: 'border-red-500/50',
    weekPlan: [
      {
        day: 'Segunda-feira',
        focus: 'HIIT Full body',
        exercises: [
          { name: 'Aquecimento intenso', icon: Flame, duration: '3 min', type: 'Aquecimento' },
          { name: 'Burpee', icon: Flame, duration: '5x45s (15s rest)', type: 'HIIT' },
          { name: 'Mountain climber', icon: Zap, duration: '5x45s (15s rest)', type: 'HIIT' },
          { name: 'Jump squat', icon: Target, duration: '5x45s (15s rest)', type: 'HIIT' },
          { name: 'Flexão explosiva', icon: Dumbbell, duration: '4x40s (20s rest)', type: 'HIIT' },
          { name: 'Desaquecimento', icon: Droplets, duration: '2 min', type: 'Desaquecimento' },
        ]
      },
      {
        day: 'Terça-feira',
        focus: 'Cardio extremo',
        exercises: [
          { name: 'Aquecimento', icon: Activity, duration: '2 min', type: 'Aquecimento' },
          { name: 'Sprint no lugar', icon: Footprints, duration: '6x30s (20s rest)', type: 'HIIT' },
          { name: 'High knees', icon: Footprints, duration: '6x30s (20s rest)', type: 'HIIT' },
          { name: 'Burpee', icon: Flame, duration: '5x40s (20s rest)', type: 'HIIT' },
          { name: 'Jump lunge', icon: Target, duration: '4x40s (20s rest)', type: 'HIIT' },
          { name: 'Desaquecimento', icon: Droplets, duration: '3 min', type: 'Desaquecimento' },
        ]
      },
      {
        day: 'Quarta-feira',
        focus: 'Core explosivo',
        exercises: [
          { name: 'Aquecimento core', icon: Activity, duration: '3 min', type: 'Aquecimento' },
          { name: 'Prancha dinâmica', icon: Timer, duration: '5x40s (20s rest)', type: 'HIIT' },
          { name: 'V-ups', icon: Bike, duration: '4x15 reps', type: 'Core' },
          { name: 'Russian twist', icon: Bike, duration: '4x30 reps', type: 'Core' },
          { name: 'Mountain climber', icon: Zap, duration: '5x45s (15s rest)', type: 'HIIT' },
          { name: 'Hollow hold', icon: Timer, duration: '3x30s', type: 'Core' },
        ]
      },
      {
        day: 'Quinta-feira',
        focus: 'Inferiores potência',
        exercises: [
          { name: 'Aquecimento', icon: Activity, duration: '3 min', type: 'Aquecimento' },
          { name: 'Jump squat', icon: Target, duration: '5x20 reps', type: 'HIIT' },
          { name: 'Jump lunge', icon: Footprints, duration: '5x16 reps', type: 'HIIT' },
          { name: 'Skater jumps', icon: Zap, duration: '4x40s (20s rest)', type: 'HIIT' },
          { name: 'Box jumps (ou step)', icon: Target, duration: '4x12 reps', type: 'Força' },
          { name: 'Ponte glúteo pulada', icon: Target, duration: '4x15 reps', type: 'Força' },
        ]
      },
      {
        day: 'Sexta-feira',
        focus: 'Finalizador completo',
        exercises: [
          { name: 'Aquecimento rápido', icon: Flame, duration: '2 min', type: 'Aquecimento' },
          { name: 'Burpee + tuck jump', icon: Flame, duration: '4x45s (15s rest)', type: 'HIIT' },
          { name: 'Flexão + knee tuck', icon: Dumbbell, duration: '4x40s (20s rest)', type: 'HIIT' },
          { name: 'Jump squat + punch', icon: Target, duration: '4x45s (15s rest)', type: 'HIIT' },
          { name: 'Prancha superman', icon: Timer, duration: '3x40s (20s rest)', type: 'Core' },
          { name: 'Alongamento profundo', icon: Activity, duration: '5 min', type: 'Desaquecimento' },
        ]
      },
    ]
  },
]

const typeColors = {
  'Aquecimento': 'bg-orange-500/20 text-orange-700 dark:text-orange-300',
  'Cardio': 'bg-red-500/20 text-red-700 dark:text-red-300',
  'Força': 'bg-blue-500/20 text-blue-700 dark:text-blue-300',
  'Core': 'bg-purple-500/20 text-purple-700 dark:text-purple-300',
  'HIIT': 'bg-pink-500/20 text-pink-700 dark:text-pink-300',
  'Desaquecimento': 'bg-green-500/20 text-green-700 dark:text-green-300',
}

export function ChapterWorkouts() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  const togglePlan = (level: string) => {
    setExpandedPlan(expandedPlan === level ? null : level)
  }

  return (
    <ChapterLayout
      id="workouts"
      number="08"
      title="Planos de Treino Semanais"
      subtitle="Escolha seu nível e siga o plano de segunda a sexta-feira"
    >
      <div className="space-y-8">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
          <p className="text-lg leading-relaxed text-pretty">
            O exercício físico acelera o emagrecimento, preserva massa muscular, melhora o humor 
            e aumenta seu metabolismo. <strong>Escolha o nível adequado ao seu condicionamento</strong> e 
            siga o plano semanal completo para resultados consistentes.
          </p>
        </div>

        {workoutPlans.map((plan) => {
          const isExpanded = expandedPlan === plan.level

          return (
            <div key={plan.level} className={`bg-gradient-to-br ${plan.color} border-2 ${plan.borderColor} rounded-2xl overflow-hidden transition-all`}>
              {/* Plan header - clickable */}
              <button
                onClick={() => togglePlan(plan.level)}
                className="w-full p-8 text-left hover:bg-black/5 transition-colors"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-4xl font-bold">{plan.level}</h3>
                      {isExpanded ? (
                        <ChevronUp className="w-8 h-8 text-primary" />
                      ) : (
                        <ChevronDown className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground text-pretty mb-3">{plan.description}</p>
                    <div className="flex gap-3 flex-wrap">
                      <span className="bg-card px-4 py-2 rounded-full font-semibold text-sm border border-border flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {plan.duration}
                      </span>
                      <span className="bg-card px-4 py-2 rounded-full font-semibold text-sm border border-border flex items-center gap-2">
                        <Dumbbell className="w-4 h-4" />
                        5x por semana
                      </span>
                    </div>
                  </div>
                  <div className="text-primary">
                    <Button variant="outline" size="lg" className="font-bold">
                      {isExpanded ? 'Ocultar Plano' : 'Ver Plano Completo'}
                    </Button>
                  </div>
                </div>
              </button>

              {/* Weekly plan - expandable */}
              {isExpanded && (
                <div className="px-8 pb-8 space-y-6 animate-in slide-in-from-top-4">
                  {plan.weekPlan.map((dayPlan, dayIndex) => (
                    <div key={dayIndex} className="bg-card rounded-xl border-2 border-border overflow-hidden">
                      <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-4 border-b border-border">
                        <h4 className="text-2xl font-bold">{dayPlan.day}</h4>
                        <p className="text-muted-foreground font-medium">Foco: {dayPlan.focus}</p>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          {dayPlan.exercises.map((exercise, exIndex) => {
                            const IconComponent = exercise.icon
                            return (
                              <div key={exIndex} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                                <div className="shrink-0">
                                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <IconComponent className="w-6 h-6 text-primary" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="font-bold text-lg">{exercise.name}</div>
                                  <div className="text-muted-foreground">{exercise.duration}</div>
                                </div>
                                <div>
                                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${typeColors[exercise.type as keyof typeof typeColors]}`}>
                                    {exercise.type}
                                  </span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Tips section */}
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Dicas para Este Nível
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Sempre comece com aquecimento e termine com desaquecimento</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Mantenha uma garrafa de água por perto durante o treino</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Se sentir dor (não confunda com desconforto muscular), pare imediatamente</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Respeite os intervalos de descanso indicados</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* Exercise guide section */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            Guia Rápido de Execução
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/30">
              <h4 className="font-bold text-xl mb-3 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Dumbbell className="w-6 h-6" />
                Agachamento
              </h4>
              <p className="text-muted-foreground text-pretty">
                Pés na largura dos ombros, desça como se fosse sentar em uma cadeira, mantendo joelhos alinhados com os pés. 
                Olhe para frente e mantenha as costas retas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/30">
              <h4 className="font-bold text-xl mb-3 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                <Timer className="w-6 h-6" />
                Prancha
              </h4>
              <p className="text-muted-foreground text-pretty">
                Apoie antebraços e pontas dos pés no chão, mantenha o corpo reto como uma tábua. 
                Contraia o abdômen e evite deixar o quadril cair ou subir demais.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-red-500/30">
              <h4 className="font-bold text-xl mb-3 text-red-600 dark:text-red-400 flex items-center gap-2">
                <Flame className="w-6 h-6" />
                Burpee
              </h4>
              <p className="text-muted-foreground text-pretty">
                Agache e coloque as mãos no chão, jogue as pernas para trás (posição de prancha), 
                faça uma flexão, volte à posição de agachamento e pule com os braços para cima.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/30">
              <h4 className="font-bold text-xl mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Mountain Climber
              </h4>
              <p className="text-muted-foreground text-pretty">
                Na posição de prancha, alterne trazendo os joelhos em direção ao peito rapidamente, 
                como se estivesse correndo na horizontal. Mantenha o core contraído.
              </p>
            </div>
          </div>
        </div>

        {/* Weekly schedule reminder */}
        <div className="bg-gradient-to-br from-primary via-accent to-secondary text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Heart className="w-7 h-7" />
            Lembre-se: Consistência é a Chave
          </h3>
          <div className="grid md:grid-cols-7 gap-3 mb-6">
            {[
              { day: 'Seg', emoji: '💪' },
              { day: 'Ter', emoji: '🔥' },
              { day: 'Qua', emoji: '💪' },
              { day: 'Qui', emoji: '🔥' },
              { day: 'Sex', emoji: '💪' },
              { day: 'Sáb', emoji: '🚶' },
              { day: 'Dom', emoji: '😴' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                <div className="font-bold mb-2">{item.day}</div>
                <div className="text-2xl">{item.emoji}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/90 text-lg">
            Segunda a sexta: treino do seu nível | Sábado: caminhada leve 30min | Domingo: descanso ativo
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}
