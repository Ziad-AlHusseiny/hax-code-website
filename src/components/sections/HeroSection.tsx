import { motion } from 'motion/react'
import { useLocale } from '../../context/LocaleContext'
import { HeroErp3D } from '../HeroErp3D'

export function HeroSection() {
  const { t, dir, locale } = useLocale()

  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative overflow-hidden pt-[4.5rem] pb-14 md:pt-24 md:pb-20"
      dir={dir}
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-dark" />
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[380px] w-[min(820px,120vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.22),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-4 md:gap-16 md:px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span
                className="size-1.5 shrink-0 rounded-[2px] bg-brand-500"
                aria-hidden
              />
              <span className="font-space text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-white/55">
                HAX-CODE · ERP
              </span>
            </div>
            <h1 className="text-balance font-alexandria text-[clamp(2.75rem,5.8vw,5.25rem)] font-semibold leading-[1.04] tracking-tight text-text-on-dark rtl:tracking-normal rtl:leading-[1.08]">
              {t.hero.headline}
            </h1>
            <p className="mt-6 max-w-[34rem] text-pretty text-[1.0625rem] leading-[1.65] text-muted-on-dark">
              {t.hero.sub}
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-3 font-space text-[0.9375rem] font-semibold text-white shadow-[0_14px_40px_rgba(230,57,70,0.28)] transition-colors hover:bg-brand-400"
              >
                {t.hero.primaryCta}
              </motion.a>
              <motion.a
                href="#modules"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center rounded-md border border-white/16 bg-white/[0.04] px-6 py-3 font-space text-[0.9375rem] font-semibold text-text-on-dark transition hover:border-white/28 hover:bg-white/[0.07]"
              >
                {t.hero.secondaryCta}
              </motion.a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-2">
              {t.hero.chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-md border border-white/12 bg-transparent px-2.5 py-1 font-space text-[0.6875rem] font-medium uppercase tracking-wide text-white/45"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[300px] lg:min-h-[400px]"
        >
          <HeroErp3D locale={locale} />
        </motion.div>
      </div>
    </section>
  )
}
