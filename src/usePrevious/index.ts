import { useRef, useEffect } from 'react'

export default function usePrevious<T>(value: T): T {
  const ref = useRef(null)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
