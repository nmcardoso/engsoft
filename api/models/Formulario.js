const { DataTypes } = require('sequelize')
const db = require('../config/database')

const Formulario = db.define('formulario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_unidade_saude: {
    type: DataTypes.INTEGER
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: true
  },
  laboratorio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lote: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  data_vacinacao: {
    type: DataTypes.DATE,
    allowNull: true
  },
  dose: {
    type: DataTypes.INTEGER,
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

module.exports = Formulario
