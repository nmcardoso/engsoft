import { useAuth } from './AuthContext'
import './Dashboard.css'

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
        <>
          <div className='fadeOut'>
            Bem Vindo, <b>Usuário {user.nome}</b>
          </div>
          <div className="fadeIn">
            <div className="buttonContainer d-block my-3">
              <button className='btn btn-light btn-lg fw-bold py-4 px-3 rounded-pill border border-success mx-2 border-3'>Formulário 🖊</button>
              <button className='btn btn-light btn-lg fw-bold py-4 px-3 rounded-pill border border-success mx-2 border-3'>Análise 📊</button>
              <button className='btn btn-light btn-lg fw-bold py-4 px-3 rounded-pill border border-success mx-2 border-3'>Feedback 🔁</button>
            </div>

            <div class="input-group input-group-lg mb-3 px-5 ">
              <span class="input-group-text" id="basic-addon1">Nome Paciente</span>
              <input type="text" class="form-control" placeholder="Nome paciente" aria-label="Nome" aria-describedby="campo-nome" />
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Data de nascimento</span>
              <input type="date" class="form-control" placeholder="data" aria-label="Data de nascimento" aria-describedby="campo-data" />
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">CPF</span>
              <input type="text" class="form-control" placeholder="CPF" aria-label="Número CPF" aria-describedby="campo-cpf" />
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Telefone com DDD</span>
              <input type="text" class="form-control" placeholder="Tel" aria-label="Telefone" aria-describedby="campo-telefone" />
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Laboratório</span>
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Escolher</button>
              <ul class="dropdown-menu">
                <li>Action</li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Lote</span>
              <input type="text" class="form-control" placeholder="Lote" aria-label="Lote" aria-describedby="campo-lote" />
            </div>

            <div class="input-group input-group-lg mb-3 px-5">
              <span class="input-group-text" id="basic-addon1">Dose</span>
              <div className="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" id='primeira_dose' aria-label="Dose" aria-describedby="campo-dose" />
                <label htmlFor="primeira_dose">1ª dose</label>

                <input class="form-check-input mt-0 mx-3" type="checkbox" id='primeira_dose' aria-label="Dose" aria-describedby="campo-dose" />
                <label htmlFor="primeira_dose">2ª dose</label>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
