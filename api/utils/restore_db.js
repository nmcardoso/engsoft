const { exec } = require('child_process')

const load_env = require('./load_env')
load_env()

process.env.PGPASSWORD = process.env.PG_PASS

command = [
  'pg_restore',
  `-U ${process.env.PG_USER}`,
  '-wc',
  `-h ${process.env.PG_HOST}`,
  `-p ${process.env.PG_PORT}`,
  `-d ${process.env.PG_DB}`,
  'sql/database.psql'
]
exec(command.join(' '), (err, stdout, stderr) => {
  if (err) {
    console.log(err)
    return
  }

  if (stderr) {
    console.log(stderr)
    return
  }

  console.log(stdout)
  console.log('>> Banco Sincronizado com Sucesso')
})
