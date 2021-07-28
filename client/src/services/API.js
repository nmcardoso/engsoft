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

  validateToken(token) {
    let options = {}
    if (token) {
      options = {
        headers: {
          'Authorization': `bearer ${token}`
        }
      }
    }
    return this.client.get('/auth/validate', options)
  }

  getUnidadeSaude(params) {
    const queryString = Object.entries(params)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          value = value.join(',')
        }
        return `${key}=${value}`
      })
      .join('&')
    return this.client.get(`/unidade_saude?${queryString}`)
  }

  postFormulario(data) {
    return this.client.post('/formulario', data)
  }

  getUnsyncedForms(id) {
    return this.client.get(`/formulario/unsynced/${id}`)
  }

  syncForms(id) {
    return this.client.get(`/formulario/sync/${id}`)
  }
}

export default API
