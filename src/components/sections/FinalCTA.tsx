import { motion } from 'motion/react'
import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'

export function FinalCTA() {
  const { t, dir } = useLocale()

  return (
    <section
      id="contact"
      className="section-accent-top relative overflow-hidden py-20 md:py-28"
      dir={dir}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#0c0c0c_0%,#080808_45%,#050505_100%)]" />
      <div className="pointer-events-none absolute -start-[18%] top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.32),transparent_68%)] blur-2xl" />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-[40rem] rounded-xl border border-white/[0.1] bg-white/[0.03] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.45)] md:p-11">
            <h2 className="text-balance text-center font-alexandria text-[clamp(1.875rem,3.4vw,2.85rem)] font-semibold leading-[1.12] tracking-tight text-text-on-dark rtl:tracking-normal rtl:leading-snug">
              {t.cta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-[32rem] text-center text-pretty text-[1.0625rem] leading-[1.65] text-muted-on-dark">
              {t.cta.paragraph}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex min-w-[11rem] items-center justify-center rounded-md bg-brand-500 px-7 py-3 font-space text-[0.9375rem] font-semibold text-white shadow-[0_14px_40px_rgba(230,57,70,0.3)] transition-colors hover:bg-brand-400"
              >
                {t.cta.primary}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex min-w-[11rem] items-center justify-center rounded-md border border-white/18 bg-transparent px-7 py-3 font-space text-[0.9375rem] font-semibold text-text-on-dark transition hover:border-white/30 hover:bg-white/[0.05]"
              >
                {t.cta.secondary}
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
