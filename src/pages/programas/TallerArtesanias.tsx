import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { programasService } from '../../services/programasService'
import styles from './TallerArtesanias.module.scss'

const { title, intro, body, image, images } = programasService.tallerArtesanias

export default function TallerArtesanias() {
  return (
    <ContentSection id="taller-artesanias" title={title} description={intro}>
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
          {body ? <p className={styles.body}>{body}</p> : null}
        </div>
      </div>

      {images && images.length > 0 ? (
        <div className={styles.gallery}>
          {images.map((img, index) => (
            <a
              key={index}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.galleryItem}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      ) : null}
    </ContentSection>
  )
}
