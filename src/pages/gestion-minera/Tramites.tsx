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

function buildShareCadUrl(dwgPath: string): string {
  const absoluteDwgUrl = new URL(dwgPath, window.location.origin).href
  return `https://iframe.sharecad.org/cadframe/load?url=${encodeURIComponent(absoluteDwgUrl)}`
}

export default function Tramites() {
  const catastroSvc = services.find((s) => s.id === 'catastro-minero')
  const catastroData = catastroSvc?.catastroData
  const filteredServices = services.filter((s) => s.id !== 'catastro-minero')

  const hasDwg = Boolean(catastroData?.dwg?.trim())
  const hasPdf = Boolean(catastroData?.pdf?.trim())
  const shareCadUrl = hasDwg && catastroData ? buildShareCadUrl(catastroData.dwg) : null

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

          <div className={styles.viewerContainer}>
            {shareCadUrl ? (
              <iframe
                className={styles.viewer}
                src={shareCadUrl}
                title={`Visor interactivo de ${catastroData.title}`}
                loading="lazy"
                allowFullScreen
              />
            ) : (
              <p className={styles.viewerUnavailable}>
                El visor del Catastro Minero no se encuentra disponible actualmente.
              </p>
            )}

            <div className={styles.downloadActions}>
              {hasDwg && (
                <a href={catastroData.dwg} className={styles.btnDownload} target="_blank" rel="noopener noreferrer">
                  <IconDownload />
                  <span style={{ marginLeft: '8px' }}>Descargar DWG</span>
                </a>
              )}
              {hasPdf && (
                <a href={catastroData.pdf} className={`${styles.btnDownload} ${styles.btnDownloadPdf}`} target="_blank" rel="noopener noreferrer">
                  <IconDownload />
                  <span style={{ marginLeft: '8px' }}>Descargar PDF</span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </ContentSection>
  )
}
