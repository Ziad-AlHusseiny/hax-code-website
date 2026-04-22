import { Mail, MapPin, Phone } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'

export function Footer() {
  const { t, dir } = useLocale()

  return (
    <footer
      className="section-accent-top border-t border-black/[0.06] bg-paper-100 py-12 dark:border-white/[0.08] dark:bg-ink-900"
      dir={dir}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="max-w-md">
          <p className="font-space text-[1.0625rem] font-bold tracking-tight text-text-on-light dark:text-text-on-dark">
            {t.nav.brand}
          </p>
          <p className="mt-2 text-pretty text-[0.875rem] leading-relaxed text-muted-on-light dark:text-muted-on-dark">
            {t.footer.tagline}
          </p>
        </div>
        <ul className="flex flex-col gap-2.5 text-[0.875rem] text-muted-on-light dark:text-muted-on-dark">
          <li className="flex items-start gap-2.5">
            <Mail className="mt-0.5 size-[0.9375rem] shrink-0 text-brand-500" />
            <span>{t.footer.email}</span>
          </li>
          <li className="flex items-start gap-2.5">
            <Phone className="mt-0.5 size-[0.9375rem] shrink-0 text-brand-500" />
            <span>{t.footer.phone}</span>
          </li>
          <li className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 size-[0.9375rem] shrink-0 text-brand-500" />
            <span>{t.footer.location}</span>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-[1280px] px-4 text-center font-space text-[0.6875rem] uppercase tracking-wider text-steel md:px-6">
        © {new Date().getFullYear()} HAX-CODE
      </p>
    </footer>
  )
}
