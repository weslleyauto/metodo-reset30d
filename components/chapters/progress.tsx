'use client'

import { useState } from 'react'
import { ChapterLayout } from './chapter-layout'
import { TrendingUp, Calendar } from 'lucide-react'

export function ChapterProgress() {
  const [habitChecks, setHabitChecks] = useState<{ [key: string]: boolean[][] }>({
    week1: Array(8).fill(null).map(() => Array(7).fill(false)),
    week2: Array(8).fill(null).map(() => Array(7).fill(false)),
    week3: Array(8).fill(null).map(() => Array(7).fill(false)),
    week4: Array(8).fill(null).map(() => Array(7).fill(false)),
  })

  const habits = [
    'Seguiu o plano alimentar',
    'Bebeu 2,5L de água',
    'Fez atividade física',
    'Dormiu 7-8 horas',
    'Praticou gratidão',
    'Evitou açúcar',
    'Cozinhou em casa',
    'Meditou/relaxou',
  ]

  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

  const toggleHabit = (week: string, habitIndex: number, dayIndex: number) => {
    setHabitChecks(prev => {
      const newChecks = { ...prev }
      newChecks[week][habitIndex][dayIndex] = !newChecks[week][habitIndex][dayIndex]
      return newChecks
    })
  }

  return (
    <ChapterLayout
      id="progress"
      number="11"
      title="Registro de Evolução"
      subtitle="Acompanhe suas conquistas semana a semana"
    >
      <div className="space-y-12">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
          <p className="text-lg leading-relaxed text-pretty">
            Registrar sua evolução é fundamental para manter a motivação e identificar o que funciona 
            melhor para você. Use estas tabelas semanalmente.
          </p>
        </div>

        {/* Weight and measurements table */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            Tabela de Peso e Medidas
          </h3>
          <p className="text-muted-foreground mb-6 text-pretty">
            <strong>Importante:</strong> Pese-se apenas 1x por semana, sempre no mesmo dia e horário 
            (de preferência pela manhã, em jejum, após ir ao banheiro). Tire medidas a cada 2 semanas.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border-2 border-border p-4 text-left font-bold">Semana</th>
                  <th className="border-2 border-border p-4 text-center font-bold">Data</th>
                  <th className="border-2 border-border p-4 text-center font-bold">Peso (kg)</th>
                  <th className="border-2 border-border p-4 text-center font-bold">Peito (cm)</th>
                  <th className="border-2 border-border p-4 text-center font-bold">Cintura (cm)</th>
                  <th className="border-2 border-border p-4 text-center font-bold">Quadril (cm)</th>
                  <th className="border-2 border-border p-4 text-center font-bold">Coxa (cm)</th>
                  <th className="border-2 border-border p-4 text-center font-bold">Braço (cm)</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }, (_, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="border-2 border-border p-4 font-bold">Semana {i + 1}</td>
                    <td className="border-2 border-border p-4 text-center text-muted-foreground">__/__/__</td>
                    <td className="border-2 border-border p-4 text-center">_____</td>
                    <td className="border-2 border-border p-4 text-center">_____</td>
                    <td className="border-2 border-border p-4 text-center">_____</td>
                    <td className="border-2 border-border p-4 text-center">_____</td>
                    <td className="border-2 border-border p-4 text-center">_____</td>
                    <td className="border-2 border-border p-4 text-center">_____</td>
                  </tr>
                ))}
                <tr className="bg-accent/10 font-bold">
                  <td colSpan={2} className="border-2 border-border p-4">TOTAL PERDIDO</td>
                  <td className="border-2 border-border p-4 text-center">_____</td>
                  <td className="border-2 border-border p-4 text-center">_____</td>
                  <td className="border-2 border-border p-4 text-center">_____</td>
                  <td className="border-2 border-border p-4 text-center">_____</td>
                  <td className="border-2 border-border p-4 text-center">_____</td>
                  <td className="border-2 border-border p-4 text-center">_____</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h4 className="font-bold mb-3">📏 Como Medir Corretamente</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Peito:</strong> Na parte mais larga, com fita na linha dos mamilos</li>
                <li>• <strong>Cintura:</strong> Na parte mais estreita, geralmente na altura do umbigo</li>
                <li>• <strong>Quadril:</strong> Na parte mais larga dos glúteos</li>
                <li>• <strong>Coxa:</strong> A 5cm abaixo da virilha</li>
                <li>• <strong>Braço:</strong> No meio do bíceps, relaxado</li>
              </ul>
            </div>
            <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
              <h4 className="font-bold mb-3">💡 Dicas Importantes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tire fotos de frente, lado e costas a cada 2 semanas</li>
                <li>• Use a mesma roupa nas fotos para comparar</li>
                <li>• Medidas importam mais que o peso na balança</li>
                <li>• Você pode ganhar músculo e perder gordura sem perder peso</li>
                <li>• Não se compare com outros, compare-se com você do passado</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-primary" />
            Registro Semanal de Hábitos
          </h3>
          <p className="text-muted-foreground mb-6 text-pretty">
            Marque clicando em cada célula para cada dia que você cumpriu o hábito. Quanto mais marcações, melhor!
          </p>

          <div className="space-y-8">
            {['week1', 'week2', 'week3', 'week4'].map((weekKey, weekIndex) => (
              <div key={weekKey} className="bg-muted/20 rounded-xl p-6">
                <h4 className="font-bold text-xl mb-4">Semana {weekIndex + 1}: ____/____</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left p-3 font-bold text-sm">Hábito</th>
                        {days.map((day, i) => (
                          <th key={i} className="text-center p-3 font-bold text-sm">{day}</th>
                        ))}
                        <th className="text-center p-3 font-bold text-sm">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {habits.map((habit, habitIndex) => {
                        const weekChecks = habitChecks[weekKey as keyof typeof habitChecks][habitIndex]
                        const total = weekChecks.filter(Boolean).length
                        return (
                          <tr key={habitIndex} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="p-3 text-sm font-medium">{habit}</td>
                            {weekChecks.map((checked, dayIndex) => (
                              <td key={dayIndex} className="p-2 text-center">
                                <button
                                  onClick={() => toggleHabit(weekKey, habitIndex, dayIndex)}
                                  className={`w-8 h-8 rounded border-2 transition-all ${
                                    checked
                                      ? 'bg-primary border-primary text-white font-bold'
                                      : 'border-border hover:border-primary/50 hover:bg-primary/10'
                                  }`}
                                >
                                  {checked ? '✓' : ''}
                                </button>
                              </td>
                            ))}
                            <td className="p-3 text-center font-bold text-primary">{total}/7</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Total de hábitos cumpridos: <strong className="text-foreground">
                      {habitChecks[weekKey as keyof typeof habitChecks].reduce((sum, week) => 
                        sum + week.filter(Boolean).length, 0
                      )}/{habits.length * 7}
                    </strong>
                  </span>
                  <span className="text-muted-foreground">
                    Taxa de sucesso: <strong className="text-primary">
                      {Math.round((habitChecks[weekKey as keyof typeof habitChecks].reduce((sum, week) => 
                        sum + week.filter(Boolean).length, 0) / (habits.length * 7)) * 100)}%
                    </strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress tips */}
        <div className="bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">📈 Dicas Para Acompanhar Seu Progresso</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Não se pese todos os dias - o peso oscila naturalmente',
              'Celebre vitórias não relacionadas à balança (mais energia, roupa mais folgada)',
              'Tire fotos de progresso - elas mostram mais que a balança',
              'Use uma fita métrica - medidas são mais precisas que peso',
              'Mantenha um diário de como se sente a cada semana',
              'Compare-se com você mesmo, nunca com outras pessoas',
              'Plateaus são normais - não desista, ajuste se necessário',
              'Resultados consistentes levam tempo - tenha paciência',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 bg-card rounded-xl p-4 border border-border">
                <span className="shrink-0 text-primary font-bold text-xl">✓</span>
                <p className="text-sm text-muted-foreground text-pretty">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChapterLayout>
  )
}
