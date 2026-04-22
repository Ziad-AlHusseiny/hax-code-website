import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  defaultLocale,
  messages,
  type Locale,
  type Messages,
} from '../content/locales'

const STORAGE_KEY = 'hax-locale'

function readStoredLocale(): Locale | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'ar' || v === 'en') return v
  } catch {
    /* ignore */
  }
  return null
}

type LocaleContextValue = {
  locale: Locale
  dir: 'rtl' | 'ltr'
  t: Messages
  setLocale: (l: Locale) => void
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return readStoredLocale() ?? defaultLocale
  })

  const dir: 'rtl' | 'ltr' = locale === 'ar' ? 'rtl' : 'ltr'
  const t = messages[locale]

  useEffect(() => {
    const root = document.documentElement
    root.lang = locale
    root.dir = dir
    document.title = t.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.meta.description)
  }, [locale, dir, t])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'ar' ? 'en' : 'ar')
  }, [locale, setLocale])

  const value = useMemo(
    () => ({ locale, dir, t, setLocale, toggleLocale }),
    [locale, dir, t, setLocale, toggleLocale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
