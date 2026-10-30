const steps = [
  'Load your renewal letter (or the sample)',
  'Compare offers and check the penalty',
  'Walk into your renewal call with a plan',
]

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="border-t bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 id="how-it-works-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">
          How it works
        </h2>
        <ol className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6">
          {steps.map((step, index) => (
            <li key={step} className="flex flex-1 items-center gap-4 rounded-xl border bg-card p-5">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="font-medium leading-snug">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
