<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/axios1">axios1</router-link> |
      <router-link to="/axios2">axios 并发请求</router-link> |
      <router-link to="/axios3">axios 实例</router-link>  |
      <router-link to="/axios4">axios 实例配置</router-link>  |
      <router-link to="/axios5">axios开发中的实际配置</router-link>|
      <router-link to="/axios6">axios拦截器配置</router-link>
    </div>
    <transition mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
