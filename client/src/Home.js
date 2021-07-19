import { Link } from 'react-router-dom'

import logo from './assets/logo_vacivida_branco.png'
import './Home.css'
import HomeButton from './HomeButton'

function Home() {
  return (
    <>
      <HomeButton />
      <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
        <div className='menuContainer'>
          <img src={logo} width="250px" />
          <div className="mt-5 d-flex justify-content-around" style={{ width: '250px' }}>
            <Link
              to="/login"
              className="btn btn-light btn-block fw-bold">
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-light btn-block fw-bold">
              Cadastro
            </Link>
            <Link
              to="/powerbi"
              className="btn btn-light btn-block fw-bold">
              PowerBI
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
