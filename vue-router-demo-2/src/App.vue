<template>
  <div id="app">
    <div id="nav">
		<div>
			<button @click="backPage">后退</button>
			<button @click="nextPage">前进</button>
			<button @click="goHome">返回首页</button>
		</div>
		<router-link to="/">Home</router-link> |
		<router-link to="/params/aaa/jspang website is very good">Pamars</router-link>	|
		<router-link to="/paramsReg/1988/jspang website is very good">Pamars</router-link> |
		<router-link :to="{name:'index'}">Index</router-link>	|
		<router-link to="/2233">Error 404</router-link>
		<!--路由过渡动画-->
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
		
	</div>
  </div>
</template>
<script>
	export default{
		name:'App',
		methods:{
			backPage(){
				this.$router.go(-1);
			},
			nextPage(){
				this.$router.go(1);
			},
			goHome(){
				this.$router.push('/');
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

/* 路由过渡动画样式表 */
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
