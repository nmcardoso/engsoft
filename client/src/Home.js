import { Link } from 'react-router-dom'

import logo from './assets/logo_vacivida.png'

function Home() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
        <div>
          <img src={logo} width="250px" />
          <div className="mt-5 d-flex justify-content-around" style={{ width: '250px' }}>
            <Link
              to="login"
              className="btn btn-success btn-block fw-bold">
              Login
            </Link>
            <Link
              to="register"
              className="btn btn-success btn-block fw-bold">
              Cadastro
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home