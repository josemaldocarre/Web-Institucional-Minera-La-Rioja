import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { Section } from '../../../../components/ui/Section/Section'
import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import styles from './IntroSection.module.scss'

export function IntroSection() {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section className={styles.surface} aria-labelledby={headingId}>
      <Container>
        <div className={styles.block}>
          <SectionHeader
            headingId={headingId}
            eyebrow={t('home.intro.eyebrow')}
            title={t('home.intro.title')}
            variant="green"
          />
          <p className={styles.text}>{t('home.intro.body')}</p>
        </div>
      </Container>
    </Section>
  )
}
