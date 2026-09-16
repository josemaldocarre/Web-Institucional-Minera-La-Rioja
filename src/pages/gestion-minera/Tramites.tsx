import { useTranslation } from 'react-i18next'
import { CatastroViewer } from '../../features/catastro/CatastroViewer'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { FeatureDocumentCards } from '../../features/home/components/FeatureDocumentsSection/FeatureDocumentsSection'
import { gestionMineraService } from '../../services/gestionMineraService'
import styles from './Tramites.module.scss'

const { titleKey, introKey, services } = gestionMineraService.tramites

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
  const { t } = useTranslation()
  const catastroSvc = services.find((s) => s.id === 'catastro-minero')
  const catastroData = catastroSvc?.catastroData
  const filteredServices = services.filter((s) => s.id !== 'catastro-minero')

  const hasDwg = Boolean(catastroData?.dwg?.trim())
  const hasPdf = Boolean(catastroData?.pdf?.trim())
  const catastroTitle = catastroSvc ? t(catastroSvc.titleKey) : ''

  return (
    <ContentSection
      id="tramites"
      title={t(titleKey)}
      description={introKey ? t(introKey) : undefined}
    >
      <FeatureDocumentCards
        items={filteredServices.map(
          ({ titleKey: serviceTitleKey, descriptionKey, ctaKey, href, icon, accent, badgeKey }) => ({
            title: t(serviceTitleKey),
            description: t(descriptionKey),
            cta: t(ctaKey),
            href,
            icon,
            accent,
            badge: badgeKey ? t(badgeKey) : undefined,
          }),
        )}
      />

      {catastroSvc && catastroData ? (
        <section id="catastro-detalle" className={styles.catastroSection}>
          <header className={styles.catastroHeader}>
            <h3 className={styles.catastroTitle}>{catastroTitle}</h3>
            <p className={styles.catastroIntro}>{t(catastroSvc.descriptionKey)}</p>
          </header>

          <div className={styles.viewerContainer}>
            <CatastroViewer
              geojsonUrls={catastroData.geojsonUrls}
              title={t('gestionMinera.tramites.catastro.viewerTitle', {
                title: catastroTitle,
              })}
            />

            <div className={styles.downloadActions}>
              {hasDwg && (
                <a href={catastroData.dwg} className={styles.btnDownload} target="_blank" rel="noopener noreferrer">
                  <IconDownload />
                  <span style={{ marginLeft: '8px' }}>
                    {t('gestionMinera.tramites.catastro.downloadDwg')}
                  </span>
                </a>
              )}
              {hasPdf && (
                <a href={catastroData.pdf} className={`${styles.btnDownload} ${styles.btnDownloadPdf}`} target="_blank" rel="noopener noreferrer">
                  <IconDownload />
                  <span style={{ marginLeft: '8px' }}>
                    {t('gestionMinera.tramites.catastro.downloadPdf')}
                  </span>
                </a>
              )}
            </div>
          </div>
        </section>
      ) : null}
    </ContentSection>
  )
}
