import { useRef, useEffect } from 'react'

const usePrevious = <T>(value: T): T => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default usePrevious
