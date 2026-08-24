import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../components/ui/Container/Container'
import { Section } from '../../components/ui/Section/Section'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { gestionMineraService } from '../../services/gestionMineraService'
import styles from './Proveedores.module.scss'

const { titleKey, bodyKey, image, cta } = gestionMineraService.proveedores

export default function Proveedores() {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section id="proveedores" aria-labelledby={headingId}>
      <Container>
        <div className={styles.editorial}>
          {image ? (
            <figure className={styles.media}>
              <img
                className={styles.image}
                src={image.src}
                alt={t(image.altKey)}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ) : (
            <div className={styles.mediaPlaceholder} aria-hidden="true" />
          )}

          <div className={styles.card}>
            <SectionHeader headingId={headingId} title={t(titleKey)} variant="green" />
            <p className={styles.body}>{t(bodyKey)}</p>
            <a className={styles.cta} href={cta.href}>
              {t(cta.labelKey)}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
