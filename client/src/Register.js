import { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import API from './services/API'
import './Login.css'
import HomeButton from './HomeButton'


const fetchUnidades = async query => {
  const api = new API()
  try {
    const unidades = await api.getUnidadeSaude({
      campos: ['id', 'nome'],
      query,
      limit: 20
    })
    const mapped = unidades.data.map(u => ({ value: u.id, label: u.nome }))
    return mapped
  } catch (e) {
    console.log(e)
  }
}

function Register() {
  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [idUnidade, setIdUnidade] = useState(null)
  const [message, setMessage] = useState({})
  const [loading, isLoading] = useState(false)

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

  return (
    <div>
      <HomeButton />
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
              {message.type == 'error' ?
                <i class="bi bi-exclamation-circle me-2"></i> :
                <i class="bi bi-check-circle me-2"></i>}
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
              <AsyncSelect
                cacheOptions
                defaultOptions
                onChange={e => setIdUnidade(e?.value)}
                loadOptions={fetchUnidades}
                isClearable={true}
                loadingMessage={() => 'Procurando'}
                noOptionsMessage={() => 'Nada encontrado'}
                theme={{
                  spacing: {
                    baseUnit: 3,
                    controlHeight: 48,
                    menuGutter: 0
                  }
                }} />
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
