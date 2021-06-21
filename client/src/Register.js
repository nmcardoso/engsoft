import { useState } from 'react'
import API from './API'
import './Login.css'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const api = new API()
    api.register({ username, password })
      .then(resp => {
        if (!resp.data.success) {
          setMessage(resp.data.message)
        } else {

        }
      })
      .catch(error => {
        setMessage(error.response.data.message)
      })
  }

  return (
    <div className="limiter">
      <div className="page-container">
        <div className="banner-wrapper d-none d-md-block">
          <div className="gov-logo"></div>
          <div id="particles-background"></div>
          <div id="particles-foreground"></div>
        </div>
        <div className="form-wrapper justify-content-center align-items-center">
          <div className="vacivida-logo"></div>
          <div className="fw-bolder mb-4" style={{ fontSize: "2em" }}>
            Cadastro
          </div>

          {message ? (
            <div className="alert alert-danger" style={{ width: '400px' }} role="alert">
              {message}
            </div>
          ) : false}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label
                className="fw-bolder"
                htmlFor="exampleInputEmail1">
                Usuário
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between">
                <label
                  className="fw-bolder"
                  htmlFor="exampleInputPassword1">
                  Senha
                </label>
              </div>
              <input
                type="password"
                className="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder=""
                size="30"
                onChange={e => setPassword(e.target.value)} />
            </div>
            <button
              type="submit"
              className="btn btn-success btn-block fw-bold py-2 px-3 mx-3 mt-3">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register