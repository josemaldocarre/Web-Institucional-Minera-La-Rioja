import { useTranslation } from 'react-i18next'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { contactoService } from '../../services/contactoService'
import styles from './Contacto.module.scss'

const { page, contact } = contactoService
const { titleKey, introKey, bodyKey, hours, primaryContact, emails, social, location } =
  contact

export default function Contacto() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        title={t(page.titleKey)}
        description={t(page.descriptionKey)}
        breadcrumb={{
          href: page.breadcrumb.href,
          label: t(page.breadcrumb.labelKey),
        }}
        eyebrow={{
          number: page.eyebrow.number,
          label: t(page.eyebrow.labelKey),
        }}
      />

      <ContentSection id="contacto" title={t(titleKey)} description={t(introKey)}>
        <p className={styles.body}>{t(bodyKey)}</p>

        <div className={styles.layout}>
          <ul className={styles.cards}>
            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{t(location.titleKey)}</h3>
              <div className={styles.cardLines}>
                <p className={styles.cardText}>{location.street}</p>
                <p className={styles.cardText}>{location.city}</p>
              </div>
            </li>

            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{t(hours.titleKey)}</h3>
              <div className={styles.cardLines}>
                <p className={styles.cardText}>{t(hours.daysKey)}</p>
                <p className={styles.cardText}>{t(hours.timeKey)}</p>
              </div>
            </li>

            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{t(primaryContact.titleKey)}</h3>
              <div className={styles.cardLines}>
                <p className={styles.cardLabel}>{t(primaryContact.labelKey)}</p>
                <a
                  className={styles.link}
                  href={`mailto:${primaryContact.email}`}
                >
                  {primaryContact.email}
                </a>
              </div>
            </li>

            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{t(emails.titleKey)}</h3>
              <ul className={styles.list}>
                {emails.items.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <p className={styles.listLabel}>{t(item.areaKey)}</p>
                    <a className={styles.link} href={`mailto:${item.email}`}>
                      {item.email}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{t(social.titleKey)}</h3>
              <ul className={styles.list}>
                {social.items.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <p className={styles.listLabel}>{item.network}</p>
                    <a
                      className={styles.link}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.labelKey ? t(item.labelKey) : item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className={styles.mapCard}>
            <iframe
              className={styles.mapFrame}
              src={location.mapEmbedUrl}
              title={t(location.mapTitleKey)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className={styles.mapAddress}>
              <p className={styles.cardText}>{location.street}</p>
              <p className={styles.cardText}>{location.city}</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
