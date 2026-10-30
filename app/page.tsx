import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { DemoVideo } from '@/components/demo-video'
import { Audience } from '@/components/audience'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { WhyItMatters } from '@/components/why-it-matters'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <DemoVideo />
        <Audience />
        <Features />
        <HowItWorks />
        <WhyItMatters />
      </main>
      <SiteFooter />
    </>
  )
}
