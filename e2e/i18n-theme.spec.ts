import { test, expect } from '@playwright/test'

test.describe('i18n + theme', () => {
  test('Arabic default: html dir rtl and lang ar', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.removeItem('hax-locale')
      localStorage.removeItem('hax-theme')
    })
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar')
  })

  test('switch to English sets LTR and lang en', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('switch-lang-en').click()
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page).toHaveTitle(/HAX-CODE — Simple, premium ERP/i)
  })

  test('switch back to Arabic restores RTL', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('switch-lang-en').click()
    await page.getByTestId('switch-lang-ar').click()
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar')
  })

  test('theme toggle adds/removes .dark on documentElement', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      localStorage.setItem('hax-theme', 'light')
    })
    await page.goto('/')
    await expect(page.locator('html')).not.toHaveClass(/dark/)

    await page.getByTestId('theme-toggle').click()
    await expect(page.locator('html')).toHaveClass(/dark/)

    await page.getByTestId('theme-toggle').click()
    await expect(page.locator('html')).not.toHaveClass(/dark/)
  })
})
