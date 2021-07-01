const fs = require('fs')
const path = require('path')

const db = require('../config/database')


const models = fs.readdirSync(path.resolve(__dirname, '../models'))
models.forEach(model => {
  require('../models/' + model)
})

async function sync() {
  await db.sync({ force: true })
  console.log('>>> Banco de dados sincronizado com sucesso!!')
}

sync()
