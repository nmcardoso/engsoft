import axios from 'axios'

let instance = null

class CepApi {
  constructor() {
    if (!instance) {
      instance = this
    }

    const url = 'https://viacep.com.br/ws'

    this.client = axios.create({
      baseURL: url
    })

    return instance
  }

  getInfo(cep) {
    return this.client.get(`/${cep}/json`)
  }

  getCeps({ uf, cidade, endereco }) {
    return this.client.get(`/${uf}/${cidade}/${endereco}/json`)
  }
}

export default CepApi
