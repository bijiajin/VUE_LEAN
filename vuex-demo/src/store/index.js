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
	reduce(state){
		state.count--;
	},
	countAddParam(state,param){
		state.count += param;
	}
	
  },
  actions: {
	addAction(content){//context：上下文对象，这里你可以理解称store本身。
		content.commit('countAddParam',10);
		setTimeout(()=>{content.commit('reduce')},3000);
		console.log('我比reduce提前执行');
	},
	reduceAction({commit}){//{commit} 直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。
		commit('reduce');
	},
	countAddParamAction({commit}){
		commit('countAddParam',100);
	}
  },
  modules: {
  },
  getters:{
	count:function(state){
		return state.count+=100;
	}
  }
})
