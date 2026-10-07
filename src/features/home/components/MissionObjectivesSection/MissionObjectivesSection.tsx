import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import { MotionReveal } from '../../../../components/ui/MotionReveal/MotionReveal'
import { Section } from '../../../../components/ui/Section/Section'
import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import type { HomeMissionObjectivesBlock } from '../../../../services/homeService'
import styles from './MissionObjectivesSection.module.scss'

export interface MissionObjectivesSectionProps {
  readonly missionObjectives: HomeMissionObjectivesBlock
}

export function MissionObjectivesSection({
  missionObjectives,
}: MissionObjectivesSectionProps) {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <Section aria-labelledby={headingId}>
      <Container>
        <MotionReveal>
          <div className={styles.layout}>
            <div className={styles.header}>
              <SectionHeader
                headingId={headingId}
                title={t(missionObjectives.titleKey)}
                variant="green"
              />
            </div>

            <div className={styles.mission}>
              <h3 className={styles.subheading}>
                {t(missionObjectives.mission.titleKey)}
              </h3>
              <p className={styles.text}>
                {t(missionObjectives.mission.descriptionKey)}
              </p>
            </div>

            <div className={styles.general}>
              <h3 className={styles.subheading}>
                {t(missionObjectives.generalObjective.titleKey)}
              </h3>
              <p className={styles.text}>
                {t(missionObjectives.generalObjective.descriptionKey)}
              </p>
            </div>

            <div className={styles.specifics}>
              <h3 className={styles.subheading}>
                {t(missionObjectives.specificObjectives.titleKey)}
              </h3>
              <ul className={styles.objectives}>
                {missionObjectives.specificObjectives.items.map((item) => (
                  <li key={item.textKey} className={styles.objective}>
                    <span className={styles.objectiveNumber}>{item.number}</span>
                    <span className={styles.text}>{t(item.textKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  )
}
