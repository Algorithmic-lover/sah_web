/**
 * 在apis.js里集中写项目需要的接口请求
 */
import axios from './$http'
import baseUrl from "@/request/base";

//封装json的get请求
export const getRequest=(url,params) => {
    return axios({
        method: 'get',
        data: params,
        url: `${baseUrl.egg}${url}`
    })
}

//封装json的post请求
export const postRequest=(url,params) => {
    return axios({
        method: 'post',
        data: params,
        url: `${baseUrl.egg}${url}`
    })
}

//封装json的delete请求
export const deleteRequest=(url,params) => {
    return axios({
        method: 'delete',
        data: params,
        url: `${baseUrl.egg}${url}`
    })
}

//封装json的put请求
export const putRequest=(url,params) => {
    return axios({
        method: 'put',
        data: params,
        url: `${baseUrl.egg}${url}`
    })
}
