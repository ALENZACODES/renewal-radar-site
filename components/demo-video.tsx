export function DemoVideo() {
  return (
    <section id="demo-video" aria-labelledby="demo-video-heading" className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 id="demo-video-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">
          See it in 2 minutes
        </h2>
        <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl border bg-muted">
          <iframe
            src="https://www.youtube-nocookie.com/embed/77fjUXwTWYE"
            title="Renewal Radar 2-minute demo"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="size-full"
          />
        </div>
      </div>
    </section>
  )
}
