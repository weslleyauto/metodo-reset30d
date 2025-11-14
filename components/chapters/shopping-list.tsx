import { ChapterLayout } from './chapter-layout'
import { ShoppingCart, Check } from 'lucide-react'

const shoppingCategories = [
  {
    name: 'Proteínas',
    icon: '🍗',
    items: [
      { name: 'Peito de frango', quantity: '2kg', budget: 'Compre em atacado congelado' },
      { name: 'Ovos', quantity: '30 unidades', budget: 'Marcas próprias são mais baratas' },
      { name: 'Peixe (tilápia, merluza)', quantity: '1kg', budget: 'Congelado é econômico' },
      { name: 'Carne moída magra', quantity: '1kg', budget: 'Patinho ou coxão mole' },
      { name: 'Iogurte natural', quantity: '1L', budget: 'Faça em casa se possível' },
      { name: 'Queijo cottage/ricota', quantity: '500g', budget: 'Opção econômica para lanche' },
    ],
  },
  {
    name: 'Vegetais',
    icon: '🥬',
    items: [
      { name: 'Alface, rúcula, agrião', quantity: 'À vontade', budget: 'Compre da estação' },
      { name: 'Tomate', quantity: '1kg', budget: '' },
      { name: 'Pepino', quantity: '500g', budget: '' },
      { name: 'Brócolis', quantity: '500g', budget: 'Congelado mantém nutrientes' },
      { name: 'Couve-flor', quantity: '1 unidade', budget: '' },
      { name: 'Abobrinha', quantity: '500g', budget: '' },
      { name: 'Cenoura', quantity: '500g', budget: '' },
      { name: 'Espinafre', quantity: '1 maço', budget: 'Congelado é opção econômica' },
    ],
  },
  {
    name: 'Frutas',
    icon: '🍎',
    items: [
      { name: 'Maçã', quantity: '1kg', budget: 'Prefira da estação' },
      { name: 'Banana', quantity: '1 cacho', budget: 'Mais barata e nutritiva' },
      { name: 'Laranja/limão', quantity: '1kg', budget: 'Para sucos naturais' },
      { name: 'Frutas vermelhas', quantity: '500g', budget: 'Compre congeladas' },
      { name: 'Abacate', quantity: '2-3 unidades', budget: 'Fonte de gordura boa' },
    ],
  },
  {
    name: 'Carboidratos Bons',
    icon: '🌾',
    items: [
      { name: 'Arroz integral', quantity: '2kg', budget: 'Compre em pacotes grandes' },
      { name: 'Batata doce', quantity: '2kg', budget: 'Carboidrato de qualidade' },
      { name: 'Aveia', quantity: '500g', budget: 'Em flocos grossos ou farelo' },
      { name: 'Macarrão integral', quantity: '500g', budget: '' },
      { name: 'Pão integral', quantity: '1 pacote', budget: 'Veja ingredientes no rótulo' },
      { name: 'Tapioca', quantity: '500g', budget: 'Versátil e sem glúten' },
    ],
  },
  {
    name: 'Leguminosas',
    icon: '🫘',
    items: [
      { name: 'Feijão (preto, carioca)', quantity: '1kg', budget: 'Cozinhe e congele porções' },
      { name: 'Lentilha', quantity: '500g', budget: 'Rica em proteína vegetal' },
      { name: 'Grão de bico', quantity: '500g', budget: 'Versátil e nutritivo' },
    ],
  },
  {
    name: 'Temperos & Extras',
    icon: '🧂',
    items: [
      { name: 'Azeite extra virgem', quantity: '500ml', budget: 'Compre qualidade' },
      { name: 'Alho e cebola', quantity: 'À vontade', budget: '' },
      { name: 'Ervas (alecrim, tomilho)', quantity: '', budget: 'Frescas ou secas' },
      { name: 'Gengibre', quantity: '100g', budget: 'Para chás' },
      { name: 'Canela em pau', quantity: '1 pacote', budget: '' },
      { name: 'Sal rosa/marinho', quantity: '1kg', budget: '' },
      { name: 'Pimenta do reino', quantity: '', budget: '' },
    ],
  },
  {
    name: 'Snacks Saudáveis',
    icon: '🥜',
    items: [
      { name: 'Castanhas (amêndoas, nozes)', quantity: '200g', budget: 'Compre a granel' },
      { name: 'Pasta de amendoim integral', quantity: '500g', budget: '100% amendoim, sem açúcar' },
      { name: 'Whey protein', quantity: '900g', budget: 'Invista em qualidade' },
      { name: 'Cacau em pó 100%', quantity: '200g', budget: 'Para receitas fit' },
    ],
  },
]

