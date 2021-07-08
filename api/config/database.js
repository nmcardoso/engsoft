const Sequelize = require('sequelize')

if (!process.env.PG_CONNECTION) {
  const load_env = require('../utils/load_env')
  load_env()
}

const db = new Sequelize(process.env.PG_CONNECTION, {
  define: {
    freezeTableName: true
  }
})

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err))

module.exports = db
