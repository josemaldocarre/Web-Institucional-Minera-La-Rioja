import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { programasService } from '../../services/programasService'

const { title, intro } = programasService.tallerArtesanias

export default function TallerArtesanias() {
  return (
    <ContentSection id="taller-artesanias" title={title} description={intro}>
      <></>
    </ContentSection>
  )
}
