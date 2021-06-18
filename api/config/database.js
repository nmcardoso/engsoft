const Sequelize = require('sequelize')

console.log(process.env.PG_CONNECTION)

module.exports = new Sequelize(process.env.PG_CONNECTION, {
  define: {
    freezeTableName: true
  }
})