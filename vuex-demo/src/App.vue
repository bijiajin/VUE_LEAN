<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<!-- <h2>Count:{{this.$store.state.count}}</h2> -->
	<h2>Count:{{count}}</h2>
	<button @click="countIncrease">点我自增</button>
	<button @click="countAddParam">点我自动加100</button>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */

export default {
  name: 'App',
  /* components: {
    HelloWorld
  } */
  //计算属性
  computed:{
	count(){
		return this.$store.state.count;
	}
  },
  methods:{
	countIncrease(){
		this.$store.commit('countIncrease');
	},
	countAddParam(){
		this.$store.commit('countAddParam',100);
	}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
