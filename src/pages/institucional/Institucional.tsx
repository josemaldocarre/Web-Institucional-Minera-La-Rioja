import { useTranslation } from 'react-i18next'
import { Container } from '../../components/ui/Container/Container'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { SectionNavTabs } from '../../components/ui/SectionNavTabs/SectionNavTabs'
import { institucionalService } from '../../services/institucionalService'
import Autoridades from './Autoridades'
import QuienesSomos from './QuienesSomos'
import styles from './Institucional.module.scss'

const { page, quienesSomos, autoridades } = institucionalService

export default function Institucional() {
  const { t } = useTranslation()

  const sectionNavItems = [
    { id: 'quienes-somos', label: t(quienesSomos.titleKey) },
    { id: 'autoridades', label: t(autoridades.titleKey) },
  ] as const

  return (
    <>
      <PageHero
        title={t(page.titleKey)}
        description={t(page.descriptionKey)}
        breadcrumb={{
          href: page.breadcrumb.href,
          label: t(page.breadcrumb.labelKey),
        }}
        eyebrow={{
          number: page.eyebrow.number,
          label: t(page.eyebrow.labelKey),
        }}
      />

      <div className={styles.navBar}>
        <Container>
          <SectionNavTabs
            items={sectionNavItems}
            ariaLabel={t('institucional.page.sectionNavAria')}
          />
        </Container>
      </div>

      <QuienesSomos />
      <Autoridades />
    </>
  )
}
