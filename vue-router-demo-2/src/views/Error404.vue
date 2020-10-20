<template>
	<div>
		<h2>{{msgCode}}</h2>
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'您访问的页面不存在!',
				msgCode:'Error 404'
			}
		}
	}
</script>

<style>
</style>
