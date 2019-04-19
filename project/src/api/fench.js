/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import path from './path';

// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = path.localBase;
} else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = path.serverBase;
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 
        'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(    
    config => {
        return config;    
    },    
    error => {        
        return Promise.error(error);
    })

// 响应拦截器
axios.interceptors.response.use(    
    response => {        
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },
    // 服务器状态码不是200的情况    
    error => {    
        router.replace({                        
            path: '/login',                        
            query: { redirect: router.currentRoute.fullPath } 
        });    
    }
);


export default {
    /** 
     * get方法，对应get请求 
     * @param {String} url [请求的url地址] 
     * @param {Object} params [请求时携带的参数] 
     */
    get(url, params={}) {    
        return new Promise((resolve, reject) =>{        
            axios.get(url, {            
                params: params        
            })        
            .then(res => {            
                resolve(res.data);        
            })        
            .catch(err => {            
                reject(err.data)        
            })    
        });
    },
    /** 
     * post方法，对应post请求 
     * @param {String} url [请求的url地址] 
     * @param {Object} params [请求时携带的参数] 
     */
    post(url, params={}) {    
        return new Promise((resolve, reject) => {         
            axios.post(url, QS.stringify(params))        
            .then(res => {            
                resolve(res.data);        
            })        
            .catch(err => {            
                reject(err.data)        
            })    
        });
    }
}


