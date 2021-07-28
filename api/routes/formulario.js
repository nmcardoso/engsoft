const express = require('express')
const { validationResult } = require('express-validator')
const { Op } = require('sequelize')
const db = require('../config/database')
const { formChain } = require('../middleware/validation_chains')
const Formulario = require('../models/Formulario')
const UnidadeSaude = require('../models/UnidadeSaude')
const VacividaAPI = require('../services/VacividaAPI')

const router = express.Router()

router.post('/', async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      errors
    })
  }

  const data = req.body
  const form = Formulario.build({
    id_unidade_saude: data.id_unidade_saude,
    cpf: data.cpf,
    telefone: data.telefone,
    nome: data.nome,
    data_nascimento: new Date(data.data_nascimento),
    laboratorio: data.laboratorio,
    lote: data.lote,
    data_vacinacao: new Date(data.data_vacinacao),
    dose: data.dose,
    nome_mae: data.nome_mae,
    nome_social: data.nome_social,
    sexo: data.sexo,
    raca: data.raca,
    gestante: data.gestante,
    puerpera: data.puerpera,
    zona: data.zona,
    logradouro: data.logradouro,
    numero: data.numero,
    bairro: data.bairro,
    complemento: data.complemento,
    cep: data.cep
  })

  try {
    await form.save()
    res.json({
      success: true,
      message: 'Formulário cadastrado com sucesso'
    })
  } catch (e) {
    console.log(e)
    res.json({
      success: false,
      message: 'Não foi possível cadastrar o formulário'
    })
  }
})


const getUnsyncedForms = (idUnidade) => {
  return Formulario.findAndCountAll({
    where: {
      [Op.or]: [
        {
          syncAt: { [Op.is]: null }
        },
        {
          syncAt: {
            [Op.lt]: {
              [Op.col]: 'formulario.updatedAt'
            }
          }
        }
      ],
      id_unidade_saude: idUnidade
    },
    include: UnidadeSaude
  })
}


router.get('/sync/:id', async (req, res) => {
  try {
    const idUnidade = req.params.id

    const { rows } = await getUnsyncedForms(idUnidade)

    const data = rows.map(e => {
      const o = e.toJSON()
      delete o.id
      delete o.id_unidade_saude
      delete o.syncAt
      delete o.id_vacivida
      delete o.createdAt
      delete o.updatedAt
      delete o.unidade_saude.id
      delete o.unidade_saude.createdAt
      delete o.unidade_saude.updatedAt
      return o
    })

    const vacividaApi = new VacividaAPI()
    const result = await vacividaApi.sendForms(data)

    const updateData = rows.map((e, i) => ({
      id: e.id,
      id_vacivida: result.data[i].id,
      syncAt: db.fn('NOW')
    }))

    const r = await Formulario.bulkCreate(updateData, {
      fields: ['id', 'id_vacivida', 'syncAt'],
      updateOnDuplicate: ['id_vacivida', 'syncAt']
    })

    res.json({ success: true, message: 'Formulários enviados ao Vacivida com sucesso' })
  } catch (err) {
    console.log(err)
    res.json({ sucess: false })
  }
})

router.get('/unsynced/:id', async (req, res) => {
  try {
    const idUnidade = req.params.id

    const { count } = await getUnsyncedForms(idUnidade)

    res.json({ success: true, count })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false })
  }
})

module.exports = router
