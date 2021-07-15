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
    dose: data.dose,
    cns: data.cns,
    nome_mae: data.nome_mae,
    nome_social: data.nome_social,
    sexo: data.sexo,
    raca: data.raca,
    gestante: data.gestante,
    puerpera: data.puerpera,
    pais_residencia: data.pais_residencia,
    zona: data.zona,
    logradouro: data.logradouro,
    numero: data.numero,
    bairro: data.bairro,
    complemento: data.complemento,
    email: data.email,
    cep: data.cep
  })

  try {
    await form.save()
  } catch (e) {
    console.log(e)
  }
  res.json({ success: true, message: 'Formulário cadastrado com sucesso' })
})

module.exports = router
