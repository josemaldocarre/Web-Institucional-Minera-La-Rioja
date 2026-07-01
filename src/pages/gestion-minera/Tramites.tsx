import { SectionLayout } from '../../layouts/SectionLayout'
import { gestionMineraService } from '../../services/gestionMineraService'

const { intro } = gestionMineraService.tramites

export default function Tramites() {
  return (
    <SectionLayout id="tramites" title="Trámites" description={intro}>
      <div>Tramites</div>
    </SectionLayout>
  )
}
