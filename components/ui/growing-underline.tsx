import { clsx } from 'clsx'
import type { CSSProperties } from 'react'

export function GrowingUnderline({
  as: Component = 'span',
  children,
  className,
  duration,
  ...rest
}: {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
  duration?: number
  [key: string]: any
}) {
  const { active, ...domSafeProps } = rest;

  return (
    <Component
      className={clsx('group relative inline-block', className)}
      style={{ '--duration': `${duration || 500}ms` } as React.CSSProperties}
      {...domSafeProps} 
    >
      <span
        className={clsx(
          'relative z-20 inline gap-1 transition-all duration-200',
          'group-hover:font-semibold group-hover:tracking-wide',
          'group-hover:animate-textBounce',
          'multiline-underline'
        )}
        style={{ whiteSpace: 'pre-line' }}
      >
        {children}
      </span>
    </Component>
  );
}
