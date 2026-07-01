import { SectionLayout } from '../../layouts/SectionLayout'
import { institucionalService } from '../../services/institucionalService'

const { title, intro } = institucionalService.autoridades

export default function Autoridades() {
  return (
    <SectionLayout id="autoridades" title={title} description={intro}>
      <div>Autoridades</div>
    </SectionLayout>
  )
}
