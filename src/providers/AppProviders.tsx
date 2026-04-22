import { type ReactNode } from 'react'
import { LocaleProvider } from '../context/LocaleContext'
import { ThemeProvider } from '../context/ThemeContext'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  )
}
