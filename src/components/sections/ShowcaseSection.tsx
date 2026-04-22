import { useLocale } from '../../context/LocaleContext'
import { ScrollReveal } from '../ScrollReveal'
import { SectionLabel } from '../SectionLabel'
import { ShowcaseFilmstrip } from '../ShowcaseFilmstrip'

export function ShowcaseSection() {
  const { t, dir } = useLocale()

  return (
    <section
      id="showcase"
      data-testid="section-showcase"
      className="border-t border-black/[0.06] py-20 dark:border-white/[0.08]"
      dir={dir}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <ScrollReveal>
          <SectionLabel className="mb-4">{t.showcase.label}</SectionLabel>
          <h2 className="max-w-[44rem] text-balance font-alexandria text-[clamp(1.875rem,3.6vw,3.1rem)] font-semibold leading-[1.14] tracking-tight text-text-on-light rtl:tracking-normal rtl:leading-snug dark:text-text-on-dark">
            {t.showcase.heading}
          </h2>
          <p className="mt-4 max-w-[36rem] text-pretty text-[1.0625rem] leading-[1.65] text-muted-on-light dark:text-muted-on-dark">
            {t.showcase.paragraph}
          </p>
        </ScrollReveal>

        <ShowcaseFilmstrip />
      </div>
    </section>
  )
}
