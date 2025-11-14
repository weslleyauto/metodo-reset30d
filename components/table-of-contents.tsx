import { Book, Brain, Calendar, ChefHat, Coffee, Dumbbell, Heart, LineChart, ShoppingCart, Sparkles, Target, TrendingUp } from 'lucide-react'

const chapters = [
  { id: 'presentation', icon: Book, title: 'Apresentação', subtitle: 'Bem-vindo ao Reset 30D' },
  { id: 'understanding', icon: Brain, title: 'Como Funciona o Emagrecimento', subtitle: 'Entenda a ciência por trás' },
  { id: 'methods', icon: Target, title: 'Métodos que Funcionam', subtitle: '7 estratégias comprovadas' },
  { id: 'meal-plans', icon: Calendar, title: 'Cardápios Completos', subtitle: '3 planos para diferentes perfis' },
  { id: 'recipes', icon: ChefHat, title: 'Receitas Detalhadas', subtitle: 'Mais de 40 receitas práticas' },
  { id: 'teas', icon: Coffee, title: 'Chás Termogênicos', subtitle: 'Acelere seu metabolismo' },
  { id: 'shopping', icon: ShoppingCart, title: 'Lista de Compras', subtitle: 'Organizada e econômica' },
  { id: 'workouts', icon: Dumbbell, title: 'Planos de Treino', subtitle: '3 níveis de intensidade' },
  { id: 'psychology', icon: Heart, title: 'Estratégias Psicológicas', subtitle: 'Vença a compulsão' },
  { id: 'daily-plan', icon: Sparkles, title: 'Plano Diário', subtitle: 'Checklist de sucesso' },
  { id: 'progress', icon: TrendingUp, title: 'Registro de Evolução', subtitle: 'Acompanhe suas conquistas' },
  { id: 'conclusion', icon: LineChart, title: 'Conclusão', subtitle: 'Comece sua transformação' },
]

export function TableOfContents() {
  return (
    <section id="contents" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">Conteúdo</h2>
          <p className="text-xl text-muted-foreground">Tudo que você precisa para transformar seu corpo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="group bg-card hover:bg-accent/50 border border-border rounded-2xl p-6 transition-all hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-primary text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm font-mono text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold text-foreground text-balance">
                        {chapter.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-pretty">{chapter.subtitle}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
