import { GITHUB_URL } from '@/lib/links'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-medium">Built by John Khan · ALENZA CODES · Toronto, Ontario</p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-primary underline-offset-4 hover:underline"
          >
            Source code on GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="max-w-md text-muted-foreground">
          Not financial advice. Your lender&apos;s written payout statement is the final word on any
          penalty.
        </p>
      </div>
    </footer>
  )
}
