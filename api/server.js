if (process.env.NODE_ENV === 'dev') {
  require('dotenv').config({ path: 'config/dev.env' })
} else if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: 'config/prod.env' })
}

const express = require('express')
const db = require('./config/database')
const authRouter = require('./routes/auth')

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err))

const app = express()
app.use(express.json())
app.use('/api/auth', authRouter)

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get("/api/health", (req, res) => {
  res.sendStatus(200)
  return
})

app.listen(8080, () => {
  console.log('Server running on port 8080.')
})