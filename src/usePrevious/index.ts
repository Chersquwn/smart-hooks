import { useRef, useEffect } from 'react'

export function usePrevious<T>(value: T): T {
  const ref = useRef(null)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
