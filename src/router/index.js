import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App";
import Index from "@/views/bookpage/Index";

Vue.use(VueRouter) //加载

const routes = [
    {
        path: "/",
        name: "导航",
        component: Index, //路由嵌套
        show: true,
        redirect: "/Login",
        children: [
            {
                path: '/bookManager',
                name: '图书管理',
                component: () => import('../views/bookpage/BookManager')
            },
            {
                path: '/bookAdd',
                name: '添加图书',
                component: () => import('../views/bookpage/BookAdd')
            }
        ]
    },
    {
        path: "/messageBox",
        name: "导航",
        show: true,
        component: Index, //路由嵌套
        children: [
            {
                path: '/messageBox',
                name: '消息提示',
                component: () => import('../views/bookpage/MessageBox')
            },
            {
                path: '/update',
                name: '图书修改',
                component: () => import('../views/bookpage/Update')
            }
        ]
    },
    {
        path: "/login",
        name: "登录",
        show: false,
        component: () => import('../views/Login')
    },
    {
        path: '/HomePage',
        name: '主页',
        show: false,
        component: ()=>import('@/views/HomePage')
    }


]
//new 实例
const router = new VueRouter({
    routes
})

export default router
