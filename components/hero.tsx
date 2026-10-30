import { ArrowUpRight, PlayCircle } from 'lucide-react'
import { DEMO_URL, VIDEO_URL } from '@/lib/links'

export function Hero() {
  return (
    <section id="top" className="border-b bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium text-primary">A free web tool for Canadian homeowners</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
          Understand your mortgage renewal before you sign.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Renewal Radar reads your renewal letter, puts the offer next to alternatives, and shows
          what switching or breaking your mortgage could actually cost.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="flex flex-col gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Try the live demo
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Free hosting: the first load can take about a minute to wake up. Uses an illustrative
              sample letter, no personal information needed.
            </p>
          </div>
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-background px-6 py-3.5 font-medium text-primary transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <PlayCircle className="size-4" aria-hidden="true" />
            Watch the 2-minute demo
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
