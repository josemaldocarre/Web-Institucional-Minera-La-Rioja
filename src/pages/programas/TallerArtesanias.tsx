import { SectionLayout } from '../../layouts/SectionLayout'
import { programasService } from '../../services/programasService'

const { title, intro } = programasService.tallerArtesanias

export default function TallerArtesanias() {
  return (
    <SectionLayout id="taller-artesanias" title={title} description={intro}>
      <div>TallerArtesanias</div>
    </SectionLayout>
  )
}
