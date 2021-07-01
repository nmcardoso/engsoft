const { exec } = require('child_process')

const load_env = require('./load_env')
load_env()

process.env.PGPASSWORD = process.env.PG_PASS

// const command = [
//   `dropdb ${process.env.PG_DB} &&`,
//   `createdb ${process.env.PG_DB} &&`,
//   'pg_restore',
//   `-U ${process.env.PG_USER}`,
//   '-w',
//   `-h ${process.env.PG_HOST}`,
//   `-p ${process.env.PG_PORT}`,
//   `-d ${process.env.PG_DB}`,
//   '-c',
//   '-1',
//   '--no-owner',
//   'sql/database.psql'
// ]

const command = [
  `dropdb ${process.env.PG_DB} &&`,
  `createdb ${process.env.PG_DB} &&`,
  'psql',
  `-U ${process.env.PG_USER}`,
  '-w',
  `-h ${process.env.PG_HOST}`,
  `-p ${process.env.PG_PORT}`,
  `-d ${process.env.PG_DB}`,
  '< sql/database.sql'
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
