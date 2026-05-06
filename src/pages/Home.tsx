import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/ui/Container/Container'
import { Section } from '../components/ui/Section/Section'
import { HomeModule } from '../modules/home'
import { useSyncPageMeta } from '../seo/useSyncPageMeta'
import { fetchHomePageData, type HomePageData } from '../services/homeService'
import styles from './Home.module.scss'

export function Home() {
  const { t } = useTranslation()
  const [data, setData] = useState<HomePageData | null>(null)

  useSyncPageMeta({
    title: t('seo.documentTitleHome'),
    description: t('seo.metaDescriptionHome'),
  })

  useEffect(() => {
    void fetchHomePageData().then(setData)
  }, [])

  if (data === null) {
    return (
      <Section>
        <Container>
          <div
            className={styles.loading}
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            {t('common.loading')}
          </div>
        </Container>
      </Section>
    )
  }

  return <HomeModule data={data} />
}
