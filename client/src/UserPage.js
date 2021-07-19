import './UserPage.css'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { useReducer, useState } from 'react'

function UserPage () {
    const { user } = useAuth()
    
    return (
        <div className="pageContainer">
            <div className="limiter">
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
                                to='/dashboard'>
                                <button className='btn btn-light fw-bold py-3 px-5 border border-success mx-2'>Formulário ✏️️</button>
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
                <div className="userInfo">
                    <p>Nome: {user.nome}</p>
                    <p>Unidiade de saúde: {user.id_unidade_saude}</p>
                </div>
            </div>
        </div>
    )
}

export default UserPage