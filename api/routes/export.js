const express = require('express')
const copyTo = require('pg-copy-streams').to
const { Pool } = require('pg')

const router = express.Router()

router.get('/:table.csv', async (req, res) => {
  const pool = new Pool({
    connectionString: process.env.PG_CONNECTION
  })
  const client = await pool.connect()
  const q = `COPY ${req.params.table} TO STDOUT DELIMITER ',' CSV HEADER`
  const dataStream = client.query(copyTo(q))
  dataStream.pipe(res)
  dataStream.on('close', () => {
    client.end()
  })
})

module.exports = router