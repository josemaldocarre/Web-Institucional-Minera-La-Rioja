import type { ReactNode } from 'react'
import { Container } from '../components/ui/Container/Container'
import { Section } from '../components/ui/Section/Section'
import styles from './SectionLayout.module.scss'

export interface SectionLayoutProps {
  readonly id?: string
  readonly title: string
  readonly description?: string
  readonly children?: ReactNode
}

export function SectionLayout({ id, title, description, children }: SectionLayoutProps) {
  return (
    <Section id={id}>
      <Container>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {description ? <p className={styles.description}>{description}</p> : null}
        </header>
        {children}
      </Container>
    </Section>
  )
}
