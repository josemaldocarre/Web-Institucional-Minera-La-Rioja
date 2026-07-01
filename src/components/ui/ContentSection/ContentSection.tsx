import { useId } from 'react'
import type { ReactNode } from 'react'
import { Container } from '../Container/Container'
import { Section } from '../Section/Section'
import {
  SectionHeader,
  type SectionHeaderVariant,
} from '../SectionHeader/SectionHeader'
import styles from './ContentSection.module.scss'

export interface ContentSectionProps {
  readonly id?: string
  readonly title: string
  readonly description?: string
  readonly variant?: SectionHeaderVariant
  readonly children: ReactNode
}

export function ContentSection({
  id,
  title,
  description,
  variant = 'green',
  children,
}: ContentSectionProps) {
  const headingId = useId()

  return (
    <Section id={id} aria-labelledby={headingId}>
      <Container>
        <div className={styles.block}>
          <SectionHeader headingId={headingId} title={title} variant={variant} />
          {description ? <p className={styles.description}>{description}</p> : null}
          {children}
        </div>
      </Container>
    </Section>
  )
}
