'use client'

import { useState } from 'react'
import { ChapterLayout } from './chapter-layout'
import { CheckSquare, Clock } from 'lucide-react'

export function ChapterDailyPlan() {
  const [morningChecks, setMorningChecks] = useState<boolean[]>(Array(6).fill(false))
  const [afternoonChecks, setAfternoonChecks] = useState<boolean[]>(Array(6).fill(false))
  const [eveningChecks, setEveningChecks] = useState<boolean[]>(Array(6).fill(false))
  const [mindsetChecks, setMindsetChecks] = useState<boolean[]>(Array(6).fill(false))
  const [weeklyChecks, setWeeklyChecks] = useState<boolean[]>(Array(6).fill(false))
  const [ratings, setRatings] = useState<{ [key: string]: number }>({})

  const morningItems = [
    'Acordei e pesei (apenas 1x por semana)',
    'Bebi 500ml de água ao acordar',
    'Tomei chá termogênico ou café sem açúcar',
    'Fiz café da manhã balanceado com proteína',
    'Fiz alongamento ou caminhada leve (mínimo 10 min)',
    'Tomei lanche da manhã no horário',
  ]

  const afternoonItems = [
    'Fiz almoço seguindo o Prato Perfeito',
    'Comi devagar e sem distrações (mindful eating)',
    'Bebi pelo menos 1L de água até agora',
    'Tomei lanche da tarde balanceado',
    'Fiz treino ou atividade física',
    'Evitei beliscar fora dos horários',
  ]

  const eveningItems = [
    'Fiz jantar leve e balanceado',
    'Parei de comer pelo menos 2h antes de dormir',
    'Tomei chá calmante ou ceia leve (opcional)',
    'Bebi pelo menos 2,5L de água no total do dia',
    'Fiz alongamento ou meditação antes de dormir',
    'Dormi pelo menos 7-8 horas',
  ]

  const mindsetItems = [
    'Pratiquei gratidão (3 coisas pelas quais sou grato)',
    'Registrei minha alimentação e sensações',
    'Celebrei minhas vitórias do dia (pequenas ou grandes)',
    'Planejei as refeições de amanhã',
    'Separei roupa de treino para amanhã',
    'Fui gentil comigo mesmo se cometi algum deslize',
  ]

  const weeklyGoals = [
    'Seguir o plano alimentar em pelo menos 5 dias da semana',
    'Fazer atividade física em pelo menos 4 dias',
    'Beber 2,5L de água todos os dias',
    'Dormir 7-8h por noite em pelo menos 5 dias',
    'Não pular nenhuma refeição principal',
    'Ter pelo menos 1 dia de autocuidado (massagem, skincare, hobby)',
  ]

  const evaluationAspects = [
    { aspect: 'Nível de Energia', emoji: '⚡', key: 'energy' },
    { aspect: 'Qualidade do Sono', emoji: '😴', key: 'sleep' },
    { aspect: 'Humor Geral', emoji: '😊', key: 'mood' },
    { aspect: 'Controle Alimentar', emoji: '🍽️', key: 'control' },
    { aspect: 'Motivação', emoji: '🔥', key: 'motivation' },
    { aspect: 'Satisfação com o Dia', emoji: '✨', key: 'satisfaction' },
  ]

  return (
    <ChapterLayout
      id="daily-plan"
      number="10"
      title="Plano Diário"
      subtitle="Checklist de sucesso para cada dia"
    >
      <div className="space-y-12">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
          <p className="text-lg leading-relaxed text-pretty">
            Use este checklist diário para manter o foco e a consistência. 
            Imprima ou salve no celular e marque cada item conforme completar.
          </p>
        </div>

        {/* Daily checklist */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <CheckSquare className="w-8 h-8 text-primary" />
            Checklist Diário Reset 30D
          </h3>

          <div className="space-y-6">
            {/* Morning */}
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-primary/20">
                <Clock className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-bold">Manhã (6h-12h)</h4>
              </div>
              <div className="space-y-3">
                {morningItems.map((item, i) => (
                  <label key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 cursor-pointer transition-colors group">
                    <input 
                      type="checkbox" 
                      checked={morningChecks[i]}
                      onChange={(e) => {
                        const newChecks = [...morningChecks]
                        newChecks[i] = e.target.checked
                        setMorningChecks(newChecks)
                      }}
                      className="mt-1 w-5 h-5 rounded border-2 border-primary/30 text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer" 
                    />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-pretty">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Afternoon */}
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-accent/20">
                <Clock className="w-6 h-6 text-accent" />
                <h4 className="text-2xl font-bold">Tarde (12h-18h)</h4>
              </div>
              <div className="space-y-3">
                {afternoonItems.map((item, i) => (
                  <label key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 cursor-pointer transition-colors group">
                    <input 
                      type="checkbox" 
                      checked={afternoonChecks[i]}
                      onChange={(e) => {
                        const newChecks = [...afternoonChecks]
                        newChecks[i] = e.target.checked
                        setAfternoonChecks(newChecks)
                      }}
                      className="mt-1 w-5 h-5 rounded border-2 border-accent/30 text-accent focus:ring-2 focus:ring-accent/20 cursor-pointer" 
                    />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-pretty">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Evening */}
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-secondary/20">
                <Clock className="w-6 h-6 text-secondary" />
                <h4 className="text-2xl font-bold">Noite (18h-22h)</h4>
              </div>
              <div className="space-y-3">
                {eveningItems.map((item, i) => (
                  <label key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 cursor-pointer transition-colors group">
                    <input 
                      type="checkbox" 
                      checked={eveningChecks[i]}
                      onChange={(e) => {
                        const newChecks = [...eveningChecks]
                        newChecks[i] = e.target.checked
                        setEveningChecks(newChecks)
                      }}
                      className="mt-1 w-5 h-5 rounded border-2 border-secondary/30 text-secondary focus:ring-2 focus:ring-secondary/20 cursor-pointer" 
                    />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-pretty">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mindset */}
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-primary/20">
                <CheckSquare className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-bold">Mentalidade & Hábitos</h4>
              </div>
              <div className="space-y-3">
                {mindsetItems.map((item, i) => (
                  <label key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 cursor-pointer transition-colors group">
                    <input 
                      type="checkbox" 
                      checked={mindsetChecks[i]}
                      onChange={(e) => {
                        const newChecks = [...mindsetChecks]
                        newChecks[i] = e.target.checked
                        setMindsetChecks(newChecks)
                      }}
                      className="mt-1 w-5 h-5 rounded border-2 border-primary/30 text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer" 
                    />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-pretty">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Energy & mood tracker */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">📊 Avaliação Diária</h3>
          <p className="text-muted-foreground mb-6 text-pretty">
            Avalie estes aspectos no final do dia de 1 a 5:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {evaluationAspects.map((item, i) => (
              <div key={i} className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="text-2xl">{item.emoji}</span>
                    {item.aspect}
                  </h4>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setRatings({ ...ratings, [item.key]: rating })}
                      className={`flex-1 py-3 border-2 rounded-lg transition-all font-bold ${
                        ratings[item.key] === rating
                          ? 'border-primary bg-primary text-white'
                          : 'border-border hover:border-primary hover:bg-primary/10'
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly goals */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">🎯 Metas Semanais</h3>
          <div className="space-y-4">
            {weeklyGoals.map((goal, i) => (
              <label key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:shadow-md cursor-pointer transition-all group">
                <input 
                  type="checkbox"
                  checked={weeklyChecks[i]}
                  onChange={(e) => {
                    const newChecks = [...weeklyChecks]
                    newChecks[i] = e.target.checked
                    setWeeklyChecks(newChecks)
                  }}
                  className="mt-1 w-5 h-5 rounded border-2 border-primary/30 text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer" 
                />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-pretty">{goal}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">💡 Dicas Para Usar o Planner</h3>
          <div className="space-y-4">
            {[
              'Preencha o checklist sempre no mesmo horário (sugiro antes de dormir)',
              'Imprima uma cópia para cada semana ou use um app de notas',
              'Não se cobre pela perfeição - 80% de adesão já é excelente',
              'Use os dias ruins como aprendizado, não como desculpa para desistir',
              'Celebre quando completar 100% do checklist com algo que te deixe feliz',
              'Revise sua semana todo domingo e planeje a próxima',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 bg-muted/30 rounded-xl p-4">
                <span className="shrink-0 text-primary font-bold">→</span>
                <p className="text-muted-foreground text-pretty">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChapterLayout>
  )
}
