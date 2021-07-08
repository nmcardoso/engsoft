import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import API from './API'
import './Dashboard.css'

function Dashboard() {
  const [firstLoad, isFirstLoad] = useState(true)
  const [user, setUser] = useState({})
  const history = useHistory

  useEffect(() => {
    const api = new API()
    console.log(localStorage.getItem('token'))
    api.validateToken(localStorage.getItem('token')).then(resp => {
      setUser({ name: resp.data.name })
      isFirstLoad(false)
    }).catch(() => {
      history.push('/login')
    })
  }, [firstLoad])

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
      {user && Object.keys(user).length === 0 && user.constructor === Object ? (
        <div
          role="status"
          className="spinner-grow text-success"
          style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Carregando...</span>
        </div>
      ) : (
        <div className='fadeOut'>
          Bem Vindo, <b>{user.name}</b>
        </div>
      )}
    </div>
  )
}

export default Dashboard