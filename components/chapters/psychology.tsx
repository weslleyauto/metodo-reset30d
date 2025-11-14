import { ChapterLayout } from './chapter-layout'
import { Brain, Heart, Target, TrendingUp, Sparkles } from 'lucide-react'

export function ChapterPsychology() {
  return (
    <ChapterLayout
      id="psychology"
      number="09"
      title="Estratégias Psicológicas"
      subtitle="Vença a compulsão e construa disciplina duradoura"
    >
      <div className="space-y-12">
        <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-8">
          <p className="text-lg leading-relaxed text-pretty">
            <strong>70% do emagrecimento é mental.</strong> Você pode ter o melhor plano alimentar 
            e de treinos, mas sem o mindset correto, não conseguirá manter a consistência. 
            Este capítulo é talvez o mais importante de todo o eBook.
          </p>
        </div>

        {/* Breaking compulsion cycles */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 bg-primary/10 p-4 rounded-2xl">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3">Como Quebrar Ciclos de Compulsão</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                A compulsão alimentar não é falta de força de vontade - é um padrão neurológico 
                que pode ser reprogramado.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
              <h4 className="font-bold text-xl mb-4">🧠 Técnica: Pausa dos 10 Minutos</h4>
              <p className="text-muted-foreground mb-4 text-pretty">
                Quando sentir vontade de comer algo fora do planejado:
              </p>
              <ol className="space-y-3">
                {[
                  'PAUSE - não coma imediatamente',
                  'Beba 2 copos de água',
                  'Faça 3 respirações profundas e lentas',
                  'Pergunte-se: "É fome real ou emocional?"',
                  'Espere 10 minutos fazendo outra atividade',
                  'Se ainda quiser, coma uma porção pequena conscientemente',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-pretty">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 bg-card rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground text-pretty">
                  <strong>Por que funciona:</strong> Em 70% dos casos, a vontade passa em 10 minutos. 
                  Você quebra o automatismo e retoma o controle consciente.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-destructive">❌ Gatilhos Comuns</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Estresse e ansiedade</li>
                  <li>• Tédio e procrastinação</li>
                  <li>• Tristeza e solidão</li>
                  <li>• Recompensa após trabalho</li>
                  <li>• Convívio social</li>
                  <li>• Assistir TV/séries</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-green-600">✓ Alternativas Saudáveis</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Caminhada de 10 minutos</li>
                  <li>• Ligar para um amigo</li>
                  <li>• Tomar chá ou café</li>
                  <li>• Escovar os dentes</li>
                  <li>• Ler ou ouvir podcast</li>
                  <li>• Fazer alongamento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Building discipline */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 bg-accent/10 p-4 rounded-2xl">
              <Target className="w-10 h-10 text-accent" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3">Como Construir Disciplina Real</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                Disciplina não é sobre ser perfeito. É sobre voltar ao plano mesmo depois de falhar.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/5 rounded-xl p-6">
              <h4 className="font-bold text-xl mb-4">💪 Os 4 Pilares da Disciplina</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: '1. Clareza',
                    desc: 'Saiba EXATAMENTE o que fazer. Nada de "comer melhor" - seja específico: "3 refeições por dia com proteína".',
                  },
                  {
                    title: '2. Compromisso Público',
                    desc: 'Conte seus objetivos para 2-3 pessoas próximas. O compromisso social aumenta adesão em 65%.',
                  },
                  {
                    title: '3. Sistema, Não Motivação',
                    desc: 'Crie rotinas automáticas. Prepare marmitas domingo. Deixe roupa de treino pronta. Torne fácil acertar.',
                  },
                  {
                    title: '4. Recompensas Não-Alimentares',
                    desc: 'Celebre conquistas com coisas que te deixam feliz: roupa nova, massagem, cinema, não com comida.',
                  },
                ].map((pillar) => (
                  <div key={pillar.title} className="bg-card rounded-xl p-6 border border-border">
                    <h5 className="font-bold text-lg mb-2 text-primary">{pillar.title}</h5>
                    <p className="text-sm text-muted-foreground text-pretty">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Consistency */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 bg-primary/10 p-4 rounded-2xl">
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3">Como Manter Consistência</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                A consistência vence a intensidade. Melhor fazer 80% por 6 meses do que 100% por 2 semanas.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-6">
            <h4 className="font-bold text-xl mb-4">📈 Técnica 1% ao Dia (Regra do Progresso Mínimo)</h4>
            <p className="text-muted-foreground mb-4 text-pretty">
              Nos dias difíceis, comprometa-se apenas com a VERSÃO MÍNIMA do seu plano:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { area: 'Alimentação', full: 'Seguir cardápio completo', minimum: 'Fazer 1 refeição saudável' },
                { area: 'Treino', full: '25 min de exercício', minimum: '5 min de caminhada' },
                { area: 'Hidratação', full: '2,5L de água', minimum: '1L de água' },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <h5 className="font-bold mb-3 text-primary">{item.area}</h5>
                  <p className="text-sm mb-2">
                    <strong>Ideal:</strong> {item.full}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Mínimo:</strong> {item.minimum}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-card rounded-lg p-4 border border-border">
              <p className="text-sm text-pretty">
                <strong>Resultado:</strong> Você mantém o hábito vivo mesmo nos piores dias. 
                A sequência não quebra. E frequentemente, ao começar o mínimo, você acaba fazendo mais.
              </p>
            </div>
          </div>
        </div>

        {/* Positive reinforcement */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 bg-accent/10 p-4 rounded-2xl">
              <Sparkles className="w-10 h-10 text-accent" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3">Reforço Positivo e Pequenas Metas</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                Celebre cada vitória, por menor que seja. Seu cérebro precisa de recompensas para manter o comportamento.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-4">🎯 Sistema de Metas Escalonadas</h4>
              <div className="space-y-4">
                {[
                  { milestone: '1 semana seguindo o plano', reward: 'Compre um item que deseja' },
                  { milestone: '2 kg perdidos', reward: 'Tire fotos do progresso e celebre' },
                  { milestone: '1 mês de consistência', reward: 'Agende uma atividade prazerosa' },
                  { milestone: '5 kg perdidos', reward: 'Compre uma roupa no tamanho novo' },
                  { milestone: '90 dias de treino', reward: 'Invista em equipamento fitness' },
                  { milestone: 'Meta final atingida', reward: 'Viagem ou experiência especial' },
                ].map((goal, i) => (
                  <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border">
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 text-green-600 font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold mb-1">{goal.milestone}</h5>
                      <p className="text-sm text-muted-foreground">🎁 {goal.reward}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How not to give up */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 bg-destructive/10 p-4 rounded-2xl">
              <Heart className="w-10 h-10 text-destructive" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3">Como Evitar Desistir</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                Quase todo mundo quer desistir em algum momento. A diferença está em como lidar com isso.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-destructive/5 rounded-xl p-6">
              <h4 className="font-bold text-xl mb-4 text-destructive">⚠️ Momentos Críticos (Quando a Desistência Ataca)</h4>
              <div className="space-y-4">
                {[
                  { moment: 'Semana 2-3', why: 'Novidade passou, resultados não são visíveis ainda', solution: 'Foque no processo, não na balança. Tire medidas corporais.' },
                  { moment: 'Primeira saída com amigos', why: 'Pressão social e tentações', solution: 'Use a regra 80/20. Coma 1 prazer, compense no dia seguinte.' },
                  { moment: 'Primeiro platô', why: 'Balança parou de descer', solution: 'Normal! Corpo está se ajustando. Varie treinos e cardápio.' },
                  { moment: 'Dia muito estressante', why: 'Comida é válvula de escape', solution: 'Use a técnica dos 10 minutos. Encontre outro escape (caminhada, banho, música).' },
                ].map((crisis, i) => (
                  <div key={i} className="bg-card rounded-xl p-6 border border-border">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="font-bold text-sm text-muted-foreground mb-1">MOMENTO</p>
                        <p className="font-bold">{crisis.moment}</p>
                      </div>
                      <div>
                        <p className="font-bold text-sm text-muted-foreground mb-1">POR QUÊ</p>
                        <p className="text-sm text-pretty">{crisis.why}</p>
                      </div>
                      <div>
                        <p className="font-bold text-sm text-muted-foreground mb-1">SOLUÇÃO</p>
                        <p className="text-sm text-pretty text-green-600">{crisis.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary via-accent to-secondary text-white rounded-xl p-8">
              <h4 className="font-bold text-2xl mb-4">💎 Mantra Para Momentos Difíceis</h4>
              <p className="text-xl leading-relaxed text-center mb-6 text-balance">
                "Eu não preciso ser perfeito hoje.<br />
                Eu só preciso ser um pouco melhor do que ontem.<br />
                Cada escolha saudável é uma vitória.<br />
                Eu sou mais forte do que minha vontade momentânea."
              </p>
              <p className="text-center text-sm text-white/80">
                Salve este mantra no celular e leia quando sentir vontade de desistir.
              </p>
            </div>
          </div>
        </div>

        {/* Final mindset */}
        <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-2 border-green-500/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">🧠 Verdades Que Você Precisa Internalizar</h3>
          <div className="space-y-4">
            {[
              'Você VAI ter dias ruins. Não deixe 1 dia ruim se transformar em 1 semana ruim.',
              'Progresso não é linear. Algumas semanas você perde 1kg, outras 0,3kg. Está tudo bem.',
              'Você não está "de dieta". Você está criando um novo estilo de vida.',
              'Não compare seu capítulo 1 com o capítulo 20 de outra pessoa.',
              'A disciplina dói menos que o arrependimento.',
              'Daqui a 3 meses, você vai agradecer por ter começado hoje.',
            ].map((truth, i) => (
              <div key={i} className="flex gap-4 bg-card rounded-xl p-6 border border-green-500/20">
                <span className="shrink-0 text-2xl">💡</span>
                <p className="text-lg font-medium text-pretty">{truth}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChapterLayout>
  )
}
