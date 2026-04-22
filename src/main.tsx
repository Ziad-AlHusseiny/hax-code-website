import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { defaultLocale, messages } from './content/locales'

function bootstrapDocument() {
  const root = document.documentElement
  try {
    const storedTheme = localStorage.getItem('hax-theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark =
      storedTheme === 'dark' ||
      (storedTheme !== 'light' && systemDark)
    root.classList.toggle('dark', dark)

    const storedLocale = localStorage.getItem('hax-locale')
    const locale =
      storedLocale === 'en' || storedLocale === 'ar'
        ? storedLocale
        : defaultLocale
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    root.lang = locale
    root.dir = dir
    document.title = messages[locale].meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', messages[locale].meta.description)
  } catch {
    /* ignore */
  }
}

bootstrapDocument()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
