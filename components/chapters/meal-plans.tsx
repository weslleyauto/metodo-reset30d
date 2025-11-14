'use client'

import { ChapterLayout } from './chapter-layout'
import { Coffee, Sun, Moon, Apple, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const weeklyMealPlans = {
  iniciante: {
    name: 'Iniciante',
    calories: '1600-1800 kcal',
    description: 'Ideal para quem está começando ou tem metabolismo mais lento',
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/50',
    week: [
      {
        day: 'Segunda-feira',
        meals: {
          breakfast: ['2 ovos mexidos com tomate', '2 fatias de pão integral', '1 copo de suco de laranja', 'Café sem açúcar'],
          snack1: ['1 maçã média', '10 amêndoas'],
          lunch: ['150g de frango grelhado', '4 col. arroz integral', '2 col. feijão', 'Salada verde com azeite', '1 laranja'],
          snack2: ['1 iogurte natural', '1 col. aveia'],
          dinner: ['150g de peixe assado', 'Legumes assados variados', 'Salada verde'],
          supper: ['Chá de camomila', '2 castanhas-do-pará'],
        },
      },
      {
        day: 'Terça-feira',
        meals: {
          breakfast: ['Vitamina de banana com aveia', '2 fatias de pão integral com ricota', 'Café ou chá'],
          snack1: ['1 pera', '1 punhado de castanhas'],
          lunch: ['150g de carne moída magra', '4 col. arroz integral', 'Salada de folhas', 'Cenoura cozida', '1 tangerina'],
          snack2: ['2 torradas integrais', '2 fatias de queijo branco'],
          dinner: ['Omelete de 2 ovos com legumes', 'Salada de tomate e pepino', 'Chá verde'],
          supper: ['1 xícara de leite desnatado'],
        },
      },
      {
        day: 'Quarta-feira',
        meals: {
          breakfast: ['Mingau de aveia com canela', '1 banana', '2 ovos cozidos', 'Café sem açúcar'],
          snack1: ['1 fatia de melão', '5 nozes'],
          lunch: ['150g de tilápia grelhada', '3 col. purê de batata doce', 'Brócolis cozido', 'Salada verde', '1 maçã'],
          snack2: ['Iogurte com granola (2 col.)'],
          dinner: ['Sopa de legumes com frango desfiado', 'Salada verde', '1 fatia de pão integral'],
          supper: ['Chá de erva-doce', '3 amêndoas'],
        },
      },
      {
        day: 'Quinta-feira',
        meals: {
          breakfast: ['Tapioca com queijo cottage', '1 copo de suco verde', 'Café ou chá'],
          snack1: ['1 banana', '1 col. pasta de amendoim'],
          lunch: ['150g de frango desfiado', '4 col. arroz integral', '2 col. lentilha', 'Salada colorida', 'Abacaxi 2 fatias'],
          snack2: ['1 iogurte natural', 'Chia 1 col.'],
          dinner: ['150g carne magra grelhada', 'Abobrinha refogada', 'Salada de rúcula', 'Tomate'],
          supper: ['Chá de hortelã', '2 nozes'],
        },
      },
      {
        day: 'Sexta-feira',
        meals: {
          breakfast: ['Panqueca de banana e aveia', '2 ovos mexidos', 'Café com leite desnatado'],
          snack1: ['Mix de frutas (maçã, pera)', '10 amêndoas'],
          lunch: ['150g salmão grelhado', '4 col. quinoa', 'Aspargos grelhados', 'Salada verde', '1 kiwi'],
          snack2: ['Wrap integral com frango e salada'],
          dinner: ['Omelete de claras com espinafre', 'Tomate cereja', 'Salada'],
          supper: ['Chá branco', '1 quadrado chocolate 70%'],
        },
      },
      {
        day: 'Sábado',
        meals: {
          breakfast: ['Crepioca com queijo', '1 mamão pequeno', 'Café ou chá sem açúcar'],
          snack1: ['Smoothie de frutas vermelhas'],
          lunch: ['150g peito de peru', '4 col. arroz integral', 'Salada caprese', 'Berinjela grelhada', '1 laranja'],
          snack2: ['Iogurte grego com mel (1 col.)'],
          dinner: ['Pizza integral caseira (2 fatias)', 'Salada verde abundante'],
          supper: ['Chá de camomila'],
        },
      },
      {
        day: 'Domingo',
        meals: {
          breakfast: ['Ovos Benedict com pão integral', '1 copo suco natural', 'Café'],
          snack1: ['1 maçã assada com canela'],
          lunch: ['150g carne assada', '4 col. arroz com legumes', '2 col. feijão', 'Salada completa', 'Melancia'],
          snack2: ['Sanduíche natural integral'],
          dinner: ['Sopa de legumes', 'Torradas integrais', 'Queijo branco'],
          supper: ['Chá calmante', '5 castanhas'],
        },
      },
    ],
  },
  moderado: {
    name: 'Moderado',
    calories: '1800-2000 kcal',
    description: 'Para quem já pratica atividade física regular',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/50',
    week: [
      {
        day: 'Segunda-feira',
        meals: {
          breakfast: ['3 ovos mexidos', '3 fatias pão integral', '1 banana', '1 col. pasta amendoim', 'Café com leite'],
          snack1: ['Shake whey protein', 'Frutas vermelhas'],
          lunch: ['200g carne magra', '5 col. arroz integral', '3 col. feijão', 'Salada completa', '150g batata doce'],
          snack2: ['Tapioca com queijo cottage', 'Suco verde'],
          dinner: ['180g frango', 'Macarrão integral (80g)', 'Molho de tomate', 'Brócolis'],
          supper: ['Vitamina de frutas com aveia'],
        },
      },
      {
        day: 'Terça-feira',
        meals: {
          breakfast: ['Panqueca proteica (3 unid.)', 'Mel (1 col.)', 'Frutas', 'Café'],
          snack1: ['Sanduíche integral atum', '1 banana'],
          lunch: ['200g filé de frango', '5 col. arroz com brócolis', 'Feijão', 'Salada', 'Mandioca cozida 150g'],
          snack2: ['Batata doce 150g', 'Frango desfiado 100g'],
          dinner: ['200g carne moída', 'Abobrinha espaguete', 'Molho vermelho', 'Salada'],
          supper: ['Shake caseína', 'Pasta amendoim 1 col.'],
        },
      },
      {
        day: 'Quarta-feira',
        meals: {
          breakfast: ['Omelete 3 ovos com queijo', 'Torradas integrais 3 unid.', 'Abacate', 'Café'],
          snack1: ['Iogurte grego proteico', 'Granola', 'Mel'],
          lunch: ['200g tilápia', '5 col. quinoa', 'Legumes grelhados', 'Salada', '1 maçã'],
          snack2: ['Wrap integral', 'Peito peru', 'Salada', 'Cream cheese'],
          dinner: ['180g salmão grelhado', 'Arroz integral 4 col.', 'Aspargos', 'Salada'],
          supper: ['Vitamina banana aveia'],
        },
      },
      {
        day: 'Quinta-feira',
        meals: {
          breakfast: ['Mingau aveia proteico', '2 ovos cozidos', 'Frutas', 'Café com leite'],
          snack1: ['Shake whey', 'Pasta amendoim', 'Banana'],
          lunch: ['200g picanha magra', '5 col. arroz integral', 'Feijão preto', 'Farofa', 'Vinagrete', 'Laranja'],
          snack2: ['Crepioca', 'Frango desfiado', 'Queijo'],
          dinner: ['Strogonoff frango light', 'Arroz integral', 'Batata palha integral', 'Salada'],
          supper: ['Iogurte proteico'],
        },
      },
      {
        day: 'Sexta-feira',
        meals: {
          breakfast: ['Tapioca recheada', 'Ovos mexidos', 'Queijo', 'Suco natural', 'Café'],
          snack1: ['Mix nuts e frutas secas', 'Whey'],
          lunch: ['200g lombo suíno', '5 col. arroz com açafrão', 'Salada tropical', 'Legumes', 'Abacaxi'],
          snack2: ['Sanduíche natural integral', 'Suco detox'],
          dinner: ['180g camarão grelhado', 'Legumes salteados', 'Salada', 'Azeite'],
          supper: ['Shake proteico'],
        },
      },
      {
        day: 'Sábado',
        meals: {
          breakfast: ['Panqueca americana (3 unid.)', 'Mel', 'Frutas', 'Ovos', 'Café'],
          snack1: ['Smoothie proteico completo'],
          lunch: ['200g costela magra assada', '5 col. arroz carreteiro', 'Salada completa', 'Mandioca', 'Sobremesa'],
          snack2: ['Pizza proteica caseira (2 fatias)'],
          dinner: ['Yakisoba integral', 'Frango e legumes', 'Gergelim'],
          supper: ['Iogurte grego'],
        },
      },
      {
        day: 'Domingo',
        meals: {
          breakfast: ['Breakfast bowl', 'Ovos', 'Abacate', 'Batata doce', 'Salada', 'Café'],
          snack1: ['Waffle proteico', 'Frutas', 'Mel'],
          lunch: ['200g filé mignon', '5 col. risoto de quinoa', 'Legumes assados', 'Salada nobre', 'Sobremesa'],
          snack2: ['Wrap fitness completo'],
          dinner: ['Massa integral com frango', 'Molho pesto', 'Salada caesar light'],
          supper: ['Vitamina proteica'],
        },
      },
    ],
  },
  lowcarb: {
    name: 'Low Carb',
    calories: '1600-1800 kcal',
    description: 'Redução de carboidratos para acelerar resultados',
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/50',
    week: [
      {
        day: 'Segunda-feira',
        meals: {
          breakfast: ['Omelete 3 ovos com queijo e espinafre', '1/2 abacate', 'Café com creme'],
          snack1: ['30g queijo', 'Oleaginosas'],
          lunch: ['200g salmão grelhado', 'Salada verde abundante', 'Aspargos', 'Azeite (2 col.)'],
          snack2: ['Iogurte grego integral', 'Chia'],
          dinner: ['180g carne moída', 'Abobrinha espaguete', 'Molho tomate', 'Salada caprese'],
          supper: ['Chá verde', 'Ovo cozido'],
        },
      },
      {
        day: 'Terça-feira',
        meals: {
          breakfast: ['Ovos Benedict (3 ovos)', 'Abacate', 'Bacon', 'Café bulletproof'],
          snack1: ['Fatias queijo cheddar', 'Nozes'],
          lunch: ['200g picanha', 'Salada caesar sem croutons', 'Parmesão', 'Azeite'],
          snack2: ['Smoothie abacate com cacau'],
          dinner: ['180g frango com pele', 'Couve-flor gratinada', 'Manteiga', 'Salada'],
          supper: ['Chá de hibisco', 'Castanhas'],
        },
      },
      {
        day: 'Quarta-feira',
        meals: {
          breakfast: ['Panqueca coco e ovos', 'Cream cheese', 'Morangos', 'Café'],
          snack1: ['Abacate com cacau', 'Adoçante'],
          lunch: ['200g tilápia', 'Caponata de berinjela', 'Salada verde', 'Azeite'],
          snack2: ['Iogurte natural integral', 'Amêndoas'],
          dinner: ['Hambúrguer caseiro 180g', 'Alface como pão', 'Queijo', 'Tomate', 'Salada'],
          supper: ['Chá', '2 ovos cozidos'],
        },
      },
      {
        day: 'Quinta-feira',
        meals: {
          breakfast: ['Omelete recheada', 'Queijo', 'Presunto', 'Tomate', 'Café com creme'],
          snack1: ['Mix de queijos', 'Azeitonas'],
          lunch: ['200g costela suína', 'Purê de couve-flor', 'Manteiga', 'Salada', 'Azeite'],
          snack2: ['Mousse abacate chocolate'],
          dinner: ['180g salmão', 'Legumes salteados na manteiga', 'Salada'],
          supper: ['Chá', 'Queijo cottage'],
        },
      },
      {
        day: 'Sexta-feira',
        meals: {
          breakfast: ['Shakshuka (ovos no molho)', 'Abacate', 'Café'],
          snack1: ['Fatias salame', 'Queijo', 'Azeitonas'],
          lunch: ['200g lombo', 'Abobrinha recheada com queijo', 'Salada verde', 'Azeite'],
          snack2: ['Iogurte grego', 'Coco ralado'],
          dinner: ['Pizza de frigideira', 'Frango', 'Mussarela', 'Tomate', 'Salada'],
          supper: ['Chá', 'Chocolate 85%'],
        },
      },
      {
        day: 'Sábado',
        meals: {
          breakfast: ['Crepioca de coco', 'Ovos mexidos', 'Bacon', 'Café bulletproof'],
          snack1: ['Smoothie proteico com abacate'],
          lunch: ['200g fraldinha', 'Salada completa', 'Parmesão', 'Azeite', 'Castanhas'],
          snack2: ['Tábua de queijos variados'],
          dinner: ['Wrap de alface', 'Frango', 'Bacon', 'Queijo', 'Abacate', 'Salada'],
          supper: ['Chá calmante'],
        },
      },
      {
        day: 'Domingo',
        meals: {
          breakfast: ['Ovos Benedict', 'Salmão defumado', 'Abacate', 'Café com creme'],
          snack1: ['Coco fresco', 'Castanhas do pará'],
          lunch: ['200g costela assada', 'Salada de repolho com bacon', 'Legumes assados', 'Azeite'],
          snack2: ['Fat bomb (bomba de gordura)', 'Chá gelado'],
          dinner: ['Camarão na manteiga de alho', 'Abobrinha grelhada', 'Salada', 'Limão'],
          supper: ['Chá', 'Queijo com nozes'],
        },
      },
    ],
  },
}

export function ChapterMealPlans() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  const togglePlan = (planKey: string) => {
    setExpandedPlan(expandedPlan === planKey ? null : planKey)
  }

  return (
    <ChapterLayout
      id="meal-plans"
      number="04"
      title="Cardápios Completos"
      subtitle="3 planos alimentares com cardápios de 7 dias"
    >
      <div className="space-y-12">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
          <p className="text-lg leading-relaxed text-pretty">
            Escolha o cardápio que melhor se adapta ao seu estilo de vida. Clique no plano para ver o cardápio completo da semana toda. 
            Todos foram calculados para garantir nutrição adequada e resultados sustentáveis.
          </p>
        </div>

        {Object.entries(weeklyMealPlans).map(([key, plan]) => (
          <div key={key} className={`bg-gradient-to-br ${plan.color} border-2 ${plan.borderColor} rounded-2xl overflow-hidden transition-all`}>
            {/* Plan Header - Always Visible */}
            <button
              onClick={() => togglePlan(key)}
              className="w-full p-8 text-left hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-4xl font-bold">{plan.name}</h3>
                <div className="flex items-center gap-4">
                  <span className="bg-card px-6 py-3 rounded-full font-bold text-lg border border-border">
                    {plan.calories}
                  </span>
                  {expandedPlan === key ? (
                    <ChevronUp className="w-8 h-8" />
                  ) : (
                    <ChevronDown className="w-8 h-8" />
                  )}
                </div>
              </div>
              <p className="text-lg text-muted-foreground text-pretty">{plan.description}</p>
              <div className="mt-4 text-sm font-semibold text-primary">
                {expandedPlan === key ? 'Clique para fechar' : 'Clique para ver o cardápio completo de 7 dias'}
              </div>
            </button>

            {/* Weekly Menu - Collapsible */}
            {expandedPlan === key && (
              <div className="px-8 pb-8 space-y-6">
                {plan.week.map((dayPlan, dayIndex) => (
                  <div key={dayIndex} className="bg-card rounded-xl p-6 border-2 border-border">
                    <h4 className="text-2xl font-bold mb-6 text-primary">{dayPlan.day}</h4>
                    
                    <div className="grid gap-4">
                      {/* Café da Manhã */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Coffee className="w-5 h-5 text-primary" />
                          <h5 className="font-bold">Café da Manhã</h5>
                          <span className="text-xs text-muted-foreground">(7h-9h)</span>
                        </div>
                        <ul className="space-y-1 text-sm">
                          {dayPlan.meals.breakfast.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Lanche da Manhã */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Apple className="w-5 h-5 text-primary" />
                          <h5 className="font-bold">Lanche Manhã</h5>
                          <span className="text-xs text-muted-foreground">(10h-11h)</span>
                        </div>
                        <ul className="space-y-1 text-sm">
                          {dayPlan.meals.snack1.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Almoço */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Sun className="w-5 h-5 text-primary" />
                          <h5 className="font-bold">Almoço</h5>
                          <span className="text-xs text-muted-foreground">(12h-14h)</span>
                        </div>
                        <ul className="space-y-1 text-sm">
                          {dayPlan.meals.lunch.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Lanche da Tarde */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Apple className="w-5 h-5 text-primary" />
                          <h5 className="font-bold">Lanche Tarde</h5>
                          <span className="text-xs text-muted-foreground">(16h-17h)</span>
                        </div>
                        <ul className="space-y-1 text-sm">
                          {dayPlan.meals.snack2.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Jantar */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Moon className="w-5 h-5 text-primary" />
                          <h5 className="font-bold">Jantar</h5>
                          <span className="text-xs text-muted-foreground">(19h-20h)</span>
                        </div>
                        <ul className="space-y-1 text-sm">
                          {dayPlan.meals.dinner.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ceia */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Moon className="w-5 h-5 text-primary" />
                          <h5 className="font-bold">Ceia (Opcional)</h5>
                          <span className="text-xs text-muted-foreground">(21h-22h)</span>
                        </div>
                        <ul className="space-y-1 text-sm">
                          {dayPlan.meals.supper.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Dicas e Tabela de Substituições */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-6">Dicas Importantes</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💧</span>
              <div>
                <h4 className="font-bold mb-1">Hidratação</h4>
                <p className="text-sm text-muted-foreground">Beba pelo menos 2 litros de água por dia, distribuídos entre as refeições.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="font-bold mb-1">Variedade</h4>
                <p className="text-sm text-muted-foreground">Você pode trocar os dias da semana entre si ou usar a tabela de substituições abaixo.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <h4 className="font-bold mb-1">Horários</h4>
                <p className="text-sm text-muted-foreground">Tente manter intervalos de 2,5 a 3 horas entre as refeições para acelerar o metabolismo.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Tabela de Substituições</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Use esta tabela para variar seu cardápio mantendo o valor nutricional:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { food: '100g de frango', substitutes: '100g peru, 100g peixe branco, 2 ovos, 100g carne magra' },
              { food: '4 col. arroz integral', substitutes: '150g batata doce, 100g macarrão integral, 3 col. quinoa, 150g mandioca' },
              { food: '1 maçã', substitutes: '1 pera, 1 banana pequena, 1 xícara morangos, 2 fatias abacaxi' },
              { food: '1 iogurte natural', substitutes: '1 copo leite desnatado, 30g queijo branco, 1 fatia queijo minas' },
              { food: 'Salada verde', substitutes: 'Alface, rúcula, espinafre, agrião - à vontade' },
              { food: '2 col. feijão', substitutes: '2 col. grão-de-bico, 2 col. lentilha, 2 col. ervilha' },
            ].map((item, i) => (
              <div key={i} className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-primary text-sm">{item.food}</h4>
                <p className="text-xs text-muted-foreground">
                  <strong>Pode trocar por:</strong> {item.substitutes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChapterLayout>
  )
}
