import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { Section } from '../../../../components/ui/Section/Section'
import type { HomeContactPreview } from '../../../../services/homeService'
import styles from './ContactCard.module.scss'

export interface ContactCardProps {
  readonly contact: HomeContactPreview
}

export function ContactCard({ contact }: ContactCardProps) {
  const { t } = useTranslation()
  const headingId = useId()
  const contactListId = useId()

  return (
    <Section className={styles.surface} aria-labelledby={headingId}>
      <Container>
        <div className={styles.card}>
          <div className={styles.left}>
            <h2 id={headingId} className={styles.title}>
              {t(contact.titleKey)}
            </h2>
            <p className={styles.description}>
              {t(contact.descriptionKey)}
            </p>
            <ul
              className={styles.contactList}
              id={contactListId}
              aria-label={t(contact.contactListLabelKey)}
            >
              <li className={styles.contactItem}>
                <a
                  className={styles.contactLink}
                  href={contact.emailHref}
                >
                  {t(contact.emailLabelKey)}
                </a>
              </li>
              <li className={styles.contactItem}>
                <a className={styles.contactLink} href={contact.phoneHref}>
                  {t(contact.phoneLabelKey)}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <a className={styles.cta} href={contact.emailHref}>
              {t(contact.ctaKey)}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
