import { test, expect } from '@playwright/test'

test.describe('FAQ interaction', () => {
  test('first item expands and shows answer text', async ({ page }) => {
    await page.goto('/')
    await page.locator('#faq').scrollIntoViewIfNeeded()

    const buttons = page.locator('#faq button[aria-expanded]')
    const first = buttons.first()
    await expect(first).toHaveAttribute('aria-expanded', 'true')

    await first.click()
    await expect(first).toHaveAttribute('aria-expanded', 'false')

    await first.click()
    await expect(first).toHaveAttribute('aria-expanded', 'true')
  })
})
