import { Radar } from 'lucide-react'
import { DEMO_URL } from '@/lib/links'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Radar className="size-4" aria-hidden="true" />
          </span>
          Renewal Radar
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
          <a href="#features" className="hidden text-muted-foreground hover:text-foreground sm:inline">
            Features
          </a>
          <a href="#why" className="hidden text-muted-foreground hover:text-foreground sm:inline">
            Why now
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-3.5 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Live demo
          </a>
        </nav>
      </div>
    </header>
  )
}
