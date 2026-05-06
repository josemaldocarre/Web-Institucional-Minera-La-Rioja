import { useTranslation } from 'react-i18next'
import type { HomePageData } from '../../services/homeService'
import styles from './HomeModule.module.scss'

export interface HomeModuleProps {
  data: HomePageData
}

export function HomeModule({ data }: HomeModuleProps) {
  const { t } = useTranslation()

  return (
    <section className={styles.root} aria-labelledby="home-title">
      <h1 id="home-title" className={styles.title}>
        {t(data.titleKey)}
      </h1>
    </section>
  )
}
