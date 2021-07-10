const express = require('express')
const Formulario = require('../models/Formulario')

const router = express.Router()

router.post('/', async (req, res) => {
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
    dose: data.dose
  })

  try {
    await form.save()
  } catch (e) {
    console.log(e)
  }
  res.json({ success: true, message: 'Formulário cadastrado com sucesso' })
})

module.exports = router
