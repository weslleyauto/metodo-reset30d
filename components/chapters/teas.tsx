import { ChapterLayout } from './chapter-layout'
import { Coffee, Flame, Droplets } from 'lucide-react'

const teas = [
  {
    name: 'Chá Verde',
    benefits: 'Rico em catequinas que aceleram metabolismo e oxidação de gorduras',
    preparation: 'Aqueça água a 80°C, adicione 1 col. (chá) de folhas, deixe 3 min',
    frequency: '2-3 xícaras por dia, longe das refeições',
    warning: 'Evite após 16h (contém cafeína)',
  },
  {
    name: 'Chá de Gengibre',
    benefits: 'Termogênico potente, melhora digestão e reduz inchaço',
    preparation: 'Ferva 1L de água com 3cm de gengibre por 10 minutos',
    frequency: '3-4 xícaras ao dia, principalmente pela manhã',
    warning: 'Pode irritar estômago vazio em algumas pessoas',
  },
  {
    name: 'Chá de Hibisco',
    benefits: 'Diurético natural, rico em antioxidantes, controla colesterol',
    preparation: '1 col. (sopa) de hibisco em 1L de água fervente, abafe 10 min',
    frequency: '3 xícaras por dia entre refeições',
    warning: 'Não tome em excesso (máximo 1L/dia)',
  },
  {
    name: 'Chá de Cavalinha',
    benefits: 'Poderoso diurético, combate retenção de líquidos',
    preparation: '1 col. (sopa) em 500ml água fervente, abafe 10 min',
    frequency: '2-3 xícaras por dia',
    warning: 'Tome por no máximo 3 semanas seguidas',
  },
  {
    name: 'Chá de Canela',
    benefits: 'Regula glicemia, reduz compulsão por doces, acelera metabolismo',
    preparation: '2 paus de canela em 1L de água, ferva 5 min',
    frequency: '2-3 xícaras por dia',
    warning: 'Grávidas devem evitar',
  },
  {
    name: 'Chá de Cúrcuma',
    benefits: 'Anti-inflamatório potente, melhora digestão, termogênico',
    preparation: '1 col. (chá) de cúrcuma em 250ml água quente + pimenta preta',
    frequency: '1-2 xícaras por dia',
    warning: 'Adicione pimenta preta para melhor absorção',
  },
]

const combinations = [
  {
    name: 'Bomba Termogênica',
    ingredients: 'Chá verde + gengibre + limão + canela',
    when: 'Pela manhã em jejum',
    effect: 'Acelera metabolismo por até 4 horas',
  },
  {
    name: 'Detox Poderoso',
    ingredients: 'Hibisco + hortelã + limão + pepino',
    when: 'Entre refeições',
    effect: 'Elimina toxinas e reduz inchaço',
  },
  {
    name: 'Queima-Gordura Noturno',
    ingredients: 'Camomila + canela + cravo',
    when: 'Antes de dormir',
    effect: 'Melhora sono e controla glicemia noturna',
  },
]

export function ChapterTeas() {
  return (
    <ChapterLayout
      id="teas"
      number="06"
      title="Chás Termogênicos"
      subtitle="Acelere seu metabolismo naturalmente"
    >
      <div className="space-y-12">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
          <p className="text-lg leading-relaxed text-pretty">
            Os chás termogênicos são aliados poderosos no emagrecimento. Eles aceleram o 
            metabolismo, combatem retenção de líquidos e controlam a compulsão alimentar.
          </p>
        </div>

        {/* Individual teas */}
        <div className="grid md:grid-cols-2 gap-6">
          {teas.map((tea, index) => (
            <div key={index} className="bg-card border-2 border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 bg-primary/10 p-3 rounded-xl">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-balance">{tea.name}</h3>
                  <p className="text-muted-foreground text-pretty">{tea.benefits}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-primary" />
                    Preparo
                  </h4>
                  <p className="text-sm text-muted-foreground text-pretty">{tea.preparation}</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-primary" />
                    Frequência
                  </h4>
                  <p className="text-sm text-muted-foreground text-pretty">{tea.frequency}</p>
                </div>

                <div className="bg-destructive/5 border-l-4 border-destructive/50 rounded-r-xl p-4">
                  <p className="text-sm text-destructive">
                    <strong>⚠️ Atenção:</strong> {tea.warning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combinations */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-6">Combinações Poderosas</h3>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Potencialize os resultados combinando diferentes ervas. Estas misturas são 
            especialmente eficazes:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {combinations.map((combo, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-primary text-balance">{combo.name}</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold mb-1">Ingredientes:</p>
                    <p className="text-sm text-muted-foreground text-pretty">{combo.ingredients}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-1">Quando tomar:</p>
                    <p className="text-sm text-muted-foreground">{combo.when}</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-sm">
                      <strong>Efeito:</strong> {combo.effect}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important notes */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Orientações Importantes</h3>
          <div className="space-y-4">
            {[
              'Sempre tome chás SEM açúcar. Use adoçante natural se necessário.',
              'Beba os chás termogênicos longe das refeições (30 min antes ou 1h depois).',
              'Hidrate-se com água também - chás não substituem água pura (mínimo 2L/dia).',
              'Evite chás com cafeína após 16h para não prejudicar seu sono.',
              'Varie os chás ao longo da semana para não saturar o organismo.',
              'Gestantes, lactantes e pessoas com problemas de saúde devem consultar médico antes.',
            ].map((note, i) => (
              <div key={i} className="flex gap-3">
                <span className="shrink-0 text-primary font-bold">→</span>
                <p className="text-muted-foreground text-pretty">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChapterLayout>
  )
}
