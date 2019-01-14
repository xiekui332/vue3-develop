import axios from 'axios' // 引入axios
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据
import router from '../router'
import { Storage } from '@/assets/js/utils'

// 环境的切换 
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'https://wxcs.nuoweibd.com/augury/'
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = 'https://wxcs.nuoweibd.com/augury/'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://wxcs.nuoweibd.com/augury/'
}

//请求时长
axios.defaults.timeout = 10000;
// post请求头的设置
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded;charset=UTF-8'
// axios.defaults.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (Storage.get('refreshToken').data) {
            axios.defaults.headers.common['refreshToken'] = Storage.get('refreshToken').data
            axios.defaults.headers.common['token'] = Storage.get('token').data
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        switch (response.data.code) {
        case 401:
            // 返回 401 清除token信息并跳转到登录页面
            // Storage.clear()
            // 只有在当前路由不是登录页面才跳转
            router.currentRoute.path !== '/' &&
            router.replace({
                path: '/'
            })
            console.log('401')
        }
        // Storage.set('token', response.headers.token)
        // Storage.set('refreshToken', response.headers.refreshToken)
        return response
    }, error => {
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
})

// 封装axios的get方法和post方法
export function get (url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

export function post (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

