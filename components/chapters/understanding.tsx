import { ChapterLayout } from './chapter-layout'
import { Activity, Zap, Flame, AlertCircle, TrendingDown, Scale } from 'lucide-react'

export function ChapterUnderstanding() {
  return (
    <ChapterLayout
      id="understanding"
      number="02"
      title="Como Funciona o Emagrecimento"
      subtitle="Entenda a ciência por trás da perda de peso"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Scale className="w-8 h-8 text-primary" />
            A Verdade Sobre Emagrecimento
          </h3>
          <p className="text-lg leading-relaxed text-pretty">
            Emagrecer não é mágica nem mistério. É um processo biológico natural que ocorre 
            quando você fornece ao corpo menos energia (calorias) do que ele gasta. Simples assim!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Flame className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Déficit Calórico</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              O déficit calórico é quando você consome menos calorias do que seu corpo precisa 
              para manter o peso atual. Isso força o organismo a usar suas reservas de gordura 
              como energia.
            </p>
            <div className="bg-muted/50 rounded-xl p-4">
              <p className="font-mono text-sm">
                <strong>Exemplo:</strong> Se seu corpo gasta 2000 kcal/dia e você consome 1600 kcal, 
                você tem um déficit de 400 kcal. Isso resulta em perda de gordura gradual e saudável.
              </p>
            </div>
          </div>

          <div className="bg-card border-2 border-accent/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent/10 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Metabolismo</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              Seu metabolismo é a soma de todas as reações químicas que mantêm você vivo. 
              Ele queima calorias 24 horas por dia, mesmo quando você está dormindo.
            </p>
            <div className="bg-muted/50 rounded-xl p-4">
              <p className="font-mono text-sm">
                <strong>Componentes:</strong> Metabolismo basal (60-70%), atividade física (20-30%), 
                digestão (10%). Músculos queimam mais calorias em repouso!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Activity className="w-8 h-8 text-primary" />
            O Papel das Proteínas
          </h3>
          <p className="text-lg mb-4 leading-relaxed text-pretty">
            As proteínas são fundamentais durante o emagrecimento por três motivos principais:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Saciedade', desc: 'Te mantêm satisfeito por mais tempo, reduzindo a fome.' },
              { title: 'Preservação Muscular', desc: 'Protegem seus músculos durante a perda de peso.' },
              { title: 'Efeito Térmico', desc: 'Gastam mais energia para serem digeridas.' },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-bold text-lg mb-2 text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground text-pretty">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-destructive" />
            Fome Real vs. Compulsão
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3 text-green-600">✓ Fome Real</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Surge gradualmente</li>
                <li>• Qualquer comida saudável satisfaz</li>
                <li>• Vem acompanhada de sinais físicos</li>
                <li>• Pode esperar um pouco</li>
                <li>• Depois de comer, você se sente bem</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3 text-destructive">✗ Fome Emocional</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Surge de repente</li>
                <li>• Deseja alimentos específicos</li>
                <li>• Não tem sinais físicos claros</li>
                <li>• Precisa ser satisfeita imediatamente</li>
                <li>• Gera culpa depois de comer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <TrendingDown className="w-8 h-8 text-primary" />
            Por Que Dietas "Milagrosas" Não Funcionam
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-xl">
                1
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">São Insustentáveis</h4>
                <p className="text-muted-foreground text-pretty">
                  Dietas muito restritivas são impossíveis de manter a longo prazo. 
                  Quando você volta a comer normalmente, recupera o peso rapidamente.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-xl">
                2
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Causam Perda Muscular</h4>
                <p className="text-muted-foreground text-pretty">
                  Déficits calóricos extremos fazem você perder músculo junto com gordura, 
                  diminuindo seu metabolismo.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-xl">
                3
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Afetam Sua Saúde</h4>
                <p className="text-muted-foreground text-pretty">
                  Podem causar fadiga, queda de cabelo, alterações hormonais, 
                  deficiências nutricionais e problemas psicológicos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary via-accent to-secondary text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Como o Corpo Queima Gordura de Verdade</h3>
          <p className="text-lg leading-relaxed mb-6 text-balance">
            Quando você está em déficit calórico, seu corpo ativa enzimas chamadas lipases que 
            quebram as moléculas de gordura (triglicerídeos) em ácidos graxos e glicerol. 
            Essas substâncias entram na corrente sanguínea e são transportadas para as células, 
            onde são oxidadas (queimadas) nas mitocôndrias para produzir energia (ATP).
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-sm font-mono">
              <strong>Em resumo:</strong> Gordura armazenada → Quebrada em moléculas menores → 
              Transportada pelo sangue → Queimada como combustível → Energia para o corpo + 
              CO₂ e H₂O eliminados pela respiração e urina.
            </p>
          </div>
        </div>
      </div>
    </ChapterLayout>
  )
}
