import { useState, Link, useHistory } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useAuth } from './AuthContext'
import './Welcome.css'


function Welcome() {
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/userpage')
    }, 2200)
  })

  return (
    <div className="welcomeLimiter">
      <div className='fadeOut'>
        Bem Vindo, <b>{user.nome}</b>
      </div>
    </div>
  )
}

export default Welcome