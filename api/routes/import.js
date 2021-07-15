const fs = require('fs')
const readline = require('readline')

const express = require('express')
const copyTo = require('pg-copy-streams').to
const { Pool } = require('pg')
const { exec } = require('child_process')
const multer = require('multer')

const upload = multer({ dest: '/tmp' })
const router = express.Router()

const getFirstLine = async (path) => {
  const readable = fs.createReadStream(path)
  const reader = readline.createInterface({ input: readable })
  const line = await new Promise((resolve) => {
    reader.on('line', (line) => {
      reader.close()
      resolve(line)
    })
  })
  readable.close()
  return line
}

router.post('/csv/:table', upload.single('file'), async (req, res) => {
  const pool = new Pool({
    connectionString: process.env.PG_CONNECTION
  })
  const client = await pool.connect()

  const table = req.params.table
  const path = req.file.path
  const header = await getFirstLine(path)

  const query = `COPY ${table}(${header}) FROM '${path}' DELIMITER ',' CSV HEADER;`
  await client.query(query)

  res.send('Dados inseridos na tabela com sucesso.')

  fs.unlink(path, console.log)
})

module.exports = router
