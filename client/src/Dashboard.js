import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import API from './API'
import './Dashboard.css'

function Dashboard() {
  const [firstLoad, isFirstLoad] = useState(true)
  const [user, setUser] = useState({})
  const history = useHistory

  /* useEffect(() => {
    const api = new API()
    console.log(localStorage.getItem('token'))
    api.validateToken(localStorage.getItem('token')).then(resp => {
      setUser({ name: resp.data.name })
      isFirstLoad(false)
    }).catch(() => {
      history.push('/login')
    })
  }, [firstLoad]) */

  /* pagina do dash */

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
      <div className='wrapper'>
        <div className='fadeOut'>
          Bem Vindo, <b>ablue</b>
        </div>
        <div className="fadeIn">
          <div className="buttonContainer d-block my-3">
            <button className='btn btn-outline-light btn-lg fw-bold py-4 px-3 rounded-0'>Formulário 🖊</button>
            <button className='btn btn-outline-light btn-lg fw-bold py-4 px-3 rounded-0'>Análise 📊</button>
            <button className='btn btn-outline-light btn-lg fw-bold py-4 px-3 rounded-0'>Feedback 🔁</button>
          </div>
          <form>
            <div className='form-group'>
              <label htmlFor="inputNome">Nome</label>
              <input type="text" className="form-control" id='inputNome' placeholder='Nome do paciente'/>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Dashboard