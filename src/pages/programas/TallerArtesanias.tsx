import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { programasService } from '../../services/programasService'
import styles from './TallerArtesanias.module.scss'

const { titleKey, introKey, bodyKey, image, images } = programasService.tallerArtesanias

export default function TallerArtesanias() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
  } | null>(null)

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
    <ContentSection id="taller-artesanias" title={t(titleKey)} description={t(introKey)}>
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
          {bodyKey ? <p className={styles.body}>{t(bodyKey)}</p> : null}
        </div>
      </div>

      {images && images.length > 0 ? (
        <div className={styles.gallery}>
          {images.map((img, index) => {
            const itemAlt = t('programas.tallerArtesanias.gallery.itemAlt', {
              n: index + 1,
            })

            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage({ src: img.src, alt: itemAlt })}
                className={styles.galleryItem}
                aria-label={t('programas.tallerArtesanias.gallery.expandAria', {
                  alt: itemAlt,
                })}
              >
                <img src={img.src} alt={itemAlt} loading="lazy" decoding="async" />
              </button>
            )
          })}
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
            aria-label={t('programas.tallerArtesanias.gallery.dialogAria')}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSelectedImage(null)}
              aria-label={t('programas.tallerArtesanias.gallery.closeAria')}
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
