import { BookCover } from '@/components/book-cover'
import { TableOfContents } from '@/components/table-of-contents'
import { ChapterPresentation } from '@/components/chapters/presentation'
import { ChapterUnderstanding } from '@/components/chapters/understanding'
import { ChapterMethods } from '@/components/chapters/methods'
import { ChapterMealPlans } from '@/components/chapters/meal-plans'
import { ChapterRecipes } from '@/components/chapters/recipes'
import { ChapterTeas } from '@/components/chapters/teas'
import { ChapterShoppingList } from '@/components/chapters/shopping-list'
import { ChapterWorkouts } from '@/components/chapters/workouts'
import { ChapterPsychology } from '@/components/chapters/psychology'
import { ChapterDailyPlan } from '@/components/chapters/daily-plan'
import { ChapterProgress } from '@/components/chapters/progress'
import { ChapterConclusion } from '@/components/chapters/conclusion'

export default function EbookPage() {
  return (
    <main className="min-h-screen bg-background">
      <BookCover />
      <TableOfContents />
      <ChapterPresentation />
      <ChapterUnderstanding />
      <ChapterMethods />
      <ChapterMealPlans />
      <ChapterRecipes />
      <ChapterTeas />
      <ChapterShoppingList />
      <ChapterWorkouts />
      <ChapterPsychology />
      <ChapterDailyPlan />
      <ChapterProgress />
      <ChapterConclusion />
    </main>
  )
}
