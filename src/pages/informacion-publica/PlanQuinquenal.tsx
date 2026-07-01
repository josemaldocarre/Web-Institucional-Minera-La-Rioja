import { SectionLayout } from '../../layouts/SectionLayout'
import { informacionPublicaService } from '../../services/informacionPublicaService'

const { title, intro } = informacionPublicaService.planQuinquenal

export default function PlanQuinquenal() {
  return (
    <SectionLayout id="plan-quinquenal" title={title} description={intro}>
      <div>PlanQuinquenal</div>
    </SectionLayout>
  )
}
