const axios = require('axios')

let instance = null

class VacividaAPI {
  constructor() {
    if (!instance) {
      instance = this
    }

    const url = process.env.NODE_ENV === 'production' ?
      'https://engsoft-vacivida.glitch.me' : 'http://localhost:3333'

    this.client = axios.create({
      baseURL: url
    })

    return instance
  }

  sendForms(forms) {
    return this.client.post('/form', forms)
  }
}

module.exports = VacividaAPI
