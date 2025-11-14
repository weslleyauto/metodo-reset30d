import { ChapterLayout } from './chapter-layout'
import { ChefHat, Clock, Flame } from 'lucide-react'

const recipes = [
  {
    category: 'Refeições Principais',
    items: [
      {
        name: 'Frango Grelhado com Ervas',
        time: '25 min',
        calories: '280 kcal',
        ingredients: [
          '200g de peito de frango',
          '1 col. (sopa) de azeite',
          'Alecrim, tomilho, alho',
          'Sal e pimenta',
        ],
        preparation: [
          'Tempere o frango com ervas, alho, sal e pimenta',
          'Deixe marinar por 15 minutos',
          'Aqueça uma grelha ou frigideira antiaderente',
          'Grelhe por 6-8 minutos de cada lado',
        ],
        tip: 'Faça vários peitos de uma vez e congele porções individuais.',
      },
      {
        name: 'Salmão ao Forno com Limão',
        time: '20 min',
        calories: '350 kcal',
        ingredients: [
          '200g de filé de salmão',
          '1 limão siciliano',
          'Dill fresco',
          'Azeite, sal e pimenta',
        ],
        preparation: [
          'Pré-aqueça o forno a 200°C',
          'Tempere o salmão com sal, pimenta e dill',
          'Regue com suco de limão e azeite',
          'Asse por 12-15 minutos até dourar',
        ],
        tip: 'Sirva com legumes assados para uma refeição completa.',
      },
      {
        name: 'Omelete de Claras com Vegetais',
        time: '10 min',
        calories: '180 kcal',
        ingredients: [
          '4 claras de ovo',
          '1 tomate picado',
          'Espinafre',
          'Cebola e pimentão',
        ],
        preparation: [
          'Refogue os vegetais em spray de cozinha',
          'Bata as claras com sal',
          'Despeje sobre os vegetais',
          'Cozinhe em fogo baixo até firmar',
        ],
        tip: 'Adicione queijo cottage para mais proteína.',
      },
    ],
  },
  {
    category: 'Smoothies Termogênicos',
    items: [
      {
        name: 'Smoothie Verde Detox',
        time: '5 min',
        calories: '150 kcal',
        ingredients: [
          '1 maçã verde',
          '1 punhado de espinafre',
          '1/2 limão (suco)',
          'Gengibre (1cm)',
          '200ml de água',
        ],
        preparation: [
          'Lave bem todos os ingredientes',
          'Bata tudo no liquidificador',
          'Adicione gelo se preferir',
          'Beba imediatamente',
        ],
        tip: 'Consuma pela manhã em jejum para potencializar efeitos.',
      },
      {
        name: 'Smoothie Proteico de Frutas Vermelhas',
        time: '5 min',
        calories: '220 kcal',
        ingredients: [
          '1 scoop de whey protein',
          '1 xícara de frutas vermelhas congeladas',
          '1 col. (sopa) de aveia',
          '200ml de leite desnatado',
        ],
        preparation: [
          'Adicione todos os ingredientes no liquidificador',
          'Bata até ficar cremoso',
          'Ajuste consistência com mais leite se necessário',
        ],
        tip: 'Perfeito como pós-treino ou lanche da tarde.',
      },
    ],
  },
  {
    category: 'Sobremesas Fit',
    items: [
      {
        name: 'Mousse de Chocolate Proteico',
        time: '10 min + 2h geladeira',
        calories: '120 kcal',
        ingredients: [
          '1 abacate maduro',
          '2 col. (sopa) de cacau em pó',
          '1 scoop de whey protein de chocolate',
          '2 col. (sopa) de adoçante',
        ],
        preparation: [
          'Bata todos os ingredientes no liquidificador',
          'Adicione água aos poucos até ficar cremoso',
          'Distribua em taças',
          'Leve à geladeira por 2 horas',
        ],
        tip: 'Decore com frutas vermelhas e nibs de cacau.',
      },
      {
        name: 'Brownie de Batata Doce',
        time: '35 min',
        calories: '180 kcal',
        ingredients: [
          '200g de batata doce cozida',
          '2 ovos',
          '3 col. (sopa) de cacau',
          '2 col. (sopa) de aveia',
          'Adoçante',
        ],
        preparation: [
          'Amasse a batata doce cozida',
          'Misture todos os ingredientes',
          'Despeje em forma untada',
          'Asse a 180°C por 25 minutos',
        ],
        tip: 'Rende 6 porções. Congele o que sobrar.',
      },
    ],
  },
]

export function ChapterRecipes() {
  return (
    <ChapterLayout
      id="recipes"
      number="05"
      title="Receitas Detalhadas"
      subtitle="Mais de 40 receitas práticas e deliciosas"
    >
      <div className="space-y-12">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
          <p className="text-lg leading-relaxed text-pretty">
            Todas as receitas foram testadas e aprovadas. Os valores calóricos são aproximados 
            e calculados por porção individual.
          </p>
        </div>

        {recipes.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <ChefHat className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">{category.category}</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {category.items.map((recipe, recipeIndex) => (
                <div
                  key={recipeIndex}
                  className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold mb-4 text-balance">{recipe.name}</h4>

                  {/* Info badges */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                      <Flame className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{recipe.calories}</span>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h5 className="font-bold text-lg mb-3">Ingredientes</h5>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preparation */}
                  <div className="mb-6">
                    <h5 className="font-bold text-lg mb-3">Modo de Preparo</h5>
                    <ol className="space-y-2">
                      {recipe.preparation.map((step, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold">
                            {i + 1}
                          </span>
                          <span className="text-pretty">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Tip */}
                  <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-4">
                    <p className="text-sm">
                      <strong className="text-accent">💡 Dica:</strong> {recipe.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ChapterLayout>
  )
}
