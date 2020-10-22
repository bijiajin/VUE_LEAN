<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>{{count}}</h2>
		<div>
			<button @click="countIncrease">+</button>
			<button @click="reduce">-</button>
			<button @click="countAddParam(100)">+100</button>
		</div>
	</div>
</template>

<script>
	import {mapState,mapMutations,mapGetters } from 'vuex';
	export default{
		data(){
			return{
				msg:'VueX module模块组 '
			}
		},
		methods:mapMutations(["countIncrease","reduce","countAddParam"]),
		computed:{
			...mapState(["count"]),
			// count(){
			// 	return this.$store.getters.count;
			// }
			...mapGetters(["count"])
		}
	}
</script>

<style>
</style>
