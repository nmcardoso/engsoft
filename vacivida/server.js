const http = require('http')

const express = require('express')
const cmd = require('node-cmd')
const { customAlphabet } = require('nanoid')
const { Server } = require('socket.io')

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const nanoid = customAlphabet(alphabet, 16)

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json({ limit: '50mb' }))
app.set('view engine', 'ejs')

let db = []

io.on('connection', socket => {
  console.log('user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// Deploy Route
app.get('/deploy', (req, res) => {
  if (req.header('deploy_key') !== process.env.deploy_key) {
    return res.status(401).send('auth failed')
  }

  cmd.get('bash deploy.sh', (err, data) => {
    if (err) return console.log(err)
    console.log(data)
    return res.status(200).send(data)
  })
})

app.get('/', (req, res) => {
  res.render('index', {
    NODE_ENV: process.env.NODE_ENV,
    data: db,
    ws: process.env.NODE_ENV === 'dev' ? 'ws://localhost:3333' : 'ws://engsoft-vacivida.glitch.me'
  })
})

app.post('/form', (req, res) => {
  const forms = req.body
  const ids = []
  forms.forEach(form => {
    const id = nanoid()
    const preparedForm = { ...form, id, syncAt: new Date() }
    ids.push(id)
    db.push(preparedForm)
    io.emit('new_form', preparedForm)
  })
  res.json(ids.map(i => ({ id: i, success: true })))
})

app.get('/clear', (req, res) => {
  db = []
  res.send('OK')
})

app.get('/e', (req, res) => {
  io.emit('new_form', { cuceta: 'fole' })
  res.send('OK')
})

server.listen(process.env.PORT || 3333, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 3333}`)
})
