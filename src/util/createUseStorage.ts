import { useState } from 'react'

declare const window: {
  prototype: Window
  new (): Window
  [key: string]: any
}

interface UseStorage {
  (key: string, initialValue: any): [any, (value: any) => void]
}

const createUseStorage = (storageType: string): UseStorage => {
  return (key, initialValue) => {
    const [storeValue, setStoreValue] = useState(() => {
      const item = window[storageType].getItem(key)

      return item ? JSON.parse(item) : initialValue
    })

    const setValue = (value: any): void => {
      window[storageType].setItem(key, JSON.stringify(value))

      setStoreValue(value)
    }

    return [storeValue, setValue]
  }
}

export default createUseStorage
