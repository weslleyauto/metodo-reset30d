import { ChapterLayout } from './chapter-layout'
import { Award, Users, BookOpen } from 'lucide-react'

export function ChapterPresentation() {
  return (
    <ChapterLayout
      id="presentation"
      number="01"
      title="Apresentação"
      subtitle="Bem-vindo ao Reset 30D"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-accent/20 border-l-4 border-primary rounded-r-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Sobre Este Guia
          </h3>
          <p className="text-lg leading-relaxed text-pretty">
            O <strong>Reset 30D</strong> nasceu da necessidade de criar um material verdadeiramente 
            completo sobre emagrecimento saudável. Diferente das dietas da moda que prometem 
            resultados impossíveis, este guia se baseia em ciência, segurança e sustentabilidade.
          </p>
        </div>

        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Users className="w-8 h-8 text-primary" />
          Quem Somos
        </h3>
        <p className="text-lg mb-8 leading-relaxed text-pretty">
          Somos uma equipe de nutricionistas, educadores físicos e psicólogos especializados 
          em comportamento alimentar. Com mais de 15 anos de experiência, já ajudamos milhares 
          de pessoas a alcançarem seus objetivos de forma saudável e duradoura.
        </p>

        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Por Que Este Livro Funciona
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Baseado em Ciência', desc: 'Todos os métodos têm respaldo científico e são seguros.' },
              { title: 'Passo a Passo Completo', desc: 'Do cardápio aos treinos, tudo explicado de forma simples.' },
              { title: 'Abordagem Holística', desc: 'Trabalhamos corpo, mente e hábitos simultaneamente.' },
              { title: 'Resultados Sustentáveis', desc: 'Foco em mudanças duradouras, não em dietas relâmpago.' },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-bold text-xl mb-3 text-primary">{item.title}</h4>
                <p className="text-muted-foreground text-pretty">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Como Usar Este Guia</h3>
          <ol className="space-y-4 text-lg">
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</span>
              <span className="text-pretty"><strong>Leia os capítulos iniciais</strong> para entender como seu corpo funciona.</span>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</span>
              <span className="text-pretty"><strong>Escolha seu cardápio</strong> baseado no seu perfil e preferências.</span>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</span>
              <span className="text-pretty"><strong>Selecione um plano de treino</strong> compatível com seu nível.</span>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">4</span>
              <span className="text-pretty"><strong>Use o plano diário</strong> para manter a consistência.</span>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">5</span>
              <span className="text-pretty"><strong>Registre sua evolução</strong> e celebre cada conquista!</span>
            </li>
          </ol>
        </div>
      </div>
    </ChapterLayout>
  )
}
