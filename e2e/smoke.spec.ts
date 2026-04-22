import { test, expect } from '@playwright/test'

const sectionIds = [
  'hero',
  'workflow',
  'pain',
  'modules',
  'why',
  'process',
  'showcase',
  'industries',
  'faq',
  'contact',
] as const

test.describe('Smoke — page structure', () => {
  test('loads without hard errors and exposes main landmarks', async ({
    page,
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('/')
    await expect(page.locator('[data-testid="site-header"]')).toBeVisible()
    await expect(page.locator('[data-testid="section-hero"]')).toBeVisible()

    for (const id of sectionIds) {
      await expect(page.locator(`#${id}`)).toBeAttached()
    }

    expect(errors, `page errors: ${errors.join('; ')}`).toEqual([])
  })

  test('primary CTAs and nav point to in-page anchors', async ({ page }) => {
    await page.goto('/')
    const hrefs = await page.locator('header nav a[href^="#"]').all()
    expect(hrefs.length).toBeGreaterThanOrEqual(4)
    for (const link of hrefs) {
      const h = await link.getAttribute('href')
      expect(h).toMatch(/^#[a-z-]+$/)
    }
  })
})
