import { ContactCard } from '../../features/home/components/ContactCard/ContactCard'
import { FeatureDocumentsSection } from '../../features/home/components/FeatureDocumentsSection/FeatureDocumentsSection'
import { FeaturesSection } from '../../features/home/components/FeaturesSection/FeaturesSection'
import { Hero } from '../../features/home/components/Hero/Hero'
import { IntroSection } from '../../features/home/components/IntroSection/IntroSection'
import type { HomePageData } from '../../services/homeService'
import styles from './HomeModule.module.scss'

export interface HomeModuleProps {
  data: HomePageData
}

export function HomeModule({ data }: HomeModuleProps) {
  return (
    <div className={styles.page}>
      <Hero titleKey={data.hero.titleKey} subtitleKey={data.hero.subtitleKey} />

      <IntroSection />
      <FeaturesSection />
      <FeatureDocumentsSection />
      <ContactCard />
    </div>
  )
}
