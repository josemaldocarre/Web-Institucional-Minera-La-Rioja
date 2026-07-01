import { SectionPageLayout } from '../../layouts/SectionPageLayout'
import { PROGRAMAS_PAGE } from '../../navigation/sectionNav'
import TallerArtesanias from './TallerArtesanias'

export default function Programas() {
  return (
    <SectionPageLayout config={PROGRAMAS_PAGE}>
      <TallerArtesanias />
    </SectionPageLayout>
  )
}
