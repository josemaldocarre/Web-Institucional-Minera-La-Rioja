import { useTranslation } from 'react-i18next'
import { Container } from '../../components/ui/Container/Container'
import styles from './PlaceholderPage.module.scss'

export function PlaceholderPage() {
  const { t } = useTranslation()

  return (
    <div className={styles.root}>
      <Container>
        <p className={styles.text}>{t('common.pagePlaceholder')}</p>
      </Container>
    </div>
  )
}
