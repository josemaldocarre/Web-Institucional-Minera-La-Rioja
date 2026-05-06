import { useTranslation } from 'react-i18next'
import { Container } from '../../components/ui/Container/Container'
import { Section } from '../../components/ui/Section/Section'
import styles from './PlaceholderPage.module.scss'

export function PlaceholderPage() {
  const { t } = useTranslation()

  return (
    <Section>
      <Container>
        <p className={styles.text}>{t('common.pagePlaceholder')}</p>
      </Container>
    </Section>
  )
}
