const express = require('express')
const copyTo = require('pg-copy-streams').to
const { Pool } = require('pg')
const { exec } = require('child_process')
const convertCsvToXlsx = require('@aternus/csv-to-xlsx')

const router = express.Router()

const getTableKind = async (client, table) => {
  // table: r; view: v; materialized_view: m
  const query = "SELECT relkind FROM pg_class WHERE relname = $1"
  const resp = await client.query(query, [table])
  console.log('aqui')
  return resp?.rows?.[0]?.relkind
}

router.get('/:table.csv', async (req, res) => {
  const pool = new Pool({
    connectionString: process.env.PG_CONNECTION
  })
  const client = await pool.connect()
  const kind = await getTableKind(client, req.params.table)

  let query
  if (kind === 'r') {
    query = `COPY ${req.params.table} TO STDOUT DELIMITER ',' CSV HEADER`
  } else if (kind === 'v' || kind === 'm') {
    query = `COPY (SELECT * FROM ${req.params.table}) TO STDOUT DELIMITER ',' CSV HEADER`
  } else {
    return res.sendStatus(404)
  }

  const dataStream = client.query(copyTo(query))
  dataStream.on('close', () => {
    client.end()
  })
  dataStream.on('error', (err) => {
    client.end()
    console.log(err)
    res.sendStatus(404)
  })
  dataStream.pipe(res)
})


router.get('/:table.xlsx', async (req, res) => {
  const pool = new Pool({
    connectionString: process.env.PG_CONNECTION
  })
  const client = await pool.connect()
  const kind = await getTableKind(client, req.params.table)

  let query
  if (kind === 'r') {
    query = `COPY ${req.params.table} TO '/tmp/${req.params.table}.csv' DELIMITER ',' CSV HEADER`
  } else if (kind === 'v' || kind === 'm') {
    query = `COPY (SELECT * FROM ${req.params.table}) TO '/tmp/${req.params.table}.csv' DELIMITER ',' CSV HEADER`
  } else {
    return res.sendStatus(404)
  }

  await client.query(query)
  client.release()
  client.end()

  try {
    convertCsvToXlsx(`/tmp/${req.params.table}.csv`, `/tmp/${req.params.table}.xlsx`)
    res.sendFile(`/tmp/${req.params.table}.xlsx`)
  } catch (e) {
    console.log(e)
    res.sendStatus(404)
  }
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
