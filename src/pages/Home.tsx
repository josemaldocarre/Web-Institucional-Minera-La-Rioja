import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HomeModule } from '../modules/home'
import { fetchHomePageData, type HomePageData } from '../services/homeService'
import styles from './Home.module.scss'

export function Home() {
  const { t } = useTranslation()
  const [data, setData] = useState<HomePageData | null>(null)

  useEffect(() => {
    void fetchHomePageData().then(setData)
  }, [])

  if (data === null) {
    return (
      <div className={styles.loading} role="status">
        {t('common.loading')}
      </div>
    )
  }

  return <HomeModule data={data} />
}
