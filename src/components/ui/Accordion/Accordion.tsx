import { useState } from 'react'
import type { ReactNode } from 'react'
import styles from './Accordion.module.scss'

export interface AccordionItem {
  readonly id: string
  readonly title: string
  readonly content: ReactNode
}

export interface AccordionProps {
  readonly items: readonly AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [expandedIds, setExpandedIds] = useState<ReadonlySet<string>>(() => new Set())

  if (items.length === 0) {
    return null
  }

  const toggleItem = (id: string) => {
    setExpandedIds((current) => {
      const next = new Set(current)

      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }

      return next
    })
  }

  return (
    <div className={styles.root}>
      {items.map((item) => {
        const isExpanded = expandedIds.has(item.id)
        const triggerId = `accordion-trigger-${item.id}`
        const panelId = `accordion-panel-${item.id}`

        return (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.header}>
              <button
                type="button"
                id={triggerId}
                className={styles.trigger}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
              >
                <span className={styles.title}>{item.title}</span>
                <span
                  className={[styles.icon, isExpanded ? styles.iconExpanded : '']
                    .filter(Boolean)
                    .join(' ')}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={styles.panel}
              hidden={!isExpanded}
            >
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
