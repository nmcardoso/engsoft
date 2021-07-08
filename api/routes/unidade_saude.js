const express = require('express')

const UnidadeSaude = require('../models/UnidadeSaude')

const router = express.Router()

router.get('/all', async (req, res) => {
  const data = await UnidadeSaude.findAll()
  console.log(data)
  res.send(data)
})

module.exports = router
