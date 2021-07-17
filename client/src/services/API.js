import axios from 'axios'

let instance = null

class API {
  constructor() {
    if (!instance) {
      instance = this
    }

    const url = process.env.NODE_ENV === 'production' ?
      'https://engsoft-production-nmcardoso.cloud.okteto.net' : 'http://localhost:8080'

    this.client = axios.create({
      baseURL: url
    })

    return instance
  }

  setAuthToken(token) {
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  removeAuthToken() {
    this.client.defaults.headers.common['Authorization'] = undefined
  }

  login({ username, password }) {
    return this.client.post('/auth/login', {
      username,
      password
    })
  }

  register({ username, password, nome, cpf, idUnidade }) {
    return this.client.post('/auth/register', {
      username,
      password,
      nome,
      cpf,
      id_unidade_saude: idUnidade
    })
  }

  validateToken() {
    return this.client.get('/auth/validate')
  }

  getUnidadeSaude({ campos }) {
    const params = campos ? { campos: campos.join(',') } : {}
    return this.client.get('/unidade_saude', {
      params
    })
  }

  postFormulario(data) {
    return this.client.post('/formulario', data)
  }
}

export default API