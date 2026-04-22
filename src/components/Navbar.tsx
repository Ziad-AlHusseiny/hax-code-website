import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'
import { useTheme } from '../context/ThemeContext'

const anchors = [
  { key: 'home', hash: '#hero' },
  { key: 'solutions', hash: '#pain' },
  { key: 'modules', hash: '#modules' },
  { key: 'why', hash: '#why' },
  { key: 'faq', hash: '#faq' },
  { key: 'contact', hash: '#contact' },
] as const

export function Navbar() {
  const { t, locale, setLocale, dir } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const nav = t.nav

  return (
    <header
      data-testid="site-header"
      className="section-accent-top fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-paper-50/92 backdrop-blur-xl dark:border-white/[0.08] dark:bg-ink-950/92"
    >
      <div
        className="mx-auto flex h-[3.75rem] max-w-[1280px] items-center gap-3 px-4 md:h-16 md:px-6"
        dir={dir}
      >
        <a
          href="#hero"
          className="group flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="font-space text-[0.95rem] font-bold tracking-tight text-text-on-light dark:text-text-on-dark">
            {nav.brand}
          </span>
        </a>

        <nav className="ms-auto hidden items-center gap-0.5 lg:flex">
          {anchors.map((a) => (
            <a
              key={a.key}
              href={a.hash}
              className="rounded-md px-3 py-2 font-space text-[0.8125rem] font-medium text-muted-on-light transition-colors hover:bg-black/[0.04] hover:text-text-on-light dark:text-muted-on-dark dark:hover:bg-white/[0.06] dark:hover:text-text-on-dark"
            >
              {nav[a.key]}
            </a>
          ))}
        </nav>

        <div className="ms-0 flex items-center gap-1.5 sm:ms-2 lg:ms-0">
          <div
            className="flex overflow-hidden rounded-md border border-black/[0.08] p-px dark:border-white/[0.1]"
            role="group"
            aria-label={t.a11y.language}
          >
            <button
              type="button"
              data-testid="switch-lang-ar"
              onClick={() => setLocale('ar')}
              className={`px-2.5 py-1.5 font-space text-[0.6875rem] font-semibold transition-colors ${
                locale === 'ar'
                  ? 'bg-brand-500 text-white'
                  : 'text-muted-on-light hover:bg-black/[0.04] dark:text-muted-on-dark dark:hover:bg-white/[0.05]'
              }`}
            >
              AR
            </button>
            <button
              type="button"
              data-testid="switch-lang-en"
              onClick={() => setLocale('en')}
              className={`px-2.5 py-1.5 font-space text-[0.6875rem] font-semibold transition-colors ${
                locale === 'en'
                  ? 'bg-brand-500 text-white'
                  : 'text-muted-on-light hover:bg-black/[0.04] dark:text-muted-on-dark dark:hover:bg-white/[0.05]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            data-testid="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark' ? t.a11y.themeToLight : t.a11y.themeToDark
            }
            title={t.a11y.toggleTheme}
            className="flex size-9 items-center justify-center rounded-md border border-black/[0.08] text-text-on-light transition hover:bg-black/[0.04] dark:border-white/[0.1] dark:text-text-on-dark dark:hover:bg-white/[0.05]"
          >
            {theme === 'dark' ? (
              <Sun className="size-[17px]" strokeWidth={1.75} />
            ) : (
              <Moon className="size-[17px]" strokeWidth={1.75} />
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-md bg-brand-500 px-4 py-2 font-space text-[0.8125rem] font-semibold text-white shadow-sm transition hover:bg-brand-400 md:inline-flex"
          >
            {nav.cta}
          </a>

          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-md border border-black/[0.08] lg:hidden dark:border-white/[0.1]"
            aria-expanded={open}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-[18px]" />
            ) : (
              <Menu className="size-[18px]" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="border-t border-black/[0.06] bg-paper-50 dark:border-white/[0.08] dark:bg-ink-950 lg:hidden"
            dir={dir}
          >
            <nav className="mx-auto flex max-w-[1280px] flex-col gap-0.5 px-4 py-3 md:px-6">
              {anchors.map((a) => (
                <a
                  key={a.key}
                  href={a.hash}
                  className="rounded-md px-3 py-2.5 font-medium text-text-on-light hover:bg-black/[0.04] dark:text-text-on-dark dark:hover:bg-white/[0.05]"
                  onClick={() => setOpen(false)}
                >
                  {nav[a.key]}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-md bg-brand-500 py-2.5 text-center font-space text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {nav.cta}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
