import { renderHook } from 'react-hooks-testing-library'
import useDocumentTitle from '../src/useDocumentTitle'

describe('useDocumentTitle', () => {
  const hook = renderHook(props => useDocumentTitle(props), {
    initialProps: 'Document title'
  })

  test('should update document title', () => {
    expect(document.title).toBe('Document title')
    hook.rerender('Document title updated')
    expect(document.title).toBe('Document title updated')
  })
})
