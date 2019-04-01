import { useRef, useEffect } from 'react'

export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(null)
  const tick = (): void => {
    savedCallback.current()
  }

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(tick, delay)

      return () => clearInterval(id)
    }
  }, [delay])
}
