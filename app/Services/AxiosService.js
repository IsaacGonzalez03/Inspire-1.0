export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/isaac/todos',
  timeout: 20000
})

export const imageApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 20000
})

export const quoteApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 20000
})

export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 20000
})