import { motion } from 'motion/react'
import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'
import { SectionLabel } from '../SectionLabel'

export function ValueStrip() {
  const { t, dir } = useLocale()

  return (
    <section
      id="workflow"
      className="section-accent-top border-b border-black/[0.06] bg-section-light py-12 dark:border-white/[0.08] dark:bg-ink-900"
      dir={dir}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <ScrollReveal>
          <SectionLabel className="mb-8">{t.valueStrip.label}</SectionLabel>
        </ScrollReveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.valueStrip.points.map((point, i) => (
            <ScrollReveal key={point} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                className="group relative overflow-hidden rounded-xl border border-black/[0.06] bg-surface-light-1 p-4 dark:border-white/[0.08] dark:bg-surface-dark-1"
              >
                <div className="absolute start-0 top-0 h-[2px] w-full origin-start scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
                <p className="text-pretty text-[0.9375rem] font-medium leading-snug text-text-on-light dark:text-text-on-dark">
                  {point}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
