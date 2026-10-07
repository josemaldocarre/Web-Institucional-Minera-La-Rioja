import { useTranslation } from 'react-i18next'
import { Accordion } from '../../components/ui/Accordion/Accordion'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import {
  institucionalService,
  type InstitucionalFuncionNode,
} from '../../services/institucionalService'
import styles from './FuncionesCompetencias.module.scss'

const { titleKey, units } = institucionalService.funciones

function FunctionList({ keys }: { readonly keys: readonly string[] }) {
  const { t } = useTranslation()

  if (keys.length === 0) {
    return null
  }

  return (
    <ul className={styles.functionList}>
      {keys.map((key) => (
        <li key={key}>{t(key)}</li>
      ))}
    </ul>
  )
}

function FuncionBranch({
  node,
  depth,
}: {
  readonly node: InstitucionalFuncionNode
  readonly depth: 2 | 3
}) {
  const { t } = useTranslation()

  return (
    <div className={depth === 2 ? styles.child : styles.grandchild}>
      <p className={styles.unitTitle}>
        <span className={styles.number}>{node.number}</span>{' '}
        {t(node.titleKey)}
      </p>
      {node.dependsOnKey ? (
        <p className={styles.dependsOn}>{t(node.dependsOnKey)}</p>
      ) : null}
      <FunctionList keys={node.functionKeys} />
      {depth === 2
        ? node.children?.map((child) => (
            <FuncionBranch key={child.id} node={child} depth={3} />
          ))
        : null}
    </div>
  )
}

function FuncionPanel({ unit }: { readonly unit: InstitucionalFuncionNode }) {
  return (
    <div className={styles.panel}>
      <FunctionList keys={unit.functionKeys} />
      {unit.children?.map((child) => (
        <FuncionBranch key={child.id} node={child} depth={2} />
      ))}
    </div>
  )
}

export default function FuncionesCompetencias() {
  const { t } = useTranslation()

  return (
    <ContentSection id="funciones-competencias" title={t(titleKey)}>
      <Accordion
        items={units.map((unit) => ({
          id: unit.id,
          title: `${unit.number} ${t(unit.titleKey)}`,
          content: <FuncionPanel unit={unit} />,
        }))}
      />
    </ContentSection>
  )
}
