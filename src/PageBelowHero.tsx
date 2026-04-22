import { FinalCTA } from './components/sections/FinalCTA'
import { FAQSection } from './components/sections/FAQSection'
import { IndustriesSection } from './components/sections/IndustriesSection'
import { ModulesGrid } from './components/sections/ModulesGrid'
import { PainSection } from './components/sections/PainSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { ShowcaseSection } from './components/sections/ShowcaseSection'
import { ValueStrip } from './components/sections/ValueStrip'
import { WhySection } from './components/sections/WhySection'

/** Lazy-loaded in App to trim initial JS parse and speed first paint. */
export default function PageBelowHero() {
  return (
    <>
      <ValueStrip />
      <PainSection />
      <ModulesGrid />
      <WhySection />
      <ProcessSection />
      <ShowcaseSection />
      <IndustriesSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
