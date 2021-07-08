import axios from 'axios'

class API {
  constructor() {
    this.url = process.env.NODE_ENV === 'production' ?
      'https://engsoft-production-nmcardoso.cloud.okteto.net' : 'http://localhost:8080'
  }

  getUrl(route) {
    return this.url + route
  }

  login({ username, password }) {
    return axios({
      url: this.getUrl('/auth/login'),
      method: 'post',
      data: { username, password }
    })
  }

  register({ username, password, nome, CPF, unidade }) {
    return axios({
      url: this.getUrl('/auth/register'),
      method: 'post',
      data: { username, password, nome, CPF, unidade }
    })
  }

  validateToken(token) {
    return axios({
      url: this.getUrl('/auth/validate'),
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  getUnidadeSaude() {
    return axios({
      url: this.getUrl('/unidade_saude/all'),
      method: 'get'
    })
  }
}

export default API
