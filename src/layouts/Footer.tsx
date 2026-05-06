import { useTranslation } from 'react-i18next'
import styles from './Footer.module.scss'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.root}>
      <span className={styles.label}>{t('layout.footerPlaceholder')}</span>
    </footer>
  )
}
