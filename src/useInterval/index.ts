import { useEffect } from 'react'
import usePrevious from '../usePrevious'

const useInterval = (callback: () => void, delay: number | null): void => {
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

export default useInterval
