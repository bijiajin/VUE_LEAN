import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	count:0
  },
  mutations: {
	countIncrease(state){
		state.count++;
	},
	countAddParam(state,param){
		state.count += param;
	}
  },
  actions: {
  },
  modules: {
  }
})
