import { useTranslation } from 'react-i18next'
import { Container } from '../../components/ui/Container/Container'
import { Hero } from '../../features/home/components/Hero/Hero'
import type { HomePageData } from '../../services/homeService'
import styles from './HomeModule.module.scss'

export interface HomeModuleProps {
  data: HomePageData
}

export function HomeModule({ data }: HomeModuleProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <Hero titleKey={data.hero.titleKey} subtitleKey={data.hero.subtitleKey} />

      <section className={styles.section} aria-labelledby="home-plan-heading">
        <Container>
          <h2 id="home-plan-heading" className={styles.sectionTitle}>
            {t(data.planSection.headingKey)}
          </h2>
          <h3 className={styles.subsectionTitle}>
            {t(data.planSection.subheadingKey)}
          </h3>
          <p className={styles.body}>{t(data.planSection.bodyKey)}</p>
        </Container>
      </section>
    </div>
  )
}
