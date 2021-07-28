import { useAuth } from './AuthContext'
import './Feedback.css'
import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'

function Feedback () {

  const { user }  = useAuth()

  const [feedback, setFeedback] = useState('')
  const [nome, setNome] = useState('')
  const [id_unidade, setID] = useState('')
  const [loading, isLoading] = useState(false)

  const handleSubmit = e => {
    setNome(user.nome)
    setID(user.id_unidade_saude)
  }

  return (
    <div className="pageContainer">
      <div className="limiter">
        <nav className="navbar navbar-light bg-light rounded-top mx-5 mt-3">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span> Menu</span>
            </button>
            <span className="">Página de feedback</span>
          </div>
        </nav>

        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light pb-3 pt-1 mx-5 px-4 d-flex justify-content-center">
            {/* colocar as coisas que vao dentro da navbar aqui */}

            <div className="ContainerButton d-flex align-middle">
              <Link to="/formulario">
                <button className="btn btn-light fw-bold py-3 px-5 border border-success mx-2">
                  Formulário ✏️️
                </button>
              </Link>
              <Link to="/powerbi">
                <button className="btn btn-light fw-bold py-3 px-5 border border-success mx-2">
                  Análise 📊
                </button>
              </Link>
              <Link to="/userpage">
                <button className="btn btn-light fw-bold py-3 px-5 border border-success mx-2">
                  Usuário 🏠
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="userInfo">
          <h4>Campo de feedback</h4>
          <h6 className='textoInfo'>Não está satisfeito(a) com o formulário? Deixe aqui seus comentários.</h6>
          <h6 className="textoInfo">Para facilitar o contato, todas as informações abaixo serão enviadas, incluindo nome e unidade de saúde.</h6>
          <hr />

          <form onSubmit={handleSubmit}>
            <div className="lineWraper">
              <div className="titles">Nome do usuário:</div>
              <div className='values'>{user.nome}</div>
            </div>
            <div className="lineWraper">
              <div className="titles">ID Unidade de saúde:</div>
              <div className='values'>{user.id_unidade_saude}</div>
            </div>
            <div className="inputWraper">
              <label htmlFor="exampleFormControlTextarea1" className="titles form-label">Feedback:</label>
              <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="5"
                onChange={e => setFeedback(e.target.value)} />
            </div>
            <div className="d-grid gap-2">

            {loading ? (
                <button
                  className="btn btn-dark btn-large mx-0 my-3"
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
                  className="btn btn-dark btn-large mx-0 my-3">
                  Enviar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>   
  )
}

export default Feedback