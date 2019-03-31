import { useEffect } from 'react'

export const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = title

    return () => {
      document.title = title
    }
  }, [title])
}
