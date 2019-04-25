import axios from 'axios';
import qs from 'qs';
import path from './path';

// default
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 
    path.localBase : path.serverBase
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(    
  req => {
    // const token = store.state.login.token
    // req.headers.Authorization = token
    return req; 
  },    
  err => {        
    return Promise.reject(err);
  }
)

// 响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res.data;
    } else {
      return res.errMsg
    }
  }, 
  err =>{
    return Promise.reject(err);
  }
);

export default {
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params,
    }).then(res =>res.data);
  },
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data,
      transformRequest: [function(data) {
        return qs.stringify(data)
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
  },
  postStr(url, data) {
    return axios({
      method: 'post',
      url,
      data,
      transformRequest: [function(data) {
        return JSON.stringify(data)
      }],
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }
}