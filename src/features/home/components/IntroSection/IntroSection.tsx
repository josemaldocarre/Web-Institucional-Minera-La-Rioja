import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { Section } from '../../../../components/ui/Section/Section'
import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import type { HomeInstitutionalPreview } from '../../../../services/homeService'
import styles from './IntroSection.module.scss'

export interface IntroSectionProps {
  readonly preview: HomeInstitutionalPreview
}

export function IntroSection({ preview }: IntroSectionProps) {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section className={styles.surface} aria-labelledby={headingId}>
      <Container>
        <div className={styles.block}>
          <SectionHeader
            headingId={headingId}
            eyebrow={t(preview.eyebrowKey)}
            title={t(preview.titleKey)}
            variant="green"
          />
          <p className={styles.text}>{t(preview.bodyKey)}</p>
        </div>
      </Container>
    </Section>
  )
}
