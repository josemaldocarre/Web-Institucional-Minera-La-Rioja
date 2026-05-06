import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import styles from './ContactCard.module.scss'

const MAILTO_HREF = 'mailto:mineria@larioja.gob.ar'
const TEL_HREF = 'tel:+5438044453068'

export function ContactCard() {
  const { t } = useTranslation()
  const headingId = useId()
  const contactListId = useId()

  return (
    <section className={styles.root} aria-labelledby={headingId}>
      <Container>
        <div className={styles.card}>
          <div className={styles.left}>
            <h2 id={headingId} className={styles.title}>
              {t('home.contactCard.title')}
            </h2>
            <p className={styles.description}>
              {t('home.contactCard.description')}
            </p>
            <ul
              className={styles.contactList}
              id={contactListId}
              aria-label={t('home.contactCard.contactListLabel')}
            >
              <li className={styles.contactItem}>
                <a
                  className={styles.contactLink}
                  href={MAILTO_HREF}
                >
                  {t('footer.contact.email')}
                </a>
              </li>
              <li className={styles.contactItem}>
                <a className={styles.contactLink} href={TEL_HREF}>
                  {t('footer.contact.phone')}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <a className={styles.cta} href={MAILTO_HREF}>
              {t('home.contactCard.cta')}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
