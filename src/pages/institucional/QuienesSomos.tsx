import { useId } from 'react'
import { Container } from '../../components/ui/Container/Container'
import { Section } from '../../components/ui/Section/Section'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { institucionalService } from '../../services/institucionalService'
import styles from './QuienesSomos.module.scss'

const { title, body, image } = institucionalService.quienesSomos

export default function QuienesSomos() {
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
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ) : (
            <div className={styles.mediaPlaceholder} aria-hidden="true" />
          )}

          <div className={styles.card}>
            <SectionHeader headingId={headingId} title={title} variant="green" />
            <p className={styles.body}>{body}</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
