const express = require('express')
const { Op } = require('sequelize')

const UnidadeSaude = require('../models/UnidadeSaude')

const router = express.Router()

router.get('/', async (req, res) => {
  let data = []
  const params = {
    limit: req.query.limit || 50
  }

  if (req.query.campos) {
    const campos = req.query.campos.split(',')
    params.attributes = campos
  }

  if (req.query.query !== undefined) {
    params.where = {
      nome: {
        [Op.iLike]: `%${req.query.query?.replace(' ', '%')}%`
      }
    }
  }

  try {
    data = await UnidadeSaude.findAll(params)
  } catch (err) {
    let message = ''
    if (err?.original?.routine === 'errorMissingColumn') {
      message = 'pelo menos um dos campos especificados na requisição está incorreto'
    }
    return res.status(500).json({ success: false, message })
  }

  res.json(data)
})

module.exports = router
