import { renderHook, act } from 'react-hooks-testing-library'
import useLocalStorage from '../src/useLocalStorage'

describe('useLocalStorage', () => {
  const localStorageMock = (function() {
    let store = {}
    return {
      getItem(key: string) {
        return store[key] || null
      },
      setItem(key, value) {
        store[key] = value.toString()
      },
      removeItem(key) {
        delete store[key]
      },
      clear() {
        store = {}
      }
    }
  })()

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  })

  const hook = renderHook(({ key, value }) => useLocalStorage(key, value), { initialProps: { key: 'a', value: 123 } })

  test('should set value to localStorage', () => {
    expect(hook.result.current[0]).toBe(123)

    act(() => {
      hook.result.current[1](456)
    })

    expect(hook.result.current[0]).toBe(456)
  })

  test('should get value to localStorage', () => {
    expect(hook.result.current[0]).toBe(456)
  })
})
