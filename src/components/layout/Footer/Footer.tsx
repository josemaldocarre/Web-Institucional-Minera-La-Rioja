import { useId } from 'react'
import type { JSX } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.scss'

const LOGO_SRC = '/images/logos/secretariamineria.svg'

function IconFacebook() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M13.5 22v-8.3h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.7-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7v3.2h2.8V22h3.7z"
      />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-4.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"
      />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.07c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.21V23h-4V8z"
      />
    </svg>
  )
}

const SOCIAL_LINKS: ReadonlyArray<{
  href: string
  labelKey: 'footer.social.facebook' | 'footer.social.instagram' | 'footer.social.linkedin'
  Icon: () => JSX.Element
}> = [
  { href: 'https://www.facebook.com/minerialr/', labelKey: 'footer.social.facebook', Icon: IconFacebook },
  { href: 'https://www.instagram.com/minerialarioja/', labelKey: 'footer.social.instagram', Icon: IconInstagram },
  { href: 'https://www.linkedin.com/company/minerialarioja/?originalSubdomain=ar', labelKey: 'footer.social.linkedin', Icon: IconLinkedIn },
]

function IconLocation({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  )
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  )
}

function IconEmail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  )
}

export function Footer() {
  const { t } = useTranslation()
  const contactTitleId = useId()

  return (
    <footer className={styles.root} aria-label={t('layout.footerAriaLabel')}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <section
            className={styles.institutional}
            aria-label={t('footer.institutional.regionLabel')}
          >
            <img
              className={styles.logo}
              src={LOGO_SRC}
              alt={t('layout.logoAlt')}
              width={220}
              height={56}
              decoding="async"
            />
            <p className={styles.intro}>{t('footer.institutional.intro')}</p>
            <ul className={styles.socialList}>
              {SOCIAL_LINKS.map(({ href, labelKey, Icon }) => (
                <li key={labelKey}>
                  <a
                    className={styles.socialLink}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(labelKey)}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.institutional}>
            <img src="/images/logos/ministerio.svg" alt="Ministerio de Trabajo, Empleo, Industria y Minería - La Rioja" className={styles.logo}/>
          </section>

          <section className={styles.institutional}>
            <img src="/images/logos/lrgobierno.svg" alt="La Rioja Gobierno" className={styles.logo}/>
          </section>

          <section
            className={styles.contact}
            aria-labelledby={contactTitleId}
          >
            <h2 className={styles.columnTitle} id={contactTitleId}>
              {t('footer.contact.title')}
            </h2>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <IconLocation className={styles.contactIcon} />
                <a className={styles.contactLink} href="https://maps.app.goo.gl/7w15sjinXLy39HjG6" target="_blank" rel="noopener noreferrer">
                  {t('footer.contact.address')}
                </a>
              </li>
              <li className={styles.contactItem}>
                <IconPhone className={styles.contactIcon} />
                <a className={styles.contactLink} href="tel:+543804453068">
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className={styles.contactItem}>
                <IconEmail className={styles.contactIcon} />
                <a
                  className={styles.contactLink}
                  href="mailto:mineria@larioja.gob.ar"
                >
                  {t('footer.contact.email')}
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
