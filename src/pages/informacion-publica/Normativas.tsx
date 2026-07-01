import { SectionLayout } from '../../layouts/SectionLayout'
import { informacionPublicaService } from '../../services/informacionPublicaService'

const { title, intro } = informacionPublicaService.normativas

export default function Normativas() {
  return (
    <SectionLayout id="normativas" title={title} description={intro}>
      <div>Normativas</div>
    </SectionLayout>
  )
}
