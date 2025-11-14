import { ChapterLayout } from './chapter-layout'
import { Target, TrendingUp, Clock, Zap, Brain, Salad, Star } from 'lucide-react'

const methods = [
  {
    icon: Target,
    title: 'Déficit Inteligente',
    description: 'Crie um déficit moderado de 300-500 kcal por dia para perda gradual e saudável.',
    how: 'Calcule suas necessidades calóricas e reduza de forma inteligente, priorizando alimentos nutritivos.',
    benefits: ['Perda de 0,5-1kg por semana', 'Preserva massa muscular', 'Sustentável a longo prazo'],
  },
  {
    icon: TrendingUp,
    title: 'Método 80/20',
    description: '80% das suas escolhas são saudáveis, 20% são flexíveis para vida social e prazeres.',
    how: 'Mantenha disciplina na maior parte do tempo, mas permita-se flexibilidade sem culpa.',
    benefits: ['Reduz compulsões', 'Mais fácil de manter', 'Equilíbrio mental'],
  },
  {
    icon: Salad,
    title: 'Prato Perfeito',
    description: 'Divida seu prato: 50% vegetais, 25% proteína, 25% carboidrato complexo.',
    how: 'Use essa proporção visual em todas as refeições principais sem precisar contar calorias.',
    benefits: ['Simples e prático', 'Nutricionalmente balanceado', 'Controle de porções natural'],
  },
  {
    icon: Clock,
    title: 'Jejum Intermitente',
    description: 'Concentre suas refeições em uma janela de 8-10 horas por dia (opcional).',
    how: 'Exemplo: coma entre 12h e 20h, ficando em jejum de 20h até 12h do dia seguinte.',
    benefits: ['Melhora sensibilidade insulínica', 'Facilita déficit calórico', 'Aumenta autofagia'],
  },
  {
    icon: Zap,
    title: 'Treino HIIT',
    description: 'Exercícios intervalados de alta intensidade aceleram metabolismo e queima de gordura.',
    how: '15-20 minutos de treinos intensos alternados com períodos de descanso ativo.',
    benefits: ['Queima calorias por 24-48h', 'Preserva músculos', 'Economia de tempo'],
  },
  {
    icon: Brain,
    title: 'Alimentação Consciente',
    description: 'Coma devagar, sem distrações, prestando atenção aos sinais de saciedade.',
    how: 'Desligue TV/celular, mastigue bem, faça pausas durante a refeição, saboreie cada garfada.',
    benefits: ['Reduz quantidade consumida', 'Melhora digestão', 'Quebra automação'],
  },
  {
    icon: Star,
    title: 'Super Satisfação',
    description: 'Escolha alimentos volumosos e ricos em fibras que enchem o estômago com menos calorias.',
    how: 'Priorize vegetais, frutas com casca, aveia, legumes, sopas, saladas volumosas.',
    benefits: ['Saciedade prolongada', 'Menos fome', 'Alto valor nutricional'],
  },
]

export function ChapterMethods() {
  return (
    <ChapterLayout
      id="methods"
      number="03"
      title="Métodos que Realmente Funcionam"
      subtitle="7 estratégias comprovadas cientificamente"
    >
      <div className="space-y-12">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
          <p className="text-lg leading-relaxed text-pretty">
            Estes métodos não são excludentes – você pode combinar vários deles! 
            O segredo é encontrar o que funciona melhor para seu estilo de vida e preferências.
          </p>
        </div>

        {methods.map((method, index) => {
          const Icon = method.icon
          return (
            <div key={index} className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-6">
                <div className="shrink-0 bg-primary/10 p-4 rounded-2xl">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3 text-balance">{method.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
                    {method.description}
                  </p>

                  <div className="bg-muted/50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-primary">→</span> Como Aplicar
                    </h4>
                    <p className="text-muted-foreground text-pretty">{method.how}</p>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3">✓ Benefícios</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="bg-gradient-to-br from-primary via-accent to-secondary text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">💡 Dica de Ouro</h3>
          <p className="text-lg leading-relaxed text-balance">
            Não tente implementar todos os métodos de uma vez! Comece com 2-3 estratégias 
            que parecem mais viáveis para você. À medida que ganhar confiança, 
            adicione outras gradualmente. A consistência importa mais que a perfeição.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}
