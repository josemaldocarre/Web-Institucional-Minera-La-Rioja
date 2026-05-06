import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className={styles.root}>
      <span className={styles.label}>{t('layout.headerPlaceholder')}</span>
    </header>
  )
}
