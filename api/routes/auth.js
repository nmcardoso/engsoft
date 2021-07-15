const express = require('express')
const jwt = require('jsonwebtoken')
const { authenticateToken } = require('../middleware/auth')
const Login = require('../models/Login')

const router = express.Router()

router.post('/login', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const login = await Login.findOne({
    where: {
      username,
      password
    }
  })

  if (login == null) {
    return res.status(401).json({
      success: false,
      message: 'Credenciais inválidas.'
    })
  }

  const user = { name: username }

  const token = jwt.sign(user, process.env.JWT_ACCESS_SECRET)

  res.json({
    success: true,
    userInfo: {
      username: login.username,
      nome: login.nome,
      idUnidadeSaude: login.id_unidade_saude
    },
    token
  })
})

router.post('/register', async (req, res) => {
  const login = await Login.findOne({
    where: {
      username: req.body.username
    }
  })

  if (login != null) {
    return res.json({
      success: false,
      message: 'Nome de usuário já existe.'
    })
  }

  try {
    await Login.create({
      username: req.body.username,
      password: req.body.password,
      nome: req.body.nome,
      cpf: req.body.cpf,
      id_unidade_saude: req.body.id_unidade_saude,
    })
  } catch (err) {
    console.log(err)
    res.json({
      success: false,
      message: 'Não foi possível cadastrar o usuário'
    })
  }

  res.json({
    success: true,
    message: 'Usuário criado com sucesso.'
  })
})

router.get('/validate', authenticateToken, async (req, res) => {
  res.json(req.user)
})


module.exports = router
