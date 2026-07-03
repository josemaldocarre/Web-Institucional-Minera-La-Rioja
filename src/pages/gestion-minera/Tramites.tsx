import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { FeatureDocumentCards } from '../../features/home/components/FeatureDocumentsSection/FeatureDocumentsSection'
import { gestionMineraService } from '../../services/gestionMineraService'

const { title, intro, services } = gestionMineraService.tramites

export default function Tramites() {
  return (
    <ContentSection id="tramites" title={title} description={intro}>
      <FeatureDocumentCards
        items={services.map(({ title: serviceTitle, description, cta, href, icon, accent, badge }) => ({
          title: serviceTitle,
          description,
          cta,
          href,
          icon,
          accent,
          badge,
        }))}
      />
    </ContentSection>
  )
}
