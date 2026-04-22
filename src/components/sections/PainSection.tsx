import { motion } from 'motion/react'
import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'

export function PainSection() {
  const { t, dir } = useLocale()

  return (
    <section id="pain" className="relative py-20 md:py-24" dir={dir}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(230,57,70,0.06),transparent_42%)] dark:bg-[radial-gradient(circle_at_85%_0%,rgba(230,57,70,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-6">
        <ScrollReveal>
          <h2 className="max-w-[40rem] text-balance font-alexandria text-[clamp(1.875rem,3.6vw,3.1rem)] font-semibold leading-[1.14] tracking-tight text-text-on-light rtl:tracking-normal rtl:leading-snug dark:text-text-on-dark">
            {t.pain.heading}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.06} className="mt-5 max-w-[36rem]">
          <p className="text-pretty text-[1.0625rem] leading-[1.65] text-muted-on-light dark:text-muted-on-dark">
            {t.pain.paragraph}
          </p>
        </ScrollReveal>

        <div className="mt-11 grid gap-4 md:grid-cols-3">
          {t.pain.cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={0.08 + i * 0.06}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 360, damping: 26 }}
                className="group relative flex h-full flex-col rounded-xl border border-black/[0.06] bg-surface-light-1 p-5 dark:border-white/[0.08] dark:bg-surface-dark-1"
              >
                <div className="mb-3 inline-flex w-fit rounded-md border border-brand-500/25 bg-brand-500/[0.08] px-2 py-1 font-space text-[0.6875rem] font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                  {card.title}
                </div>
                <p className="text-pretty text-[0.9375rem] leading-relaxed text-text-on-light dark:text-text-on-dark">
                  {card.body}
                </p>
                <div className="pointer-events-none mt-4 h-px w-full origin-start scale-x-0 bg-brand-500/35 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
