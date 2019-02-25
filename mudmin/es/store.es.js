
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  //usage: store.state(state[name])
  state: {
    user: {}
  }
  //usage: store.commit(mutations[name])
  ,mutations: {
    updateUser: (state, obj)=>{
      state.user= typeof(obj)=== 'object'? obj: {}
    }
  }
  //usage: store.dispatch(actions[name])
  ,actions: {
    updateUser: (context, obj)=>{
      api.getUserInfo()
      .then((res)=>{
        context.user= res.data.data
      })
    }
  }
})
