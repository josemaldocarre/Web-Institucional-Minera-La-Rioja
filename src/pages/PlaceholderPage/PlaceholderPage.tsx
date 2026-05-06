import { useTranslation } from 'react-i18next'
import styles from './PlaceholderPage.module.scss'

export function PlaceholderPage() {
  const { t } = useTranslation()

  return (
    <div className={styles.root}>
      <p className={styles.text}>{t('common.pagePlaceholder')}</p>
    </div>
  )
}
