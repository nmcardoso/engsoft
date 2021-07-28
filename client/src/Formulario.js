import { useAuth } from './AuthContext'
import './Formulario.css'
import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'
import CepApi from './services/CepApi'
import API from './services/API'


const validationClass = (cls, touched, error) => {
  if (!touched) return cls
  return error ? cls + ' is-invalid' : cls + ' is-valid'
}
const validaCPF = function (cpf) {
  var sum = 0;
  var remainder;


  var allEqual = true;
  for (var i = 0; i < cpf.length - 1; i++) {
    if (cpf[i] != cpf[i + 1])
      allEqual = false;
  }
  if (allEqual)
    return false;

  for (i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;

  if ((remainder == 10) || (remainder == 11))
    remainder = 0;
  if (remainder != parseInt(cpf.substring(9, 10)))
    return false;

  sum = 0;
  for (i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i); remainder = (sum * 10) % 11;

  if ((remainder == 10) || (remainder == 11))
    remainder = 0;
  if (remainder != parseInt(cpf.substring(10, 11)))
    return false;

  return true;
}

function rand(n) {
  var ranNum = Math.round(Math.random() * n);
  return ranNum;
}

function mod(numerator, denominator) {
  return Math.round(numerator - (Math.floor(numerator / denominator) * denominator));
}

const fields = [
  'nome',
  'nomeMae',
  'nomeSocial',
  'cpf',
  'telefone',
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

function primeirasMaiusculas(string) {
  const arr = string.split(" ");
  for (var i = 0; i < arr.length; i++)
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  const str2 = arr.join(" ")

  return str2
}
function Formulario() {
  const { user } = useAuth()

  const [values, valuesDispatcher] = useReducer(valuesReducer, initialValues)
  const [errors, errorsDispatcher] = useReducer(errorsReducer, initialErrors)
  const [touched, setTouched] = useState(initialTouched)
  const [fetchingCep, isFetchingCep] = useState(false)

  const [dataNascimento, setNascimento] = useState('')
  const [sexo, setSexo] = useState('Escolher')
  const [lote, setLote] = useState('')
  const [lab, setLab] = useState('Escolher')
  const [dose, setDose] = useState('Escolher')
  const [etnia, setEtnia] = useState('Escolher')
  const [gestante, setGestante] = useState(false)
  const [puerpera, setPuerpera] = useState(false)
  const [telefone, setTelefone] = useState('')


  const resetForm = () => {
    setNascimento('')
    setSexo('Escolher')
    setLote('')
    setLab('Escolher')
    setDose('Escolher')
    setEtnia('Escolher')
    setGestante(false)
    setPuerpera(false)
    setTelefone('')
    valuesDispatcher(Object.fromEntries(fields.map(e => [e, ''])))
    errorsDispatcher(Object.fromEntries(fields.map(e => [e, undefined])))
    setTouched(Object.fromEntries(fields.map(e => [e, false])))
  }

  const handleFormulario = async () => {
    const data = {
      id_unidade_saude: user.id_unidade_saude,
      cpf: values.cpf,
      telefone: telefone,
      nome: values.nome,
      data_nascimento: dataNascimento,
      laboratorio: lab,
      lote: lote,
      data_vacinacao: new Date(),
      dose: dose,
      nome_mae: values.nomeMae,
      nome_social: values.nomeSocial,
      sexo: sexo,
      raca: etnia,
      gestante: gestante,
      puerpera: puerpera,
      zona: null,
      logradouro: values.endereco,
      numero: values.numero,
      bairro: values.bairro,
      complemento: values.complemento,
      cep: values.cep
    }

    const api = new API()
    try {
      const r = await api.postFormulario(data)
      if (r.data.success) {
        alert('Formulario cadastrado com sucesso!')
        resetForm()
      } else {
        alert('Erro ao enviar as informações ao servidor!')
        console.log(r.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const touch = (field) => {
    if (!touched[field]) setTouched({ ...touched, [field]: true })
  }

  const validate = {
    nome: data => {
      let error
      const tamMax = 40
      const tamMin = 6
      if (data.length > 0) {
        //colocou numero
        if (parseInt(data.slice(-1))) {
          valuesDispatcher({ nome: data.slice(0, -1) }) //tiro o numero
          return 'Este campo nao aceita números'
        }
        if (data.length < tamMin)
          error = 'Informe o Nome completo do paciente'

        else if (data.length > tamMax) {
          error = 'Nome muito grande'
          valuesDispatcher({ nome: data.slice(0, tamMax) })
        }

        //Sacanagenzinha de deixar primeira letra maiuscula
        if (!error || data.length < tamMin)
          valuesDispatcher({ nome: primeirasMaiusculas(data) })
      }
      return error
    },

    nomeMae: data => {
      let error
      const tamMax = 40
      const tamMin = 6
      if (data.length > 0) {
        //colocou numero
        if (parseInt(data.slice(-1))) {
          valuesDispatcher({ nomeMae: data.slice(0, -1) }) //tiro o numero
          return 'Este campo nao aceita números'
        }
        if (data.length < tamMin)
          error = 'Informe o Nome completo da mãe do paciente'

        else if (data.length > tamMax) {
          error = 'Nome da mãe muito grande'
          valuesDispatcher({ nomeMae: data.slice(0, tamMax) })
        }

        //Sacanagenzinha de deixar primeira letra maiuscula
        if (!error || data.length < tamMin)
          valuesDispatcher({ nomeMae: primeirasMaiusculas(data) })
      }
      return error
    },

    nomeSocial: data => {
      let error
      const tamMax = 40
      const tamMin = 0
      if (data.length > 0) {
        //colocou numero
        if (parseInt(data.slice(-1))) {
          valuesDispatcher({ nomeSocial: data.slice(0, -1) }) //tiro o numero
          error = 'Este campo nao aceita números'
        }
        else if (data.length > tamMax) {
          error = 'Nome da mãe muito grande'
          valuesDispatcher({ nomeSocial: data.slice(0, tamMax) })
        }
      }
      return error
    },
    cpf: data => {
      let error
      let cpf = data.replace('.', '')
        .replace('.', '').replace('.', '')
        .replace('-', '')
        .trim();

      if (cpf.length > 10) { //ja ta preenchido, soh retirar

        if (cpf.length === 12) {
          valuesDispatcher({ cpf: data.slice(0, -1) }) //tiro o 1ue foi colocado
          cpf = cpf.slice(0, -1)
        }
        if (!validaCPF(cpf))
          return 'CPF inválido'
        return
      }
      else if (!Number.isInteger(parseInt(data.slice(-1)))) {
        valuesDispatcher({ cpf: data.slice(0, -1) }) //tiro o 1ue foi colocado
        return 'Este campo aceita apenas números'
      }

      if (cpf.length == 3 || cpf.length == 6)
        valuesDispatcher({ cpf: data + '.' })
      else if (cpf.length == 9)
        valuesDispatcher({ cpf: data + '-' })

      return 'CPF inválido'
    },


    nomeSocial: data => {
      let error
      const tamMax = 40
      const tamMin = 0
      if (data.length > 0) {
        //colocou numero
        if (parseInt(data.slice(-1))) {
          valuesDispatcher({ nomeSocial: data.slice(0, -1) }) //tiro o numero
          error = 'Este campo nao aceita números'
        }
        else if (data.length > tamMax) {
          error = 'Nome da mãe muito grande'
          valuesDispatcher({ nomeSocial: data.slice(0, tamMax) })
        }
      }
      return error
    },
    telefone: data => {
      let error
      let telefone = data.replace('(', '')
        .replace(')', '').replace('.', '')
        .replace('-', '').replace(' ', '')
        .trim();
      if (telefone.length > 10) { //ja ta preenchido, soh retirar

        if (telefone.length === 12) {
          valuesDispatcher({ telefone: data.slice(0, -1) }) //tiro o 1ue foi colocado
          telefone = telefone.slice(0, -1)
        }
        return
      }

      if (!Number.isInteger(parseInt(data.slice(-1)))) {
        valuesDispatcher({ telefone: data.slice(0, -1) }) //coiso
        return 'Este campo aceita apenas numeros'
      }
      if (telefone.length === 2) {
        valuesDispatcher({ telefone: '(' + telefone + ') ' })
      }
      else if (telefone.length === 7)
        valuesDispatcher({ telefone: data + '-' })

      return 'Telefone incompleto'
    },
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
        if (data !== values.cep) {
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

                <div className="ContainerButton d-flex align-middle">
                  <Link
                    to='/userpage'>
                    <button className='btn btn-light fw-bold py-3 px-4 border border-dark mx-2'>Usuário 🏠</button>
                  </Link>
                  <Link
                    to='/powerbi'>
                    <button className='btn btn-light fw-bold py-3 px-4 border border-dark mx-2'>Análise 📊</button>
                  </Link>
                  <Link
                    to='/feedback'>
                    <button className='btn btn-light fw-bold py-3 px-4 border border-dark mx-2'>Feedback 🔁</button>
                  </Link>
                </div>
              </div>
            </div>

            <form>
              <div className="ContainerForm">
                <div className="input-group input-group-lg mb-3 px-5 mt-3 w-100" id='inputTipo1'>
                  <span className="input-group-text" id="basic-addon1">Nome</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.nome, errors.nome)}
                    placeholder="Nome paciente"
                    aria-label="Nome"
                    value={values.nome}
                    aria-describedby="campo-nome"
                    onChange={e => handleFieldChange('nome', e.target.value)} />
                  {touched.nome && errors.nome && (
                    <div className="invalid-feedback">
                      {errors.nome}
                    </div>
                  )}
                </div>
                <div className="input-group input-group-lg mb-3 px-5">
                  <span className="input-group-text" id="basic-addon1">Nome da Mãe</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.nomeMae, errors.nomeMae)}
                    placeholder="Nome Mae"
                    aria-label="Nome-Mae"
                    value={values.nomeMae}
                    aria-describedby="campo-nome-mae"
                    onChange={e => handleFieldChange('nomeMae', e.target.value)} />
                  {touched.nomeMae && errors.nomeMae && (
                    <div className="invalid-feedback">
                      {errors.nomeMae}
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 px-5">
                  <span className="input-group-text" id="basic-addon1">Nome social</span>
                  <input
                    type="text"
                    placeholder="Nome social"
                    className={validationClass('form-control', touched.nomeSocial, errors.nomeSocial)}
                    aria-label="Nome social"
                    value={values.nomeSocial}
                    aria-describedby="campo-nome-social"
                    onChange={e => handleFieldChange('nomeSocial', e.target.value)} />
                  {touched.nomeSocial && errors.nomeSocial && (
                    <div className="invalid-feedback">
                      {errors.nomeSocial}
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text w-50 text-wrap" id="basic-addon1">Data de nascimento</span>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="data"
                    aria-label="Data de nascimento"
                    aria-describedby="campo-data"
                    value={dataNascimento}
                    onChange={e => setNascimento(e.target.value)} />
                </div>

                <div className="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                  <span className="input-group-text" id="basic-addon1">Sexo</span>
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{sexo}</button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setSexo(e.target.textContent)} >
                        Feminino
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setSexo(e.target.textContent)} >
                        Masculino
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setSexo(e.target.textContent)} >
                        Outros
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setSexo(e.target.textContent)} >
                        Não declarado
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text" id="basic-addon1">CPF</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.cpf, errors.cpf)}
                    placeholder="CPF"
                    aria-label="Número CPF"
                    value={values.cpf}
                    aria-describedby="campo-cpf"
                    onChange={e => handleFieldChange('cpf', e.target.value)} />
                  {touched.cpf && errors.cpf && (
                    <div className="invalid-feedback">
                      {errors.cpf}
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                  <span className="input-group-text" id="basic-addon1">Telefone</span>
                  <input
                    type="text"
                    className={validationClass('form-control', touched.telefone, errors.telefone)}
                    placeholder="DD XXXXXXXXX"
                    aria-label="Telefone"
                    value={values.telefone}
                    aria-describedby="campo-telefone"
                    onChange={e => handleFieldChange('telefone', e.target.value)} />
                  {touched.telefone && errors.telefone && (
                    <div className="invalid-feedback">
                      {errors.telefone}
                    </div>
                  )}
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Lote</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Lote"
                    aria-label="Lote"
                    aria-describedby="campo-lote"
                    value={lote}
                    onChange={e => setLote(e.target.value)} />
                </div>

                <div className="input-group input-group-lg mb-3 pe-5 ps-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Marca</span>
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{lab}</button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setLab(e.target.textContent)}>
                        CoronaVac
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setLab(e.target.textContent)}>
                        AstraZeneca
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setLab(e.target.textContent)}>
                        Pfizer
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setLab(e.target.textContent)}>
                        Sputnik V
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Dose</span>
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{dose}</button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setDose(1)}>
                        1ª
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setDose(2)}>
                        2ª
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="input-group input-group-lg mb-3 ps-1 pe-5 w-50 text-wrap">
                  <span className="input-group-text" id="basic-addon1">Raça/Cor/Etnia</span>
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{etnia}</button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setEtnia(e.target.textContent)}>
                        Branca
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setEtnia(e.target.textContent)}>
                        Preta
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setEtnia(e.target.textContent)}>
                        Parda
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setEtnia(e.target.textContent)}>
                        Amarela
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setEtnia(e.target.textContent)}>
                        Indígena
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={e => setEtnia(e.target.textContent)}>
                        Não informada
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Gestante</span>
                  <div className="input-group-text">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      id='declaracao_gestante'
                      aria-label="Gestante"
                      aria-describedby="campo-gestante"
                      checked={gestante}
                      onClick={e => setGestante(e.target.checked)} />
                  </div>
                </div>

                <div className="input-group input-group-lg mb-3 pe-5 ps-1 w-50">
                  <span className="input-group-text" id="basic-addon1">Puérpera</span>
                  <div className="input-group-text">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      id='declaracao_puerpera'
                      aria-label="Puerpera"
                      aria-describedby="campo-puerpera"
                      checked={puerpera}
                      onClick={e => setPuerpera(e.target.checked)} />
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
                    <div className="d-flex align-items-center justify-content-center text-secondary">
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

                <div className="input-group input-group-lg px-5 has-validation">
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
                <div className="d-block gap-2 w-100 mx-5 my-3">
                  <button
                    type="button"
                    onClick={handleFormulario}
                    className="btn btn-dark btn-large w-100 mb-3">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Formulario
