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
            
            <nav class="navbar navbar-light bg-light rounded-top mx-5 mt-3">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  <span> Menu</span>
                </button>
                <span class=''>Formulário</span>
              </div>
            </nav>

            <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-light pb-3 pt-1 mx-5 px-4 d-flex justify-content-center">

                {/* colocar as coisas que vao dentro da navbar aqui */}

                <div className="ContainerButton d-inline align-middle">
                  <button className='btn btn-light fw-bold py-3 px-5 border border-success mx-2'>Início 🏠</button>
                  <button className='btn btn-light fw-bold py-3 px-5 border border-success mx-2'>Análise 📊</button>
                  <button className='btn btn-light fw-bold py-3 px-5 border border-success mx-2'>Feedback 🔁</button>
                </div>
              </div>
            </div>

            <div className="ContainerForm">
              <div class="input-group input-group-lg mb-3 px-5 mt-5 w-100" id='inputTipo1'>
                <span class="input-group-text" id="basic-addon1">Nome</span>
                <input type="text" class="form-control" placeholder="Nome paciente" aria-label="Nome" aria-describedby="campo-nome"/>
              </div>

              <div class="input-group input-group-lg mb-3 px-5">
                <span class="input-group-text" id="basic-addon1">Nome da mãe</span>
                <input type="text" class="form-control" placeholder="Nome da mãe" aria-label="Nome da mãe" aria-describedby="campo-nome-mãe"/>
              </div>

              <div class="input-group input-group-lg mb-3 px-5">
                <span class="input-group-text" id="basic-addon1">Nome social</span>
                <input type="text" class="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="campo-nome-social"/>
              </div>

              <div class="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                <span class="input-group-text w-50 text-wrap" id="basic-addon1">Data de nascimento</span>
                <input type="date" class="form-control" placeholder="data" aria-label="Data de nascimento" aria-describedby="campo-data"/>
              </div>

              <div class="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                <span class="input-group-text" id="basic-addon1">Sexo</span>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Feminino</a></li>
                  <li><a class="dropdown-item" href="#">Masculino</a></li>
                  <li><a class="dropdown-item" href="#">Outros</a></li>
                  <li><a class="dropdown-item" href="#">Não declarado</a></li>
                </ul>
              </div>

              <div class="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                <span class="input-group-text" id="basic-addon1">CPF</span>
                <input type="text" class="form-control" placeholder="CPF" aria-label="Número CPF" aria-describedby="campo-cpf"/>
              </div>

              <div class="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                <span class="input-group-text" id="basic-addon1">Telefone</span>
                <input type="text" class="form-control" placeholder="DD XXXXXXXXX" aria-label="Telefone" aria-describedby="campo-telefone"/>
              </div>

              <div class="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                <span class="input-group-text" id="basic-addon1">Lote</span>
                <input type="text" class="form-control" placeholder="Lote" aria-label="Lote" aria-describedby="campo-lote"/>
              </div>

              <div class="input-group input-group-lg mb-3 pe-5 ps-1 w-50">
                <span class="input-group-text" id="basic-addon1">Laboratório</span>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Lab3</a></li>
                  <li><a class="dropdown-item" href="#">Lab2</a></li>
                  <li><a class="dropdown-item" href="#">Lab1</a></li>
                </ul>
              </div>

              <div class="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                <span class="input-group-text" id="basic-addon1">Dose</span>
                <div className="input-group-text">
                  <input class="form-check-input mt-0 ms-3 me-2" type="checkbox" id='primeira_dose' aria-label="Dose" aria-describedby="campo-dose"/>
                  <label htmlFor="primeira_dose">1ª dose</label>
                  
                  <input class="form-check-input mt-0 ms-3 me-2" type="checkbox" id='primeira_dose' aria-label="Dose" aria-describedby="campo-dose"/>
                  <label htmlFor="primeira_dose">2ª dose</label>
                </div>
              </div>

              <div class="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                <span class="input-group-text" id="basic-addon1">Raça/Cor/Etnia</span>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Branca</a></li>
                  <li><a class="dropdown-item" href="#">Preta</a></li>
                  <li><a class="dropdown-item" href="#">Parda</a></li>
                  <li><a class="dropdown-item" href="#">Amarela</a></li>
                  <li><a class="dropdown-item" href="#">Indígena</a></li>
                  <li><a class="dropdown-item" href="#">Não informada</a></li>
                </ul>
              </div>

              <div class="input-group input-group-lg mb-3 ps-5 pe-1 w-50">
                <span class="input-group-text" id="basic-addon1">Gestante</span>
                <div className="input-group-text">
                  <input class="form-check-input mt-0" type="checkbox" id='declaracao_gestante' aria-label="Gestante" aria-describedby="campo-gestante"/>
                </div>
              </div>

              <div class="input-group input-group-lg mb-3 pe-5 ps-1 w-50">
                <span class="input-group-text" id="basic-addon1">Puérpera</span>
                <div className="input-group-text">
                  <input class="form-check-input mt-0" type="checkbox" id='declaracao_puerpera' aria-label="Puerpera" aria-describedby="campo-puerpera"/>
                </div>
              </div>

              <div class="input-group input-group-lg mb-3 px-5 ">
                <span class="input-group-text" id="basic-addon1">CEP</span>
                <input type="text" class="form-control" placeholder="CEP" aria-label="CEP" aria-describedby="campo-cep"/>
              </div>

              <div class="input-group input-group-lg mb-3 pe-1 ps-5 w-50">
                <span class="input-group-text" id="basic-addon1">UF</span>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">UF 1</a></li>
                  <li><a class="dropdown-item" href="#">UF 2</a></li>
                  <li><a class="dropdown-item" href="#">UF 3</a></li>
                </ul>
              </div>

              <div class="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                <span class="input-group-text" id="basic-addon1">Município Residência</span>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Rural</a></li>
                  <li><a class="dropdown-item" href="#">Urbano</a></li>
                </ul>
              </div>

              <div class="input-group input-group-lg mb-3 ps-5 pe-1 w-75">
                <span class="input-group-text" id="basic-addon1">Logradouro</span>
                <input type="text" class="form-control" placeholder="Logradouro" aria-label="Logradouro" aria-describedby="campo-logradouro"/>
              </div>

              <div class="input-group input-group-lg mb-3 pe-5 ps-1 w-25">
                <span class="input-group-text" id="basic-addon1">N°</span>
                <input type="text" class="form-control" placeholder="n°" aria-label="Numero" aria-describedby="campo-numero"/>
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
            <div className="d-grid gap-2">
            <button type="button" class="btn btn-primary btn-large mx-5 my-3">Enviar</button>
            </div>
          </div>
        </>
      {/* )} */}
    </div>
  )
}

export default Dashboard
