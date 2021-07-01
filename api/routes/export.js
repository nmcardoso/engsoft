const express = require('express')
const copyTo = require('pg-copy-streams').to
const { Pool } = require('pg')
const { exec } = require('child_process')
const convertCsvToXlsx = require('@aternus/csv-to-xlsx')

const router = express.Router()

router.get('/:table.csv', async (req, res) => {
  const pool = new Pool({
    connectionString: process.env.PG_CONNECTION
  })
  const client = await pool.connect()
  const q = `COPY (SELECT * FROM ${req.params.table}) TO STDOUT DELIMITER ',' CSV HEADER`
  const dataStream = client.query(copyTo(q))
  dataStream.pipe(res)
  dataStream.on('close', () => {
    client.end()
  })
})


router.get('/:table.xlsx', async (req, res) => {
  const pool = new Pool({
    connectionString: process.env.PG_CONNECTION
  })
  const client = await pool.connect()
  const q = `COPY ${req.params.table} TO '/tmp/${req.params.table}.csv' DELIMITER ',' CSV HEADER`
  await client.query(q)
  client.release()
  client.end()
  convertCsvToXlsx(`/tmp/${req.params.table}.csv`, `/tmp/${req.params.table}.xlsx`)
  res.sendFile(`/tmp/${req.params.table}.xlsx`)
})


router.get('/dump.sql', (req, res) => {
  exec(`pg_dump ${process.env.PG_CONNECTION} -f /tmp/dump.sql`, (error, stdout, stderr) => {
    if (error) {
      console.log(error)
      return
    }

    if (stderr) {
      console.log(stderr)
      return
    }

    console.log(stdout)

    res.sendFile('/tmp/dump.sql')
  })
})


router.get('/schema.sql', (req, res) => {
  exec(`pg_dump ${process.env.PG_CONNECTION} --schema-only -f /tmp/schema.sql`, (error, stdout, stderr) => {
    if (error) {
      console.log(error)
      return
    }

    if (stderr) {
      console.log(stderr)
      return
    }

    console.log(stdout)

    res.sendFile('/tmp/schema.sql')
  })
})

module.exports = router