import { SectionLayout } from '../../layouts/SectionLayout'
import { institucionalService } from '../../services/institucionalService'

const { title, intro } = institucionalService.quienesSomos

export default function QuienesSomos() {
  return (
    <SectionLayout id="quienes-somos" title={title} description={intro}>
      <div>QuienesSomos</div>
    </SectionLayout>
  )
}
