import { Link } from 'react-router-dom'

import logo from './assets/logo_vacivida.png'
import './Home.css'
import HomeButton from './HomeButton'

function Home() {
  return (
    <>
      <div>
        <div className="page-container">
          <div className="banner-wrapper d-none d-md-block">
            <div className="gov-logo"></div>
            <div id="particles-background"></div>
            <div id="particles-foreground"></div>
          </div>
          <div className="form-wrapper justify-content-center align-items-center">
            <img src={logo} width="250px" />
            <div className="mt-5 d-flex justify-content-around" style={{ width: '250px' }}>
              <Link
                to="/login"
                className="btn btn-success btn-block fw-bold px-4">
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-success btn-block fw-bold">
                Cadastro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
