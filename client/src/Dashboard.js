import { useAuth } from './AuthContext'
import './Dashboard.css'
import { Link } from 'react-router-dom'



function Dashboard() {
  const { user } = useAuth()

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

              <div className="input-group input-group-lg mb-3 px-5 ">
                <span className="input-group-text" id="basic-addon1">CEP</span>
                <input type="text" className="form-control" placeholder="CEP" aria-label="CEP" aria-describedby="campo-cep" />
              </div>

              <div className="input-group input-group-lg mb-3 pe-1 ps-5 w-50">
                <span className="input-group-text" id="basic-addon1">UF</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">UF 1</a></li>
                  <li><a className="dropdown-item" href="#">UF 2</a></li>
                  <li><a className="dropdown-item" href="#">UF 3</a></li>
                </ul>
              </div>

              <div className="input-group input-group-lg mb-3 ps-1 pe-5 w-50">
                <span className="input-group-text" id="basic-addon1">Município Residência</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Rural</a></li>
                  <li><a className="dropdown-item" href="#">Urbano</a></li>
                </ul>
              </div>

              <div className="input-group input-group-lg mb-3 ps-5 pe-1 w-75">
                <span className="input-group-text" id="basic-addon1">Endereço</span>
                <input type="text" className="form-control" placeholder="Endereço" />
              </div>

              <div className="input-group input-group-lg mb-3 pe-5 ps-1 w-25">
                <span className="input-group-text" id="basic-addon1">N°</span>
                <input type="text" className="form-control" placeholder="n°" />
              </div>

              <div className="input-group input-group-lg mb-3 px-5 ">
                <span className="input-group-text" id="basic-addon1">Bairo</span>
                <input type="text" className="form-control" placeholder="Bairro" />
              </div>

              <div className="input-group input-group-lg mb-3 px-5 ">
                <span className="input-group-text" id="basic-addon1">Complemento</span>
                <input type="text" className="form-control" placeholder="Complemento" aria-label="Complemento" aria-describedby="campo-complemento" />
              </div>
            </div>
            <div className="d-grid gap-2">
              <button type="button" className="btn btn-primary btn-large mx-5 my-3">Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
