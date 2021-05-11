const express = require('express')
const cmd = require('node-cmd')

const app = express()
app.use(express.json())

// Test server deploy

// Deploy Route
app.get('/deploy', (req, res) => {
  if (req.header.deploy_key !== process.env.deploy_key) {
    return res.status(401)
  }

  cmd.get('bash deploy.sh', (err, data) => {
    if (err) return console.log(err)
    console.log(data)
    return res.status(200).send(data)
  })
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`)
})