import { useTranslation } from 'react-i18next'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { gestionMineraService } from '../../services/gestionMineraService'
import Tramites from './Tramites'

const { page } = gestionMineraService

export default function GestionMinera() {
  const { t } = useTranslation()

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

      <Tramites />
    </>
  )
}
