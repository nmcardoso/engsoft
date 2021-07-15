const { DataTypes } = require('sequelize')
const db = require('../config/database')
const UnidadeSaude = require('./UnidadeSaude')

const Login = db.define('login', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // id_unidade_saude: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
})

Login.belongsTo(UnidadeSaude, {
  foreignKey: 'id_unidade_saude'
})
UnidadeSaude.hasMany(Login)

module.exports = Login
