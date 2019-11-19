import { useState, useCallback } from 'react'

export default function useClientRect<T extends ClientRect | DOMRect>(): [
  T,
  (node: Element) => void
] {
  const [rect, setRect] = useState<T>(null)
  const ref = useCallback((node: Element) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect() as T)
    }
  }, [])

  return [rect, ref]
}
