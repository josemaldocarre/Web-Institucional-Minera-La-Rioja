import { useTranslation } from 'react-i18next'
import type { HomePageData } from '../../services/homeService'
import styles from './HomeModule.module.scss'

export interface HomeModuleProps {
  data: HomePageData
}

export function HomeModule({ data }: HomeModuleProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <section className={styles.section} aria-labelledby="home-title">
        <h1 id="home-title" className={styles.pageTitle}>
          {t(data.titleKey)}
        </h1>
        <p className={styles.lead}>{t(data.hero.leadKey)}</p>
        <img
          className={styles.heroImage}
          src={data.hero.imageSrc}
          alt={t(data.hero.imageAltKey)}
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className={styles.section} aria-labelledby="home-plan-heading">
        <h2 id="home-plan-heading" className={styles.sectionTitle}>
          {t(data.planSection.headingKey)}
        </h2>
        <h3 className={styles.subsectionTitle}>
          {t(data.planSection.subheadingKey)}
        </h3>
        <p className={styles.body}>{t(data.planSection.bodyKey)}</p>
      </section>
    </div>
  )
}
