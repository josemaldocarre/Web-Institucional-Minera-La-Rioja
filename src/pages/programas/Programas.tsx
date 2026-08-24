import { useTranslation } from 'react-i18next'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { programasService } from '../../services/programasService'
import TallerArtesanias from './TallerArtesanias'

const { page } = programasService

export default function Programas() {
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
      <TallerArtesanias />
    </>
  )
}
