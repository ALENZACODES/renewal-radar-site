import { FSR_URL } from '@/lib/links'

const stats = [
  { value: '12 months', label: 'until the last pandemic-era five-year fixed-payment mortgages renew' },
  { value: '~12%', label: 'of outstanding mortgages are in this group' },
  { value: '~15%', label: 'average payment increase these borrowers will see' },
]

export function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="why-heading" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 id="why-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
          Why it matters
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-pretty text-primary-foreground/90">
          The Bank of Canada&apos;s Financial Stability Report 2026 says the last of the five-year
          fixed-payment mortgages taken out during the pandemic renew over the next 12 months. That
          group is about 12% of outstanding mortgages, and those borrowers will see payments rise
          about 15% on average.
        </p>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl bg-primary-foreground/20 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col-reverse justify-end gap-2 bg-primary p-6">
              <dt className="text-sm leading-relaxed text-primary-foreground/85">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-sm text-primary-foreground/85">
          Source:{' '}
          <a
            href={FSR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-foreground underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
          >
            Bank of Canada, Financial Stability Report 2026
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </section>
  )
}
