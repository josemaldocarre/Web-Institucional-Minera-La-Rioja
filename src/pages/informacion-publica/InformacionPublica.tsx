import { SectionPageLayout } from '../../layouts/SectionPageLayout'
import { INFORMACION_PUBLICA_PAGE } from '../../navigation/sectionNav'
import Normativas from './Normativas'
import PlanQuinquenal from './PlanQuinquenal'
import Transparencia from './Transparencia'

export default function InformacionPublica() {
  return (
    <SectionPageLayout config={INFORMACION_PUBLICA_PAGE}>
      <Normativas />
      <Transparencia />
      <PlanQuinquenal />
    </SectionPageLayout>
  )
}
