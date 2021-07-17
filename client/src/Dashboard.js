import { useAuth } from './AuthContext'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'
import CepApi from './services/CepApi'


const validationClass = (cls, touched, error) => {
  if (!touched) return cls
  return error ? cls + ' is-invalid' : cls + ' is-valid'
}

const fields = [
  'cep',
  'endereco',
  'uf',
  'municipio',
  'endereco',
  'numero',
  'bairro',
  'complemento'
]

const initialValues = Object.fromEntries(fields.map(e => [e, '']))
const initialErrors = Object.fromEntries(fields.map(e => [e, undefined]))
const initialTouched = Object.fromEntries(fields.map(e => [e, false]))

function valuesReducer(state, action) {
  return { ...state, ...action }
}

function errorsReducer(state, action) {
  return { ...state, ...action }
}


function Dashboard() {
  const { user } = useAuth()

  const [values, valuesDispatcher] = useReducer(valuesReducer, initialValues)
  const [errors, errorsDispatcher] = useReducer(errorsReducer, initialErrors)
  const [touched, setTouched] = useState(initialTouched)
  const [fetchingCep, isFetchingCep] = useState(false)

  const touch = (field) => {
    if (!touched[field]) setTouched({ ...touched, [field]: true })
  }

  const validate = {
    endereco: data => {
      let error
      if (data.length < 1) error = 'Informe o endereço'
      else if (data.length > 254) error = 'Endereço muito grande'
      return error
    },
    cep: data => {
      let error
      if (data.length < 1) error = 'Informe o CEP'
      else if (data.length !== 8) error = 'CEP Inválido'
      else {
        isFetchingCep(true)
        const api = new CepApi()
        api.getInfo(data).then(info => {
          const newValues = {
            endereco: info.data.logradouro,
            uf: info.data.uf,
            municipio: info.data.localidade,
            bairro: info.data.bairro,
            complemento: info.data.complemento
          }
          const newErrors = {
            endereco: validate.endereco(newValues.endereco),
            municipio: validate.municipio(newValues.municipio),
            bairro: validate.bairro(newValues.bairro)
          }

          isFetchingCep(false)
          valuesDispatcher(newValues)
          errorsDispatcher(newErrors)
        }).catch(e => {
          isFetchingCep(false)
        })
      }
      return error
    },
    municipio: data => {
      let error
      if (data.length < 1) error = 'Informe o município'
      return error
    },
    numero: data => {
      let error
      if (data.length < 1) error = 'Informe o número'
      return error
    },
    bairro: data => {
      let error
      if (data.length < 1) error = 'Informe o bairro'
      return error
    },
    uf: data => {
      return ''
    }
  }

  const handleFieldChange = (field, data, e) => {
    console.log(field, data)
    valuesDispatcher({ [field]: data })

    touch(field)

    if (validate.hasOwnProperty(field)) {
      const newError = validate[field](data, e)
      if (typeof newError === 'string' || newError === undefined) {
        errorsDispatcher({ [field]: newError })
      } else if (typeof newError === 'object' && newError !== null) {
        errorsDispatcher({ ...newError })
      }
    }
  }


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
        <div className="pageContainer">
          <div className='fadeOut'>
            Bem Vindo, <b>Usuário</b>
          </div>
          <div className="fadeIn">

            <nav className="navbar navbar-light bg-light rounded-top mx-5 mt-3">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  <span> Menu</span>
                </button>
                <span className=''>Formulário</span>
              </div>
            </nav>

            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-light pb-3 pt-1 mx-5 px-4 d-flex justify-content-center">

                {/* colocar as coisas que vao dentro da navbar aqui */}

                <div className="ContainerButton d-inline align-middle">
                  <Link
                    to='/#'>
                    <button className='btn btn-light fw-bold py-3 px-5 border border-success mx-2'>Início 🏠</button>
                  </Link>
                  <Link
                    to='/powerbi'>
                    <button className='btn btn-light fw-bold py-3 px-5 border border-success mx-2'>Análise 📊</button>
                  </Link>
                  <Link
                    to='/#'>
                    <button className='btn btn-light fw-bold py-3 px-5 border border-success mx-2'>Feedback 🔁</button>
                  </Link>
                </div>
              </div>
            </div>

            <form>
              <div className="ContainerForm">
                <div className="input-group input-group-lg mb-3 px-5 mt-5 w-100" id='inputTipo1'>
                  <span className="input-group-text" id="basic-addon1">Nome</span>
                  <input type="text" className="form-control" placeholder="Nome paciente" aria-label="Nome" aria-describedby="campo-nome" />
                </div>

                <div className="input-group input-group-lg mb-3 px-5">
                  <span className="input-group-text" id="basic-addon1">Nome da mãe</span>
                  <input type="text" className="form-control" placeholder="Nome da mãe" aria-label="Nome da mãe" aria-describedby="campo-nome-mãe" />
                </div>

                <div className="input-group input-group-lg mb-3 px-5">
                  <span className="input-group-text" id="basic-addon1">Nome social</span>
                  <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="campo-nome-social" />
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text w-50 text-wrap" id="basic-addon1">Data de nascimento</span>
                  <input type="date" className="form-control" placeholder="data" aria-label="Data de nascimento" aria-describedby="campo-data" />
                </div>

                <div className="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                  <span className="input-group-text" id="basic-addon1">Sexo</span>
                  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Feminino</a></li>
                    <li><a className="dropdown-item" href="#">Masculino</a></li>
                    <li><a className="dropdown-item" href="#">Outros</a></li>
                    <li><a className="dropdown-item" href="#">Não declarado</a></li>
                  </ul>
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text" id="basic-addon1">CPF</span>
                  <input type="text" className="form-control" placeholder="CPF" aria-label="Número CPF" aria-describedby="campo-cpf" />
                </div>

                <div className="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                  <span className="input-group-text" id="basic-addon1">Telefone</span>
                  <input type="text" className="form-control" placeholder="DD XXXXXXXXX" aria-label="Telefone" aria-describedby="campo-telefone" />
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Lote</span>
                  <input type="text" className="form-control" placeholder="Lote" aria-label="Lote" aria-describedby="campo-lote" />
                </div>

                <div className="input-group input-group-lg mb-3 pe-5 ps-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Laboratório</span>
                  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Lab3</a></li>
                    <li><a className="dropdown-item" href="#">Lab2</a></li>
                    <li><a className="dropdown-item" href="#">Lab1</a></li>
                  </ul>
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Dose</span>
                  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">1ª</a></li>
                    <li><a className="dropdown-item" href="#">2ª</a></li>
                  </ul>
                </div>

                <div className="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                  <span className="input-group-text" id="basic-addon1">Raça/Cor/Etnia</span>
                  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Branca</a></li>
                    <li><a className="dropdown-item" href="#">Preta</a></li>
                    <li><a className="dropdown-item" href="#">Parda</a></li>
                    <li><a className="dropdown-item" href="#">Amarela</a></li>
                    <li><a className="dropdown-item" href="#">Indígena</a></li>
                    <li><a className="dropdown-item" href="#">Não informada</a></li>
                  </ul>
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Gestante</span>
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" id='declaracao_gestante' aria-label="Gestante" aria-describedby="campo-gestante" />
                  </div>
                </div>

                <div className="input-group input-group-lg mb-3 pe-5 ps-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Puérpera</span>
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" id='declaracao_puerpera' aria-label="Puerpera" aria-describedby="campo-puerpera" />
                  </div>
                </div>

                <div className="input-group input-group-lg mb-3 px-5 has-validation">
                  <span className="input-group-text" id="basic-addon1">CEP</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.cep, errors.cep)}
                    placeholder="CEP"
                    aria-label="CEP"
                    aria-describedby="campo-cep"
                    value={values.cep}
                    onBlur={e => handleFieldChange('cep', e.target.value)}
                    onChange={e => handleFieldChange('cep', e.target.value)} />
                  {fetchingCep && (
                    <div className="d-flex align-items-center justify-content-center text-light">
                      <span className="spinner-border spinner-border-sm me-2 ms-3" role="status" aria-hidden="true"></span>
                      <span>Carregando...</span>
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 pe-1 ps-5 w-50 has-validation">
                  <span className="input-group-text" id="basic-addon1">UF</span>
                  <select
                    className="form-select"
                    onChange={e => handleFieldChange('uf', e.target.value)}
                    value={values.uf}>
                    <option value="" disabled={true}>Selecione</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                  </select>
                </div>

                <div className="input-group input-group-lg mb-3 ps-1 pe-5 w-50 has-validation">
                  <span className="input-group-text" id="basic-addon1">Município</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.municipio, errors.municipio)}
                    placeholder="Município"
                    value={values.municipio}
                    onBlur={e => handleFieldChange('municipio', e.target.value)}
                    onChange={e => handleFieldChange('municipio', e.target.value)} />
                  {touched.municipio && errors.municipio && (
                    <div className="invalid-feedback">
                      {errors.municipio}
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-75 has-validation">
                  <span className="input-group-text" id="basic-addon1">Endereço</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.endereco, errors.endereco)}
                    placeholder="Endereço"
                    value={values.endereco}
                    onBlur={e => handleFieldChange('endereco', e.target.value)}
                    onChange={e => handleFieldChange('endereco', e.target.value)} />
                  {touched.endereco && errors.endereco && (
                    <div className="invalid-feedback">
                      {errors.endereco}
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 pe-5 ps-1 w-25 has-validation">
                  <span className="input-group-text" id="basic-addon1">N°</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.numero, errors.numero)}
                    placeholder="n°"
                    value={values.numero}
                    onBlur={e => handleFieldChange('numero', e.target.value)}
                    onChange={e => handleFieldChange('numero', e.target.value)} />
                  {touched.numero && errors.numero && (
                    <div className="invalid-feedback">
                      {errors.numero}
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 px-5 has-validation">
                  <span className="input-group-text" id="basic-addon1">Bairo</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.bairro, errors.bairro)}
                    placeholder="Bairro"
                    value={values.bairro}
                    onBlur={e => handleFieldChange('bairro', e.target.value)}
                    onChange={e => handleFieldChange('bairro', e.target.value)} />
                  {touched.bairro && errors.bairro && (
                    <div className="invalid-feedback">
                      {errors.bairro}
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 px-5 has-validation">
                  <span className="input-group-text" id="basic-addon1">Complemento</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.complemento, errors.complemento)}
                    placeholder="Complemento"
                    aria-label="Complemento"
                    aria-describedby="campo-complemento"
                    onBlur={e => handleFieldChange('complemento', e.target.value)}
                    onChange={e => handleFieldChange('complemento', e.target.value)} />
                </div>
              </div>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary btn-large mx-5 my-3">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
