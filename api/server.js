if (process.env.NODE_ENV === 'dev') {
  require('dotenv').config({ path: 'config/dev.env' })
} else if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: 'config/prod.env' })
}

const express = require('express')
const cors = require('cors')

const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/health", (req, res) => {
  res.sendStatus(200)
  return
})

app.listen(8080, () => {
  console.log('Server running on port 8080.')
})