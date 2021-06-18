if (process.env.NODE_ENV === 'dev') {
  require('dotenv').config({ path: 'config/dev.env' })
} else if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: 'config/prod.env' })
}

const express = require('express')
const { Pool } = require('pg')
const jwt = require('jsonwebtoken')
const db = require('./config/database')
const Login = require('./models/Login')

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err))

const app = express()
app.use(express.json())

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get("/api/health", (req, res) => {
  res.sendStatus(200)
  return
})


app.post('/api/login', async (req, res) => {
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

  const accessToken = jwt.sign(user, process.env.JWT_ACCESS_SECRET)
  res.json({
    success: true,
    accessToken: accessToken
  })
})


app.post('/api/register', async (req, res) => {
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

  const newUser = await Login.create({
    username: req.body.username,
    password: req.body.password
  })

  res.json({
    success: true,
    message: 'Usuário criado com sucesso.'
  })
})


app.get('/api/posts', authenticateToken, (req, res) => {
  res.json({ auth: 'ok' })
})


app.listen(8080, () => {
  console.log('Server running on port 8080.')
})