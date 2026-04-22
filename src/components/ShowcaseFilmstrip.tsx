import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { showcaseSlides } from '../content/showcaseAssets'
import { useLocale } from '../context/LocaleContext'

const total = showcaseSlides.length

export function ShowcaseFilmstrip() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { locale, dir } = useLocale()
  const isAr = locale === 'ar'

  const goTo = useCallback((index: number) => {
    const i = Math.max(0, Math.min(total - 1, index))
    const el = scrollerRef.current?.querySelector<HTMLElement>(
      `[data-slide-index="${i}"]`,
    )
    el?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
    setActive(i)
  }, [])

  const scrollPrev = useCallback(() => {
    goTo(dir === 'rtl' ? active + 1 : active - 1)
  }, [active, dir, goTo])

  const scrollNext = useCallback(() => {
    goTo(dir === 'rtl' ? active - 1 : active + 1)
  }, [active, dir, goTo])

  /* مركز الشريحة = النشطة (تقريباً وسط منطقة العرض) */
  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return

    const slides = root.querySelectorAll<HTMLElement>('[data-slide-index]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0]?.target as HTMLElement | undefined
        const idx = top?.dataset.slideIndex
        if (idx !== undefined) setActive(Number.parseInt(idx, 10))
      },
      {
        root,
        rootMargin: '-32% 0px -32% 0px',
        threshold: [0.35, 0.55, 0.75],
      },
    )

    slides.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      const t = e.target as HTMLElement
      if (t.closest('input, textarea, [contenteditable]')) return
      const root = scrollerRef.current
      if (!root) return
      const r = root.getBoundingClientRect()
      const inView =
        r.top < window.innerHeight * 0.92 && r.bottom > window.innerHeight * 0.08
      if (!inView) return
      e.preventDefault()
      if (e.key === 'ArrowLeft') scrollPrev()
      else scrollNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [scrollPrev, scrollNext])

  function onRailKeyDown(e: ReactKeyboardEvent) {
    if (e.key === 'Home') {
      e.preventDefault()
      goTo(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      goTo(total - 1)
    }
  }

  return (
    <div
      className="relative mt-12"
      data-testid="showcase-filmstrip"
      onKeyDown={onRailKeyDown}
    >
      <div className="relative overflow-hidden rounded-2xl border border-black/[0.07] bg-gradient-to-b from-paper-50/90 via-paper-50/40 to-transparent p-1 dark:border-white/[0.09] dark:from-surface-dark-1/90 dark:via-ink-950/50 dark:to-transparent md:p-2">
        <div
          className="pointer-events-none absolute -start-24 top-1/2 h-[min(420px,55vh)] w-[min(420px,55vh)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.12),transparent_68%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(230,57,70,0.18),transparent_65%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -end-24 top-1/2 h-[min(380px,50vh)] w-[min(380px,50vh)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(151,19,32,0.1),transparent_68%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(255,92,99,0.12),transparent_65%)]"
          aria-hidden
        />

        <div className="relative flex items-center justify-between gap-3 px-2 pb-3 pt-2 md:px-4 md:pb-4 md:pt-3">
          <div>
            <p className="font-space text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-steel dark:text-white/45">
              {isAr ? 'معرض الواجهات' : 'Interface gallery'}
            </p>
            <p className="mt-1 font-alexandria text-sm text-muted-on-light dark:text-muted-on-dark">
              {isAr
                ? 'مرّر أو اضغط الأسهم — الشريحة في المنتصف هي النشطة'
                : 'Swipe or use arrows — the centered slide is active'}
            </p>
          </div>
          <div
            className="flex items-center gap-3"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="hidden font-space text-xs font-semibold tabular-nums text-text-on-light dark:text-text-on-dark sm:inline">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={scrollPrev}
                className="flex size-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/95 text-text-on-light shadow-md transition hover:border-brand-500/40 hover:bg-brand-500/10 dark:border-white/[0.12] dark:bg-ink-900/95 dark:text-text-on-dark dark:hover:bg-brand-500/15 md:size-11"
                aria-label={isAr ? 'السابق' : 'Previous'}
              >
                <ChevronLeft
                  className="size-5 rtl:rotate-180"
                  strokeWidth={1.85}
                />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="flex size-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/95 text-text-on-light shadow-md transition hover:border-brand-500/40 hover:bg-brand-500/10 dark:border-white/[0.12] dark:bg-ink-900/95 dark:text-text-on-dark dark:hover:bg-brand-500/15 md:size-11"
                aria-label={isAr ? 'التالي' : 'Next'}
              >
                <ChevronRight
                  className="size-5 rtl:rotate-180"
                  strokeWidth={1.85}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="relative px-1 pb-2 md:px-2">
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute start-1 top-[42%] z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-gradient-to-br from-brand-500 to-brand-700 p-2.5 text-white shadow-[0_8px_28px_rgba(230,57,70,0.35)] transition hover:scale-105 hover:shadow-[0_12px_36px_rgba(230,57,70,0.45)] md:start-2 md:flex lg:p-3"
            aria-label={isAr ? 'السابق' : 'Previous'}
          >
            <ChevronLeft className="size-5 rtl:rotate-180" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute end-1 top-[42%] z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-gradient-to-br from-brand-500 to-brand-700 p-2.5 text-white shadow-[0_8px_28px_rgba(230,57,70,0.35)] transition hover:scale-105 hover:shadow-[0_12px_36px_rgba(230,57,70,0.45)] md:end-2 md:flex lg:p-3"
            aria-label={isAr ? 'التالي' : 'Next'}
          >
            <ChevronRight className="size-5 rtl:rotate-180" strokeWidth={2.2} />
          </button>

          <div
            ref={scrollerRef}
            data-testid="showcase-scroller"
            role="region"
            aria-roledescription="carousel"
            aria-label={isAr ? 'شرائح معرض الواجهات' : 'Showcase slides'}
            tabIndex={0}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[max(1rem,calc(50%-min(42vw,380px)))] py-4 [scrollbar-color:rgba(230,57,70,0.45)_transparent] [scrollbar-width:thin] md:gap-6 md:px-[max(1.5rem,calc(50%-min(38vw,400px)))] md:py-6 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-500/45"
          >
            {showcaseSlides.map((slide, i) => {
              const isActive = i === active
              return (
                <motion.article
                  key={slide.file}
                  data-slide
                  data-slide-index={i}
                  data-testid={`showcase-slide-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.15) }}
                  className="snap-center shrink-0"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    transition={{
                      type: 'tween',
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group w-[min(84vw,680px)] md:w-[min(76vw,720px)]"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border bg-surface-light-1 transition-shadow duration-300 dark:bg-surface-dark-1 ${
                        isActive
                          ? 'border-brand-500/35 shadow-[0_28px_80px_rgba(230,57,70,0.14),0_12px_40px_rgba(0,0,0,0.12)] dark:border-brand-500/30 dark:shadow-[0_32px_90px_rgba(0,0,0,0.55),0_0_0_1px_rgba(230,57,70,0.12)]'
                          : 'border-black/[0.06] shadow-lg dark:border-white/[0.08] dark:shadow-[0_16px_48px_rgba(0,0,0,0.35)]'
                      }`}
                    >
                      <div className="absolute inset-x-0 top-0 z-[3] h-[3px] bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700" />
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-paper-100 via-paper-50 to-paper-100 dark:from-ink-900 dark:via-ink-950 dark:to-ink-900">
                        <div
                          className="pointer-events-none absolute inset-2 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_0_0_1px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                          aria-hidden
                        />
                        <picture>
                          <source
                            type="image/webp"
                            srcSet={`${import.meta.env.BASE_URL}showcase/${slide.file.replace(/\.png$/i, '.webp')}`}
                          />
                          <img
                            src={`${import.meta.env.BASE_URL}showcase/${slide.file}`}
                            alt={isAr ? slide.titleAr : slide.titleEn}
                            loading={i < 2 ? 'eager' : 'lazy'}
                            decoding="async"
                            draggable={false}
                            sizes="(max-width: 768px) 84vw, min(76vw, 720px)"
                            fetchPriority={i === 0 ? 'high' : undefined}
                            className="relative z-[1] h-full w-full object-contain object-center p-3 md:p-4"
                          />
                        </picture>
                      </div>
                      <div className="relative border-t border-black/[0.06] bg-gradient-to-r from-paper-50/95 via-white/90 to-paper-50/95 px-4 py-3.5 dark:border-white/[0.08] dark:from-surface-dark-2/95 dark:via-surface-dark-1/95 dark:to-surface-dark-2/95">
                        <p className="text-pretty font-alexandria text-[0.9375rem] font-semibold leading-snug text-text-on-light dark:text-text-on-dark">
                          {isAr ? slide.titleAr : slide.titleEn}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="font-space text-[0.625rem] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
                            HAX-CODE
                          </span>
                          <span className="h-px flex-1 max-w-[3rem] bg-gradient-to-r from-brand-500/50 to-transparent" />
                          <span className="font-space text-[0.625rem] text-steel dark:text-white/35">
                            ERP
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              )
            })}
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-2 px-3 pb-4 pt-1 md:gap-2.5 md:pb-5"
          role="tablist"
          aria-label={isAr ? 'اختر شريحة' : 'Choose slide'}
        >
          {showcaseSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`${isAr ? 'شريحة' : 'Slide'} ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-8 bg-gradient-to-r from-brand-400 to-brand-700 shadow-[0_0_12px_rgba(230,57,70,0.45)]'
                  : 'w-2 bg-black/15 hover:bg-brand-500/50 dark:bg-white/20 dark:hover:bg-brand-400/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
