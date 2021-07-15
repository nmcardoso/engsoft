import { Redirect } from 'react-router'

import { useAuth } from './AuthContext'


function AuthRedirect({ children, ifLogged, to }) {
  const { session } = useAuth()

  return (
    <>
      {(session?.logged && ifLogged) ||
        (!session?.logged && !ifLogged) ?
        <Redirect to={to} /> : children}
    </>
  )
}

export default AuthRedirect
