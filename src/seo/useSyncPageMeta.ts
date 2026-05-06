import { useEffect } from 'react'

export interface PageMeta {
  title: string
  description?: string
}

/**
 * Sincroniza metadatos del documento sin librerías externas.
 * Útil para títulos por ruta y, en el futuro, otras meta editables vía DOM.
 */
export function useSyncPageMeta(meta: PageMeta): void {
  const { title, description } = meta

  useEffect(() => {
    document.title = title

    if (description !== undefined) {
      const element = document.querySelector('meta[name="description"]')
      if (element instanceof HTMLMetaElement) {
        element.content = description
      }
    }
  }, [title, description])
}
