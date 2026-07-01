import { Container } from '../Container/Container'
import { Section } from '../Section/Section'
import styles from './PageHero.module.scss'

export interface PageHeroProps {
  readonly title: string
  readonly description?: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <Section className={styles.root}>
      <Container>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {description ? <p className={styles.description}>{description}</p> : null}
        </header>
      </Container>
    </Section>
  )
}
