import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import API from './API'
import './Dashboard.css'

function Dashboard() {
  /* const [firstLoad, isFirstLoad] = useState(true)
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
  }, [firstLoad]) */

  return (
    <div className="pageContainer">
      <div className="zero">sadiojuisa</div>
      {/* {user && Object.keys(user).length === 0 && user.constructor === Object ? (
        <div
          role="status"
          className="spinner-grow text-success"
          style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Carregando...</span>
        </div>
      ) : ( */}
        <>
          <div className='fadeOut'>
            Bem Vindo, <b>Usuário X</b>
          </div>
          <div className="fadeIn">
            <div className="buttonContainer d-block my-3">
              <button className='btn btn-light btn-lg fw-bold py-4 px-3 rounded-pill border border-success mx-2 border-3'>Formulário 🖊</button>
              <button className='btn btn-light btn-lg fw-bold py-4 px-3 rounded-pill border border-success mx-2 border-3'>Análise 📊</button>
              <button className='btn btn-light btn-lg fw-bold py-4 px-3 rounded-pill border border-success mx-2 border-3'>Feedback 🔁</button>
            </div>

            <div class="input-group input-group-lg mb-3 px-5 ">
              <span class="input-group-text" id="basic-addon1">Nome Paciente</span>
              <input type="text" class="form-control" placeholder="Nome paciente" aria-label="Nome" aria-describedby="campo-nome"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Data de nascimento</span>
              <input type="date" class="form-control" placeholder="data" aria-label="Data de nascimento" aria-describedby="campo-data"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">CPF</span>
              <input type="text" class="form-control" placeholder="CPF" aria-label="Número CPF" aria-describedby="campo-cpf"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Telefone com DDD</span>
              <input type="text" class="form-control" placeholder="Tel" aria-label="Telefone" aria-describedby="campo-telefone"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Laboratório</span>
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Lab3</a></li>
                <li><a class="dropdown-item" href="#">Lab2</a></li>
                <li><a class="dropdown-item" href="#">Lab1</a></li>
              </ul>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Lote</span>
              <input type="text" class="form-control" placeholder="Lote" aria-label="Lote" aria-describedby="campo-lote"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Dose</span>
              <div className="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" id='primeira_dose' aria-label="Dose" aria-describedby="campo-dose"/>
                <label htmlFor="primeira_dose">1ª dose</label>
                
                <input class="form-check-input mt-0 mx-3" type="checkbox" id='primeira_dose' aria-label="Dose" aria-describedby="campo-dose"/>
                <label htmlFor="primeira_dose">2ª dose</label>
              </div>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Nome da mãe</span>
              <input type="text" class="form-control" placeholder="Nome da mãe" aria-label="Nome da mãe" aria-describedby="campo-nome-mãe"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Nome social</span>
              <input type="text" class="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="campo-nome-social"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Sexo</span>
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Feminino</a></li>
                <li><a class="dropdown-item" href="#">Masculino</a></li>
                <li><a class="dropdown-item" href="#">Não declarado</a></li>
              </ul>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Raça/Cor/Etnia</span>
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Cor Branca</a></li>
                <li><a class="dropdown-item" href="#">Cor Preta</a></li>
                <li><a class="dropdown-item" href="#">Cor Parda</a></li>
                <li><a class="dropdown-item" href="#">Cor Amarela</a></li>
                <li><a class="dropdown-item" href="#">Indígena</a></li>
                <li><a class="dropdown-item" href="#">Não informada</a></li>
              </ul>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Gestante</span>
              <div className="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" id='declaracao_gestante' aria-label="Gestante" aria-describedby="campo-gestante"/>
              </div>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Puérpera</span>
              <div className="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" id='declaracao_puerpera' aria-label="Puerpera" aria-describedby="campo-puerpera"/>
              </div>
            </div>

            <div class="input-group input-group-lg mb-3 px-5 ">
              <span class="input-group-text" id="basic-addon1">CEP</span>
              <input type="text" class="form-control" placeholder="CEP" aria-label="CEP" aria-describedby="campo-cep"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">País Residência</span>
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">País 1</a></li>
                <li><a class="dropdown-item" href="#">País 2</a></li>
                <li><a class="dropdown-item" href="#">País 3</a></li>
              </ul>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">UF</span>
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">UF 1</a></li>
                <li><a class="dropdown-item" href="#">UF 2</a></li>
                <li><a class="dropdown-item" href="#">UF 3</a></li>
              </ul>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Município Residência</span>
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Rural</a></li>
                <li><a class="dropdown-item" href="#">Urbano</a></li>
              </ul>
            </div>

            <div class="input-group input-group-lg mb-3 px-5 ">
              <span class="input-group-text" id="basic-addon1">Logradouro</span>
              <input type="text" class="form-control" placeholder="Logradouro" aria-label="Logradouro" aria-describedby="campo-logradouro"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5 ">
              <span class="input-group-text" id="basic-addon1">Número</span>
              <input type="text" class="form-control" placeholder="Número" aria-label="Numero" aria-describedby="campo-numero"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5 ">
              <span class="input-group-text" id="basic-addon1">Bairo</span>
              <input type="text" class="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="campo-bairro"/>
            </div>

            <div class="input-group input-group-lg mb-3 px-5 ">
              <span class="input-group-text" id="basic-addon1">Complemento</span>
              <input type="text" class="form-control" placeholder="Complemento" aria-label="Complemento" aria-describedby="campo-complemento"/>
            </div>

          </div>
        </>
      {/* )} */}
    </div>
  )
}

export default Dashboard
