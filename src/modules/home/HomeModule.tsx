import { ContactCard } from '../../features/home/components/ContactCard/ContactCard'
import { ExternalPortalsSection } from '../../features/home/components/ExternalPortalsSection/ExternalPortalsSection'
import { FeatureDocumentsSection } from '../../features/home/components/FeatureDocumentsSection/FeatureDocumentsSection'
import { FeaturesSection } from '../../features/home/components/FeaturesSection/FeaturesSection'
import { Hero } from '../../features/home/components/Hero/Hero'
import { IntroSection } from '../../features/home/components/IntroSection/IntroSection'
import { MissionObjectivesSection } from '../../features/home/components/MissionObjectivesSection/MissionObjectivesSection'
import { PublicPoliciesSection } from '../../features/home/components/PublicPoliciesSection/PublicPoliciesSection'
import type { HomePageData } from '../../services/homeService'
import styles from './HomeModule.module.scss'

export interface HomeModuleProps {
  data: HomePageData
}

export function HomeModule({ data }: HomeModuleProps) {
  return (
    <div className={styles.page}>
      <Hero hero={data.hero} />

      <IntroSection preview={data.institutionalPreview} />
      <MissionObjectivesSection missionObjectives={data.missionObjectives} />
      <PublicPoliciesSection publicPolicies={data.publicPolicies} />
      <FeaturesSection features={data.features} />
      <FeatureDocumentsSection documents={data.documents} />
      <ExternalPortalsSection portals={data.externalPortals} />
      <ContactCard contact={data.contactPreview} />
    </div>
  )
}
