/**
 * Generates WebP variants for showcase PNGs (smaller transfer + decode).
 * Run: npm run optimize:showcase
 */
import { readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = dirname(fileURLToPath(import.meta.url))
const dir = join(root, '../public/showcase')
const maxW = 1280

const files = (await readdir(dir)).filter(
  (f) => f.endsWith('.png') && !f.startsWith('.'),
)

for (const f of files) {
  const inPath = join(dir, f)
  const outPath = join(dir, f.replace(/\.png$/i, '.webp'))
  await sharp(inPath)
    .resize({ width: maxW, withoutEnlargement: true })
    .webp({ quality: 80, effort: 4 })
    .toFile(outPath)
  console.log('wrote', f.replace(/\.png$/i, '.webp'))
}
