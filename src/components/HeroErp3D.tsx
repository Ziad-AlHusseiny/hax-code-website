import { useEffect, useRef, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'
import type { Locale } from '../content/locales'

type Props = { locale: Locale }

function WindowChrome({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/[0.09] bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-[3px] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-1.5">
        <span className="flex gap-1">
          <span className="size-1.5 rounded-[1px] bg-brand-500" />
          <span className="size-1.5 rounded-[1px] bg-white/22" />
          <span className="size-1.5 rounded-[1px] bg-white/12" />
        </span>
        <span className="ms-auto truncate font-space text-[10px] font-medium uppercase tracking-wider text-white/55">
          {title}
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  )
}

export function HeroErp3D({ locale }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const pendingRef = useRef({ x: 0.5, y: 0.5 })
  const reduced = useReducedMotion()
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const rotX = useSpring(
    useTransform(my, [0, 1], reduced ? [0, 0] : [9, -9]),
    { stiffness: 120, damping: 28, mass: 0.4 },
  )
  const rotY = useSpring(
    useTransform(mx, [0, 1], reduced ? [0, 0] : [-14, 14]),
    { stiffness: 120, damping: 28, mass: 0.4 },
  )

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    },
    [],
  )

  function onMove(e: React.MouseEvent) {
    if (reduced || !wrapRef.current) return
    const r = wrapRef.current.getBoundingClientRect()
    pendingRef.current = {
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    }
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0
      const { x, y } = pendingRef.current
      mx.set(x)
      my.set(y)
    })
  }

  function onLeave() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }
    mx.set(0.5)
    my.set(0.5)
  }

  const titles =
    locale === 'ar'
      ? ['لوحة مبيعات', 'المخزون', 'أمر شراء', 'ملف عميل', 'تقارير']
      : ['Sales board', 'Inventory', 'Purchase order', 'Customer', 'Reports']

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto flex h-[min(520px,78vw)] max-w-[640px] items-center justify-center [perspective:1400px] md:max-w-none lg:h-[560px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,57,70,0.22),transparent_55%)] opacity-90"
      />

      <motion.div
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full w-full max-w-[920px]"
      >
        {/* Back plane */}
        <motion.div
          animate={
            reduced
              ? {}
              : { y: [0, -6, 0], rotateZ: [0, 0.4, 0] }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transform: 'translateZ(-80px) translateX(-12%) translateY(8%)' }}
          className="absolute start-[6%] top-[18%] w-[42%] max-md:w-[48%]"
        >
          <WindowChrome title={titles[3]} className="opacity-95">
            <div className="space-y-2">
              <div className="h-2 w-3/5 rounded bg-white/10" />
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white/5 p-2">
                  <div className="h-1.5 w-1/2 rounded bg-brand-500/50" />
                  <div className="mt-2 h-8 rounded bg-white/5" />
                </div>
                <div className="rounded-lg bg-white/5 p-2">
                  <div className="h-1.5 w-2/3 rounded bg-white/15" />
                  <div className="mt-2 space-y-1">
                    <div className="h-1.5 rounded bg-white/10" />
                    <div className="h-1.5 rounded bg-white/8" />
                    <div className="h-1.5 rounded bg-white/6" />
                  </div>
                </div>
              </div>
            </div>
          </WindowChrome>
        </motion.div>

        <motion.div
          animate={reduced ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(-40px) translateX(28%) translateY(22%)' }}
          className="absolute start-[38%] top-[6%] w-[46%] max-md:w-[52%]"
        >
          <WindowChrome title={titles[1]}>
            <div className="space-y-2">
              <div className="flex gap-1">
                {['SKU', 'Qty', 'Bin'].map((h) => (
                  <div
                    key={h}
                    className="h-5 flex-1 rounded bg-white/8 px-1 font-space text-[9px] leading-5 text-white/45"
                  >
                    {h}
                  </div>
                ))}
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-1">
                  <div className="h-4 flex-[1.2] rounded bg-white/6" />
                  <div className="h-4 flex-1 rounded bg-white/10" />
                  <div className="h-4 w-10 rounded bg-brand-500/25" />
                </div>
              ))}
            </div>
          </WindowChrome>
        </motion.div>

        {/* Center hero panel */}
        <motion.div
          animate={reduced ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(24px) translateX(4%) translateY(0)' }}
          className="absolute start-[18%] top-[12%] w-[58%] max-md:start-[8%] max-md:w-[72%]"
        >
          <WindowChrome title={titles[0]} className="ring-1 ring-brand-500/25">
            <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { w: '78%', a: 'bg-brand-500/35' },
                  { w: '62%', a: 'bg-white/12' },
                  { w: '70%', a: 'bg-white/10' },
                  { w: '55%', a: 'bg-white/8' },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5"
                  >
                    <div className={`h-1.5 rounded ${c.a}`} style={{ width: c.w }} />
                    <div className="mt-3 h-6 rounded bg-white/6" />
                    <div className="mt-2 h-1.5 w-4/5 rounded bg-white/8" />
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <div className="flex h-24 items-end gap-1 pt-2">
                  {[40, 65, 48, 82, 58, 90, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-brand-700/40 to-brand-400/90"
                      style={{ height: `${Math.round((h / 100) * 88)}px` }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between font-space text-[9px] text-white/35">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </WindowChrome>
        </motion.div>

        <motion.div
          animate={reduced ? {} : { y: [0, 6, 0], x: [0, -4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(60px) translateX(42%) translateY(38%)' }}
          className="absolute start-[22%] top-[48%] w-[40%] max-md:top-[52%] max-md:w-[46%]"
        >
          <WindowChrome title={titles[2]}>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="h-6 flex-1 rounded-md border border-white/10 bg-white/5" />
                <div className="h-6 w-16 rounded-md bg-brand-500/30" />
              </div>
              <div className="h-1.5 w-full rounded bg-white/8" />
              <div className="h-1.5 w-4/5 rounded bg-white/6" />
              <div className="mt-2 grid grid-cols-3 gap-1">
                <div className="h-10 rounded bg-white/5" />
                <div className="h-10 rounded bg-white/8" />
                <div className="h-10 rounded bg-brand-500/20" />
              </div>
            </div>
          </WindowChrome>
        </motion.div>

        <motion.div
          animate={reduced ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(10px) translateX(-6%) translateY(58%)' }}
          className="absolute start-[8%] top-[56%] w-[36%] max-md:hidden"
        >
          <WindowChrome title={titles[4]}>
            <div className="flex items-center gap-2">
              <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-brand-900/50 to-brand-500/20" />
              <div className="flex w-20 flex-col gap-1">
                <div className="h-2 rounded bg-white/15" />
                <div className="h-2 rounded bg-white/10" />
                <div className="h-2 rounded bg-white/8" />
              </div>
            </div>
          </WindowChrome>
        </motion.div>
      </motion.div>
    </div>
  )
}
