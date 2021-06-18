const Sequelize = require('sequelize')

const db = new Sequelize(process.env.PG_CONNECTION, {
  define: {
    freezeTableName: true
  }
})

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err))

module.exports = db