import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'

export function WhySection() {
  const { t, dir } = useLocale()

  return (
    <section
      id="why"
      className="section-accent-top relative overflow-hidden border-y border-black/[0.06] py-20 dark:border-white/[0.08] md:py-24"
      dir={dir}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_25%,rgba(230,57,70,0.08),transparent_45%),linear-gradient(180deg,#faf8f7_0%,#f4f0ee_100%)] dark:bg-hero-dark" />
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-6">
        <ScrollReveal>
          <h2 className="max-w-xl text-balance font-alexandria text-[clamp(1.875rem,3.6vw,3.1rem)] font-semibold leading-[1.14] tracking-tight text-text-on-light rtl:tracking-normal rtl:leading-snug dark:text-text-on-dark">
            {t.why.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {t.why.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -2 }}
                className="flex gap-3 rounded-xl border border-black/[0.06] bg-surface-light-1 p-4 md:gap-4 md:p-5 dark:border-white/[0.1] dark:bg-white/[0.03]"
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-brand-500/12 text-brand-700 ring-1 ring-brand-500/20 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-500/25">
                  <Check className="size-3.5" strokeWidth={2.25} />
                </span>
                <div>
                  <h3 className="font-alexandria text-[1.0625rem] font-semibold text-text-on-light dark:text-text-on-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-pretty text-[0.875rem] leading-relaxed text-muted-on-light dark:text-muted-on-dark">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
