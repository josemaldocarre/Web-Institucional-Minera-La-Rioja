import { useId } from 'react'
import styles from './SectionHeader.module.scss'

export type SectionHeaderVariant = 'green' | 'orange'

export interface SectionHeaderProps {
  readonly eyebrow?: string
  readonly title: string
  readonly variant: SectionHeaderVariant
  /** When set, applied to the `h2` (e.g. for `aria-labelledby` on `<section>`). */
  readonly headingId?: string
  /** Light text for use on dark or saturated backgrounds (e.g. contact card). */
  readonly inverse?: boolean
  readonly className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  variant,
  headingId: headingIdProp,
  inverse = false,
  className,
}: SectionHeaderProps) {
  const autoId = useId()
  const headingId = headingIdProp ?? autoId

  if (!eyebrow) {
    return (
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
    )
  }

  const rootClass = [
    styles.root,
    variant === 'green' ? styles.variantGreen : styles.variantOrange,
    inverse ? styles.inverse : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClass}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
    </div>
  )
}
