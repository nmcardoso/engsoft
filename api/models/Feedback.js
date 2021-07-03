const { DataTypes } = require('sequelize')
const db = require('../config/database')

const Feedback = db.define('feedback', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cpf_usuario: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mensagem: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
})

module.exports = Feedback
