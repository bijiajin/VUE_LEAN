<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>{{$store.state.count}}-{{count}}</h2>
		<div>
			<button @click="add">+</button>
			<button @click="reduce">-</button>
			<button @click="countAddParam">+100</button>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	export default{
		data(){
			return{
				msg:'VueX state 访问状态对象的三种使用方法 '
			}
		},
		methods:{
			add:function(){
				this.$store.commit("countIncrease");
			},
			reduce:function(){
				this.$store.commit("reduce");
			},
			countAddParam:function(){
				this.$store.commit("countAddParam",100);
			}
		},
		// computed:{
		// 	count(){
		// 		return this.$store.state.count;
		// 	}
		// }
		// computed:mapState({
		// 	count:state=>state.count
		// })
		computed:mapState(["count"])
	}
</script>

<style>
</style>
