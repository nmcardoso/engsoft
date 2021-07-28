import './UserPage.css'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { useEffect, useReducer, useState } from 'react'
import API from './services/API'

function UserPage() {
  const { user, logout } = useAuth()
  const [unsynced, setUnsynced] = useState(undefined)
  const [loading, isLoading] = useState(false)

  useEffect(async () => {
    const api = new API()
    try {
      const r = await api.getUnsyncedForms(user.id_unidade_saude)
      setUnsynced(r?.data?.count)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handleSync = async () => {
    const api = new API()
    isLoading(true)
    try {
      const r = await api.syncForms(user.id_unidade_saude)
      if (r.data.success) {
        isLoading(false)
        setUnsynced(0)
      } else {
        isLoading(false)
        console.log(r.data)
        alert('Ocorreu um erro durante a sincronização com o Vacivida')
      }
    } catch (err) {
      console.log(err)
      isLoading(false)
    }
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
            <span className="">Página do usuário</span>
          </div>
        </nav>

        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light pb-3 pt-1 mx-5 px-4 d-flex justify-content-center">

            {/* colocar as coisas que vao dentro da navbar aqui */}

            <div className="ContainerButton d-flex align-middle">
              <Link to="/formulario">
                <button className="btn btn-light fw-bold py-3 px-4 border border-dark mx-2">
                  Formulário ✏️️
                </button>
              </Link>
              <Link to="/powerbi">
                <button className="btn btn-light fw-bold py-3 px-4 border border-dark mx-2">
                  Análise 📊
                </button>
              </Link>
              <Link to="/feedback">
                <button className="btn btn-light fw-bold py-3 px-4 border border-dark mx-2">
                  Feedack 🔁
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="userInfo">
          <h4>{user.nome}</h4>
          <h6>Unidiade de saúde: {user?.unidade_saude?.nome}</h6>
          <h6>Endereço: {user?.unidade_saude?.endereco}</h6>

          <hr />

          {unsynced === undefined ? (
            <span className="text-secondary">
              <span className="spinner-border spinner-border-sm"></span>
              &nbsp;&nbsp;&nbsp;Carregando dados de sincronização dos formulários...
            </span>
          ) : (
            <>
              {unsynced > 0 ? (
                <>
                  <span className="me-3">
                    Há <b>{unsynced}</b> formulário(s) a ser(em) sincronizado(s).
                  </span>
                  {loading ? (
                    <button
                      className="btn btn-success fw-bold py-2 px-3 mx-3"
                      type="submit"
                      disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true" />
                      &nbsp;&nbsp;&nbsp;Sincronizando...
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={handleSync}>
                      Sincronizar agora
                    </button>
                  )}
                </>
              ) : (
                <span className="text-success">Todos os formulários estão sincronizados</span>
              )}
            </>
          )}

          <hr />

          <button
            className="btn btn-danger"
            onClick={() => logout()}>
            Deslogar
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserPage
