import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../components/ui/Container/Container'
import { Section } from '../../components/ui/Section/Section'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { institucionalService } from '../../services/institucionalService'
import styles from './QuienesSomos.module.scss'

const { titleKey, bodyKey, image } = institucionalService.quienesSomos

export default function QuienesSomos() {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section id="quienes-somos" aria-labelledby={headingId}>
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
          </div>
        </div>
      </Container>
    </Section>
  )
}
