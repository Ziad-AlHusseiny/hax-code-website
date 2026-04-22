import { motion } from 'motion/react'
import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'
import { SectionLabel } from '../SectionLabel'

export function ProcessSection() {
  const { t, dir } = useLocale()

  return (
    <section
      id="process"
      data-testid="section-process"
      className="border-t border-black/[0.06] bg-section-light py-20 dark:border-white/[0.08] dark:bg-ink-900"
      dir={dir}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <ScrollReveal>
          <SectionLabel className="mb-4">{t.process.label}</SectionLabel>
          <h2 className="max-w-2xl text-balance font-alexandria text-[clamp(1.875rem,3.6vw,3.1rem)] font-semibold leading-[1.14] tracking-tight text-text-on-light rtl:tracking-normal rtl:leading-snug dark:text-text-on-dark">
            {t.process.heading}
          </h2>
        </ScrollReveal>

        <div className="relative mt-12">
          <div
            className="absolute top-5 hidden h-[calc(100%-1.25rem)] w-px bg-gradient-to-b from-brand-500/45 via-brand-500/15 to-transparent md:block"
            style={{ insetInlineStart: '1.15rem' }}
          />
          <div className="space-y-4">
            {t.process.steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={0.04 * i}>
                <motion.div
                  whileHover={{ x: dir === 'rtl' ? -3 : 3 }}
                  className="relative flex gap-4 md:gap-6"
                >
                  <div className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-md bg-brand-500 font-space text-[0.8125rem] font-bold text-white shadow-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-xl border border-black/[0.06] bg-surface-light-1 p-4 dark:border-white/[0.08] dark:bg-surface-dark-1">
                    <h3 className="font-alexandria text-[1.0625rem] font-semibold text-text-on-light dark:text-text-on-dark">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-pretty text-[0.875rem] leading-relaxed text-muted-on-light dark:text-muted-on-dark">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
