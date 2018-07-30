import axios from 'axios'

class AuthClient {

  constructor() {
    this.request = axios.create({
      baseURL: 'http://localhost:3001/'
      // headers: {
      //   common: {
      //     token: this.getToken()
      //   }
      // }
    })
  }

  quoteEmail(quoteInfo) {
    return this.request({method: 'Post', url: "/email/quote", data: quoteInfo})
      .then(response => response.data.success)
  }

  workEmail(workInfo) {
    return this.request({method: 'Post', url: "/email/work", data: workInfo})
      .then(response => response.data.success)
  }
 
}

export default new AuthClient()
