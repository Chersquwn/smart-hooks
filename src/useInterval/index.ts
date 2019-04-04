import { useEffect } from 'react'
import usePrevious from '../usePrevious'

export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = usePrevious(callback)
  const tick = (): void => {
    savedCallback()
  }

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(tick, delay)

      return () => clearInterval(id)
    }
  }, [delay])
}
