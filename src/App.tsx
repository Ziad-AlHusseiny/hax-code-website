import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FinalCTA } from './components/sections/FinalCTA'
import { FAQSection } from './components/sections/FAQSection'
import { HeroSection } from './components/sections/HeroSection'
import { IndustriesSection } from './components/sections/IndustriesSection'
import { ModulesGrid } from './components/sections/ModulesGrid'
import { PainSection } from './components/sections/PainSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { ShowcaseSection } from './components/sections/ShowcaseSection'
import { ValueStrip } from './components/sections/ValueStrip'
import { WhySection } from './components/sections/WhySection'
import { AppProviders } from './providers/AppProviders'

function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValueStrip />
        <PainSection />
        <ModulesGrid />
        <WhySection />
        <ProcessSection />
        <ShowcaseSection />
        <IndustriesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AppProviders>
      <Page />
    </AppProviders>
  )
}
