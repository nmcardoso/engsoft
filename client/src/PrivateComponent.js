import { Redirect } from 'react-router'

import { useAuth } from './AuthContext'


function PrivateComponent({ children }) {
  const { session } = useAuth()

  return (
    <>
      {session?.logged ? children : <Redirect to="/login" />}
    </>
  )
}

export default PrivateComponent
