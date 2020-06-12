import axios from 'axios'

class AuthClient {

  constructor() {
    this.request = axios.create({
      // baseURL: 'http://localhost:3001/'
      baseURL: 'https://pvs-server.herokuapp.com/'
      // headers: {
      //   common: {
      //     token: this.getToken()
      //   }
      // }
    })
  }

  load() {
    return this.request({method: 'Get', url: '/'})
      .then(response => response.data.success)
  }

  quoteEmail(quoteInfo) {
    return this.request({method: 'Post', url: "/email/quote", data: quoteInfo})
      .then(response => response.data.success)
  }

  workEmail(workInfo) {
    return this.request({method: 'Post', url: "/email/work", data: workInfo})
      .then(response => response.data.success)
  }

  getQuotes() {
    return this.request({ method: 'Get', url: '/quotes' })
      .then(response => response)
  }

  archiveQuote(quote) {
    return this.request({ method: "Patch", url: `/quotes/${quote._id}/archive` })
      .then(response => response)
  }

  activateQuote(quote) {
    return this.request({ method: "Patch", url: `/quotes/${quote._id}/activate` })
      .then(response => response)
  }
 
}

export default new AuthClient()
