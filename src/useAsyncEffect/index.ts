import { useEffect } from 'react'

const useAsyncEffect = (effect: () => Promise<any>, deps: any[] = []): void => {
  useEffect(() => {
    effect().catch(e => console.warn('useAsyncEffect error', e))
  }, deps)
}

export default useAsyncEffect
