import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'

export function IndustriesSection() {
  const { t, dir } = useLocale()

  return (
    <section
      id="industries"
      className="border-t border-black/[0.06] bg-paper-50 py-20 dark:border-white/[0.08] dark:bg-ink-950"
      dir={dir}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <ScrollReveal>
          <h2 className="max-w-[44rem] text-balance font-alexandria text-[clamp(1.875rem,3.6vw,3.1rem)] font-semibold leading-[1.14] tracking-tight text-text-on-light rtl:tracking-normal rtl:leading-snug dark:text-text-on-dark">
            {t.industries.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {t.industries.items.map((label, i) => (
            <ScrollReveal key={label} delay={0.03 * i}>
              <motion.div
                whileHover={{ y: -2 }}
                className="group flex items-center justify-between gap-3 rounded-xl border border-black/[0.06] bg-surface-light-1 px-3 py-3 dark:border-white/[0.08] dark:bg-surface-dark-1"
              >
                <span className="text-pretty text-[0.9375rem] font-medium text-text-on-light dark:text-text-on-dark">
                  {label}
                </span>
                <span className="flex size-8 items-center justify-center rounded-md border border-black/[0.06] text-brand-600 transition group-hover:border-brand-500/35 group-hover:bg-brand-500/8 dark:border-white/[0.1] dark:text-brand-400">
                  <ArrowUpRight className="size-3.5" strokeWidth={1.85} />
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
