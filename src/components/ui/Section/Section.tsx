import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Section.module.scss'

export type SectionProps = ComponentPropsWithoutRef<'section'> & {
  readonly children: ReactNode
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </section>
  )
}
