import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import './PowerBI.css'


function PowerBI() {
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
            <span className="">Análise</span>
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
              <Link to="/userpage">
                <button className="btn btn-light fw-bold py-3 px-4 border border-dark mx-2">
                  Usuário 🏠
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
        <div className="BIwraper bg-light rounded-bottom mx-5 mb-3">
          <iframe
          height='100%'
          width='100%'
          margin='0'
          src="https://app.powerbi.com/view?r=eyJrIjoiNTBmNzIzZmUtYzM3NS00MWUyLThkYmYtZTdmNjQ3ZDhhMDBmIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9&pageName=ReportSection"
          frameBorder="0"
          allowFullScreen={true} />
        </div>
      </div>
    </div>
  )
}

export default PowerBI
