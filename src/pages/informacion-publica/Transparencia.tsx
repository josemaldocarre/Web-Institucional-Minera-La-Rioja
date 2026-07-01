import { SectionLayout } from '../../layouts/SectionLayout'
import { informacionPublicaService } from '../../services/informacionPublicaService'

const { title, intro } = informacionPublicaService.transparencia

export default function Transparencia() {
  return (
    <SectionLayout id="transparencia" title={title} description={intro}>
      <div>Transparencia</div>
    </SectionLayout>
  )
}
