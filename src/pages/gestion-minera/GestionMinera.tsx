import { useTranslation } from 'react-i18next'
import { Container } from '../../components/ui/Container/Container'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { SectionNavTabs } from '../../components/ui/SectionNavTabs/SectionNavTabs'
import { gestionMineraService } from '../../services/gestionMineraService'
import Proveedores from './Proveedores'
import Tramites from './Tramites'
import styles from './GestionMinera.module.scss'

const { page, tramites, proveedores } = gestionMineraService

export default function GestionMinera() {
  const { t } = useTranslation()

  const sectionNavItems = [
    { id: 'tramites', label: t(tramites.titleKey) },
    { id: 'proveedores', label: t(proveedores.titleKey) },
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
            ariaLabel={t('gestionMinera.page.sectionNavAria')}
          />
        </Container>
      </div>

      <Tramites />
      <Proveedores />
    </>
  )
}
