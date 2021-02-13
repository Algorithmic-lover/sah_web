/**
 * 在$http.js里面配置axios的请求拦截
 */
import axios from 'axios'
import {Message} from "element-ui";
import router from "@/router";


// 请求超时时间
axios.defaults.timeout = 1000 * 10;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 设置公共url
axios.defaults.baseURL = 'http://127.0.0.1:8181/'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    console.log(config);
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    console.log(error);
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(success => {
    if (success.status && success.status == 200) {
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {//此处放在一起
            Message.error({message: success.data.message});
            return;
        }
    }
    if (success.data.message) {
        Message.success({message: success.data.message})
    }
}, error => {
    if (error.response.code == 504 || error.response.code == 404) {
        Message.error({message: "服务器消失了( ╯□╰ )"});
    } else if (error.response.code == 403) {
        Message.error({message: "权限不足,请联系管理员"})
    } else if (error.response.code == 401) {
        Message.error({message: "尚未登录,请登录"})
        router.replace("/login")
    } else {
        if (error.response.data.message) {
            Message.error({message: error.response.message});
        } else {
            Message.error({message: "未知错误"})
        }
        return;
    }
});


export default axios