import { useState, useEffect } from 'react'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { programasService } from '../../services/programasService'
import type { ProgramasImage } from '../../services/programasService'
import styles from './TallerArtesanias.module.scss'

const { title, intro, body, image, images } = programasService.tallerArtesanias

export default function TallerArtesanias() {
  const [selectedImage, setSelectedImage] = useState<ProgramasImage | null>(null)

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

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
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(img)}
              className={styles.galleryItem}
              aria-label={`Ver imagen ampliada: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      ) : null}

      {selectedImage !== null && (
        <div
          className={`${styles.modalOverlay} ${styles.isOpen}`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContainer}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar imagen"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </ContentSection>
  )
}
