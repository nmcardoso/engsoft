import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import API from './API'
import './Login.css'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, isLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    isLoading(true)
    const api = new API()
    api.login({ username, password })
      .then(resp => {
        if (resp.data.success) {
          localStorage.setItem('token', resp.data.accessToken)
          history.push('/dashboard')
        } else {
          setMessage(resp.data.message)
          isLoading(false)
        }
      })
      .catch(error => {
        setMessage(error.response.data.message)
        isLoading(false)
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
            Entrar
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
                <a
                  href="#"
                  className="text-decoration-none text-success fw-bold">
                  Esqueceu a senha?
                </a>
              </div>
              <input
                type="password"
                className="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder=""
                size="30"
                onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="custom-control custom-checkbox mb-4 mx-3 my-2 align-middle">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customControlInline"
                size="30" />
              <label
                className="custom-control-label mx-1"
                htmlFor="customControlInline">
                Ficar logado?
              </label>
            </div>
            {loading ? (
              <button
                className="btn btn-success fw-bold py-2 px-3 mx-3"
                type="submit"
                disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true" />
                &nbsp;&nbsp;&nbsp;Autenticando...
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success btn-block fw-bold py-2 px-3 mx-3">
                Entrar
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login