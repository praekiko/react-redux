export default class ApiManager {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  fetch(options) {
    const { ep, m, q, b, h } = Object.assign({ m: 'GET', q: {} }, options)

    const fetchOptions = {
      method: m,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(b)
    }

    if (h) {
      fetchOptions.headers = {
        ...fetchOptions.headers,
        ...h
      }
    }

    const url = `${this.baseUrl}${ep}`

    return fetch(url, fetchOptions).then(res => {
      if (res.status === 204) {
        return null
      }

      if (res.ok) {
        // no response body
        if (res.status === 204) {
          return Promise.resolve()
        }

        // return res;
        return res.json()
      }
    })
  }
}
