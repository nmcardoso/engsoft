const express = require('express')
const { Pool } = require('pg')
const app = express()


async function connect() {
  if (global.connection)
    return global.connection.connect()

  const pool = new Pool({
    connectionString: 'postgres://root:root@postgres:5432/okteto'
  })

  //apenas testando a conexão
  const client = await pool.connect()
  console.log("Criou pool de conexões no PostgreSQL!")

  const res = await client.query('SELECT NOW()')
  console.log(res.rows[0])
  client.release()

  //guardando para usar sempre o mesmo
  global.connection = pool
  return pool.connect()
}

app.get('/api/db', async (req, res) => {
  const client = await connect()
  const resp = await client.query('SELECT * FROM login')
  res.json(resp.rows)
})

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