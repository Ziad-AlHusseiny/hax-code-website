import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'

export function FAQSection() {
  const { t, dir } = useLocale()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      data-testid="section-faq"
      className="border-t border-black/[0.06] py-20 dark:border-white/[0.08]"
      dir={dir}
    >
      <div className="mx-auto max-w-[760px] px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-center font-alexandria text-[clamp(1.875rem,3.6vw,3.1rem)] font-semibold leading-[1.14] tracking-tight text-text-on-light rtl:tracking-normal rtl:leading-snug dark:text-text-on-dark">
            {t.faq.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-9 space-y-2">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <ScrollReveal key={item.q} delay={0.03 * i}>
                <motion.div
                  layout
                  className="overflow-hidden rounded-xl border border-black/[0.06] bg-surface-light-1 dark:border-white/[0.08] dark:bg-surface-dark-1"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start gap-3 p-4 text-start transition hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
                    aria-expanded={isOpen}
                  >
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-500/10 font-space text-[0.75rem] font-bold text-brand-700 dark:text-brand-300">
                      {i + 1}
                    </span>
                    <span className="flex-1 font-alexandria text-[0.9375rem] font-semibold leading-snug text-text-on-light dark:text-text-on-dark">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="text-muted-on-light dark:text-muted-on-dark"
                    >
                      <ChevronDown className="size-[1.125rem]" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="border-t border-black/[0.06] px-4 pb-4 ps-[3.35rem] text-pretty text-[0.875rem] leading-relaxed text-muted-on-light dark:border-white/[0.08] dark:text-muted-on-dark">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
