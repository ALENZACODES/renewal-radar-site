import { Calculator, GitCompareArrows, ScanSearch, ShieldCheck, type LucideIcon } from 'lucide-react'

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: 'Letter X-Ray',
    description: 'Reads the renewal letter and lists each value with the page it came from.',
    icon: ScanSearch,
  },
  {
    title: 'Compare Offers',
    description: 'Puts the renewal offer next to alternatives with the net result after fees.',
    icon: GitCompareArrows,
  },
  {
    title: 'Stress Test Check',
    description:
      'Since November 2024, a straight switch to a new lender at renewal no longer needs the stress test for most uninsured mortgages. Shows when your situation still might.',
    icon: ShieldCheck,
  },
  {
    title: 'Penalty Workbench',
    description:
      "Estimates the cost of breaking a mortgage early, using the lender's own published method where one exists. Fourteen lenders checked against their own published calculators.",
    icon: Calculator,
  },
]

export function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 id="features-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
          What it does
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map(({ title, description, icon: Icon }) => (
            <li key={title} className="flex flex-col gap-4 rounded-xl border bg-card p-6 md:p-8">
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
