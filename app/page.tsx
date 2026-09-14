import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { WhyParticipate } from '@/components/sections/why-participate'
import { Structure } from '@/components/sections/structure'
import { Categories } from '@/components/sections/categories'
import { Club } from '@/components/sections/club'
import { Institution } from '@/components/sections/institution'
import { Metrics } from '@/components/sections/metrics'
import { Sponsors } from '@/components/sections/sponsors'
import { Team } from '@/components/sections/team'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
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
      <Sponsors />
      <Team />
      <Faq />
      <Contact />
      <Announcement />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
