const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

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

  // fill data based on sql/database-data.sql file
  // const command = [
  //   'psql',
  //   `-U ${process.env.PG_USER}`,
  //   '-w',
  //   `-h ${process.env.PG_HOST}`,
  //   `-p ${process.env.PG_PORT}`,
  //   `-d ${process.env.PG_DB}`,
  //   `< ${path.resolve(__dirname, '../sql/database-data.sql')}`
  // ]

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
  exec(command.join(' '), (err, stdout, stderr) => {
    if (err) {
      console.log(err)
      return
    }

    if (stderr) {
      console.log(stderr)
      return
    }

    console.log(stdout)
    console.log('>> Banco Sincronizado com Sucesso')
  })

  // console.log('>>> Banco de dados sincronizado com sucesso!!')
}

sync()
