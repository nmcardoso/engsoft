const express = require('express')
const { validationResult } = require('express-validator')
const { formChain } = require('../middleware/validation_chains')
const Formulario = require('../models/Formulario')

const router = express.Router()

router.post('/', formChain, async (req, res) => {
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

module.exports = router
