import { FeatureDocumentsSection } from '../../features/home/components/FeatureDocumentsSection/FeatureDocumentsSection'
import { Hero } from '../../features/home/components/Hero/Hero'
import type { HomePageData } from '../../services/homeService'
import styles from './HomeModule.module.scss'

export interface HomeModuleProps {
  data: HomePageData
}

export function HomeModule({ data }: HomeModuleProps) {
  return (
    <div className={styles.page}>
      <Hero titleKey={data.hero.titleKey} subtitleKey={data.hero.subtitleKey} />

      <FeatureDocumentsSection />
    </div>
  )
}
