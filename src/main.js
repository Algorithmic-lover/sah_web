import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
// import {
//   Table,
//   Pagination,
//   Container,
//   Aside,
//   Menu,
//   Submenu,
//   MenuItem,
//   Header,
//   Main,
//   TableColumn,
//   Button,
//   Form,
//   FormItem,
//   Input,
//   Alert,
//   MessageBox
// } from 'element-ui';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import loginUrl from "@/request/api";
import {postRequest,deleteRequest,putRequest,getRequest} from '@/request/api';

Vue.config.productionTip = false
Vue.prototype.$axios =axios;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.gettRequest = getRequest;
// Vue.use(Table).use(Container).use(Pagination).use(Aside).use(Main).use(Menu).use(Submenu).use(MenuItem)
//     .use(Header).use(TableColumn).use(Button).use(Form).use(FormItem).use(Input).use(Alert).use(MessageBox);
Vue.use(ElementUI)

/**
 * 路由导航守卫
 */
// router.beforeEach((to, from, next) => {
// })

//实例化
new Vue({
  router,//路由组件
  store, //vuex
  render: h => h(App) //渲染app
}).$mount('#app')//手动挂载，相当于el:"#App"
