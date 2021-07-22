const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const load_env = require('./load_env')
load_env()
const db = require('../config/database')


async function sync() {
  // load pg connection password
  process.env.PGPASSWORD = process.env.PG_PASS

  // load all models
  const models = fs.readdirSync(path.resolve(__dirname, '../models'))
  models.forEach(model => {
    require('../models/' + model)
  })

  // sync database with sequelize
  await db.sync({ force: true })

  const command = [
    'pg_restore',
    `-U ${process.env.PG_USER}`,
    '-w',
    `-h ${process.env.PG_HOST}`,
    `-p ${process.env.PG_PORT}`,
    `-d ${process.env.PG_DB}`,
    '-c',
    '-1',
    '--no-owner',
    'sql/database-data.psql'
  ]
  exec(command.join(' '), async (err, stdout, stderr) => {
    if (err) {
      console.log(err)
      return
    }

    if (stderr) {
      console.log(stderr)
      return
    }

    console.log('\n')
    console.log(models)
    console.log('\n')

    const tables = await db.getQueryInterface().showAllTables()

    for (const table of tables) {
      await db.query(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM "${table}"))`)
    }

    console.log(stdout)
    console.log('>> Banco Sincronizado com Sucesso')
  })
}

sync()
