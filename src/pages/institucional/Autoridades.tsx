import { Accordion } from '../../components/ui/Accordion/Accordion'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import {
  INSTITUCIONAL_AUTHORITY_VACANT,
  institucionalService,
  type AuthorityGroup,
  type AuthorityProgram,
} from '../../services/institucionalService'
import styles from './Autoridades.module.scss'

const { title, intro, labels, secretaria, support, groups, programs } =
  institucionalService.autoridades

function VacantBadge() {
  return <span className={styles.vacantBadge}>VACANTE</span>
}

function ResponsibleName({ name }: { readonly name: string }) {
  if (name === INSTITUCIONAL_AUTHORITY_VACANT) {
    return <VacantBadge />
  }

  return <span className={styles.responsibleName}>{name}</span>
}

function GeneralDirectionPanel({ group }: { readonly group: AuthorityGroup }) {
  const hasDependents = group.dependents.length > 0

  return (
    <div className={styles.panel}>
      <div className={styles.fieldBlock}>
        <p className={styles.fieldLabel}>{labels.titular}</p>
        <ResponsibleName name={group.titular} />
      </div>

      {hasDependents ? (
        <div className={styles.fieldBlock}>
          <p className={styles.fieldLabel}>{labels.dependents}</p>
          <ul className={styles.dependentList}>
            {group.dependents.map((dependent) => (
              <li key={dependent.id} className={styles.dependentItem}>
                <span className={styles.dependentTitle}>{dependent.title}</span>
                <ResponsibleName name={dependent.responsible} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

function ProgramsPanel({ items }: { readonly items: readonly AuthorityProgram[] }) {
  return (
    <ul className={styles.programList}>
      {items.map((program) => (
        <li key={program.id} className={styles.programItem}>
          <span className={styles.programTitle}>{program.title}</span>
          <ResponsibleName name={program.responsible} />
        </li>
      ))}
    </ul>
  )
}

export default function Autoridades() {
  return (
    <ContentSection id="autoridades" title={title} description={intro}>
      <div className={styles.layout}>
        <article className={styles.secretariaCard} aria-label={secretaria.heading}>
          <p className={styles.secretariaHeading}>{secretaria.heading}</p>

          <div className={styles.secretariaFields}>
            <div className={styles.fieldBlock}>
              <p className={styles.fieldLabel}>{labels.name}</p>
              <p className={styles.secretariaName}>{secretaria.name}</p>
            </div>

            <div className={styles.fieldBlock}>
              <p className={styles.fieldLabel}>{labels.role}</p>
              <p className={styles.secretariaRole}>{secretaria.role}</p>
            </div>
          </div>
        </article>

        <section className={styles.support} aria-labelledby="support-heading">
          <h3 id="support-heading" className={styles.subsectionTitle}>
            {support.title}
          </h3>

          <ul className={styles.supportList}>
            {support.members.map((member) => (
              <li key={member.id} className={styles.supportItem}>
                <span className={styles.supportRole}>{member.role}</span>
                <ResponsibleName name={member.responsible} />
              </li>
            ))}
          </ul>
        </section>

        <Accordion
          items={groups.map((group) => ({
            id: group.id,
            title: group.title,
            content: <GeneralDirectionPanel group={group} />,
          }))}
        />

        <Accordion
          items={[
            {
              id: 'programas-areas',
              title: programs.title,
              content: <ProgramsPanel items={programs.items} />,
            },
          ]}
        />
      </div>
    </ContentSection>
  )
}
