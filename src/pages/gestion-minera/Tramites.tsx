import { useState, useEffect } from 'react'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { FeatureDocumentCards } from '../../features/home/components/FeatureDocumentsSection/FeatureDocumentsSection'
import { gestionMineraService } from '../../services/gestionMineraService'
import styles from './Tramites.module.scss'

const { title, intro, services } = gestionMineraService.tramites

function IconDownload() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
      />
    </svg>
  )
}

export default function Tramites() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  const catastroSvc = services.find((s) => s.id === 'catastro-minero')
  const catastroData = catastroSvc?.catastroData
  const filteredServices = services.filter((s) => s.id !== 'catastro-minero')

  return (
    <ContentSection id="tramites" title={title} description={intro}>
      <FeatureDocumentCards
        items={filteredServices.map(({ title: serviceTitle, description, cta, href, icon, accent, badge }) => ({
          title: serviceTitle,
          description,
          cta,
          href,
          icon,
          accent,
          badge,
        }))}
      />

      {catastroData && (
        <section id="catastro-detalle" className={styles.catastroSection}>
          <header className={styles.catastroHeader}>
            <h3 className={styles.catastroTitle}>{catastroData.title}</h3>
            <p className={styles.catastroIntro}>{catastroData.description}</p>
          </header>

          <div className={styles.previewContainer}>
            <button
              type="button"
              className={styles.previewButton}
              onClick={() => setSelectedImage(catastroData.previewImage)}
              aria-label="Ampliar vista previa del Catastro Minero"
            >
              <img
                src={catastroData.previewImage}
                alt={`Vista previa de ${catastroData.title}`}
                loading="lazy"
                decoding="async"
              />
            </button>
            <div className={styles.downloadActions}>
              <a href={catastroData.dwg} className={styles.btnDownload} target="_blank" rel="noopener noreferrer">
                <IconDownload />
                <span style={{ marginLeft: '8px' }}>Descargar DWG</span>
              </a>
              <a href={catastroData.pdf} className={`${styles.btnDownload} ${styles.btnDownloadPdf}`} target="_blank" rel="noopener noreferrer">
                <IconDownload />
                <span style={{ marginLeft: '8px' }}>Descargar PDF</span>
              </a>
            </div>
          </div>
        </section>
      )}

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
              src={selectedImage}
              alt="Catastro Minero ampliado"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </ContentSection>
  )
}
