/** Relative luminance sRGB (WCAG) */
export function luminanceFromCssColor(css: string): number {
  const m = css.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (!m) return 0
  const chan = [+m[1], +m[2], +m[3]].map((v) => {
    const x = v / 255
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * chan[0] + 0.7152 * chan[1] + 0.0722 * chan[2]
}

export function contrastRatio(fgCss: string, bgCss: string): number {
  const L1 = luminanceFromCssColor(fgCss)
  const L2 = luminanceFromCssColor(bgCss)
  const hi = Math.max(L1, L2)
  const lo = Math.min(L1, L2)
  return (hi + 0.05) / (lo + 0.05)
}
