import { useId } from 'react'
import type { JSX } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { MotionReveal } from '../../../../components/ui/MotionReveal/MotionReveal'
import { Section } from '../../../../components/ui/Section/Section'
import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import type { HomeFeaturesBlock } from '../../../../services/homeService'
import styles from './FeaturesSection.module.scss'

function IconDocs() {
  return (
    <svg
      className={styles.iconSvg}
      width={32}
      height={32}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2 5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8zm2-4V4h2v6H10z"
      />
    </svg>
  )
}

function IconGeo() {
  return (
    <svg
      className={styles.iconSvg}
      width={32}
      height={32}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  )
}

const FEATURE_ICONS: Record<
  HomeFeaturesBlock['items'][number]['id'],
  () => JSX.Element
> = {
  docs: IconDocs,
  geo: IconGeo
}

export interface FeaturesSectionProps {
  readonly features: HomeFeaturesBlock
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section className={styles.surface} aria-labelledby={headingId}>
      <Container>
        <MotionReveal>
          <div className={styles.inner}>
            <SectionHeader
              headingId={headingId}
              eyebrow={t(features.eyebrowKey)}
              title={t(features.titleKey)}
              variant="orange"
            />
            <ul className={styles.grid}>
              {features.items.map(({ id, titleKey, descriptionKey }) => {
                const Icon = FEATURE_ICONS[id]

                return (
                  <li key={titleKey} className={styles.item}>
                    <div className={styles.iconWrap}>
                      <Icon />
                    </div>
                    <h3 className={styles.itemTitle}>{t(titleKey)}</h3>
                    <p className={styles.itemDescription}>{t(descriptionKey)}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  )
}
