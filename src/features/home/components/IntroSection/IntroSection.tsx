import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import styles from './IntroSection.module.scss'

export function IntroSection() {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <section className={styles.root} aria-labelledby={headingId}>
      <Container>
        <h2 id={headingId} className={styles.title}>
          {t('home.intro.title')}
        </h2>
        <p className={styles.text}>{t('home.intro.body')}</p>
      </Container>
    </section>
  )
}
