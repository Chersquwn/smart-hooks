import { useEffect } from 'react'

const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = title

    return () => {
      document.title = title
    }
  }, [title])
}

export default useDocumentTitle
