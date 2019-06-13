import { renderHook } from 'react-hooks-testing-library'
import useInterval from '../src/useInterval'

describe('useInterval', () => {
  let count = 0

  const callback = (): number => count++
  const hook = renderHook(
    ({ callback, delay }) => useInterval(callback, delay),
    { initialProps: { callback, delay: null } }
  )

  test('should useInterval update', () => {
    jest.useFakeTimers()
    hook.rerender({ callback, delay: 1000 })
    jest.advanceTimersByTime(5000)
    expect(count).toBe(5)
    jest.useRealTimers()
  })
})
