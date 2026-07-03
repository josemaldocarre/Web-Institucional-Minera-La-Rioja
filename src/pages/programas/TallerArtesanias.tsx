import { useId } from 'react'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { programasService } from '../../services/programasService'
import styles from './TallerArtesanias.module.scss'

const { title, intro, body, image } = programasService.tallerArtesanias

export default function TallerArtesanias() {
  const cardHeadingId = useId()

  return (
    <ContentSection id="taller-artesanias" title={title} description={intro}>
      <></>
    </ContentSection>
  )
}
