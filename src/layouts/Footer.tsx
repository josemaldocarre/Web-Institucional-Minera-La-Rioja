import { useTranslation } from 'react-i18next'
import styles from './Footer.module.scss'

export function Footer() {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.root} aria-label={t('layout.footerAriaLabel')}>
      <p className={styles.tagline}>{t('layout.footerPlaceholder')}</p>
      <nav
        className={styles.footerNav}
        aria-label={t('layout.footerNavAriaLabel')}
      >
        <ul className={styles.footerList}>
          <li>
            <a className={styles.footerLink} href="#main-content">
              {t('layout.footerBackToContent')}
            </a>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={styles.scrollButton}
        onClick={scrollToTop}
      >
        {t('layout.scrollToTop')}
      </button>
    </footer>
  )
}
