function load() {
  if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config({ path: 'config/dev.env' })
  } else if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({ path: 'config/prod.env' })
  }

  const regex = /postgres:\/\/(.*):(.*)@(.*):(\d*)\/(.*)/
  const match = process.env.PG_CONNECTION.match(regex)
  process.env.PG_USER = match[1]
  process.env.PG_PASS = match[2]
  process.env.PG_HOST = match[3]
  process.env.PG_PORT = match[4]
  process.env.PG_DB = match[5]
}

module.exports = load
