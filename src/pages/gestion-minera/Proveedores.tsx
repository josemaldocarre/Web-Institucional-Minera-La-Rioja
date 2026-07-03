import { useId } from 'react'
import { Container } from '../../components/ui/Container/Container'
import { Section } from '../../components/ui/Section/Section'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { gestionMineraService } from '../../services/gestionMineraService'
import styles from './Proveedores.module.scss'

const { title, body, image, cta } = gestionMineraService.proveedores

export default function Proveedores() {
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
            <a className={styles.cta} href={cta.href}>
              {cta.label}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