export function ChapterShoppingList() {
  return (
    <ChapterLayout
      id="shopping"
      number="07"
      title="Lista de Compras"
      subtitle="Organizada por categorias e com dicas de economia"
    >
      <div className="space-y-12">
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
          <p className="text-lg leading-relaxed mb-4 text-pretty">
            Esta lista cobre aproximadamente 1 semana de alimentação para 1 pessoa seguindo 
            os cardápios sugeridos. Ajuste as quantidades conforme seu consumo.
          </p>
          <div className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
            <ShoppingCart className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground text-pretty">
              <strong className="text-foreground">Dica de ouro:</strong> Faça suas compras após 
              comer - você evita compras por impulso e economiza dinheiro!
            </p>
          </div>
        </div>

        {shoppingCategories.map((category, index) => (
          <div key={index} className="bg-card border-2 border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-3xl font-bold">{category.name}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group flex items-start gap-3 bg-muted/30 hover:bg-muted/60 rounded-xl p-4 transition-colors"
                >
                  <div className="shrink-0 w-6 h-6 rounded-md border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-colors">
                    <Check className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-bold text-foreground">{item.name}</h4>
                      {item.quantity && (
                        <span className="text-sm text-muted-foreground font-mono shrink-0">
                          {item.quantity}
                        </span>
                      )}
                    </div>
                    {item.budget && (
                      <p className="text-sm text-primary text-pretty">💰 {item.budget}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Budget tips */}
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-2 border-green-500/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">💵 Dicas Para Economizar</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Compre frutas e vegetais da estação - são mais baratos e nutritivos',
              'Prefira produtos congelados para proteínas e vegetais - mesma qualidade',
              'Compre em feiras livres no final do dia para pegar promoções',
              'Opte por marcas próprias de supermercado - qualidade similar',
              'Cozinhe em quantidade e congele porções individuais',
              'Compare preços online antes de ir ao supermercado',
              'Use aplicativos de cashback e cupons de desconto',
              'Evite comprar produtos processados e industrializados - são mais caros',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 bg-card rounded-xl p-4 border border-green-500/20">
                <span className="shrink-0 text-green-600 font-bold">✓</span>
                <p className="text-muted-foreground text-pretty">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Storage tips */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">🧊 Dicas de Armazenamento</h3>
          <div className="space-y-4">
            {[
              {
                title: 'Proteínas',
                tip: 'Congele em porções individuais assim que chegar do mercado. Duram 3-6 meses.',
              },
              {
                title: 'Vegetais',
                tip: 'Lave, seque bem e guarde em potes herméticos. Brócolis e couve-flor podem ser congelados.',
              },
              {
                title: 'Frutas',
                tip: 'Bananas muito maduras? Descasque e congele para smoothies. Frutas vermelhas congelam muito bem.',
              },
              {
                title: 'Grãos e cereais',
                tip: 'Potes herméticos evitam insetos. Feijão e lentilha cozidos duram 3 dias na geladeira.',
              },
              {
                title: 'Prep de refeições',
                tip: 'Dedique 2-3h no domingo para cozinhar e separar marmitas da semana.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-muted/30 rounded-xl p-6">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-pretty">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChapterLayout>
  )
}
