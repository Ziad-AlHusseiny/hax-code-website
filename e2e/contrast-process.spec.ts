import { test, expect } from '@playwright/test'
import { contrastRatio, luminanceFromCssColor } from './helpers/color'

/**
 * Regression: process heading must not be light-on-light (dark theme + bg-section-light bug).
 */
test.describe('Contrast — process section heading', () => {
  test('dark theme: heading vs section background meets WCAG AA (4.5:1)', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      localStorage.setItem('hax-theme', 'dark')
      localStorage.setItem('hax-locale', 'ar')
    })
    await page.goto('/')
    await page.locator('#process').scrollIntoViewIfNeeded()

    const { fg, bg } = await page.evaluate(() => {
      const section = document.querySelector('#process') as HTMLElement
      const h2 = section.querySelector('h2') as HTMLElement
      const fg = getComputedStyle(h2).color
      let el: HTMLElement | null = section
      let bg = 'rgb(0, 0, 0)'
      while (el) {
        const c = getComputedStyle(el).backgroundColor
        if (c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') {
          bg = c
          break
        }
        el = el.parentElement
      }
      return { fg, bg }
    })

    const ratio = contrastRatio(fg, bg)
    expect(
      ratio,
      `contrast ${ratio.toFixed(2)} for fg=${fg} bg=${bg}`,
    ).toBeGreaterThanOrEqual(4.5)

    // Sanity: dark surface + light text
    expect(luminanceFromCssColor(fg)).toBeGreaterThan(0.55)
    expect(luminanceFromCssColor(bg)).toBeLessThan(0.12)
  })

  test('light theme: heading vs design band (paper) meets WCAG AA', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      localStorage.setItem('hax-theme', 'light')
      localStorage.setItem('hax-locale', 'ar')
    })
    await page.goto('/')
    await page.locator('#process').scrollIntoViewIfNeeded()

    const fg = await page.evaluate(() => {
      const h2 = document.querySelector('#process h2') as HTMLElement
      return getComputedStyle(h2).color
    })

    /* Gradient bands: compare heading to worst-case end stop (DESIGN.md paper-100) */
    const band = 'rgb(244, 240, 238)'
    const ratio = contrastRatio(fg, band)
    expect(
      ratio,
      `contrast ${ratio.toFixed(2)} for fg=${fg} on ${band}`,
    ).toBeGreaterThanOrEqual(4.5)

    expect(luminanceFromCssColor(fg)).toBeLessThan(0.25)
  })
})
