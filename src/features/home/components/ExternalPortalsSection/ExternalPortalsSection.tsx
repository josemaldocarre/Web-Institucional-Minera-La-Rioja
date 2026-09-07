import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { MotionReveal } from '../../../../components/ui/MotionReveal/MotionReveal'
import { Section } from '../../../../components/ui/Section/Section'
import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import type { HomeExternalPortalsBlock } from '../../../../services/homeService'
import documentStyles from '../FeatureDocumentsSection/FeatureDocumentsSection.module.scss'
import styles from './ExternalPortalsSection.module.scss'

export interface ExternalPortalsSectionProps {
  readonly portals: HomeExternalPortalsBlock
}

export function ExternalPortalsSection({ portals }: ExternalPortalsSectionProps) {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section aria-labelledby={headingId}>
      <Container>
        <MotionReveal>
          <header className={documentStyles.header}>
            <SectionHeader
              headingId={headingId}
              eyebrow={t(portals.eyebrowKey)}
              title={t(portals.titleKey)}
              variant="orange"
            />
            <p className={documentStyles.subtitle}>{t(portals.subtitleKey)}</p>
          </header>

          <div className={styles.grid}>
            {portals.items.map(
              ({ href, image, titleKey, descriptionKey, ctaKey }) => (
                <article key={href} className={styles.card}>
                  <figure className={styles.media}>
                    <img
                      className={styles.image}
                      src={image}
                      alt={t(titleKey)}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>

                  <div className={styles.content}>
                    <h3 className={styles.title}>{t(titleKey)}</h3>
                    <p className={styles.description}>{t(descriptionKey)}</p>
                    <a
                      className={styles.cta}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(ctaKey)}
                    </a>
                  </div>
                </article>
              ),
            )}
          </div>
        </MotionReveal>
      </Container>
    </Section>
  )
}
