<template>
	<div>
		<h2>{{msg}}</h2>
		<p>新闻ID：{{$route.params.newId}}</p>
		<p>新闻标题：{{$route.params.newTitle}}</p>
		<p><router-link to="/goBack">返回</router-link> | 
		<router-link to="/goBackParam/1966/jspang website is very good">返回带参数</router-link> |
		<router-link to="/goIndex">去首页</router-link>
		</p>
	</div>
</template>

<script>
	export default{
		name: 'params',
		data(){
			return {
				msg:"Params Page !"
			}
		},
		beforeRouteEnter:(to,from,next)=>{
			console.log("准备进入路由模板");
			next();
		},
		beforeRouteLeave: (to, from, next) => {
			console.log("准备离开路由模板");
			next();
		}
	}
</script>

<style>
</style>
