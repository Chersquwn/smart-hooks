import { useEffect } from 'react'

export default function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title

    return () => {
      document.title = title
    }
  }, [title])
}
