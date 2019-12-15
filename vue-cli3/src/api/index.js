import axios from 'axios'
import qs from 'qs'
import { localBase, serverBase } from './path'
import store from '../store';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? localBase : serverBase,  // node环境配置
    timeout: 5000,  // 请求的超时时间 
    withCredentials: true  // 允许携带cookie
})

// 请求拦截器
instance.interceptors.request.use(    
    req => {
        const token = store.state.login.token;
        req.headers.Authorization = token
        return req; 
    },    
    err => {        
        return Promise.reject(err);
    }
)

// 响应拦截器
instance.interceptors.response.use(
    res => {
        return res.status === 200 ? res.data : res.errMsg
    }, 
    err =>{
        return Promise.reject(err);
    }
);

function checkCode(res) {
    return res.code === '000' ? res.data : res.msg
}

export default {
    get(url, params) {
        return instance({
            method: 'get',
            url,
            params,
        }).then(checkCode)
    },
    post(url, data) {
        return instance({
            method: 'post',
            url,
            data,
            transformRequest: [function(data) {
                return qs.stringify(data)
            }],
            headers: {  // formdata格式
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(checkCode)
    },
    postStr(url, data) {
        return instance({
            method: 'post',
            url,
            data,
            transformRequest: [function(data) {
                return JSON.stringify(data)
            }],
            headers: {  // 默认json格式
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(checkCode)
    }
}