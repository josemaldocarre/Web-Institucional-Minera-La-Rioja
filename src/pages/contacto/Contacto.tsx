import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { contactoService } from '../../services/contactoService'
import styles from './Contacto.module.scss'

const { page, contact } = contactoService
const { title, intro, body, hours, primaryContact, emails, social, location } =
  contact

export default function Contacto() {
  return (
    <>
      <PageHero {...page} />

      <ContentSection id="contacto" title={title} description={intro}>
        <p className={styles.body}>{body}</p>

        <div className={styles.layout}>
          <ul className={styles.cards}>
            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{location.title}</h3>
              <div className={styles.cardLines}>
                <p className={styles.cardText}>{location.street}</p>
                <p className={styles.cardText}>{location.city}</p>
              </div>
            </li>

            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{hours.title}</h3>
              <div className={styles.cardLines}>
                <p className={styles.cardText}>{hours.days}</p>
                <p className={styles.cardText}>{hours.time}</p>
              </div>
            </li>

            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{primaryContact.title}</h3>
              <div className={styles.cardLines}>
                <p className={styles.cardLabel}>{primaryContact.label}</p>
                <a
                  className={styles.link}
                  href={`mailto:${primaryContact.email}`}
                >
                  {primaryContact.email}
                </a>
              </div>
            </li>

            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{emails.title}</h3>
              <ul className={styles.list}>
                {emails.items.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <p className={styles.listLabel}>{item.area}</p>
                    <a className={styles.link} href={`mailto:${item.email}`}>
                      {item.email}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.card}>
              <h3 className={styles.cardTitle}>{social.title}</h3>
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
                      {item.label}
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
              title={location.mapTitle}
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
