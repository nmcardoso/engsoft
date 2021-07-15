const fs = require('fs')
const readline = require('readline')

const express = require('express')
const { exec } = require('child_process')
const multer = require('multer')

const upload = multer({ dest: '/tmp' })
const router = express.Router()

const getFirstLine = async (path) => {
  const readable = fs.createReadStream(path)
  const reader = readline.createInterface({ input: readable })
  const line = await new Promise((resolve) => {
    reader.on('line', (line) => {
      reader.close()
      resolve(line)
    })
  })
  readable.close()
  return line
}

router.post('/csv/:table', upload.single('file'), async (req, res) => {
  const table = req.params.table
  const path = req.file.path
  const header = await getFirstLine(path)

  const command = `psql ${process.env.PG_CONNECTION} -c "\\copy ${table}(${header}) from '${path}' with (format csv, header true, delimiter ',');"`

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(error)
      return res.sendStatus(404)
    }

    if (stderr) {
      console.log(stderr)
      return res.sendStatus(404)
    }

    res.send('Dados inseridos na tabela com sucesso.')

    fs.unlink(path, console.log)
  })
})

module.exports = router
