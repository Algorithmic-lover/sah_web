/*
封装菜单请工具类,根据后端权限不同显示不同的菜单
 */
/*import {getRequest} from "@/request/api";
import router from "@/router";
//将菜单放在路由和store中管理，'a=>b' = 'function(a){return}'
//initMenu函数 = function(router,store){}
export const initMenu=(router,store)=>{
    if (store.state.routes.length>length){ //判断的是vuex(store/index.js) store.state.routes是否存在。
        return;
    }
    getRequest('system/config/menu').then(data=>{ //url是获取后端菜单项的接口地址
        if (data){
            //格式化Router
            let fmtRoutes = formatRoutes(data);
            //添加到路由，fmtRoutes是格式化后的routes
            router.addRoutes(fmtRoutes);
            //数据存到store
            store.commit('initRoutes', fmtRoutes);
        }
    })
}

export const formatRoutes=(routes)=>{
    let fmtRoutes = [];
    routes.forEach(router => {
        let {
            path,
            component,
            name,
            iconCls,
            children,
        } = router;
        if (children && children instanceof Array) {
            //递归
            children = formatRoutes(children);
        }
        let fmRouter = {
            path: path,
            name: name,
            iconCls: iconCls,
            children: children,
            component(resolve) {
                if(component.startWith('Emp')){
                    require(['../view/emp/' + component + '.vue'],  resolve);
                }else if (component.startWith('per')){
                    resolve(['../view/per/' + component + '.vue'],  resolve);
                }else if (component.startWith('sal')){
                    resolve(['../view/sal/' + component + '.vue'],  resolve);
                }else if (component.startWith('sta')){
                    resolve(['../view/sta/' + component + '.vue'],  resolve);
                }else if (component.startWith('sys')){
                    resolve(['../view/sys/' + component + '.vue'],  resolve);
                }
            }
        }
    });
    return fmtRoutes;
}*/