import { SectionPageLayout } from '../../layouts/SectionPageLayout'
import { INSTITUCIONAL_PAGE } from '../../navigation/sectionNav'
import Autoridades from './Autoridades'
import QuienesSomos from './QuienesSomos'

export default function Institucional() {
  return (
    <SectionPageLayout config={INSTITUCIONAL_PAGE}>
      <QuienesSomos />
      <Autoridades />
    </SectionPageLayout>
  )
}
