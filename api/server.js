const express = require('express')
const cors = require('cors')

const authRouter = require('./routes/auth')
const exportRouter = require('./routes/export')
const load_env = require('./utils/load_env')

load_env()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/export', exportRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.sendStatus(200)
  return
})

app.listen(8080, () => {
  console.log('Server running on port 8080.')
})
