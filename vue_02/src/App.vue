<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<HelloVue msg="Hello Vue.......! "></HelloVue>
	<TodoList></TodoList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloVue from './components/HelloVue.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
	HelloVue,
	TodoList
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
