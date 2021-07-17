const { body } = require('express-validator')
const isUtf8 = require('is-utf8')

const alphanumeric = input => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(input)

const formChain = [
  body('id_unidade_saude')
    .isInt()
    .withMessage('O campo `id_unidade_saude` deve ter valor inteiro'),
  body('cpf')
    .isNumeric()
    .withMessage('O campo CPF deve ter valor numerico'),
  body('telefone')
    .isNumeric()
    .withMessage('O campo Telefone dever ter valor numérico'),
  body('nome')
    .custom(alphanumeric)
    .withMessage('O campo Nome deve ter valor alfabético'),
  body('data_nascimento')
    .isDate()
    .withMessage('O campo Data de Nascimento deve ser uma data válida'),
  body('laboratorio')
    .custom(alphanumeric)
    .withMessage('O campo Laboratório deve ter valor alfabético'),
  body('lote')
    .custom(alphanumeric)
    .withMessage('O campo Lote deve ter valor alfanumérico'),
  body('data_vacinacao')
    .isDate()
    .withMessage('O campo Data de Vacinação deve ser uma data válida'),
  body('dose')
    .isIn([1, 2])
    .withMessage('O campo Dose deve ter um dos valores: 1 ou 2'),
  body('nome_mae')
    .custom(alphanumeric)
    .withMessage('O campo Nome da Mãe deve ter valor alfabético'),
  body('nome_social')
    .optional()
    .custom(alphanumeric)
    .withMessage('O campo Nome Social deve ter valor alfabético'),
  body('sexo')
    .isIn(['Masculino', 'Feminino', 'Outro'])
    .withMessage('O campo Sexo dever ter um dos valores: Masculino, Feminino ou Outros'),
  body('raca')
    .isIn(['Preto', 'Branco', 'Indígeno', 'Amarelo'])
    .withMessage('O campo Raça deve ter um dos valores: Preto, Branco, Indígeno, Amarelo'),
  body('gestante')
    .isBoolean()
    .toBoolean()
    .withMessage('O campo Gestante dever ter valor lógico'),
  body('puerpera')
    .isBoolean()
    .toBoolean()
    .withMessage('O campo Puerpera deve ter valor lógico'),
  body('logradouro')
    .custom(alphanumeric)
    .withMessage('O campo Logradouro deve ter valor alfanumérico'),
  body('numero')
    .custom(alphanumeric)
    .withMessage('O campo Número deve ter valor alfanumérico'),
  body('zona')
    .custom(alphanumeric)
    .withMessage('O campo Zona deve ter valor alfanumérico'),
  body('bairro')
    .custom(alphanumeric)
    .withMessage('O campo Bairro deve ter valor alfanumérico'),
  body('complemento')
    .optional()
    .custom(alphanumeric)
    .withMessage('O campo Complemento deve ter valor alfanumérico'),
  body('cep')
    .isNumeric('pt-BR')
    .withMessage('O campo CEP deve ter valor alfanumérico')
    .isLength({ min: 8, max: 8 })
    .withMessage('O campo CEP deve ter exatamente 8 dígitos')
]

module.exports = { formChain }
