import ApiManager from 'common/lib/ApiManager'

const baseUrl = 'https://jsonplaceholder.typicode.com'

class ChaofaApi {
  constructor() {
    this.apiManager = new ApiManager(baseUrl)
  }

  getPosts() {
    return this.apiManager.fetch({
      ep: '/posts'
    })
  }
}

export default new ChaofaApi()
