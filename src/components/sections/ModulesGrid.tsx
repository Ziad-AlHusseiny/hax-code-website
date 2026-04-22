import { motion } from 'motion/react'
import {
  BarChart3,
  Building2,
  Package,
  Settings2,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
} from 'lucide-react'
import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'

const icons = [
  ShoppingCart,
  Package,
  Truck,
  Users,
  Building2,
  Wallet,
  BarChart3,
  Settings2,
]

export function ModulesGrid() {
  const { t, dir } = useLocale()

  return (
    <section
      id="modules"
      className="border-t border-black/[0.06] bg-paper-100 py-20 dark:border-white/[0.08] dark:bg-ink-950"
      dir={dir}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <ScrollReveal>
          <h2 className="max-w-[44rem] text-balance font-alexandria text-[clamp(1.875rem,3.6vw,3.1rem)] font-semibold leading-[1.14] tracking-tight text-text-on-light rtl:tracking-normal rtl:leading-snug dark:text-text-on-dark">
            {t.modules.heading}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05} className="mt-4 max-w-[36rem]">
          <p className="text-pretty text-[1.0625rem] leading-[1.65] text-muted-on-light dark:text-muted-on-dark">
            {t.modules.intro}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.modules.items.map((item, i) => {
            const Icon = icons[i] ?? Package
            return (
              <ScrollReveal key={item.title} delay={0.04 * i}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className="group flex h-full flex-col rounded-xl border border-black/[0.06] bg-surface-light-1 p-4 dark:border-white/[0.08] dark:bg-surface-dark-2"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-md border border-black/[0.06] bg-paper-50 text-brand-600 dark:border-white/[0.08] dark:bg-ink-900 dark:text-brand-400">
                      <Icon className="size-[1.125rem]" strokeWidth={1.65} />
                    </span>
                    <span className="font-space text-[0.625rem] font-bold uppercase tracking-[0.2em] text-steel dark:text-white/35">
                      ERP
                    </span>
                  </div>
                  <h3 className="font-alexandria text-[1.0625rem] font-semibold text-text-on-light dark:text-text-on-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-pretty text-[0.875rem] leading-relaxed text-muted-on-light dark:text-muted-on-dark">
                    {item.body}
                  </p>
                  <div className="mt-3 h-px w-full origin-start scale-x-0 bg-brand-500/30 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
