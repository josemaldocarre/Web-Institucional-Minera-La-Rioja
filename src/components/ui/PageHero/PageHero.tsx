import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../Container/Container'
import { Section } from '../Section/Section'
import styles from './PageHero.module.scss'

export interface PageHeroBreadcrumb {
  readonly label: string
  readonly href: string
}

export interface PageHeroEyebrow {
  readonly number: string
  readonly label: string
}

export interface PageHeroProps {
  readonly title: string
  readonly description?: string
  readonly breadcrumb?: PageHeroBreadcrumb
  readonly eyebrow?: PageHeroEyebrow
  readonly cta?: ReactNode
}

function BreadcrumbArrow() {
  return (
    <svg
      className={styles.breadcrumbIcon}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 12L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PageHero({ title, description, breadcrumb, eyebrow, cta }: PageHeroProps) {
  const showEyebrow = Boolean(eyebrow?.number && eyebrow?.label)

  return (
    <Section className={styles.root}>
      <Container>
        <header className={styles.header}>
          {breadcrumb ? (
            <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
              <Link className={styles.breadcrumb} to={breadcrumb.href}>
                <BreadcrumbArrow />
                {breadcrumb.label}
              </Link>
            </nav>
          ) : null}

          {showEyebrow && eyebrow ? (
            <p className={styles.eyebrow}>
              EJE {eyebrow.number} · {eyebrow.label}
            </p>
          ) : null}

          <h1 className={styles.title}>{title}</h1>

          {description ? <p className={styles.description}>{description}</p> : null}

          {cta ? <div className={styles.cta}>{cta}</div> : null}
        </header>
      </Container>
    </Section>
  )
}
