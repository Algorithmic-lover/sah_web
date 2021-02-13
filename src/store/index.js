import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * state：全局对象，用来保存所有公共组件的数据
   */
  state: {
    routes:[]
  },
  /**
   * 改变state中的对应值,同步
   */
  mutations: {
     initRoutes(state,data){
       state.routes = data;
     }
  },
  /**
   * 异步
   */
  actions: {
  },
  modules: {
  }
})
