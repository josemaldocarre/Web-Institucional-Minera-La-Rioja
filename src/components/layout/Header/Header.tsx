import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import { MAIN_NAV_ITEMS } from '../../../navigation/mainNav'
import styles from './Header.module.scss'

const LOGO_SRC = '/images/logos/larioja_verde.svg'

export function Header() {
  const { t, i18n } = useTranslation()
  const menuId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isEs = i18n.language.startsWith('es')
  const isEn = i18n.language.startsWith('en')

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  useEffect(() => {
    const query = '(min-width: 60rem)'
    const media = window.matchMedia(query)
    const onChange = () => {
      if (media.matches) {
        setMobileOpen(false)
      }
    }
    media.addEventListener('change', onChange)
    onChange()
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      return
    }
    const media = window.matchMedia('(min-width: 60rem)')
    if (media.matches) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMobile()
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen, closeMobile])

  useEffect(() => {
    if (mobileOpen) {
      closeButtonRef.current?.focus()
    }
  }, [mobileOpen])

  const setLang = (lng: string) => {
    void i18n.changeLanguage(lng)
  }

  const langSwitcher = (
    <div
      className={styles.lang}
      role="group"
      aria-label={t('layout.langSwitcherAria')}
    >
      <button
        type="button"
        className={styles.langButton}
        aria-pressed={isEs}
        onClick={() => {
          setLang('es')
        }}
      >
        ES
      </button>
      <span className={styles.langSep} aria-hidden>
        /
      </span>
      <button
        type="button"
        className={styles.langButton}
        aria-pressed={isEn}
        onClick={() => {
          setLang('en')
        }}
      >
        EN
      </button>
    </div>
  )

  const renderNavLinks = (variant: 'desktop' | 'mobile') => (
    <ul
      className={
        variant === 'desktop' ? styles.desktopList : styles.mobileList
      }
    >
      {MAIN_NAV_ITEMS.map((item) => (
        <li key={item.path}>
          <NavLink
            className={({ isActive }) =>
              variant === 'desktop'
                ? isActive
                  ? `${styles.desktopLink} ${styles.desktopLinkActive}`
                  : styles.desktopLink
                : isActive
                  ? `${styles.mobileLink} ${styles.mobileLinkActive}`
                  : styles.mobileLink
            }
            to={`/${item.path}`}
            onClick={() => {
              closeMobile()
            }}
          >
            {t(item.labelKey)}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  return (
    <header className={styles.root}>
      <a className={styles.skipLink} href="#main-content">
        {t('layout.skipToContent')}
      </a>

      <div className={styles.bar}>
        <div className={styles.brand}>
          <Link className={styles.logoLink} to="/">
            <img
              className={styles.logo}
              src={LOGO_SRC}
              alt={t('layout.logoAlt')}
              width={200}
              height={48}
              decoding="async"
            />
          </Link>
        </div>

        <nav
          className={styles.desktopNav}
          aria-label={t('layout.navAriaLabel')}
        >
          {renderNavLinks('desktop')}
        </nav>

        <div className={styles.actions}>
          {langSwitcher}
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={
              mobileOpen ? t('layout.menuClose') : t('layout.menuOpen')
            }
            onClick={() => {
              setMobileOpen((open) => !open)
            }}
          >
            <span className={styles.menuIcon} aria-hidden />
            <span className={styles.menuIcon} aria-hidden />
            <span className={styles.menuIcon} aria-hidden />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className={styles.mobilePanel} id={menuId}>
          <div className={styles.mobileTop}>
            <Link className={styles.logoLink} to="/" onClick={closeMobile}>
              <img
                className={styles.logoSmall}
                src={LOGO_SRC}
                alt={t('layout.logoAlt')}
                width={160}
                height={40}
                decoding="async"
              />
            </Link>
            <div className={styles.mobileTopActions}>
              {langSwitcher}
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                aria-label={t('layout.menuClose')}
                onClick={closeMobile}
              >
                <span className={styles.closeIcon} aria-hidden />
              </button>
            </div>
          </div>

          <nav
            className={styles.mobileNav}
            aria-label={t('layout.navAriaLabel')}
          >
            {renderNavLinks('mobile')}
          </nav>

          <p className={styles.mobileLangHint}>
            {t('layout.langMobileHint', {
              lang: isEs ? 'ES' : 'EN',
            })}
          </p>
        </div>
      ) : null}
    </header>
  )
}
