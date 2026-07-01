import styles from './SectionNavTabs.module.scss'

export interface SectionNavTabItem {
  readonly id: string
  readonly label: string
}

export interface SectionNavTabsProps {
  readonly items: readonly SectionNavTabItem[]
  readonly ariaLabel?: string
}

export function SectionNavTabs({ items, ariaLabel }: SectionNavTabsProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <nav className={styles.root} aria-label={ariaLabel}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <a className={styles.link} href={`#${item.id}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
