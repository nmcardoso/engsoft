import { createContext, useContext, useEffect, useState } from 'react'
import API from './API'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [state, setState] = useState({
    user: null,
    session: null
  })
  const api = new API()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'))
    if (auth) {
      api.setAuthToken(auth.session.token)
      setState(auth)
    }
  }, [])

  async function login({ username, password }) {
    let message, success

    try {
      const resp = await api.login({ username, password })

      localStorage.setItem('auth', JSON.stringify({
        user: resp.data.userInfo,
        session: { token: resp.data.token, logged: true }
      }))

      api.setAuthToken(resp.data.token)

      message = resp.data.message
      success = resp.data.success

      setState({
        user: resp.data.userInfo,
        session: { token: resp.data.token, logged: true }
      })
    } catch (err) {
      message = err.response.data.message
      success = err.response.data.success

      setState({
        user: null,
        session: null
      })
    }

    return { success, message }
  }

  function logout() {
    localStorage.removeItem('auth')

    api.removeAuthToken()

    setState({
      user: null,
      session: null,
      status: null
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        session: state.session,
        status: state.status,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
