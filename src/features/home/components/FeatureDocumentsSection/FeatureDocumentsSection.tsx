import { useId } from 'react'
import type { JSX } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { Section } from '../../../../components/ui/Section/Section'
import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import type { HomeDocumentsBlock } from '../../../../services/homeService'
import styles from './FeatureDocumentsSection.module.scss'

function IconPlan() {
  return (
    <svg
      className={styles.iconSvg}
      width={28}
      height={28}
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

function IconCatastro() {
  return (
    <svg
      className={styles.iconSvg}
      width={28}
      height={28}
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

const DOCUMENT_ICONS: Record<
  HomeDocumentsBlock['items'][number]['icon'],
  () => JSX.Element
> = {
  plan: IconPlan,
  catastro: IconCatastro,
}

export interface FeatureDocumentsSectionProps {
  readonly documents: HomeDocumentsBlock
}

export function FeatureDocumentsSection({
  documents,
}: FeatureDocumentsSectionProps) {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section aria-labelledby={headingId}>
      <Container>
        <header className={styles.header}>
          <SectionHeader
            headingId={headingId}
            eyebrow={t(documents.eyebrowKey)}
            title={t(documents.titleKey)}
            variant="green"
          />
          <p className={styles.subtitle}>
            {t(documents.subtitleKey)}
          </p>
        </header>

        <div className={styles.grid}>
          {documents.items.map(
            ({
              href,
              icon,
              titleKey,
              descriptionKey,
              ctaKey,
              badgeKey,
              accent,
            }) => {
              const Icon = DOCUMENT_ICONS[icon]

              return (
              <article
                key={href}
                className={`${styles.card} ${accent === 'orange' ? styles.cardOrange : styles.cardGreen}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon />
                  </div>
                  <span className={styles.badge}>{t(badgeKey)}</span>
                </div>

                <h3 className={styles.cardTitle}>{t(titleKey)}</h3>
                <p className={styles.cardDescription}>
                  {t(descriptionKey)}
                </p>

                <a
                  className={styles.cta}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(ctaKey)}
                </a>
              </article>
              )
            },
          )}
        </div>
      </Container>
    </Section>
  )
}
