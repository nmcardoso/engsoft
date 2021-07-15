import { useState, useEffect } from 'react'
import API from './API'
import './Login.css'

function Register() {
  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [idUnidade, setIdUnidade] = useState(null)
  const [message, setMessage] = useState({})
  const [loading, isLoading] = useState(false)
  const [listaUnidades, setListaUnidades] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    isLoading(true)
    const api = new API()
    api.register({ username, password, nome, cpf, idUnidade })
      .then(resp => {
        if (resp.data.success) {
          setMessage({ value: resp.data.message, type: 'success' })
          isLoading(false)
        } else {
          setMessage({ value: resp.data.message, type: 'error' })
          isLoading(false)
        }
      })
      .catch(error => {
        setMessage({ value: error.response.data.message, type: 'error' })
        isLoading(false)
      })
  }

  useEffect(async () => {
    const api = new API()
    const unidades = await api.getUnidadeSaude({ campos: ['id', 'nome'] })
    setListaUnidades(unidades.data)
  }, [])

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

          {message.value ? (
            <div
              className={message.type == 'error' ? "alert alert-danger" : "alert alert-success"}
              style={{ width: '400px' }}
              role="alert">
              {message.value}
            </div>
          ) : false}

          <form onSubmit={handleSubmit}>
            {/* campo de nome */}
            <div className="form-group">
              <label
                className="fw-bolder"
                htmlFor="exampleInputName">
                Nome
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleInputName"
                placeholder=""
                onChange={e => setNome(e.target.value)} />
            </div>
            {/* campo de CPF */}
            <div className="form-group">
              <label
                className="fw-bolder"
                htmlFor="exampleInputCPF">
                CPF
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleInputCPF"
                placeholder=""
                onChange={e => setCPF(e.target.value)} />
            </div>
            {/* campo do usuario */}
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
            {/* campo de senha */}
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
            {/* campo de unidade */}
            <div className="form-group">
              <label
                className="fw-bolder"
                htmlFor="exampleInputUnidade">
                Unidade
              </label>

              <select
                className="form-select"
                onChange={e => setIdUnidade(parseInt(e.target.value))}
                disabled={listaUnidades.length === 0}
                defaultValue="-1"
              >
                {listaUnidades.length === 0 ? <option value="-1">Carregando...</option> : null}
                {listaUnidades.map(u => <option key={u.id} value={u.id}>{u.nome}</option>)}
              </select>

            </div>


            {loading ? (
              <button
                className="btn btn-success btn-lg btn-block fw-bold py-3 px-3 mx-1 my-3"
                type="submit"
                disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true" />
                &nbsp;&nbsp;&nbsp;Solicitando...
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block fw-bold py-3 px-3 mx-1 my-3">
                Cadastrar
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
