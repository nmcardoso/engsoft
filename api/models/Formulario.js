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
  cns: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nome_mae: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nome_social: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gestante: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  puerpera: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  pais_residencia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: true
  },
  municipio_residencia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  zona: {
    type: DataTypes.STRING,
    allowNull: true
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: true
  },
  complemento: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cep: {
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

module.exports = Formulario
