import { ChapterLayout } from './chapter-layout'
import { Trophy, Heart, Sparkles, Target, TrendingUp, Users } from 'lucide-react'

export function ChapterConclusion() {
  return (
    <ChapterLayout
      id="conclusion"
      number="12"
      title="Conclusão e Próximos Passos"
      subtitle="Seu novo começo rumo a uma vida mais saudável"
    >
      <div className="space-y-12">
        {/* Congratulations */}
        <div className="bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-12 text-center text-white shadow-2xl">
          <Trophy className="w-20 h-20 mx-auto mb-6 text-white drop-shadow-lg" />
          <h3 className="text-4xl font-bold mb-4 text-balance">Parabéns por Chegar Até Aqui!</h3>
          <p className="text-xl text-white/95 leading-relaxed max-w-3xl mx-auto text-pretty">
            Você acaba de receber todas as ferramentas, conhecimentos e estratégias necessárias 
            para transformar seu corpo e sua vida nos próximos 30 dias. Agora é hora de colocar 
            tudo em prática com determinação e autocuidado.
          </p>
        </div>

        {/* Key takeaways */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            Pontos-Chave Para o Seu Sucesso
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Consistência é Mais Importante que Perfeição',
                text: 'Não precisa ser perfeito todos os dias. 80% de adesão ao plano já traz resultados incríveis. O importante é não desistir.',
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Cuide da Sua Mente e Emoções',
                text: 'Emagrecimento saudável envolve corpo E mente. Pratique autocompaixão, celebre pequenas vitórias e seja gentil consigo mesmo.',
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Resultados Levam Tempo',
                text: 'Mudanças reais e duradouras não acontecem da noite para o dia. Tenha paciência, confie no processo e os resultados virão.',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Busque Apoio Quando Necessário',
                text: 'Compartilhe sua jornada com amigos, família ou grupos de apoio. Ter uma rede de suporte aumenta muito suas chances de sucesso.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-muted/30 rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                </div>
                <p className="text-muted-foreground text-pretty">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* After 30 days */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-6">🚀 E Depois dos 30 Dias?</h3>
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="font-bold text-xl mb-3">Continue com o que Funciona</h4>
              <p className="text-muted-foreground text-pretty mb-3">
                Se você teve bons resultados nos 30 dias, pode continuar seguindo o plano por mais tempo. 
                Muitas pessoas repetem o ciclo de 30 dias várias vezes até atingir suas metas.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mantenha os hábitos alimentares saudáveis que aprendeu</li>
                <li>• Continue fazendo exercícios regularmente</li>
                <li>• Siga registrando seu progresso</li>
                <li>• Adapte o plano às suas necessidades pessoais</li>
              </ul>
            </div>

            <div className="bg-accent/5 rounded-xl p-6 border-l-4 border-accent">
              <h4 className="font-bold text-xl mb-3">Fase de Manutenção</h4>
              <p className="text-muted-foreground text-pretty mb-3">
                Quando atingir seu peso ideal, entre na fase de manutenção. Aumente gradualmente 
                as calorias (100-200 por semana) até estabilizar o peso.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Adicione pequenas porções de alimentos que gosta</li>
                <li>• Mantenha a prática de atividade física</li>
                <li>• Continue bebendo bastante água</li>
                <li>• Monitore seu peso 1x por semana</li>
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-xl p-6 border-l-4 border-secondary">
              <h4 className="font-bold text-xl mb-3">Evite o Efeito Sanfona</h4>
              <p className="text-muted-foreground text-pretty mb-3">
                O segredo para não voltar ao peso anterior é transformar os hábitos temporários 
                em um estilo de vida permanente.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Não volte aos hábitos antigos de uma vez</li>
                <li>• Permita-se flexibilidade na regra 80/20</li>
                <li>• Monitore sinais de que está voltando aos velhos padrões</li>
                <li>• Se ganhar 2-3kg, retome o plano imediatamente</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final motivation */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-10">
          <h3 className="text-3xl font-bold mb-6 text-center">💪 Mensagem Final de Motivação</h3>
          <div className="max-w-3xl mx-auto space-y-4 text-lg">
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Você está prestes a iniciar uma jornada de transformação incrível. Lembre-se de que 
              cada pessoa tem seu próprio ritmo e suas próprias batalhas. Não compare seu progresso 
              com o de outras pessoas.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Haverá dias difíceis. Haverá momentos em que você vai querer desistir. E está tudo bem. 
              O importante é sempre voltar ao caminho. Uma refeição fora do plano não arruína todo o 
              seu progresso - o que arruína é usar isso como desculpa para desistir completamente.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Celebre cada pequena vitória: o primeiro quilo perdido, a primeira semana completa de 
              treinos, a primeira vez que escolheu água no lugar de refrigerante. São essas pequenas 
              decisões que, somadas, criam grandes transformações.
            </p>
            <div className="bg-card rounded-xl p-8 border-2 border-primary/30 mt-6">
              <p className="text-2xl font-bold text-center text-balance mb-4">
                "O melhor momento para começar era ontem. O segundo melhor momento é agora."
              </p>
              <p className="text-center text-muted-foreground font-medium">
                Acredite no seu potencial. Você consegue!
              </p>
            </div>
          </div>
        </div>

        {/* Important disclaimer */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-3">
            <span className="text-3xl">⚠️</span>
            Aviso Importante
          </h3>
          <div className="space-y-3 text-amber-900/90 dark:text-amber-100/90">
            <p className="font-medium text-pretty">
              Este eBook é um guia informativo e educacional sobre emagrecimento saudável. 
              Ele NÃO substitui o acompanhamento de profissionais de saúde.
            </p>
            <p className="text-pretty">
              <strong>Consulte sempre:</strong>
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Um nutricionista para personalizar o plano alimentar às suas necessidades</li>
              <li>• Um educador físico para adaptar os treinos ao seu nível e condições</li>
              <li>• Um médico, especialmente se você tem condições de saúde pré-existentes</li>
              <li>• Um psicólogo se você identificar comportamentos alimentares disfuncionais</li>
            </ul>
            <p className="font-medium text-pretty mt-4">
              Se você tem diabetes, hipertensão, problemas cardíacos, distúrbios alimentares ou 
              qualquer outra condição médica, é FUNDAMENTAL ter acompanhamento profissional antes 
              de iniciar qualquer programa de emagrecimento.
            </p>
          </div>
        </div>

        {/* Final call to action */}
        <div className="bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-6">Pronto Para Começar Sua Transformação?</h3>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto text-pretty">
            Imprima o checklist diário, prepare sua lista de compras, tire suas fotos de "antes" 
            e mergulhe de cabeça nesta jornada. Você não vai se arrepender!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              ✓ Plano Completo de 30 Dias
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              ✓ Receitas Práticas
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              ✓ Treinos Eficazes
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              ✓ Suporte Psicológico
            </div>
          </div>
          <div className="mt-10">
            <p className="text-2xl font-bold">Vamos juntos nessa jornada! 🚀</p>
          </div>
        </div>

        {/* Credits footer */}
        <div className="text-center py-8 border-t-2 border-border">
          <p className="text-muted-foreground text-sm">
            <strong>Reset 30D</strong> - Um Plano de 30 Dias Para Renovar Corpo, Mente e Hábitos
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2025 - Todos os direitos reservados
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}
