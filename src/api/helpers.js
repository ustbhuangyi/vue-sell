import axios from 'axios'

const urlMap = {
  development: '/',
  production: 'http://ustbhuangyi.com/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV || 'development']
const ERR_OK = 0

export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const serverData = res.data
      if (serverData.errno === ERR_OK) {
        return serverData.data
      }
    }).catch((e) => {
    })
  }
}
