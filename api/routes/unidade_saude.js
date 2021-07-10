const express = require('express')

const UnidadeSaude = require('../models/UnidadeSaude')

const router = express.Router()

router.get('/', async (req, res) => {
  let data = []
  if (req.query.campos) {
    const campos = req.query.campos.split(',')
    try {
      data = await UnidadeSaude.findAll({
        attributes: campos
      })
    } catch (err) {
      let message = ''
      if (err?.original?.routine === 'errorMissingColumn') {
        message = 'pelo menos um dos campos especificados na requisição está incorreto'
      }
      return res.status(500).json({ success: false, message })
    }
  } else {
    try {
      data = await UnidadeSaude.findAll()
    } catch (err) {
      return res.status(500).json({ success: false })
    }
  }

  res.send(data)
})

module.exports = router
