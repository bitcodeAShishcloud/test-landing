import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { WhyParticipate } from '@/components/sections/why-participate'
import { Structure } from '@/components/sections/structure'
import { Categories } from '@/components/sections/categories'
import { Club } from '@/components/sections/club'
import { Institution } from '@/components/sections/institution'
import { Metrics } from '@/components/sections/metrics'
import { Journey } from '@/components/sections/journey'
import { Announcement } from '@/components/sections/announcement'
import { FinalCta } from '@/components/sections/final-cta'
import { SiteFooter } from '@/components/sections/site-footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <SiteNav />
      <Hero />
      <WhyParticipate />
      <Structure />
      <Categories />
      <Club />
      <Institution />
      <Metrics />
      <Journey />
      <Announcement />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
