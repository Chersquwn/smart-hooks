import { useEffect, useState } from 'react'

interface NetworkState {
  online: boolean
  type?: string
}

const getConnectState = (): NetworkState => {
  const nav = <any>navigator
  const state = { online: nav.onLine }

  if (nav.connection) return { ...state, ...nav.connection }

  return state
}

const useNetwork = (): NetworkState => {
  const [state, setState] = useState()
  const nav = <any>navigator

  const onLine = (): void => setState({ ...state, online: true })
  const offLine = (): void => setState({ ...state, online: false })
  const onConnectionChange = (): void =>
    setState({ ...state, ...getConnectState() })

  useEffect(() => {
    window.addEventListener('online', onLine)
    window.addEventListener('offline', offLine)

    if (nav.connection) {
      nav.connection.addEventListener('change', onConnectionChange)
    }

    return () => {
      window.removeEventListener('online', onLine)
      window.removeEventListener('offline', offLine)

      if (nav.connection) {
        nav.connection.addEventListener('change', onConnectionChange)
      }
    }
  }, [])

  return state
}

export default useNetwork
