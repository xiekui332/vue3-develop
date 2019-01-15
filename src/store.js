import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {
    //设置用户信息
    setUserInfo(state, data){
      state.userInfo = data;
      //(注：如果这里的userInfo需要axios请求也可以把axios写在等号后面,同时也可引入axios)
    }
  },
  actions: {
    //提交用户信息动作
    commitUserInfo:({commit},userInfo) => commit('setUserInfo',userInfo)
  }
})
