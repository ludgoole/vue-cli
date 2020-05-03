import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(
  req => {
    // const token = store.state.login.token
    // req.headers.Authorization = token
    return req
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  res => {
    const { data } = res
    switch (res.status) {
      case 200:
        if (data.errCode === '000') {
          return data.data
        } else {
          return data instanceof Blob ? data : data.errMsg
        }
      case 301:
        console.error('永久性重定向')
        break
      case 302:
        console.error('临时性重定向')
        break
      case 304:
        console.error('服务器资源未改变')
        break
      case 400:
        console.error('请求头错误')
        break
      case 403:
        console.error('禁止访问')
        break
      case 404:
        console.error('访问的页面不存在')
        break
      case 405:
        console.error('请求类型或参数错误')
        break
      case 502:
        console.error('无效网关')
        break
      case 503:
        console.error('服务器暂时性错误')
        break
    }
  },
  err => {
    return Promise.reject(err)
  }
)

export default {
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params
    })
  },
  post (url, data = {}) {
    return axios({
      method: 'post',
      url,
      data,
      transformRequest: [function (data) {
        return qs.stringify(data)
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
  },
  postStr (url, data = {}) {
    return axios({
      method: 'post',
      url,
      data,
      transformRequest: [function (data) {
        return JSON.stringify(data)
      }],
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  },
  upload (url, data = {}) {
    return axios({
      method: 'post',
      url,
      data,
      transformRequest: [function (data) {
        return data
      }],
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  download (url, data = {}) {
    return axios({
      method: 'post',
      url,
      data,
      responseType: 'blob'
    })
  }
}
