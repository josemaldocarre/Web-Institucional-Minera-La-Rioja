import { useId } from 'react'
import type { JSX } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { MotionReveal } from '../../../../components/ui/MotionReveal/MotionReveal'
import { Section } from '../../../../components/ui/Section/Section'
import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import type { HomeDocumentsBlock } from '../../../../services/homeService'
import { gestionMineraService } from '../../../../services/gestionMineraService'
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

function IconProductoresVigentes() {
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
        d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
      />
    </svg>
  )
}

function IconProductores() {
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
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      />
    </svg>
  )
}

function IconNotificaciones() {
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
        d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
      />
    </svg>
  )
}

function IconFormularios() {
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
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg>
  )
}

export type FeatureDocumentIcon =
  | 'plan'
  | 'catastro'
  | 'productoresVigentes'
  | 'productores'
  | 'notificaciones'
  | 'formularios'

const DOCUMENT_ICONS: Record<FeatureDocumentIcon, () => JSX.Element> = {
  plan: IconPlan,
  catastro: IconCatastro,
  productoresVigentes: IconProductoresVigentes,
  productores: IconProductores,
  notificaciones: IconNotificaciones,
  formularios: IconFormularios,
}

export interface FeatureDocumentCardProps {
  readonly href: string
  readonly title: string
  readonly description: string
  readonly cta: string
  readonly badge?: string
  readonly accent?: 'orange' | 'green'
  readonly icon: FeatureDocumentIcon
  readonly openInNewTab?: boolean
}

export function FeatureDocumentCard({
  href,
  title,
  description,
  cta,
  badge,
  accent = 'green',
  icon,
  openInNewTab = false,
}: FeatureDocumentCardProps) {
  const Icon = DOCUMENT_ICONS[icon]

  return (
    <article
      className={`${styles.card} ${accent === 'orange' ? styles.cardOrange : styles.cardGreen}`}
    >
      <div className={styles.cardTop}>
        <div className={styles.iconWrap}>
          <Icon />
        </div>
        {badge ? <span className={styles.badge}>{badge}</span> : null}
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>

      <a
        className={styles.cta}
        href={href}
        {...(openInNewTab
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {cta}
      </a>
    </article>
  )
}

export interface FeatureDocumentCardsProps {
  readonly items: readonly FeatureDocumentCardProps[]
}

export function FeatureDocumentCards({ items }: FeatureDocumentCardsProps) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <FeatureDocumentCard key={`${item.href}-${item.title}`} {...item} />
      ))}
    </div>
  )
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
        <MotionReveal>
          <header className={styles.header}>
            <SectionHeader
              headingId={headingId}
              eyebrow={t(documents.eyebrowKey)}
              title={t(documents.titleKey)}
              variant="green"
            />
            <p className={styles.subtitle}>{t(documents.subtitleKey)}</p>
          </header>

          <FeatureDocumentCards
            items={documents.items.map(
              ({
                href,
                icon,
                titleKey,
                descriptionKey,
                ctaKey,
                badgeKey,
                accent,
              }) => {
                let currentHref = href

                if (icon === 'catastro') {
                  const catastroSvc = gestionMineraService.tramites.services.find(
                    (s) => s.id === 'catastro-minero',
                  )
                  if (catastroSvc?.catastroData) {
                    currentHref = catastroSvc.catastroData.dwg
                  }
                }

                return {
                  href: currentHref,
                  icon,
                  title: t(titleKey),
                  description: t(descriptionKey),
                  cta: t(ctaKey),
                  badge: t(badgeKey),
                  accent,
                  openInNewTab: true,
                }
              },
            )}
          />
        </MotionReveal>
      </Container>
    </Section>
  )
}
