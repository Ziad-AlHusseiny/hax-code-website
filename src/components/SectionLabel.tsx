type Props = { children: string; className?: string }

/** Editorial kicker — LTR: Space Grotesk caps; RTL: Alexandria, no letter-spacing squeeze */
export function SectionLabel({ children, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className="h-px w-8 shrink-0 bg-brand-500 md:w-10"
        aria-hidden
      />
      <p
        className="text-[0.72rem] font-bold text-steel dark:text-white/45 ltr:font-space ltr:uppercase ltr:tracking-[0.26em] rtl:font-alexandria rtl:text-[0.8125rem] rtl:font-semibold rtl:tracking-normal"
      >
        {children}
      </p>
    </div>
  )
}
