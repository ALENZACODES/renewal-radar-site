import { FileText } from 'lucide-react'

export function Audience() {
  return (
    <section aria-labelledby="audience-heading" className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 id="audience-heading" className="text-sm font-medium uppercase tracking-widest text-primary">
          Who it&apos;s for
        </h2>
        <div className="flex gap-4">
          <FileText className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-2xl leading-snug font-medium text-pretty md:text-3xl">
            A Canadian homeowner whose fixed-rate mortgage is coming up for renewal and who has the
            renewal letter in hand.
          </p>
        </div>
      </div>
    </section>
  )
}
