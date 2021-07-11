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

  register({ username, password, nome, cpf, idUnidade }) {
    return axios({
      url: this.getUrl('/auth/register'),
      method: 'post',
      data: { username, password, nome, cpf, id_unidade_saude: idUnidade }
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

  getUnidadeSaude({ campos }) {
    const params = campos ? { campos: campos.join(',') } : {}
    return axios({
      url: this.getUrl('/unidade_saude'),
      method: 'get',
      params
    })
  }

  postFormulario(data) {
    return axios({
      url: this.getUrl('/formulario'),
      method: 'post',
      data,
      headers: {
        Authorization: ``
      }
    })
  }
}

export default API
