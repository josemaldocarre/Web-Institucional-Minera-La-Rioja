import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { MotionReveal } from '../../../../components/ui/MotionReveal/MotionReveal'
import { Section } from '../../../../components/ui/Section/Section'
import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import type { HomePublicPoliciesBlock } from '../../../../services/homeService'
import styles from './PublicPoliciesSection.module.scss'

export interface PublicPoliciesSectionProps {
  readonly publicPolicies: HomePublicPoliciesBlock
}

export function PublicPoliciesSection({
  publicPolicies,
}: PublicPoliciesSectionProps) {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section className={styles.surface} aria-labelledby={headingId}>
      <Container>
        <MotionReveal>
          <header className={styles.header}>
            <SectionHeader
              headingId={headingId}
              title={t(publicPolicies.titleKey)}
              variant="orange"
            />
            <div className={styles.intro}>
              <p className={styles.introText}>{t(publicPolicies.introKey)}</p>
              <p className={styles.introText}>{t(publicPolicies.bodyKey)}</p>
            </div>
          </header>

          <ul className={styles.grid}>
            {publicPolicies.axes.map((axis) => (
              <li key={axis.id} className={styles.item}>
                <h3 className={styles.itemTitle}>{t(axis.titleKey)}</h3>
                <p className={styles.itemDescription}>{t(axis.descriptionKey)}</p>
              </li>
            ))}
          </ul>
        </MotionReveal>
      </Container>
    </Section>
  )
}
