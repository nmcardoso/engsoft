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

  console.log('>> Banco de dados sincronizado com sucesso')
}

sync()
