import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

export function Header() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={styles.root}>
      <a className={styles.skipLink} href="#main-content">
        {t('layout.skipToContent')}
      </a>
      <nav className={styles.nav} aria-label={t('layout.navAriaLabel')}>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navLink}
              to="/"
              aria-current={isHome ? 'page' : undefined}
            >
              {t('layout.navHome')}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
