import { ReactNode } from 'react'

interface ChapterLayoutProps {
  id: string
  number: string
  title: string
  subtitle: string
  children: ReactNode
}

export function ChapterLayout({ id, number, title, subtitle, children }: ChapterLayoutProps) {
  return (
    <section id={id} className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Chapter header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-7xl font-bold text-primary/20">{number}</span>
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-2 text-balance">{title}</h2>
              <p className="text-xl text-muted-foreground text-balance">{subtitle}</p>
            </div>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        {/* Chapter content */}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </section>
  )
}
