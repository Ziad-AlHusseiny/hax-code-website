import { lazy, Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AppProviders } from './providers/AppProviders'

const PageBelowHero = lazy(() => import('./PageBelowHero'))

function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <PageBelowHero />
        </Suspense>
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
