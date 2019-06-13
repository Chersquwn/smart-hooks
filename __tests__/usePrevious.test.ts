import { renderHook } from 'react-hooks-testing-library'
import usePrevious from '../src/usePrevious'

describe('usePrevious', () => {
  const hook = renderHook(props => usePrevious(props), {
    initialProps: 0
  })

  test('return previous state after update', () => {
    hook.rerender(1)
    expect(hook.result.current).toBe(0)
    hook.rerender(2)
    expect(hook.result.current).toBe(1)
  })
})
