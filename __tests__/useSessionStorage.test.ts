import { renderHook, act } from 'react-hooks-testing-library'
import useSessionStorage from '../src/useSessionStorage'

describe('useSessionStorage', () => {
  const sessionStorageMock = (function() {
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

  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock
  })

  const hook = renderHook(({ key, value }) => useSessionStorage(key, value), {
    initialProps: { key: 'a', value: 123 }
  })

  test('should set value to sessionStorage', () => {
    expect(hook.result.current[0]).toBe(123)

    act(() => {
      hook.result.current[1](456)
    })

    expect(hook.result.current[0]).toBe(456)
  })

  test('should get value to sessionStorage', () => {
    expect(hook.result.current[0]).toBe(456)
  })
})
